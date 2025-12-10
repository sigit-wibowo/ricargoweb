'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { supabase } from '../../lib/supabaseClient'; 
import { Truck, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// 1. DEFINISI TIPE DATA (Ini yang diminta TypeScript)
interface Shipment {
  id: string;
  awb_number: string;
  current_status: string;
  receiver_name: string;
  estimated_arrival: string;
  service_type: string;
  origin_city: string;
  destination_city: string;
}

interface ShipmentEvent {
  description: string;
  event_at: string;
  location: string;
}

interface TrackingData {
  info: Shipment;
  history: ShipmentEvent[];
}

// Komponen Isi Tracking
function TrackingContent() {
  const searchParams = useSearchParams();
  const initialResi = searchParams.get('resi') || ''; 

  const [resiInput, setResiInput] = useState<string>(initialResi);
  
  // Perbaikan Error "Object literal": Kita kasih tahu state ini tipenya TrackingData atau null
  const [data, setData] = useState<TrackingData | null>(null);
  
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  // Perbaikan Error "implicitly has any type": Kita kasih tipe string ke nomorResi
  const fetchTrackingData = async (nomorResi: string) => {
    if (!nomorResi) return;
    setLoading(true); setNotFound(false); setData(null);

    try {
      // 1. Ambil Data Paket
      const { data: shipment, error: shipError } = await supabase
        .from('shipments')
        .select('*')
        .eq('awb_number', nomorResi)
        .single();
      
      if (shipError || !shipment) { 
        setNotFound(true); 
        setLoading(false); 
        return; 
      }

      // 2. Ambil Riwayat
      const { data: events } = await supabase
        .from('shipment_events')
        .select('*')
        .eq('shipment_id', shipment.id)
        .order('event_at', { ascending: false });

      // Masukkan ke state (sekarang TS sudah paham bentuk datanya)
      setData({ 
        info: shipment as Shipment, 
        history: (events || []) as ShipmentEvent[] 
      });

    } catch (err) { 
      setNotFound(true); 
    } finally { 
      setLoading(false); 
    }
  };

  useEffect(() => { 
    if (initialResi) fetchTrackingData(initialResi); 
  }, [initialResi]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
      {/* Header Pencarian */}
      <div className="bg-slate-900 pt-24 pb-24 px-4 text-center">
        <Link href="/" className="text-slate-400 hover:text-white inline-flex items-center gap-2 mb-6 text-sm"><ArrowLeft size={16}/> Kembali ke Beranda</Link>
        <h1 className="text-white text-2xl font-bold mb-6">Lacak Pengiriman</h1>
        <div className="max-w-xl mx-auto relative">
          <input 
            type="text" 
            value={resiInput} 
            onChange={(e) => setResiInput(e.target.value)} 
            placeholder="Masukkan Nomor Resi" 
            className="w-full pl-5 pr-32 py-4 rounded-lg outline-none text-slate-900 font-medium"
          />
          <button onClick={() => fetchTrackingData(resiInput)} className="absolute right-2 top-2 bottom-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 rounded transition">Lacak</button>
        </div>
      </div>

      {/* Hasil */}
      <div className="max-w-3xl mx-auto px-4 -mt-16 relative z-10">
        {loading && (
          <div className="bg-white p-8 rounded-xl shadow-lg text-center animate-pulse">
            <div className="h-4 bg-slate-200 w-1/2 mx-auto mb-4 rounded"></div>
            <div className="h-32 bg-slate-100 rounded"></div>
          </div>
        )}
        
        {!loading && notFound && (
          <div className="bg-white p-8 rounded-xl shadow-lg text-center border-l-4 border-red-500">
            <AlertCircle className="mx-auto text-red-500 w-12 h-12 mb-2"/>
            <h3 className="font-bold text-lg">Resi Tidak Ditemukan</h3>
            <p className="text-slate-500">Nomor {resiInput} belum terdaftar di sistem kami.</p>
          </div>
        )}

        {/* Perbaikan Error "Property does not exist": Kita pastikan data ada dulu (!loading && data) */}
        {!loading && data && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 fade-in">
            {/* Kartu Status */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Status Terkini</p>
                  <h2 className="text-3xl font-extrabold text-orange-500">{data.info.current_status}</h2>
                </div>
                <div className="text-right"><p className="text-xs text-slate-400 uppercase">Estimasi</p><p className="font-bold text-lg">{data.info.estimated_arrival}</p></div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-sm grid grid-cols-2 md:grid-cols-4 gap-4 border border-slate-100">
                <div><p className="text-slate-400 text-xs">Penerima</p><p className="font-bold">{data.info.receiver_name}</p></div>
                <div><p className="text-slate-400 text-xs">Layanan</p><p className="font-bold">{data.info.service_type}</p></div>
                <div><p className="text-slate-400 text-xs">Asal</p><p className="font-bold">{data.info.origin_city}</p></div>
                <div><p className="text-slate-400 text-xs">Tujuan</p><p className="font-bold">{data.info.destination_city}</p></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold mb-6 flex items-center gap-2 text-slate-800"><Truck size={20} className="text-slate-400"/> Riwayat Perjalanan</h3>
              <div className="space-y-8 border-l-2 border-slate-200 ml-3 pl-8 relative">
                {data.history.map((event, idx) => (
                  <div key={idx} className="relative">
                    <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white ${idx===0 ? 'bg-orange-500 shadow-md' : 'bg-slate-300'}`}></div>
                    <p className="font-bold text-slate-800 text-lg">{event.description}</p>
                    <div className="flex gap-2 text-sm text-slate-500 mt-1">
                      <span>{new Date(event.event_at).toLocaleString('id-ID')}</span>
                      <span>•</span>
                      <span className="text-orange-600 font-medium">{event.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Wrapper Suspense
export default function TrackingPageWrapper() {
  return (
    <Suspense fallback={<div className="text-center p-10">Memuat Sistem Pelacakan...</div>}>
      <TrackingContent />
    </Suspense>
  );
}
'use client';
import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const RicargoHero = () => {
  const [activeTab, setActiveTab] = useState('track');
  const [resi, setResi] = useState('');
  const router = useRouter();

  const handleTrack = () => {
    if (resi.trim()) {
      router.push(`/track?resi=${resi}`);
    }
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1950&auto=format&fit=crop" alt="Port" className="w-full h-full object-cover opacity-40"/>
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-white space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold">
            🚀 Kini melayani rute Indonesia Timur
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Kirim Barang ke <span className="text-orange-500">Nusantara.</span>
          </h1>
          <p className="text-slate-300 text-lg">Solusi logistik terintegrasi darat, laut, dan udara dengan pelacakan real-time.</p>
        </div>

        <div className="w-full md:w-1/2 max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex border-b border-slate-100">
            <button onClick={() => setActiveTab('track')} className={`flex-1 py-4 font-bold text-sm ${activeTab === 'track' ? 'text-orange-600 border-b-2 border-orange-500' : 'text-slate-500 bg-slate-50'}`}>LACAK PAKET</button>
            <button onClick={() => setActiveTab('quote')} className={`flex-1 py-4 font-bold text-sm ${activeTab === 'quote' ? 'text-orange-600 border-b-2 border-orange-500' : 'text-slate-500 bg-slate-50'}`}>CEK ONGKIR</button>
          </div>
          
          <div className="p-8">
            {activeTab === 'track' ? (
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700">Nomor Resi (AWB)</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Cth: RIC-01000001" 
                    className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-slate-900"
                    value={resi}
                    onChange={(e) => setResi(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                  />
                  <Search className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
                </div>
                <button onClick={handleTrack} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 transition">
                  Lacak Sekarang <ArrowRight size={18} />
                </button>
              </div>
            ) : (
              <div className="text-center py-4 text-slate-500">Fitur Cek Ongkir Segera Hadir</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RicargoHero;
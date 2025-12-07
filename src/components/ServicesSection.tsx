import React from 'react';
import { Plane, Ship, Truck, FileCheck, Package, Anchor, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Kargo Udara",
      icon: <Plane className="w-8 h-8" />,
      desc: "Solusi tercepat untuk barang urgent. Melayani door-to-door domestik & internasional.",
      features: ["Express 1 Hari Sampai", "Hand Carry", "Charter Pesawat"]
    },
    {
      title: "Kargo Laut",
      icon: <Ship className="w-8 h-8" />,
      desc: "Pilihan hemat untuk pengiriman besar. Konektivitas antarpulau dan ekspor-impor global.",
      features: ["FCL & LCL", "Breakbulk", "Barang Berbahaya (DG)"]
    },
    {
      title: "Transportasi Darat",
      icon: <Truck className="w-8 h-8" />,
      desc: "Armada lengkap mulai dari Blind Van hingga Wingbox untuk distribusi lintas Jawa & Bali.",
      features: ["FTL (Sewa Truk)", "LTL (Kargo Gabungan)", "Tracking GPS"]
    },
    {
      title: "Jasa Kepabeanan",
      icon: <FileCheck className="w-8 h-8" />,
      desc: "Tim ahli kami mengurus dokumen ekspor/impor (PEB/PIB) agar lolos bea cukai tanpa kendala.",
      features: ["Pengurusan Pajak", "Konsultasi HS Code", "Legalitas Impor"]
    },
    {
      title: "Pergudangan",
      icon: <Package className="w-8 h-8" />,
      desc: "Simpan stok barang di gudang strategis kami. Aman, terawat, dan sistem inventaris digital.",
      features: ["Manajemen Stok", "Packing & Labeling", "Distribusi Ritel"]
    },
    {
      title: "Project Cargo",
      icon: <Anchor className="w-8 h-8" />,
      desc: "Spesialis pengiriman alat berat, mesin industri, dan material konstruksi ke lokasi terpencil.",
      features: ["Alat Berat Mining", "Survei Rute", "Mobilisasi Crane"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm mb-2">Layanan Kami</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Solusi Logistik Terintegrasi</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">{item.desc}</p>
              <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Pelajari Lebih Lanjut <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
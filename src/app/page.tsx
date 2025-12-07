import RicargoHero from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { Package } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-slate-100 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-2xl text-slate-900 cursor-pointer">
            <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
              <Package className="text-white"/>
            </div>
            RICARGO
          </div>
          <div className="hidden md:flex gap-6 font-medium text-slate-600">
            <a href="#" className="hover:text-orange-500 transition-colors">Layanan</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Jaringan</a>
            <a href="/track" className="hover:text-orange-500 transition-colors">Lacak</a>
          </div>
          <div className="hidden md:block">
            <button className="px-5 py-2 text-sm font-bold border-2 border-slate-900 rounded hover:bg-slate-900 hover:text-white transition">
              Masuk
            </button>
          </div>
        </div>
      </nav>

      {/* KOMPONEN HALAMAN UTAMA */}
      <RicargoHero />
      <ServicesSection />
      <Footer />
    </main>
  );
}
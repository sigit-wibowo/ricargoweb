import React from 'react';
import { Package, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <Package className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">RICARGO</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mitra logistik terpercaya di Indonesia. Kami menghubungkan bisnis Anda dari Sabang sampai Merauke.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Layanan</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-500">Kargo Udara</a></li>
              <li><a href="#" className="hover:text-orange-500">Kargo Laut</a></li>
              <li><a href="#" className="hover:text-orange-500">Transportasi Darat</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Kontak</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-orange-500"/> Jl. Logistik Raya No. 88, Tanjung Priok, Jakarta</li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-orange-500"/> (021) 555-0199</li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-orange-500"/> cs@ricargo.co.id</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <div className="flex">
              <input type="email" placeholder="Email Anda" className="bg-slate-800 text-white text-sm px-4 py-2 rounded-l-lg outline-none w-full border border-slate-700"/>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 rounded-r-lg"><ArrowRight size={18}/></button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} PT Ricargo Logistik Indonesia. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
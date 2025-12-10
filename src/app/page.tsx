import Link from 'next/link';
import Image from 'next/image';
import { Package, Truck, ClipboardList } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-slate-50">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur border-b border-slate-100 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
              <Package className="text-white" />
            </div>
            <div className="text-lg font-bold text-slate-900">RICARGO</div>
          </div>

          <div className="hidden md:flex gap-6 font-medium text-slate-600">
            <Link href="/track" className="hover:text-orange-500 transition-colors">Track Shipment</Link>
            <Link href="/order" className="hover:text-orange-500 transition-colors">Place Order</Link>
            <Link href="/driver" className="hover:text-orange-500 transition-colors">Driver Console</Link>
          </div>

          <div className="hidden md:block">
            <button className="px-4 py-2 text-sm font-semibold border border-slate-900 rounded hover:bg-slate-900 hover:text-white transition">Sign in</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero-gradient text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Solusi Logistik Terintegrasi</h1>
              <p className="mt-4 text-slate-200 max-w-xl">Lacak kiriman Anda, buat pesanan, dan pantau armada dalam satu tempat. Cepat, aman, dan andal untuk seluruh Nusantara.</p>
              <div className="mt-6 flex gap-3">
                <a href="/track" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold">Lacak Sekarang</a>
                <a href="/order" className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-lg">Buat Pengiriman</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/5 p-6 rounded-2xl glass">
                <div className="text-sm text-slate-200">Ringkasan</div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="bg-white/6 p-4 rounded-lg text-center">
                    <div className="text-xs text-slate-300">Shipments Today</div>
                    <div className="text-xl font-bold mt-2">—</div>
                  </div>
                  <div className="bg-white/6 p-4 rounded-lg text-center">
                    <div className="text-xs text-slate-300">In Transit</div>
                    <div className="text-xl font-bold mt-2">—</div>
                  </div>
                  <div className="bg-white/6 p-4 rounded-lg text-center">
                    <div className="text-xs text-slate-300">Delivered</div>
                    <div className="text-xl font-bold mt-2">—</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* DASHBOARD CONTENT */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/track" className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-50 rounded-lg"><Truck className="text-orange-600" /></div>
              <div>
                <h3 className="text-lg font-bold">Track Shipment</h3>
                <p className="text-sm text-slate-500">Enter an AWB to see current status and history.</p>
              </div>
            </div>
          </Link>

          <Link href="/order" className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-sky-50 rounded-lg"><ClipboardList className="text-sky-600" /></div>
              <div>
                <h3 className="text-lg font-bold">Place Order</h3>
                <p className="text-sm text-slate-500">Create a new shipment and get a quote.</p>
              </div>
            </div>
          </Link>

          <Link href="/driver" className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg"><Package className="text-emerald-600" /></div>
              <div>
                <h3 className="text-lg font-bold">Driver Console</h3>
                <p className="text-sm text-slate-500">Tools and assignments for delivery drivers.</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Placeholder metrics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-xs text-slate-400">Shipments Today</div>
            <div className="text-2xl font-bold mt-2">—</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-xs text-slate-400">In Transit</div>
            <div className="text-2xl font-bold mt-2">—</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="text-xs text-slate-400">Delivered</div>
            <div className="text-2xl font-bold mt-2">—</div>
          </div>
        </div>
      </section>

      <footer className="mt-16 py-10">
        <div className="max-w-7xl mx-auto px-4 text-sm text-slate-500">© {new Date().getFullYear()} Ricargo — Built with Next.js</div>
      </footer>
    </main>
  );
}
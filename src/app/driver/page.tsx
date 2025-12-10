import Link from 'next/link';

export default function DriverConsolePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <Link href="/" className="text-sm text-slate-500 hover:underline">← Back to Dashboard</Link>
        <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Driver Console</h1>
        <p className="mt-4 text-slate-600">Placeholder for driver tools: assignments, navigation links, and status updates.</p>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <div className="text-sm text-slate-500">Planned features</div>
          <ul className="mt-4 list-disc list-inside text-slate-700">
            <li>Assigned deliveries list</li>
            <li>Update status / proof of delivery</li>
            <li>Navigation / route hints</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

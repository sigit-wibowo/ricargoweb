import Link from 'next/link';

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <Link href="/" className="text-sm text-slate-500 hover:underline">← Back to Dashboard</Link>
        <h1 className="mt-6 text-3xl font-extrabold text-slate-900">Place Order</h1>
        <p className="mt-4 text-slate-600">This is a placeholder for the order creation flow. Implement form and quote integration here.</p>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <div className="text-sm text-slate-500">Coming soon</div>
          <ul className="mt-4 list-disc list-inside text-slate-700">
            <li>Create shipment form</li>
            <li>Calculate rates and service options</li>
            <li>Save draft orders</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

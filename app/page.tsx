import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="text-center px-6">
        <h1>
        EthicBasket
        </h1>
        <p>
        Proof Over Promise. Commerce With Conscience.
        </p>
        <Link
          href="/home"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition"
        >
          Enter Site
        </Link>
      </div>
    </main>
  );
}

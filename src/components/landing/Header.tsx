import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 px-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">CampusFlow AI</div>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/chatbot" className="hover:text-blue-400 transition">Chatbot</Link>
          <Link href="/knowledge-base" className="hover:text-blue-400 transition">Knowledge Base</Link>
          <Link href="/admin" className="hover:text-blue-400 transition">Admin</Link>
        </nav>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
          Open Demo
        </button>
      </div>
    </header>
  );
}
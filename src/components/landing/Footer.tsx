import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CampusFlow AI</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Student support made instant, clear, and modern.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <nav className="space-y-2">
              <Link href="/" className="text-slate-300 hover:text-white transition text-sm">Home</Link>
              <Link href="/chatbot" className="text-slate-300 hover:text-white transition text-sm">Chatbot</Link>
              <Link href="/knowledge-base" className="text-slate-300 hover:text-white transition text-sm">Knowledge Base</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Admin</h4>
            <nav className="space-y-2">
              <Link href="/admin" className="text-slate-300 hover:text-white transition text-sm">Admin Dashboard</Link>
              <Link href="/admin/faqs" className="text-slate-300 hover:text-white transition text-sm">Manage FAQs</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">About</h4>
            <nav className="space-y-2">
              <Link href="/about" className="text-slate-300 hover:text-white transition text-sm">About Us</Link>
              <Link href="/contact" className="text-slate-300 hover:text-white transition text-sm">Contact</Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2026 CampusFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
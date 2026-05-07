'use client';

export default function Header() {
  return (
    <header className="bg-slate-800 text-white px-6 py-4 rounded-3xl m-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="font-bold text-slate-800 text-lg">CF</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">CampusFlow AI</h1>
            <p className="text-xs text-gray-300">Student Support Suite</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-8 items-center">
          <a href="#" className="hover:text-blue-300 transition">Home</a>
          <a href="#" className="hover:text-blue-300 transition">Chatbot</a>
          <a href="#" className="hover:text-blue-300 transition">Knowledge Base</a>
          <a href="#" className="hover:text-blue-300 transition">Admin</a>
        </nav>

        {/* Open Demo Button */}
        <button className="bg-white text-slate-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Open Demo
        </button>
      </div>
    </header>
  );
}
'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="font-bold text-slate-800 text-lg">CF</span>
            </div>
            <h3 className="font-bold text-xl">CampusFlow AI</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            A polished student-support platform built as a CSC320 project demo with a guided chatbot, searchable FAQ system, and editable admin dashboard.
          </p>
        </div>

        {/* Right Section - Navigation */}
        <div>
          <h4 className="font-bold text-lg mb-6">Navigation</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-white transition">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Chatbot</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Knowledge Base</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition">Admin Dashboard</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2026 CampusFlow AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
            AI-POWERED ACADEMIC SUPPORT
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Student support made instant, clear, and modern.
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            A web platform that helps students get fast answers about course registration, school fees, exams, clearance, hostel support, and departmental guidance through a polished chat experience.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-12">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              Launch Chatbot
            </button>
            <button className="border-2 border-slate-300 text-slate-800 px-8 py-3 rounded-full font-semibold hover:border-slate-400 transition">
              View Admin Panel
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-blue-600 font-semibold text-xs uppercase mb-2">Response Time</p>
              <p className="text-3xl font-bold text-slate-900">6 sec</p>
              <p className="text-sm text-slate-600 mt-2">Students receive guided answers instead of waiting for office hours.</p>
            </div>
            <div>
              <p className="text-blue-600 font-semibold text-xs uppercase mb-2">Knowledge Base</p>
              <p className="text-3xl font-bold text-slate-900">25 FAQs</p>
              <p className="text-sm text-slate-600 mt-2">Covers fees, registration, exams, support, and departmental issues.</p>
            </div>
            <div>
              <p className="text-blue-600 font-semibold text-xs uppercase mb-2">Admin Ready</p>
              <p className="text-3xl font-bold text-slate-900">Live edit</p>
              <p className="text-sm text-slate-600 mt-2">Update FAQ content from the dashboard and reflect changes instantly.</p>
            </div>
          </div>
        </div>

        {/* Right Content - Chat Preview */}
        <div className="bg-white rounded-3xl shadow-xl p-8 h-96 flex flex-col justify-between">
          <div className="bg-slate-800 text-white px-6 py-3 rounded-2xl mb-6">
            <p className="font-semibold text-sm">CampusFlow assistant preview</p>
            <p className="text-xs text-slate-300">See how students ask, browse, and get guided responses.</p>
          </div>

          <div className="space-y-4 flex-1">
            <div className="bg-slate-100 p-4 rounded-lg">
              <p className="text-slate-700 text-sm">Hello, I can help you with registration, school fees, exam cards, project guidance, and more. What would you like to know?</p>
            </div>

            <div className="bg-blue-500 text-white p-4 rounded-lg ml-auto max-w-xs">
              <p className="text-sm">How do I register my courses and print my registration slip?</p>
            </div>

            <div className="bg-slate-100 p-4 rounded-lg text-sm text-slate-700">
              <p>Log in to the student portal, choose the active semester, select your approved courses, submit, and print your confirmation page for your level adviser.</p>
            </div>
          </div>

          {/* Topic Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition">
              Course Registration
            </button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition">
              Fees & Payments
            </button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm hover:bg-blue-200 transition">
              Exams & Results
            </button>
            <button className="bg-slate-100 text-slate-600 p-2 rounded-full hover:bg-slate-200 transition">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
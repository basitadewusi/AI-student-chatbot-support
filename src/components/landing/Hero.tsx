'use client';

export default function Hero() {
  return (
    <section className="bg-blue-100 px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <p className="text-blue-600 font-bold text-sm tracking-wide mb-4">
            AI-POWERED ACADEMIC SUPPORT
          </p>
          <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Student support made instant, clear, and modern.
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            A web platform that helps students get fast answers about course registration, school fees, exams, clearance, hostel support, and departmental guidance through a polished chat experience.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-12">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              Launch Chatbot
            </button>
            <button className="bg-white text-slate-800 px-8 py-3 rounded-full font-semibold border-2 border-slate-300 hover:bg-gray-50 transition">
              View Admin Panel
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-500 text-xs font-bold mb-2">RESPONSE TIME</p>
              <p className="text-3xl font-bold text-slate-800">6 sec</p>
              <p className="text-gray-600 text-sm mt-2">Students receive guided answers instead of waiting for office hours.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-500 text-xs font-bold mb-2">KNOWLEDGE BASE</p>
              <p className="text-3xl font-bold text-slate-800">25 FAQs</p>
              <p className="text-gray-600 text-sm mt-2">Covers fees, registration, exams, support, and departmental issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-500 text-xs font-bold mb-2">ADMIN READY</p>
              <p className="text-3xl font-bold text-slate-800">Live edit</p>
              <p className="text-gray-600 text-sm mt-2">Update FAQ content from the dashboard and reflect changes instantly.</p>
            </div>
          </div>
        </div>

        {/* Right Section - Chat Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="bg-slate-800 text-white rounded-lg p-4 mb-4">
            <p className="font-semibold">CampusFlow assistant preview</p>
            <p className="text-sm text-gray-300">See how students ask, browse, and get guided responses.</p>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                Hello. I can help you with registration, school fees, exam cards, project guidance, and more. What would you like to know?
              </p>
            </div>

            <div className="bg-blue-500 text-white p-4 rounded-lg ml-8">
              <p className="text-sm">
                How do I register my courses and print my registration slip?
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                Log in to the student portal, choose the active semester, select your approved courses, submit, and print your confirmation page for your level adviser.
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mt-6">
            <button className="text-blue-600 font-semibold px-4 py-2 border-b-2 border-blue-600">
              Course Registration
            </button>
            <button className="text-gray-600 font-semibold px-4 py-2 hover:text-blue-600">
              Fees & Payments
            </button>
            <button className="text-gray-600 font-semibold px-4 py-2 hover:text-blue-600">
              Exams & Results
            </button>
          </div>

          <button className="bg-blue-500 text-white rounded-full p-3 mt-4 hover:bg-blue-600 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
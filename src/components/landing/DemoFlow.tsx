'use client';

export default function DemoFlow() {
  return (
    <section className="bg-blue-50 px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12">
        {/* Left Section - Demo Flow */}
        <div className="bg-white rounded-2xl p-8">
          <p className="text-blue-600 font-bold text-sm tracking-wide mb-4">
            HOW TO PRESENT IT
          </p>
          <h3 className="text-3xl font-bold text-slate-800 mb-6">
            A clear lecture demo flow
          </h3>
          <p className="text-gray-600 mb-8">
            The walkthrough helps you show both the design quality and the software value during presentation.
          </p>

          {/* Steps */}
          <div className="space-y-4">
            {[
              {
                num: 1,
                text: 'Open the landing page and explain the problem statement the product solve.'
              },
              {
                num: 2,
                text: 'Move to the chatbot and test registration, fees, and exam questions.'
              },
              {
                num: 3,
                text: 'Show the FAQ explorer to prove the knowledge base is searchable and structured.'
              },
              {
                num: 4,
                text: 'Open the admin panel, log in, create or edit a record, then return to the chatbot to show the update.'
              }
            ].map((step) => (
              <div key={step.num} className="flex gap-4 items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                  {step.num}
                </div>
                <div className="bg-slate-800 text-white p-4 rounded-lg flex-1">
                  <p className="text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Why It Stands Out */}
        <div className="bg-white rounded-2xl p-8">
          <p className="text-blue-600 font-bold text-sm tracking-wide mb-4">
            WHY IT STANDS OUT
          </p>
          <h3 className="text-3xl font-bold text-slate-800 mb-6">
            The product is shaped to match your frontend strengths.
          </h3>
          <p className="text-gray-600 mb-8">
            Instead of hiding behind a tiny prototype, this version gives you a full interface system to discuss during the defense.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              'Modern typography and high-end visual polish.',
              'Rich seeded content for realistic testing.',
              'Responsive UI with multiple user journeys.',
              'Real admin interactions instead of static mockups.',
              'Charts and dashboard elements for technical depth.',
              'Clean component structure in Next.js and Tailwind CSS.'
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800 text-white p-4 rounded-lg">
                <div className="flex gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <p className="text-sm">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
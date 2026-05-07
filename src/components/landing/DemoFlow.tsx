import { CheckCircle2 } from 'lucide-react';

export default function DemoFlow() {
  const steps = [
    {
      number: 1,
      title: 'Open the Chatbot',
      description: 'Click "Launch Chatbot" to see the student interface with real conversation examples.'
    },
    {
      number: 2,
      title: 'Test Different Queries',
      description: 'Ask questions about registration, fees, exams, clearance, or departmental matters.'
    },
    {
      number: 3,
      title: 'Navigate the Knowledge Base',
      description: 'Browse curated FAQs organized by category for quick student reference.'
    },
    {
      number: 4,
      title: 'Check the Admin Panel',
      description: 'Show how admins can edit FAQ content and watch changes reflect in the chatbot instantly.'
    }
  ];

  const features = [
    'Modern typography and visual polish throughout the UI',
    'Rich content with 25+ realistic FAQs for authentic testing',
    'Responsive design across chatbot, knowledge base, and admin views',
    'Real admin interactions showing content management in action',
    'Charts and dashboard elements demonstrating scalability',
    'Clean Next.js and Tailwind CSS codebase for maintainability'
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Left: How to Present It */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-12">How to Present It</h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Why It Stands Out */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Why It Stands Out</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-slate-700 text-lg leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
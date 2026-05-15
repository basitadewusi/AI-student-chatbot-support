import { CheckCircle2 } from 'lucide-react';

export default function DemoFlow() {
  const steps = [
    {
      number: 1,
      title: 'Open the Chatbot',
      description: 'Click "Launch Chatbot" to see the student interface with real conversation examples.',
    },
    {
      number: 2,
      title: 'Test Different Queries',
      description: 'Ask questions about registration, fees, exams, clearance, or departmental matters.',
    },
    {
      number: 3,
      title: 'Navigate the Knowledge Base',
      description: 'Browse curated FAQs organized by category for quick student reference.',
    },
    {
      number: 4,
      title: 'Check the Admin Panel',
      description: 'Show how admins can edit FAQ content and watch changes reflect in the chatbot instantly.',
    },
  ];

  const features = [
    'Modern typography and visual polish throughout the UI',
    'Rich content with 25+ realistic FAQs for authentic testing',
    'Responsive design across chatbot, knowledge base, and admin views',
    'Real admin interactions showing content management in action',
    'Charts and dashboard elements demonstrating scalability',
    'Clean Next.js and Tailwind CSS codebase for maintainability',
  ];

  return (
    <section className="bg-[#D9EAF7] px-4 pb-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase text-[#328CC1]">Demo path</p>
          <h2 className="mb-8 text-3xl font-black text-[#0B3C5D] sm:text-4xl">
            How to Present It
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <article key={step.number} className="flex gap-5 rounded-[24px] border border-[#BFD4E3] bg-white p-5">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#328CC1] text-lg font-black text-white">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[#0B3C5D]">{step.title}</h3>
                  <p className="leading-7 text-[#557087]">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[#BFD4E3] bg-[#E6F2FA] p-6 sm:p-8">
          <p className="mb-3 text-sm font-bold uppercase text-[#328CC1]">Project strengths</p>
          <h2 className="mb-8 text-3xl font-black text-[#0B3C5D] sm:text-4xl">
            Why It Stands Out
          </h2>
          <div className="grid gap-4">
            {features.map((feature, index) => (
              <article key={index} className="flex items-start gap-4 rounded-[24px] border border-[#BFD4E3] bg-white p-5">
                <CheckCircle2 className="mt-1 flex-shrink-0 text-[#328CC1]" size={24} />
                <p className="text-base leading-7 text-[#16324A] sm:text-lg">{feature}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  MessageCircle,
  Search,
  ShieldCheck,
} from 'lucide-react';

export default function Hero() {
  const stats = [
    ['Response Time', '6 sec', 'Students get guided help quickly through a clean, structured chat flow.'],
    ['Knowledge Base', '25 FAQs', 'Reusable answers across registration, fees, exams, and support.'],
    ['Admin Ready', 'Live edit', 'Update FAQ content from a dashboard-style workflow.'],
  ];

  const topics = ['Registration', 'Fees', 'Exams', 'Department'];

  return (
    <section className="px-4 pb-16 pt-10 sm:pb-20 sm:pt-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[32px] border border-[#BFD4E3] bg-[#E6F2FA] p-6 sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:p-10">
        <div>
          <p className="mb-4 text-sm font-bold uppercase text-[#328CC1]">
            AI-POWERED ACADEMIC SUPPORT
          </p>
          <h1 className="mb-5 max-w-3xl text-4xl font-black leading-tight text-[#0B3C5D] sm:text-5xl lg:text-6xl">
            Student support made instant, clear, and modern.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-[#557087]">
            A web platform that helps students get fast answers about course registration, school fees, exams, clearance, hostel support, and departmental guidance through a polished chat experience.
          </p>

          <div className="mb-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/chat" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#328CC1] px-7 py-3.5 font-bold text-white transition hover:bg-[#2b7eae]">
              Launch Chatbot
              <MessageCircle size={19} />
            </Link>
            <Link href="/admin" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#BFD4E3] bg-white px-7 py-3.5 font-bold text-[#0B3C5D] transition hover:border-[#328CC1]">
              View Admin
              <ShieldCheck size={19} />
            </Link>
            <Link href="/faq" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3C5D] px-7 py-3.5 font-bold text-white transition hover:bg-[#082f49]">
              Search FAQ
              <Search size={18} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {stats.map(([label, value, description]) => (
              <article key={label} className="rounded-[24px] border border-[#BFD4E3] bg-white p-5">
                <p className="mb-3 text-xs font-black uppercase text-[#557087]">{label}</p>
                <p className="text-3xl font-black text-[#0B3C5D]">{value}</p>
                <p className="mt-3 text-sm leading-6 text-[#557087]">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[#BFD4E3] bg-white p-5 sm:p-6">
          <div className="rounded-[28px] bg-[#F8FBFE] p-4">
            <div className="mb-5 rounded-[24px] bg-[#0B3C5D] p-5 text-white">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold">CampusFlow assistant preview</p>
                  <p className="text-xs text-[#D9EAF7]">Live academic help workspace</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0B3C5D]">
                  Online
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-[18px] bg-white/10 p-3">
                  <GraduationCap className="mb-2 text-white" size={22} />
                  <p className="font-semibold">Student portal</p>
                </div>
                <div className="rounded-[18px] bg-white/10 p-3">
                  <BookOpenCheck className="mb-2 text-white" size={22} />
                  <p className="font-semibold">FAQ library</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="max-w-[88%] rounded-[20px] bg-[#F1F5F9] p-4 text-sm leading-6 text-[#16324A]">
                Hello, I can help with registration, fees, exam cards, project guidance, and more.
              </div>

              <div className="ml-auto max-w-[82%] rounded-[20px] bg-[#328CC1] p-4 text-sm leading-6 text-white">
                How do I register my courses and print my registration slip?
              </div>

              <div className="max-w-[92%] rounded-[20px] bg-[#F1F5F9] p-4 text-sm leading-6 text-[#16324A]">
                Log in to the student portal, choose the active semester, select your approved courses, submit, and print your confirmation page for your level adviser.
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-[#D9EAF7] pt-4">
              {topics.map((topic, index) => (
                <button
                  key={topic}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${index === 0 ? 'bg-[#328CC1] text-white hover:bg-[#2b7eae]' : 'bg-white text-[#0B3C5D] hover:bg-[#F1F5F9]'}`}
                >
                  {topic}
                </button>
              ))}
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0B3C5D] text-white transition hover:bg-[#082f49]"
                aria-label="Browse more topics"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

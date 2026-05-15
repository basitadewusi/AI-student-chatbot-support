import Link from 'next/link';
import { BotMessageSquare, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#D9EAF7]/90 px-4 py-5 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 rounded-full bg-[#0B3C5D] px-4 py-4 text-white shadow-sm sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#0B3C5D]">
            <BotMessageSquare size={21} />
          </span>
          <span className="truncate text-xl font-black leading-none sm:text-2xl">
            CampusFlow AI
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <Link href="/" className="transition hover:text-[#D9EAF7]">Home</Link>
          <Link href="/chat" className="transition hover:text-[#D9EAF7]">Chatbot</Link>
          <Link href="/faq" className="transition hover:text-[#D9EAF7]">Knowledge Base</Link>
          <Link href="/admin" className="transition hover:text-[#D9EAF7]">Admin</Link>
        </nav>

        <Link
          href="/chat"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0B3C5D] transition hover:bg-[#F1F5F9] lg:inline-flex"
        >
          Open Demo
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B3C5D] md:hidden"
          aria-label="Open navigation"
        >
          <Menu size={21} />
        </button>
      </div>
    </header>
  );
}

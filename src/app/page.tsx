import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import DemoFlow from '@/components/landing/DemoFlow';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DemoFlow />
      <Footer />
    </main>
  );
}
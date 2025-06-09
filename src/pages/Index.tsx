
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import Subscribe from '@/components/Subscribe';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Newsletter />
        <Subscribe />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

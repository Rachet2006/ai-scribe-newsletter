
import { ArrowRight, Brain, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSubscribe = () => {
    const subscribeSection = document.getElementById('subscribe');
    if (subscribeSection) {
      subscribeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#F59E0B]/10 to-[#14B8A6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#14B8A6]/10 to-[#F59E0B]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F59E0B]/10 to-[#14B8A6]/10 border border-[#F59E0B]/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-sm font-medium text-foreground">Weekly AI Insights & Analysis</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Stay Ahead in the{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#14B8A6] bg-clip-text text-transparent">
              AI Revolution
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the latest AI breakthroughs, insights, and practical applications delivered to your inbox. 
            Join thousands of innovators shaping the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#F59E0B] to-[#14B8A6] hover:opacity-90 text-white px-8 py-4 text-lg group"
              onClick={scrollToSubscribe}
            >
              Subscribe Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted px-8 py-4 text-lg"
              onClick={scrollToNewsletter}
            >
              Read Latest Issue
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

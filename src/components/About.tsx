
import { User, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About{' '}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#14B8A6] bg-clip-text text-transparent">
                The NextTech Brief
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bridging the gap between cutting-edge AI research and practical applications for professionals and enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                About Me
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Rishit — a tech enthusiast, student, and eternal learner passionate about the future of AI, automation, and innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I started The NextTech Brief to make sense of the fast-moving tech world, and to share concise, curated insights that matter. I believe good content shouldn't waste your time — it should earn your attention.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not exploring the latest in machine learning or automating workflows, I'm building tools and writing ideas that simplify complexity for curious minds like yours.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground pt-6">
                About The NextTech Brief
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The NextTech Brief is your weekly dose of what's next — a newsletter that cuts through the noise and delivers the most impactful updates in AI, technology, and digital tools, all in a format you can read in minutes.
              </p>
              
              <div className="space-y-3">
                <p className="text-muted-foreground font-medium">Each edition includes:</p>
                <ul className="text-muted-foreground leading-relaxed space-y-2 ml-4">
                  <li>• Curated news you actually care about</li>
                  <li>• Emerging tools and platforms worth trying</li>
                  <li>• Originals — my take on trends reshaping tech</li>
                  <li>• Designed for students, developers, founders, and the curious</li>
                </ul>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Whether you're building, learning, or just keeping up — The NextTech Brief helps you stay one step ahead.
              </p>
              <p className="text-foreground font-semibold">
                Short. Sharp. Insightful. Every Sunday.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-[#F59E0B]/10 to-[#14B8A6]/10 rounded-2xl border border-border flex items-center justify-center shadow-sm">
                <div className="w-32 h-32 bg-gradient-to-br from-[#F59E0B] to-[#14B8A6] rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-16 h-16 text-white" />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-lg animate-pulse shadow-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg animate-pulse delay-1000 shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

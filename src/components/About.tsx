
import { User, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Users, label: "Newsletter Subscribers", value: "50,000+" },
    { icon: BookOpen, label: "Articles Published", value: "200+" },
    { icon: User, label: "Years in AI", value: "8+" }
  ];

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
                Your Guide to the AI Revolution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                NextTech Brief was founded with a simple mission: to make artificial intelligence accessible and actionable for everyone. 
                In a rapidly evolving field where breakthrough discoveries happen weekly, we curate the most important developments 
                and translate complex research into practical insights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our newsletter covers everything from the latest language models and computer vision breakthroughs to 
                practical AI implementation strategies for businesses. We believe that understanding AI isn't just for 
                researchers and engineers—it's essential for anyone looking to thrive in the modern economy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Join our community of forward-thinking professionals, entrepreneurs, and AI enthusiasts who rely on 
                NextTech Brief to stay ahead of the curve and make informed decisions about AI adoption and strategy.
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border bg-card shadow-sm">
                <CardContent className="pt-6 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#14B8A6] rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

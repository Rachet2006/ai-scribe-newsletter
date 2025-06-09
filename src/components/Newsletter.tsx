
import { Calendar, Clock, ArrowRight, TrendingUp, Cpu, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Newsletter = () => {
  const featuredArticles = [
    {
      title: "GPT-5 Breakthrough: What It Means for Enterprise AI",
      description: "Deep dive into the latest language model capabilities and their real-world applications in business automation.",
      readTime: "8 min read",
      date: "Dec 5, 2024",
      category: "LLMs",
      icon: Cpu,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "The Rise of AI Agents: Autonomous Intelligence in Action",
      description: "Exploring how AI agents are transforming industries from customer service to software development.",
      readTime: "6 min read",
      date: "Dec 3, 2024",
      category: "AI Agents",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Prompt Engineering Mastery: Advanced Techniques",
      description: "Learn professional prompt engineering strategies that top AI practitioners use to get better results.",
      readTime: "12 min read",
      date: "Nov 28, 2024",
      category: "Techniques",
      icon: Lightbulb,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="newsletter" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest from{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              NextTech Brief
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep dives into AI research, practical applications, and industry trends that matter to professionals and enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${article.gradient} flex items-center justify-center`}>
                    <article.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {article.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

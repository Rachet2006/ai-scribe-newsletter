
import { useState } from 'react';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const benefits = [
    "Weekly AI research summaries",
    "Exclusive industry insights",
    "Early access to new tools",
    "Expert interviews & analysis",
    "No spam, unsubscribe anytime"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gradient-to-r from-blue-500/20 to-purple-600/20 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Join 50,000+ AI Enthusiasts</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Never Miss an{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    AI Breakthrough
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get curated AI insights, research summaries, and practical applications delivered to your inbox every week.
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                  <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 py-6 text-base border-border focus:border-primary"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-6 px-8 text-base font-semibold"
                    >
                      Subscribe Free
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Free forever. No credit card required.
                  </p>
                </form>
              ) : (
                <div className="text-center mb-8 py-6">
                  <div className="inline-flex items-center space-x-2 text-green-600 mb-4">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg font-semibold">Successfully Subscribed!</span>
                  </div>
                  <p className="text-muted-foreground">
                    Welcome to AI Insights! Check your email for a confirmation link.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

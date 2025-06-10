
import { useState } from 'react'
import { Mail, CheckCircle, Sparkles, User } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Subscribe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = crypto.randomUUID()
      const { data, error } = await supabase
        .from('subscribers')
        .insert([{ name, email, confirmation_token: token }])
        .select()

      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation - email already exists
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
        }
        return;
      }

      console.log('Successfully subscribed:', data)
      setIsSubscribed(true)

      const resendApiKey = import.meta.env.VITE_RESEND_API_KEY as string
      const domain = import.meta.env.VITE_DOMAIN_NAME as string
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: `The NextTech Brief <noreply@${domain}>`,
          to: email,
          subject: 'Please confirm your subscription to The NextTech Brief',
          html: `<p>Hi ${name || 'there'}, please confirm your subscription.</p><p><a href="https://${domain}/confirm?token=${token}">Confirm Subscription</a></p>`
        })
      })

      toast({
        title: 'Successfully subscribed!',
        description: 'Welcome to NextTech Brief! Check your email for confirmation.'
      })

      setTimeout(() => {
        setIsSubscribed(false);
        setName('')
        setEmail('')
      }, 3000);
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    "Weekly AI research summaries",
    "Exclusive industry insights",
    "Early access to new tools",
    "No spam, unsubscribe anytime"
  ];

  return (
    <section id="subscribe" className="py-20 bg-gradient-to-br from-[#121212] via-[#1E1E1E] to-[#121212] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gradient-to-r from-[#F59E0B]/20 to-[#14B8A6]/20 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#F59E0B]/10 to-[#14B8A6]/10 border border-[#F59E0B]/20 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                  <span className="text-sm font-medium">Join AI Enthusiasts</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Never Miss an{' '}
                  <span className="bg-gradient-to-r from-[#F59E0B] to-[#14B8A6] bg-clip-text text-transparent">
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
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10 py-6 text-base border-border bg-[#1E1E1E] text-white placeholder:text-muted-foreground focus:border-[#14B8A6] transition-colors"
                        disabled={isLoading}
                      />
                    </div>
                    <div className="flex-1 relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 py-6 text-base border-border bg-[#1E1E1E] text-white placeholder:text-muted-foreground focus:border-[#14B8A6] transition-colors"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-[#F59E0B] to-[#14B8A6] hover:bg-[#F59E0B] hover:from-[#F59E0B] hover:to-[#F59E0B] focus:ring-2 focus:ring-[#14B8A6] transition-colors py-6 px-8 text-base font-semibold"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Subscribing...' : 'Subscribe Free'}
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
                    Welcome to NextTech Brief! Check your email for a confirmation link.
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

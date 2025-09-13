import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stethoscope } from "lucide-react";
import { useState } from "react";

const BrandHeader = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleContactFounders = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          type: 'founders',
          email: email
        }
      });

      if (error) throw error;

      toast({
        title: "Message sent",
        description: "The founders will be notified and will reach out soon!",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-primary shadow-glow flex items-center justify-center">
            <Stethoscope className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg tracking-tight group-hover:opacity-90 transition-opacity">Stanza Health</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#product" className="story-link">Product</a>
          <a href="#features" className="story-link">Features</a>
          <a href="#insights" className="story-link">Insights</a>
          <a href="#contact" className="story-link">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" className="hover-scale">
                <Stethoscope className="opacity-90" />
                Contact founders
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Contact Founders</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleContactFounders} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Your email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? 'Sending...' : 'Send contact request'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
};

export default BrandHeader;

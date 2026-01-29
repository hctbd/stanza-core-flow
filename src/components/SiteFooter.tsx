import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail } from "lucide-react";
import { useState } from "react";

const SiteFooter = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      organization: formData.get('org') as string,
      notes: formData.get('notes') as string,
      type: 'pilot'
    };

    // Validate required fields
    if (!data.name || !data.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your full name and work email.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    
    try {
      // Store in database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert(data);

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'waitlist',
          name: data.name,
          email: data.email,
          org: data.organization,
          notes: data.notes,
        }
      });

      if (emailError) {
        console.warn('Email notification failed:', emailError);
      }

      toast({
        title: "Request received",
        description: "Thanks! Our team will reach out shortly.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
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
    <footer id="contact" className="border-t border-border bg-gradient-subtle">
      <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-2xl font-semibold mb-3">Join the Pilot Program</h3>
          <p className="text-muted-foreground max-w-md">
            Be among the first to integrate with India's ABDM ecosystem. Early access partners get hands-on onboarding and dedicated support.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card border rounded-lg p-6 shadow-elegant grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Full name" className="h-11 rounded-md border bg-background px-3"/>
            <input required name="email" type="email" placeholder="Work email" className="h-11 rounded-md border bg-background px-3"/>
          </div>
          <input name="org" placeholder="Organization" className="h-11 rounded-md border bg-background px-3"/>
          <textarea name="notes" placeholder="Any particular features you are interesed in?" className="min-h-28 rounded-md border bg-background p-3"/>
          <div>
            <Button type="submit" variant="hero" className="min-w-[180px]" disabled={loading}>
              <Mail /> {loading ? 'Sending…' : 'Join Pilot Program'}
            </Button>
          </div>
        </form>
      </div>
      <div className="border-t border-border mt-8 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Stanza Health. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;

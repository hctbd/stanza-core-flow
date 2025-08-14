import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { useState } from "react";

const SiteFooter = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Request received",
        description: "Thanks! Our team will reach out shortly.",
      });
    }, 700);
  };

  return (
    <footer id="contact" className="border-t border-border bg-gradient-subtle">
      <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-2xl font-semibold mb-3">Talk to Stanza</h3>
          <p className="text-muted-foreground max-w-md">
            Ready to see how Stanza Health can reduce administrative burden and unlock better outcomes? Contact the founders.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card border rounded-lg p-6 shadow-elegant grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required name="name" placeholder="Full name" className="h-11 rounded-md border bg-background px-3"/>
            <input required name="email" type="email" placeholder="Work email" className="h-11 rounded-md border bg-background px-3"/>
          </div>
          <input name="org" placeholder="Organization" className="h-11 rounded-md border bg-background px-3"/>
          <textarea name="notes" placeholder="What would you like to explore?" className="min-h-28 rounded-md border bg-background p-3"/>
          <div>
            <Button type="submit" variant="hero" className="min-w-[180px]" disabled={loading}>
              <Mail /> {loading ? 'Sending…' : 'Contact'}
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

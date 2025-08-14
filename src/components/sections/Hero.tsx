import { Button } from "@/components/ui/button";
import { Check, FileText, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="product" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_30%,#000_60%,transparent)]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[720px] w-[1200px] rounded-full bg-gradient-primary opacity-30 blur-3xl" />
      </div>
      <div className="container mx-auto relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center animate-enter">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Stanza Health — AI Agentic Platform for Hospitals & Clinics
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Automate the entire administrative workflow from intake to billing. Stanza delivers AI-powered preconsult summaries, lab interpretations, and real-time diagnosis & treatment suggestions via Stanza Scribe™—seamlessly integrated with legacy EHR systems.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="hero" size="lg" className="w-full sm:w-auto h-14 px-12 text-lg">
              <PlayCircle /> Join Waitlist
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Check className="text-primary"/> No learning curve</div>
            <div className="flex items-center gap-2"><Check className="text-primary"/> No administrative friction</div>
            <div className="flex items-center gap-2"><Check className="text-primary"/> Prevent physician burnout</div>
          </div>
        </div>

        <figure className="mt-16 md:mt-20 rounded-xl border bg-card/60 backdrop-blur shadow-elegant p-3">
          <img
            src="/lovable-uploads/45cbe0dd-d30a-4b3b-87c2-7c0bb6cc770a.png"
            alt="Stanza Health platform dashboard showing patient insights, AI clinical intelligence, population analytics, and treatment recommendations"
            loading="lazy"
            className="rounded-lg w-full h-auto"
          />
          <figcaption className="sr-only">Product preview</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;

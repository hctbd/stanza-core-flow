import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";

const BrandHeader = () => {
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
          <Button variant="hero" className="hover-scale">
            <Stethoscope className="opacity-90" />
            Contact founders
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default BrandHeader;

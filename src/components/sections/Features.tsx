import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, FileSearch, Stethoscope, Coins, Database, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Stanza Scribe™",
    desc: "Real-time diagnosis and treatment suggestions during consultations.",
    icon: Stethoscope,
  },
  {
    title: "Preconsult Summaries",
    desc: "AI-curated charts and histories ready before the patient enters.",
    icon: FileSearch,
  },
  {
    title: "Lab Interpreter",
    desc: "Automated lab analysis with clear clinical explanations.",
    icon: Activity,
  },
  {
    title: "Billing Automation",
    desc: "From coding to claims—reduce denials and speed reimbursement.",
    icon: Coins,
  },
  {
    title: "EHR Integration",
    desc: "Drop-in connectors for legacy systems with seamless data flow.",
    icon: Database,
  },
  {
    title: "Compliance & Security",
    desc: "HIPAA-ready architecture, audit trails, and least-privilege access.",
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Automate intake → billing with one platform
          </h2>
          <p className="text-muted-foreground">
            Stanza orchestrates specialized agents across the care journey—built for busy clinicians and operations teams.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="hover-scale border-border/70">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-gradient-primary shadow-glow mb-4" />
                <CardTitle className="text-xl flex items-center gap-2"><Icon className="text-primary"/> {title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Fast setup, minimal disruption</li>
                  <li>• Human-in-the-loop controls</li>
                  <li>• Clear, traceable reasoning</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, FileSearch, Stethoscope, Coins, Database, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Stanza Scribe™",
    desc: "Real-time diagnosis and treatment suggestions during consultations with AI-powered clinical decision support.",
    icon: Stethoscope,
  },
  {
    title: "Preconsult Summaries",
    desc: "AI-curated patient charts and medical histories automatically prepared before each appointment.",
    icon: FileSearch,
  },
  {
    title: "Lab Interpreter",
    desc: "Automated laboratory result analysis with clear clinical explanations and actionable insights.",
    icon: Activity,
  },
  {
    title: "Billing Automation",
    desc: "End-to-end revenue cycle management from medical coding to claims processing and reimbursement.",
    icon: Coins,
  },
  {
    title: "EHR Integration",
    desc: "Seamless connectors for legacy electronic health record systems with real-time data synchronization.",
    icon: Database,
  },
  {
    title: "Compliance & Security",
    desc: "Enterprise-grade HIPAA compliance with comprehensive audit trails and role-based access controls.",
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Automate intake → Billing with one platform
          </h2>
          <p className="text-muted-foreground">
            Stanza orchestrates specialized agents across the care journey—built for busy clinicians and operations teams.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="hover-scale border-border/70">
              <CardHeader className="pb-6">
                <div className="h-10 w-10 rounded-md bg-gradient-primary shadow-glow mb-4" />
                <CardTitle className="text-xl flex items-center gap-2"><Icon className="text-primary"/> {title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import BrandHeader from "@/components/BrandHeader";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DataFlowDiagram from "@/components/sections/DataFlowDiagram";
import SiteFooter from "@/components/SiteFooter";
import { LineChart, Users, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Minimal SEO enhancements for SPA
    document.title = "Stanza Health - ABDM Native Data Analytics for Indian Healthcare";
    const desc = "Stanza Health integrates unstructured medical data with your EHR to unify patient histories, enable cross-institution analytics, and unlock Government ABDM DHIS incentives.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stanza Health",
    url: typeof window !== 'undefined' ? window.location.origin : "",
    sameAs: [],
    logo: "/favicon.ico",
    makesOffer: {
      "@type": "SoftwareApplication",
      name: "ABDM Data Analytics Platform",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
    }
  };

  return (
    <div id="top" className="min-h-screen">
      <BrandHeader />
      <main>
        <Hero />
        <DataFlowDiagram />
        <Features />

        <section id="insights" className="py-16">
          <div className="container mx-auto">
            <header className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">Population insights, natively</h2>
              <p className="text-muted-foreground">Aggregate EHR data across systems to uncover trends, adverse events, and research-grade evidence—without extra clicks.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><LineChart className="text-primary"/> Outcomes analytics</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">Track treatment response and adherence cohorts with configurable dashboards.</CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Users className="text-primary"/> Cohort builder</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">Create precise patient segments for follow-ups, clinical studies, or reporting.</CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Brain className="text-primary"/> Safety & signals</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">Surface potential adverse events with transparent, auditable reasoning.</CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;

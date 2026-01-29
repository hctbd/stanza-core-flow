import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Database, 
  FileSpreadsheet, 
  Brain, 
  Network, 
  History, 
  IndianRupee, 
  ArrowRight, 
  ArrowDown 
} from "lucide-react";

const DataFlowDiagram = () => {
  return (
    <section id="integration" className="py-16">
      <div className="container mx-auto">
        <header className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Deep Data Integration
          </h2>
          <p className="text-muted-foreground">
            From fragmented records to unified patient histories and government incentives.
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Fragmented Data Card */}
          <Card className="hover-scale shadow-elegant w-full md:w-80">
            <CardHeader>
              <CardTitle className="text-lg">Fragmented Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <FileText className="h-5 w-5 text-primary" />
                <span>Handwritten Notes</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Database className="h-5 w-5 text-primary" />
                <span>Legacy EHRs</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <FileSpreadsheet className="h-5 w-5 text-primary" />
                <span>Lab PDFs</span>
              </div>
            </CardContent>
          </Card>

          {/* Arrow - Desktop */}
          <div className="hidden md:flex items-center">
            <ArrowRight className="h-8 w-8 text-primary" />
          </div>
          {/* Arrow - Mobile */}
          <div className="flex md:hidden items-center">
            <ArrowDown className="h-8 w-8 text-primary" />
          </div>

          {/* Stanza Engine Card */}
          <Card className="hover-scale shadow-elegant w-full md:w-80">
            <CardHeader>
              <div className="h-10 w-10 rounded-md bg-gradient-primary shadow-glow mb-4" />
              <CardTitle className="text-lg">Stanza Engine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Brain className="h-5 w-5 text-primary" />
                <span>AI Models</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Network className="h-5 w-5 text-primary" />
                <span>ABDM APIs</span>
              </div>
            </CardContent>
          </Card>

          {/* Arrow - Desktop */}
          <div className="hidden md:flex items-center">
            <ArrowRight className="h-8 w-8 text-primary" />
          </div>
          {/* Arrow - Mobile */}
          <div className="flex md:hidden items-center">
            <ArrowDown className="h-8 w-8 text-primary" />
          </div>

          {/* Structured Value Card */}
          <Card className="hover-scale shadow-elegant w-full md:w-80">
            <CardHeader>
              <CardTitle className="text-lg">Structured Value</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <History className="h-5 w-5 text-primary" />
                <span>Longitudinal Records</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <IndianRupee className="h-5 w-5 text-primary" />
                <span>DHIS Payouts</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataFlowDiagram;

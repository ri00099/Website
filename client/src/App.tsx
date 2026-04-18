import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppLaunchBanner from "@/components/AppLaunchBanner";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import President from "@/pages/President";
import Directors from "@/pages/Directors";
import Products from "@/pages/Products";
import KnowledgeHub from "@/pages/KnowledgeHub";
import Contact from "@/pages/Contact";
import Events from "@/pages/Events";
import Team from "@/pages/Team";
import Conclave from "@/pages/Conclave";
import Conclave2026 from "@/pages/Conclave2026";
import Circulars from "@/pages/Circulars";
import Gallery from "@/pages/Gallery";
import Membership from "@/pages/Membership";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import RefundPolicy from "@/pages/RefundPolicy";
import CancellationPolicy from "@/pages/CancellationPolicy";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <AppLaunchBanner />
      <div className="pt-20">
        <Navbar />
      <main className="flex-grow flex flex-col">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/president" component={President} />
          <Route path="/directors" component={Directors} />
          <Route path="/products" component={Products} />
          <Route path="/knowledge" component={KnowledgeHub} />
          <Route path="/contact" component={Contact} />
          <Route path="/events" component={Events} />
          <Route path="/team" component={Team} />
          <Route path="/conclave" component={Conclave} />
          <Route path="/conclave2026" component={Conclave2026} />
          <Route path="/circulars" component={Circulars} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/membership" component={Membership} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/refund-policy" component={RefundPolicy} />
          <Route path="/cancellation-policy" component={CancellationPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

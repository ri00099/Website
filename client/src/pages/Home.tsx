import { Link } from "wouter";
import { ArrowRight, Trophy, ShieldCheck, Globe, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useAnnouncements } from "@/hooks/use-announcements";
import InquiryForm from "@/components/InquiryForm";
import { format } from "date-fns";
import copperMetalImg from "@assets/Moffatt-Scrap-Iron-Metal-Campbellville-non-ferrous_1773218278459.jpg";

export default function Home() {
  const { data: announcements, isLoading } = useAnnouncements();

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={copperMetalImg}
            alt="Non-Ferrous Metals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="max-w-3xl text-left">
            <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-xs sm:text-sm mb-4 sm:mb-6 backdrop-blur-sm">
              Established 1933
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
              The Apex Body of <br />
              <span className="text-primary">Non-Ferrous Metals</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl font-light leading-relaxed">
              Representing a vast spectrum of the trade and industry. A legacy of excellence powering the national economy with over 800 + active members across India.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button size="lg" className="bg-primary text-white rounded-full px-6 sm:px-8 hover:shadow-lg hover:shadow-primary/25 hover:bg-primary/90" asChild>
                <Link href="/about">Discover Our Legacy <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link href="/products">View Core Metals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 sm:py-20 bg-background relative -mt-10 z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: ShieldCheck, title: "93+ Years", desc: "Of Industry Trust" },
              { icon: Factory, title: "800+", desc: "Active Members" },
              { icon: Globe, title: "Pan-India", desc: "Regional Chapters" },
              { icon: Trophy, title: "Benchmark", desc: "Pricing Authority" }
            ].map((stat, i) => (
              <Card key={i} className="border-none shadow-lg hover:-translate-y-2 transition-transform duration-300 bg-white">
                <CardContent className="p-4 md:p-8 flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 md:mb-6">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">{stat.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="py-14 sm:py-24 bg-white/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Notice Board</h2>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Latest Announcements</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-24 mb-4" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))
            ) : announcements?.length ? (
              announcements.slice(0, 3).map((item) => (
                <Card key={item.id} className="border-none shadow-lg hover:shadow-xl transition-all group overflow-hidden bg-white">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  <CardContent className="p-8">
                    <div className="text-sm text-muted-foreground mb-4 font-medium">
                      {item.date ? format(new Date(item.date), 'MMM dd, yyyy') : 'Recent'}
                    </div>
                    <h4 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))
            ) : null}
          </div>
        </div>
      </section>

      {/* WHY JOIN BME */}
      <section className="py-14 sm:py-24 bg-gradient-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img
            src={copperMetalImg}
            alt="Non-Ferrous Metals"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 relative">
              <div className="absolute -left-12 -top-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold relative z-10">Why Join <span className="text-primary">BME?</span></h2>
              
              <div className="space-y-6 relative z-10">
                {[
                  { title: "Industry Benchmarking", desc: "Accepted benchmark prices for Copper and Zinc across India." },
                  { title: "Powerful Representation", desc: "Strong voice at Central and State Government levels." },
                  { title: "Knowledge & Networking", desc: "National trade fairs, exhibitions, and technical seminars." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold font-serif mb-1 sm:mb-2">{item.title}</h4>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src={copperMetalImg}
                  alt="Non-Ferrous Metals"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl hidden md:block border border-white/20">
                <p className="text-3xl font-serif font-bold text-white mb-1">Dhaturatna</p>
                <p className="text-sm text-primary font-medium">Awarding Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Member Voices</h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-10 sm:mb-16">What Our Members Say</h3>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                { name: "Sushil Kothari", quote: "BME has been instrumental in our growth, providing valuable support and guidance in the non-ferrous sector." },
                { name: "Anjali Sharma", quote: "BME has helped us navigate the complexities of the market with ease. Their pricing benchmarks are invaluable." },
                { name: "Rajesh Gupta", quote: "The support and representation from BME has been crucial for our business dealings." }
              ].map((t, i) => (
                <CarouselItem key={i}>
                  <div className="p-8 md:p-12">
                    <p className="text-2xl md:text-3xl font-serif text-muted-foreground italic mb-8">"{t.quote}"</p>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">BME Member</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CONTACT / INQUIRY */}
      <section className="py-14 sm:py-24 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Connect With Us</h2>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you have an inquiry, need market data, or want to explore membership, our team is ready to assist you with dedicated support and guidance.
              </p>
              
              <div className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-2xl shadow-sm border border-primary/20">
                  <h4 className="font-bold font-serif text-xl mb-2">BME New App Launching Soon</h4>
                  <p className="text-muted-foreground text-sm">Stay tuned for the enhanced mobile experience on iOS and Android.</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl shadow-sm border border-primary/20">
                  <h4 className="font-bold font-serif text-xl mb-2">Real-time Updates</h4>
                  <p className="text-muted-foreground text-sm">Receive regular updates on government notifications and market alerts.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

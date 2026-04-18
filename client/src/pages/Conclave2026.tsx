import PageHero from "@/components/PageHero";
import { MapPin, Users, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import copperMetalImg from "@assets/Moffatt-Scrap-Iron-Metal-Campbellville-non-ferrous_1773218278459.jpg";
import dayalTravelsImg from "@assets/1002201343_1774346052732.jpg";

export default function Conclave2026() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        title="BME Conclave 2026"
        subtitle="Connect • Collaborate • Elevate — April 8-9, 2026 at Bharat Mandapam, New Delhi"
        backgroundImage={copperMetalImg}
        category="Flagship Event"
      />

      <section className="py-6 md:py-8 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm md:text-base font-semibold mb-4">Secure your registration for India's premier non-ferrous metals industry event</p>
          <a href="https://conclave.bme.in/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 font-semibold">
              Register Now
            </Button>
          </a>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
              About the Conclave
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The BME Conclave 2026 is the flagship national gathering of India's non-ferrous metal industry, hosted by Bombay Metal Exchange Ltd.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bringing together traders, importers, exporters, manufacturers, recyclers, policymakers, and industry leaders, this two-day conclave will serve as a strategic platform to discuss market trends, policy reforms, global trade dynamics, and the future of India's metal sector.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Under the theme "Connect • Collaborate • Elevate", the Conclave aims to foster meaningful partnerships, drive policy dialogue, and strengthen industry integration across regions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">
            What to <span className="text-primary">Expect</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Sparkles, title: "70+ Expo Stalls", description: "Featuring latest technologies, innovations, and services for the non-ferrous metals industry" },
              { icon: Users, title: "Networking Opportunities", description: "Meet top leaders, professionals, and innovators in the metal industry." },
              { icon: Clock, title: "Entertainment & Gala Dinner", description: "Relax, unwind, and build personal connections with entertainment and a grand dinner" },
              { icon: Sparkles, title: "Seminars & Panel Discussions", description: "Learn from industry experts on key issues, trends, and future outlook" }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">
            Conclave <span className="text-primary">Agenda</span>
          </h2>

          <Tabs defaultValue="day1" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="day1" className="text-base sm:text-lg">Day 1 - April 8</TabsTrigger>
              <TabsTrigger value="day2" className="text-base sm:text-lg">Day 2 - April 9</TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="space-y-4">
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-primary text-center">Strategy • Technology • Global Positioning • Circularity</p>
              </div>
              <div className="space-y-6">
                {[
                  { time: "09:00 - 09:45", event: "Registrations", description: "Arrival and registration of delegates" },
                  { time: "10:30 - 10:45", event: "Opening Remarks", speaker: "Emcee Ms. Krupa Patel", description: "Opening remarks followed by BME Anthem & Corporate Video" },
                  { time: "10:45 - 10:50", event: "Sponsors Felicitation", description: "Recognition of sponsors" },
                  { time: "10:50 - 11:00", event: "Special Opening Cultural Act", description: "Performance by a renowned artist" },
                  { time: "11:00 - 11:10", event: "Welcome Address", speaker: "Vice President Shri Manish Jain & Honorable Secretary Shri Atul Goyal", description: "BME Story | Industry Evolution | Conclave Objectives" },
                  { time: "11:10 - 11:20", event: "Strategic Address", speaker: "Sr Vice President Shri Mahendra Mehta", description: "Vision 2030 | National Integration | Industry Roadmap" },
                  { time: "11:20 - 11:30", event: "Chairman's Address", speaker: "Shri Rikab Mehta", description: "BME National Integration | Unified Industry voice | Policy initiatives | Roadmap to Vikasit Bharat 2047" },
                  { time: "11:30 - 11:40", event: "President's Address", speaker: "Shri Sushil Kothari", description: "Cluster development | Unified National Platform | Launch of BME Vision 2030" },
                  { time: "11:40 - 11:50", event: "Gujarat Chapter President Address", speaker: "Shri Jayesh Shah", description: "Guj Model | Cluster development | Policy" },
                  { time: "11:50 - 12:00", event: "Special Addresses", description: "BME Charitable Trust Chairman and BMR Co-host address" },
                  { time: "12:00 - 12:30", event: "Special Dignitary Addresses", description: "Shri G. Kishan Reddy | Shri Anil Agarwal | Shri Sanjiv Singh | Shri Tribhuvan Kabra" },
                  { time: "12:30 - 01:00", event: "Expo Inauguration", description: "Official opening of expo stalls" },
                  { time: "01:00 - 02:00", event: "Lunch", description: "Networking break" },
                  { time: "02:00 - 03:00", event: "Global CEOs Leadership Forum", speaker: "Moderator: Shri Mahendra Mehta", description: "India’s Non-Ferrous Metals: The Next Global Growth Story" },
                  { time: "03:00 - 04:00", event: "Fireside Chat – Industry Leaders", speaker: "Moderator: Shri Sandeep Jain", description: "From Cycles to Champions" },
                  { time: "04:00 - 04:30", event: "Felicitations of Industry Leaders, Sponsors & Co Hosts", description: "Recognition session" },
                  { time: "04:30 - 05:00", event: "High Tea", description: "Networking break" },
                  { time: "05:00 - 06:00", event: "Recycling the Future", speaker: "Moderator: Shri Sandeep Vakharia", description: "Non-Ferrous Metals, E-Waste & India’s Circular Commitment" },
                  { time: "08:00 PM", event: "Gala Dinner & Cocktails", description: "At Hotel Shangri-La, Eros" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-white border border-border hover:shadow-md transition-all">
                    <div className="flex flex-col items-center">
                      <Clock className="w-5 h-5 text-primary" />
                      <div className="w-px h-12 bg-primary/20 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-semibold text-primary">{item.time}</p>
                      <h4 className="text-lg font-bold mt-1">{item.event}</h4>
                      {item.speaker && <p className="text-xs font-semibold text-primary mt-1">{item.speaker}</p>}
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="day2" className="space-y-4">
              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold text-primary text-center">Downstream Growth • Finance • Integration • Policy</p>
              </div>
              <div className="space-y-6">
                {[
                  { time: "10:00 - 10:10", event: "Opening Remarks", speaker: "Emcee Ms. Krupa Patel", description: "Opening remarks followed by BME Anthem & Corporate Video" },
                  { time: "10:10 - 10:30", event: "Chapter President Addresses", speaker: "North, South & East Chapter Presidents", description: "Cluster Development | National Integration" },
                  { time: "10:30 - 11:30", event: "AI for Smart Manufacturing & Next-Gen Metals Business", speaker: "Premium AI Keynote Speaker: Shri Sanjeev Jain", description: "AI-driven efficiency | Digital intelligence | New age Business Management" },
                  { time: "11:30 - 11:45", event: "Special Address", speaker: "Ms. Praveena Rai - MD & CEO MCX", description: "Special keynote address" },
                  { time: "12:00 - 12:30", event: "GST: Challenges and Solutions", speaker: "Shri Bimal Jain", description: "Taxation and compliance insights" },
                  { time: "01:00 - 02:00", event: "Lunch", description: "Networking break" },
                  { time: "02:00 - 03:00", event: "India’s Downstream Growth – Manufacturing to Global Brands", speaker: "Moderator: Shri Rajesh Agarwal – MD, Leebo Group", description: "Value addition | Branding | OEM integration | Export readiness | Technology upgradation" },
                  { time: "03:00 - 04:00", event: "Hedging, Trade & Finance – The New Age Metals Business", speaker: "Moderator: Shri Mrityunjay Jha - Zee Business", description: "Commodity hedging | Structured trade finance | Digital metal book | MSME liquidity" },
                  { time: "04:00 - 05:00", event: "State Industrial Partnerships & MoU", description: "MIDC, GIDC, RIICO, and Invest India participation" },
                  { time: "05:00 - 05:30", event: "National Integration Roundtable & MoU", description: "Formation of Indian Non Ferrous Metal Council" },
                  { time: "05:30 PM", event: "High Tea & Networking", description: "Parallel breakout sessions: BIS, Lead Metals, Ferro Alloys, Base Metals" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-white border border-border hover:shadow-md transition-all">
                    <div className="flex flex-col items-center">
                      <Clock className="w-5 h-5 text-primary" />
                      <div className="w-px h-12 bg-primary/20 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-semibold text-primary">{item.time}</p>
                      <h4 className="text-lg font-bold mt-1">{item.event}</h4>
                      {item.speaker && <p className="text-xs font-semibold text-primary mt-1">{item.speaker}</p>}
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
              Venue <span className="text-primary">Details</span>
            </h2>
            <Card className="border-2 border-primary/20 bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold">Bharat Mandapam</h3>
                    <p className="text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3">About the Venue</h4>
                    <p className="text-muted-foreground">Bharat Mandapam is one of India's premier international convention centers, featuring world-class facilities, multiple halls, and state-of-the-art technology for hosting large-scale conferences and exhibitions.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Accessibility</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Easy access via Delhi Metro</li>
                      <li>✓ Ample parking facilities</li>
                      <li>✓ Accessible restrooms</li>
                      <li>✓ On-site dining options</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gradient-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Connect?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Secure your spot at India's premier non-ferrous metals industry gathering. Register now to access exclusive networking opportunities and industry insights.</p>
          <a href="https://conclave.bme.in/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 font-semibold">Register Now</Button>
          </a>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Travels Partner</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">Dayal Tours & Travels Limited</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Official travel partner for BME Conclave 2026. Book your travel tickets with our trusted partner for a smooth and convenient journey to the event.</p>
              <a href="https://bme.dayaltravels.in/travel/travel_web.xhtml" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-white rounded-full px-8 hover:bg-primary/90">Book Tickets</Button>
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
              <img src={dayalTravelsImg} alt="Dayal Tours & Travels Limited" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import PageHero from "@/components/PageHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import copperMetalImg from "@assets/Moffatt-Scrap-Iron-Metal-Campbellville-non-ferrous_1773218278459.jpg";

// Import images
import bme1 from "@assets/bme1_1773052578105.jpeg";
import bme2 from "@assets/bme2_1773052578113.jpeg";
import bme3 from "@assets/bme3_1773052578114.jpeg";
import bme4 from "@assets/bme4_1773052578114.jpeg";
import bme5 from "@assets/bme5_1773052578115.jpeg";
import bme6 from "@assets/bme6_1773052578115.jpeg";
import bme7 from "@assets/bme7_1773052578116.jpeg";
import bme8 from "@assets/bme8_1773052578116.jpeg";
import bme9 from "@assets/bme9_1773052578117.jpeg";
import bme10 from "@assets/bme10_1773052578117.jpeg";
import bme11 from "@assets/bme11_1773052578118.jpeg";
import bme12 from "@assets/bme12_1773052578118.jpeg";
import bme13 from "@assets/bme13_1773052578119.jpeg";
import bme14 from "@assets/bme14_1773052578119.jpeg";

const galleryItems = [
  { id: 1, category: "Events", title: "Board Meeting - Strategic Discussion", image: bme1 },
  { id: 2, category: "History", title: "LME Strategic Alliance 2005", image: bme2 },
  { id: 3, category: "Awards", title: "Dhaturatna Award Ceremony", image: bme3 },
  { id: 4, category: "Events", title: "BME Conclave 2026 - Main Stage", image: bme4 },
  { id: 5, category: "Awards", title: "Award Presentation Ceremony", image: bme5 },
  { id: 6, category: "Events", title: "Virtual Conclave 2024", image: bme6 },
  { id: 7, category: "Awards", title: "Conclave 2024 Awards", image: bme7 },
  { id: 8, category: "Events", title: "Annual General Meeting", image: bme8 },
  { id: 9, category: "Government", title: "Government Delegation Visit", image: bme9 },
  { id: 10, category: "Awards", title: "Government Recognition", image: bme10 },
  { id: 11, category: "Government", title: "Official Delegation Meeting", image: bme11 },
  { id: 12, category: "Events", title: "BSE Platform Speaking", image: bme12 },
  { id: 13, category: "Activities", title: "BME Cyclothon Community Event", image: bme13 },
  { id: 14, category: "Events", title: "Leadership Meeting", image: bme14 },
];

export default function Gallery() {
  const categories = ["All", "Events", "Awards", "Government", "Activities", "History"];

  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="BME Gallery" 
        subtitle="Visual highlights from our conclaves, award ceremonies, government interactions, and community activities."
        backgroundImage={copperMetalImg}
        category="Visuals"
      />

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              <TabsList className="bg-muted/50 p-1 rounded-full border-2 border-primary/20 inline-flex flex-nowrap min-w-0">
                {categories.map((cat) => (
                  <TabsTrigger key={cat} value={cat} data-testid={`tab-gallery-${cat.toLowerCase()}`} className="rounded-full px-3 sm:px-6 text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap">
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                  {cat === "All" 
                    ? galleryItems.map((item) => (
                      <div key={item.id} data-testid={`gallery-item-${item.id}`} className="aspect-square rounded-md overflow-hidden shadow-lg group relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-4">
                          <div>
                            <p className="text-white font-semibold text-xs sm:text-sm">{item.title}</p>
                            <p className="text-white/70 text-xs mt-1">{item.category}</p>
                          </div>
                        </div>
                      </div>
                    ))
                    : galleryItems.filter(item => item.category === cat).map((item) => (
                      <div key={item.id} data-testid={`gallery-item-${item.id}`} className="aspect-square rounded-md overflow-hidden shadow-lg group relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-4">
                          <p className="text-white font-semibold text-xs sm:text-sm">{item.title}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}

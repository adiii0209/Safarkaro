import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dighaImage from "@assets/generated_images/Digha_beach_destination_0991bf22.png";
import jamshedpurImage from "@assets/generated_images/Jamshedpur_city_destination_b56e8b29.png";
import puriImage from "@assets/generated_images/Puri_temple_destination_e944437c.png";
import shantiniketanImage from "@assets/generated_images/Shantiniketan_destination_dec6927c.png";
import mandarmaniImage from "@assets/generated_images/Mandarmani_beach_destination_10044872.png";

const destinations = [
  {
    from: "Kolkata",
    to: "Digha",
    distance: "185 km",
    duration: "4 hr",
    price: "₹2,999",
    image: dighaImage,
    description: "Beautiful beach destination perfect for a weekend getaway",
  },
  {
    from: "Kolkata",
    to: "Jamshedpur",
    distance: "285 km",
    duration: "5.5 hr",
    price: "₹3,999",
    image: jamshedpurImage,
    description: "The Steel City with beautiful parks and lakes",
  },
  {
    from: "Kolkata",
    to: "Puri",
    distance: "500 km",
    duration: "8 hr",
    price: "₹6,999",
    image: puriImage,
    description: "Sacred pilgrimage site with stunning beaches",
  },
  {
    from: "Kolkata",
    to: "Shantiniketan",
    distance: "165 km",
    duration: "3.5 hr",
    price: "₹2,799",
    image: shantiniketanImage,
    description: "Cultural hub and Tagore's home, a serene retreat",
  },
  {
    from: "Kolkata",
    to: "Mandarmani",
    distance: "180 km",
    duration: "4 hr",
    price: "₹3,099",
    image: mandarmaniImage,
    description: "Pristine beach with longest motorable stretch",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our top routes with transparent pricing and comfortable rides
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {destinations.map((destination, index) => (
              <motion.div
                key={`${destination.from}-${destination.to}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
              >
                <Card className="h-full hover-elevate transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-md">
                      <img
                        src={destination.image}
                        alt={destination.to}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-ring text-primary px-3 py-1 rounded-full font-bold text-sm">
                        {destination.price}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {destination.from}
                        </h3>
                        <ArrowRight className="text-ring" size={20} />
                        <h3 className="text-xl font-semibold text-foreground">
                          {destination.to}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {destination.description}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-1 text-foreground">
                          <MapPin size={16} className="text-ring" />
                          <span>{destination.distance}</span>
                        </div>
                        <div className="flex items-center gap-1 text-foreground">
                          <Clock size={16} className="text-ring" />
                          <span>{destination.duration}</span>
                        </div>
                      </div>
                      
                      <Button
                        onClick={() => console.log(`Book ${destination.from} to ${destination.to}`)}
                        className="w-full bg-primary text-primary-foreground"
                        data-testid={`button-book-${destination.to.toLowerCase()}`}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}

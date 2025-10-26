import { motion } from "framer-motion";
import { Users, Briefcase, Luggage } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sedanImage from "@assets/generated_images/Sedan_car_white_background_be2fa7e4.png";
import suvImage from "@assets/generated_images/SUV_car_white_background_c20fc9b0.png";
import hatchbackImage from "@assets/generated_images/Hatchback_car_white_background_3f6ca084.png";

const fleet = [
  {
    name: "Sedan",
    image: sedanImage,
    price: "₹12/km",
    capacity: "4 Passengers",
    luggage: "2 Bags",
    features: ["AC", "GPS", "Music System"],
    description: "Perfect for business trips and small families",
  },
  {
    name: "SUV",
    image: suvImage,
    price: "₹18/km",
    capacity: "6-7 Passengers",
    luggage: "4 Bags",
    features: ["AC", "GPS", "Premium Sound"],
    description: "Ideal for family outings and group travel",
  },
  {
    name: "Hatchback",
    image: hatchbackImage,
    price: "₹10/km",
    capacity: "4 Passengers",
    luggage: "2 Bags",
    features: ["AC", "GPS", "Comfortable"],
    description: "Budget-friendly option for city travel",
  },
];

export default function Fleet() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of well-maintained vehicles for a comfortable journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] mb-4 bg-background rounded-md overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">
                    {vehicle.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{vehicle.description}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Users size={16} className="text-ring" />
                      <span className="text-foreground">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Luggage size={16} className="text-ring" />
                      <span className="text-foreground">{vehicle.luggage}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-ring/10 text-ring rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-ring">{vehicle.price}</p>
                    </div>
                    <Button
                      onClick={() => console.log(`Book ${vehicle.name}`)}
                      className="bg-primary text-primary-foreground"
                      data-testid={`button-book-${vehicle.name.toLowerCase()}`}
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
    </section>
  );
}

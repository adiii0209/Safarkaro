import { motion } from "framer-motion";
import { Plane, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Reliable and punctual airport pickup and drop services. Professional drivers ensure you never miss your flight.",
    features: ["On-time pickup", "Flight tracking", "Meet & greet service"],
  },
  {
    icon: MapPin,
    title: "Outstation Cabs",
    description: "Comfortable long-distance travel to your favorite destinations. Explore new places with our well-maintained fleet.",
    features: ["Flexible packages", "Experienced drivers", "Multiple stops allowed"],
  },
  {
    icon: Clock,
    title: "Local Rentals",
    description: "Hourly rentals for city travel, meetings, shopping, or sightseeing. Pay only for the time you use.",
    features: ["Flexible hours", "City tours", "Business meetings"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of premium cab services tailored to your travel needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="w-16 h-16 rounded-full bg-ring/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-ring" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-ring" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => console.log(`Learn more about ${service.title}`)}
                    data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

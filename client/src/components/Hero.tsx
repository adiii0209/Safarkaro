import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@assets/generated_images/Hero_section_highway_sunset_a6bcd449.png";

export default function Hero() {
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passengers: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", { tripType, ...formData });
  };

  return (
    <section id="hero" className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium cab on highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Your Journey, Our Priority
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Premium cab services for every destination
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background/95 backdrop-blur-md rounded-lg shadow-2xl p-6 md:p-8">
            <div className="flex gap-4 mb-6">
              <Button
                variant={tripType === "one-way" ? "default" : "outline"}
                onClick={() => setTripType("one-way")}
                className={tripType === "one-way" ? "bg-ring text-primary hover:bg-ring/90 border-0" : ""}
                data-testid="button-one-way"
              >
                One Way
              </Button>
              <Button
                variant={tripType === "round-trip" ? "default" : "outline"}
                onClick={() => setTripType("round-trip")}
                className={tripType === "round-trip" ? "bg-ring text-primary hover:bg-ring/90 border-0" : ""}
                data-testid="button-round-trip"
              >
                Round Trip
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Pickup Location"
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  className="pl-10"
                  data-testid="input-pickup"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Drop Location"
                  value={formData.drop}
                  onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                  className="pl-10"
                  data-testid="input-drop"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="pl-10"
                  data-testid="input-date"
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="pl-10"
                  data-testid="input-time"
                />
              </div>

              <div className="relative md:col-span-2">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="number"
                  min="1"
                  max="8"
                  placeholder="Number of Passengers"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="pl-10"
                  data-testid="input-passengers"
                />
              </div>

              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full bg-ring text-primary hover:bg-ring/90 border-0 text-lg h-12"
                  data-testid="button-search-cabs"
                >
                  Search Cabs
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

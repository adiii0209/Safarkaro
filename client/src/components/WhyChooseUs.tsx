import { motion } from "framer-motion";
import { Phone, Users, DollarSign, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your travel needs and emergencies.",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Experienced and verified drivers committed to your safety and comfort.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden charges. What you see is what you pay. Clear and fair pricing.",
  },
  {
    icon: Sparkles,
    title: "Clean Vehicles",
    description: "Well-maintained and sanitized vehicles for a pleasant journey every time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why Choose Safar Karo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best cab booking experience with unmatched service quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-ring flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

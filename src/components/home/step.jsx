import { motion } from "framer-motion";
import {
  Globe,
  ClipboardList,
  Phone,
  ShoppingCart,
  Sprout,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StepCard = ({ number, title, description, icon, index, isEven }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className={`relative ${isEven ? "md:mt-12" : ""}`}
    >
      {/* Connecting Line */}
      {index < 4 && (
        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
      )}

      <Card className="relative z-10 hover:shadow-glow transition-all duration-500 group">
        <CardContent className="p-6 text-center">
          {/* Step Number */}
          <motion.div
            className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {number}
          </motion.div>

          {/* Icon */}
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent flex items-center justify-center text-primary"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>

          <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AdmissionJourney = () => {
  const steps = [
    {
      number: 1,
      title: "Visit Website",
      description:
        "Go to www.kisanedge.com using your phone or computer to explore our services.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      number: 2,
      title: "Explore Plans",
      description:
        "Browse Basic, Standard, and Premium plans with clear pricing and comprehensive benefits.",
      icon: <ClipboardList className="w-8 h-8" />,
    },
    {
      number: 3,
      title: "Request Callback",
      description:
        "Fill a simple form if you need help choosing the right plan for your farming needs.",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      number: 4,
      title: "Purchase Plan",
      description:
        "Pay online securely using Razorpay with UPI, card, or net banking options.",
      icon: <ShoppingCart className="w-8 h-8" />,
    },
    {
      number: 5,
      title: "Start Consulting",
      description:
        "Our agricultural experts will contact you and begin personalized guidance for your crops.",
      icon: <Sprout className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full translate-x-48 translate-y-48" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Path to Smarter Farming: Simple Steps with KisanEdge
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Getting expert agricultural advice has never been easier. Follow
            these straightforward steps to transform your farming practices and
            boost your harvest.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-8 relative">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
              isEven={index % 2 === 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your journey with expert agricultural guidance?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionJourney;

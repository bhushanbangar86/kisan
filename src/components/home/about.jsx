import { motion } from "framer-motion";
import {
  Award,
  Leaf,
  Smartphone,
  MessageCircle,
  MapPin,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="transition-all duration-300"
    >
      <Card className="border-border/50 hover:shadow-card transition-all duration-300 h-full">
        <CardContent className="p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-light flex items-center justify-center text-primary shrink-0">
            {icon}
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Smart Agri Consulting",
      description:
        "Expert help for crop issues, fertilizer use, pest control & planning",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Instant Access",
      description: "Consult via phone, WhatsApp, or web platform anytime",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Local Languages",
      description: "Support in Marathi, Hindi & regional dialects",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Wide Reach",
      description: "5,000+ farmers across 20+ districts trust us",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Affordable Plans",
      description: "Crop-specific solutions with transparent pricing",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Your Partner for Agricultural Prosperity
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Empowering Indian farmers through expert guidance, personalized crop
            plans, and accessible digital tools for sustainable growth.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
              alt="Farmer using technology in field"
              className="w-full rounded-3xl shadow-card"
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-background rounded-2xl p-4 shadow-card border"
            >
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold text-foreground">
                    DPIIT Recognized
                  </div>
                  <div className="text-muted-foreground">Agri-tech Startup</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      DPIIT-recognized agri-tech startup
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      From SGBAU, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      index={index}
                    />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-6 text-center"
                >
                  <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300">
                    Learn More About Our Mission
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

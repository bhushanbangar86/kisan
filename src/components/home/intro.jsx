import { motion } from "framer-motion";
import { UserCheck, TrendingUp, PhoneCall, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ icon, title, description, kpi, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="h-full"
    >
      <Card className="bg-background border-border/50 hover:shadow-glow transition-all duration-500 h-full group">
        <CardContent className="p-6 text-center h-full flex flex-col">
          <motion.div
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>

          {kpi && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-2"
            >
              {kpi}
            </motion.div>
          )}

          <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground leading-relaxed flex-grow">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const About = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "5,000+ Farmers Empowered",
      description:
        "Over 5,000 farmers across 20+ districts have seen significant improvements in their yield and income through our expert guidance.",
      kpi: "5,000+",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "30% Average Yield Increase",
      description:
        "Farmers following our scientific guidance and crop-specific plans have reported an average of 30% increase in their crop yield.",
      kpi: "30%",
    },
    {
      icon: <PhoneCall className="w-8 h-8" />,
      title: "24/7 Expert Access",
      description:
        "Get expert agricultural advice anytime, anywhere through our platform. Support available via phone, WhatsApp, and web.",
      kpi: "24/7",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "95% Farmer Satisfaction",
      description:
        "Our services consistently receive high satisfaction ratings from farmers who trust our expertise for their agricultural success.",
      kpi: "95%",
    },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Why Farmers Trust KisanEdge for a Bountiful Future
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            Our commitment to innovation and farmer success drives measurable
            results. Join thousands of successful farmers who are achieving
            extraordinary growth.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              kpi={feature.kpi}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                20+
              </div>
              <div className="text-primary-foreground/70">
                Districts Covered
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                100+
              </div>
              <div className="text-primary-foreground/70">Crop Varieties</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                24x7
              </div>
              <div className="text-primary-foreground/70">
                Support Available
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                ₹50L+
              </div>
              <div className="text-primary-foreground/70">Income Generated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

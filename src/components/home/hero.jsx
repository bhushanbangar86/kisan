import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
// import heroFarmerImage from "@/assets/hero-farmer.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Empowering Indian Farmers
              <br />
              <span className="text-transparent bg-gradient-to-r from-primary to-primary-glow bg-clip-text">
                with Intelligent Agri-Consulting
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Personalized expert guidance, crop-specific plans, and real-time
              insights for a prosperous harvest, accessible right from your
              phone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 group"
              >
                Explore Consulting Plans
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Phone className="mr-2 w-4 h-4" />
                Request a Free Callback
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  5,000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Farmers Helped
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  30%
                </div>
                <div className="text-sm text-muted-foreground">
                  Yield Increase
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">Districts</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="https://up.yimg.com/ib/th/id/OIP.4aRb2nNfDroAQ_MoXzP_dQHaE8?pid=Api&rs=1&c=1&qlt=95&w=172&h=114"
                alt="Happy Indian farmer with smartphone in green field"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-card border-4 border-background"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow rounded-full opacity-30 animate-float"
              style={{ animationDelay: "1s" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const FarmerAvatar = ({ src, name }) => {
  const [hasError, setHasError] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Avatar className="w-16 h-16 border-2 border-primary/20">
      {!hasError ? (
        <AvatarImage src={src} alt={name} onError={() => setHasError(true)} />
      ) : (
        <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
          {initials}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ravi Kumar",
      village: "Madhopur, Maharashtra",
      quote:
        "KisanEdge helped me understand how to treat soil acidity on my farm. After applying the expert's advice, my soybean yield increased by over 30%.",
      image: "/farmers/ravi.jpg",
    },
    {
      name: "Sita Devi",
      village: "Rampur, Maharashtra",
      quote:
        "The consultant gave me a step-by-step plan for crop rotation. I saw fewer pests and better output. My family's income doubled in one season.",
      image: "/farmers/sita.jpg",
    },
    {
      name: "Amit Singh",
      village: "Bhagalpur, Maharashtra",
      quote:
        "My sugarcane crops were struggling. KisanEdge helped me switch to the right treatment. My crops are now healthy and costs are lower.",
      image: "/farmers/amit.jpg",
    },
    {
      name: "Meena Patel",
      village: "Sitapur, Maharashtra",
      quote:
        "I used the Request Callback feature. They helped me choose the right fertilizer plan. Everything was simple and effective.",
      image: "/farmers/meena.jpg",
    },
    {
      name: "Dinesh Yadav",
      village: "Barabanki, Maharashtra",
      quote:
        "I wanted to try organic farming. The KisanEdge expert gave me a full plan. Now I sell my vegetables at 40% higher rates.",
      image: "/farmers/dinesh.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Voices of Success: Real Farmers, Real Results
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hear directly from the farmers whose lives and livelihoods have been
            positively transformed by KisanEdge's expert agricultural guidance.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-glow border-border/50">
              <CardContent className="p-8 md:p-12">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mb-6"
                >
                  <Quote className="w-12 h-12 text-primary opacity-60" />
                </motion.div>

                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl text-card-foreground leading-relaxed mb-8 italic"
                >
                  "{testimonials[currentIndex].quote}"
                </motion.blockquote>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <FarmerAvatar
                    src={testimonials[currentIndex].image}
                    name={testimonials[currentIndex].name}
                  />
                  <div>
                    <div className="font-semibold text-lg text-card-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].village}
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                4.9/5
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                500+
              </div>
              <div className="text-muted-foreground">Success Stories</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                98%
              </div>
              <div className="text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

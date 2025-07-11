'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  Trophy,
  Target,
  CheckCircle,
  Phone,
  Star,
  Globe,
  Award,
  Sparkles,
  Heart,
  Shield,
  MapPin
} from "lucide-react";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Event services data with REAL event photos
  const services = [
    {
      id: "01",
      title: "Corporate Events",
      description: "Professional conferences, product launches, and business meetings that leave lasting impressions and drive meaningful connections.",
      icon: Target,
      gradient: "from-[#F9A625] to-[#2A3959]",
      features: ["Conference Planning", "Product Launches", "Team Building", "Award Ceremonies"],
      stats: { events: "150+", clients: "45+" },
      image: "/assets/images/services/DSC01980-scaled-1.jpg"
    },
    {
      id: "02", 
      title: "Celebrations",
      description: "Milestone celebrations, festivals, and special occasions that bring people together and create unforgettable memories.",
      icon: Sparkles,
      gradient: "from-[#2A3959] to-[#F9A625]",
      features: ["Birthday Parties", "Anniversaries", "Festivals", "Milestone Events"],
      stats: { events: "200+", clients: "60+" },
      image: "/assets/images/services/DSC01901-scaled-1.jpg"
    },
    {
      id: "03",
      title: "Inaugurations",
      description: "Grand openings, ribbon cuttings, and ceremonial events that mark new beginnings with style and significance.",
      icon: Award,
      gradient: "from-[#F9A625] to-[#2A3959]",
      features: ["Grand Openings", "Ribbon Cuttings", "Launch Events", "VIP Management"],
      stats: { events: "75+", clients: "30+" },
      image: "/assets/images/services/DSC01878-scaled-1.jpg"
    },
    {
      id: "04",
      title: "Hybrid Events",
      description: "Seamlessly blending physical and virtual experiences to reach audiences everywhere, anywhere, anytime.",
      icon: Globe,
      gradient: "from-[#2A3959] to-[#F9A625]",
      features: ["Live Streaming", "Virtual Platforms", "Interactive Tech", "Global Reach"],
      stats: { events: "100+", clients: "25+" },
      image: "/assets/images/services/DSC02449-scaled-1.jpg"
    },
    {
      id: "05",
      title: "Wedding Planning",
      description: "Intimate ceremonies to grand celebrations, we craft weddings that reflect your unique love story and cultural traditions.",
      icon: Heart,
      gradient: "from-[#F9A625] to-[#2A3959]",
      features: ["Ceremony Planning", "Reception Design", "Vendor Coordination", "Cultural Events"],
      stats: { events: "80+", clients: "80+" },
      image: "/assets/images/services/2B6A1363-scaled-1.jpg"
    },
    {
      id: "06",
      title: "Cultural Events",
      description: "Festivals, performances, and cultural celebrations that honor traditions while creating modern experiences.",
      icon: Star,
      gradient: "from-[#2A3959] to-[#F9A625]",
      features: ["Cultural Festivals", "Art Events", "Performances", "Community Gatherings"],
      stats: { events: "120+", clients: "40+" },
      image: "/assets/images/services/DSC01696-scaled-1.jpg"
    }
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: "Passionate Storytelling",
      description: "Every event tells a story. We craft experiences that resonate emotionally and create lasting memories."
    },
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "12+ years of experience in Bangalore's event industry with a proven track record of excellence."
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Award-winning creative team that transforms visions into extraordinary reality."
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Dedicated account management with personalized attention to every detail of your event."
    }
  ];

  const teamHighlights = [
    { 
      name: "Prakash A Vaswani", 
      position: "Director – Client Relations & Strategic Initiatives",
      expertise: "Strategic Planning",
      image: "/assets/images/team/team-1.jpg"
    },
    { 
      name: "Vinay Kukreja",  
      position: "Director – Production, Finance & Operations",
      expertise: "Operations Excellence",
      image: "/assets/images/team/team-2.jpg"
    },
    { 
      name: "Hasan Peer H C", 
      position: "Creative Director",
      expertise: "Creative Vision",
      image: "/assets/images/team/team-3.jpg"
    },
    { 
      name: "Naveen Abraham A", 
      position: "Head - Operations",
      expertise: "Execution Mastery",
      image: "/assets/images/team/team-4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Clean Video Hero Section - Mobile Optimized */}
      <section ref={heroRef} className="relative min-h-[100vh] sm:min-h-[100vh] lg:min-h-[120vh] flex items-center justify-center overflow-hidden">
        {/* Full Video Background - Mobile Optimized */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/images/home/01-01.png"
            preload="metadata"
            style={{
              // Optimize video performance on mobile
              willChange: 'auto',
              backfaceVisibility: 'hidden'
            }}
          >
            <source src="/assets/videos/wm-2025-intro-M2_l2.mp4" type="video/mp4" />
          </video>
          
          {/* Enhanced overlay for better mobile readability */}
          <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
        </div>

        {/* Top Badge - Mobile Optimized */}
        <motion.div 
          className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-10 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Badge className="bg-[#F9A625]/95 text-black border-none text-xs sm:text-sm px-3 sm:px-4 py-2 backdrop-blur-sm font-body shadow-lg mobile-touch-target">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span className="hidden sm:inline">Bangalore&apos;s Premier Event Management</span>
            <span className="sm:hidden">Premier Event Management</span>
          </Badge>
        </motion.div>

        {/* Redesigned Sticky Bottom Bar - Mobile Optimized */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-md border-t border-white/20"
          initial={{ opacity: 0, y: 100 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <div className="max-w-7xl mx-auto mobile-container py-6 sm:py-8">
            
            {/* Main Content Row - Mobile Optimized */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 mb-4 sm:mb-6">
              
              {/* Headline Section - Mobile Typography */}
              <div className="text-center lg:text-left flex-1 max-w-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-[#2A3959] leading-tight mb-3 sm:mb-4 mobile-heading">
                  Extraordinary Events,<br />
                  <span className="text-[#F9A625]">Unforgettable Experiences</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 font-body leading-relaxed mobile-body-text">
                  Premier event management in Bangalore, crafting moments that resonate for a lifetime.
                </p>
              </div>

              {/* CTA Section - Touch Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:flex-col xl:flex-row w-full sm:w-auto">
                <Button 
                  className="btn-primary mobile-touch-target text-base sm:text-lg font-heading px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-102 hover:shadow-2xl min-h-[48px]"
                >
                  Plan Your Event
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="mobile-touch-target border-2 border-[#2A3959] text-[#2A3959] hover:bg-[#2A3959] hover:text-white transition-all duration-300 hover:scale-102 text-base sm:text-lg font-heading px-6 sm:px-8 py-3 sm:py-4 min-h-[48px]"
                >
                  View Portfolio
                </Button>
              </div>

            </div>

            {/* Bottom Info Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200/50">
              
              {/* Key Highlights */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 lg:gap-6 text-sm font-body">
                <div className="flex items-center gap-2 text-[#2A3959]">
                  <div className="w-2 h-2 bg-[#F9A625] rounded-full"></div>
                  <MapPin className="w-4 h-4 text-[#F9A625]" />
                  <span>Bangalore Based</span>
                </div>
                <div className="flex items-center gap-2 text-[#2A3959]">
                  <div className="w-2 h-2 bg-[#F9A625] rounded-full"></div>
                  <span>12+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-[#2A3959]">
                  <div className="w-2 h-2 bg-[#F9A625] rounded-full"></div>
                  <span>500+ Events Delivered</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-[#F9A625]" />
                  <span>Trusted Partner</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#F9A625]" />
                  <span>Premium Quality</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-32 lg:bottom-40 left-1/2 transform -translate-x-1/2 text-white z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
            <span className="text-xs mt-2 text-white/80">Scroll</span>
          </div>
        </motion.div>
      </section>

      {/* Our Events in Action Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#F9A625]/10 text-[#F9A625] border-[#F9A625]/30 px-6 py-2">
                Our Event Expertise
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-[#2A3959] leading-tight max-w-4xl mx-auto">
                Events That <span className="text-[#F9A625]">Tell Stories</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From intimate gatherings to grand celebrations, we create experiences that connect hearts, 
                inspire minds, and leave lasting impressions in Bangalore and beyond.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={service.id} 
                  variants={fadeInUp} 
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group max-w-md mx-auto w-full"
                  whileHover={{ y: -8 }}
                >
                  {/* Event Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ 
                        backgroundImage: `url(${service.image})`,
                        backgroundColor: '#2A3959' // fallback color
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`} />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Service ID */}
                    <div className="absolute top-6 right-6">
                      <span className="text-white/70 text-2xl font-bold">
                        {service.id}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#2A3959] group-hover:text-[#F9A625] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#F9A625] rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-xl lg:text-2xl font-bold text-[#2A3959]">{service.stats.events}</div>
                        <div className="text-xs text-gray-500">Events</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl lg:text-2xl font-bold text-[#F9A625]">{service.stats.clients}</div>
                        <div className="text-xs text-gray-500">Happy Clients</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#F9A625] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* CTA */}
          <motion.div 
            className="text-center mt-12 lg:mt-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-[#F9A625] hover:bg-[#F9A625]/90 text-black font-semibold px-8 py-4 rounded-full text-lg"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Events Gallery Showcase */}
      <section className="py-16 lg:py-20 bg-[#2A3959]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#F9A625]/20 text-[#F9A625] border-[#F9A625]/30 px-6 py-2">
                Recent Work
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-white leading-tight max-w-4xl mx-auto">
                Events in <span className="text-[#F9A625]">Action</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Take a glimpse into our portfolio of remarkable events across Bangalore
              </p>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { image: "/assets/images/services/DSC01514-scaled-1.jpg", title: "Corporate Conference", category: "Business" },
              { image: "/assets/images/services/2B6A0590-1-scaled-1.jpg", title: "Cultural Celebration", category: "Cultural" },
              { image: "/assets/images/services/DSC04807-1536x1024.jpg", title: "Grand Opening", category: "Inauguration" },
              { image: "/assets/images/services/P__3108-scaled-1.jpg", title: "Wedding Ceremony", category: "Wedding" },
              { image: "/assets/images/services/DSC01247-scaled-1.jpg", title: "Product Launch", category: "Corporate" },
              { image: "/assets/images/services/92A4532-scaled-1.jpg", title: "Festival Event", category: "Cultural" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer max-w-md mx-auto w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm text-[#F9A625] mb-1 font-medium">{item.category}</div>
                  <div className="text-lg font-semibold">{item.title}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12 lg:mt-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Button 
              variant="outline"
              size="lg" 
              className="border-[#F9A625] text-[#F9A625] hover:bg-[#F9A625] hover:text-black px-8 py-4 rounded-full text-lg"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-[#2A3959] leading-tight max-w-4xl mx-auto">
                Why Choose <span className="text-[#F9A625]">White Massif</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto text-center font-body">
                We don&apos;t just plan events; we craft experiences that resonate with your audience and achieve your goals.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
              <motion.div
                key={index}
                variants={fadeInUp}
                  className="text-center group max-w-sm mx-auto w-full"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#F9A625] to-[#2A3959] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#2A3959] group-hover:text-[#F9A625] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {item.description}
                  </p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#2A3959] to-[#1E2A3A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A3959]/90 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="text-white">
              <Badge className="mb-6 glass-dark px-6 py-2 text-amber-400 border-amber-400/20">
                Ready to Start?
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight">
                Let&apos;s Create Something <span className="text-[#F9A625]">Extraordinary</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                From concept to celebration, we handle every detail with precision and creativity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: CheckCircle, title: "Full-Service Planning", desc: "End-to-end event management" },
                  { icon: Users, title: "Expert Team", desc: "12+ years of experience" },
                  { icon: Trophy, title: "Award-Winning", desc: "Recognized excellence" },
                  { icon: Target, title: "Custom Solutions", desc: "Tailored to your vision" }
                ].map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <FeatureIcon className="w-6 h-6 text-[#F9A625] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-white/80 text-sm">{feature.desc}</p>
                    </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#F9A625] hover:bg-[#F9A625]/90 text-black font-heading px-8 py-4 rounded-full text-lg"
                >
                  Start Planning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-[#2A3959] px-8 py-4 rounded-full text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
              </Button>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="grid grid-cols-2 gap-4">
                  {teamHighlights.map((member, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F9A625] to-white rounded-full mx-auto mb-4"></div>
                    <h4 className="font-bold text-white mb-2 text-sm lg:text-base">{member.name}</h4>
                    <p className="text-white/80 text-xs lg:text-sm">{member.position}</p>
                    <span className="text-xs px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full inline-block mt-2">
                            {member.expertise}
                          </span>
                        </div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Spotlight */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-[#2A3959] leading-tight max-w-4xl mx-auto">
                Meet Our <span className="text-[#F9A625]">Expert Team</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto mb-12 font-body leading-relaxed">
                The passionate professionals behind every successful event, bringing years of experience and creative vision to your celebrations.
              </p>
            </motion.div>
              
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
                <Button 
                  size="lg"
                  className="bg-[#F9A625] hover:bg-[#F9A625]/90 text-black px-12 py-6 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-heading"
                >
                Let&apos;s Plan Together
                <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[#2A3959] text-[#2A3959] hover:bg-[#2A3959] hover:text-white px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 font-heading"
                >
                Meet The Team
                <Users className="ml-3 h-6 w-6" />
                </Button>
              </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

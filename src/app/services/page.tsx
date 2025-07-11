'use client';

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { 
  ArrowRight, 
  Sparkles,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Palette,
  Settings,
  Building2,
  PartyPopper,
  Scissors,
  Monitor,
  Church,
  Theater,
  Award,
  Heart,
  Shield
} from "lucide-react";

// Animation variants
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

// Hero Images for Carousel
const heroImages = [
  {
    src: "/assets/images/services/DSC01980-scaled-1.jpg",
    alt: "Corporate conference with professional staging",
    category: "Corporate Events"
  },
  {
    src: "/assets/images/services/92A4532-scaled-1.jpg",
    alt: "Cultural celebration with traditional performances",
    category: "Celebrations"
  },
  {
    src: "/assets/images/services/DSC01878-scaled-1.jpg",
    alt: "Grand inauguration ceremony",
    category: "Inaugurations"
  },
  {
    src: "/assets/images/services/DSC02449-scaled-1.jpg",
    alt: "Hybrid event with virtual integration",
    category: "Hybrid Events"
  },
  {
    src: "/assets/images/services/2B6A1363-scaled-1.jpg",
    alt: "Elegant wedding celebration",
    category: "Wedding Planning"
  },
  {
    src: "/assets/images/services/DSC01696-scaled-1.jpg",
    alt: "Cultural festival with community engagement",
    category: "Cultural Events"
  }
];

// Service Categories for Quick Navigation
const serviceCategories = [
  { id: "corporate-events", name: "Corporate Events", icon: Building2 },
  { id: "celebrations", name: "Celebrations", icon: PartyPopper },
  { id: "inaugurations", name: "Inaugurations", icon: Scissors },
  { id: "hybrid-events", name: "Hybrid Events", icon: Monitor },
  { id: "wedding-planning", name: "Wedding Planning", icon: Church },
  { id: "cultural-events", name: "Cultural Events", icon: Theater }
];

// Detailed Service Showcases
const serviceShowcases = [
  {
    id: "corporate-events",
    title: "Corporate Events & Conferences",
    description: "Professional events that drive business results and strengthen team relationships. From strategic planning to flawless execution, we ensure your corporate message resonates.",
    mainImage: "/assets/images/services/DSC01980-scaled-1.jpg",
    imageCaption: "Annual corporate conference for 500+ attendees",
    gallery: [
      "/assets/images/services/DSC01980-scaled-1.jpg",
      "/assets/images/services/DSC_1942-1536x1025.jpg",
      "/assets/images/services/DSC04807-1536x1024.jpg",
      "/assets/images/services/DSC01247-scaled-1.jpg"
    ],
    features: [
      {
        title: "Strategic Planning",
        description: "Complete event strategy aligned with business objectives and ROI goals"
      },
      {
        title: "Professional Production",
        description: "High-quality AV, staging, and technical production for seamless presentations"
      },
      {
        title: "Attendee Management",
        description: "Registration, check-in, networking facilitation, and experience management"
      },
      {
        title: "Brand Integration",
        description: "Seamless brand messaging and visual identity throughout the event"
      }
    ],
    stats: {
      events: "150+",
      satisfaction: "98%",
      clients: "50+"
    }
  },
  {
    id: "celebrations",
    title: "Celebrations & Festivals",
    description: "Joyful celebrations that bring people together and create lasting memories. We honor traditions while adding contemporary flair to make every celebration extraordinary.",
    mainImage: "/assets/images/services/92A4532-scaled-1.jpg",
    imageCaption: "Cultural festival with traditional performances and modern staging",
    gallery: [
      "/assets/images/services/92A4532-scaled-1.jpg",
      "/assets/images/services/P__2970-scaled-1.jpg",
      "/assets/images/services/2B6A0590-1-scaled-1.jpg",
      "/assets/images/services/DSC01901-scaled-1.jpg"
    ],
    features: [
      {
        title: "Cultural Sensitivity",
        description: "Respectful planning that honors traditions, customs, and cultural significance"
      },
      {
        title: "Entertainment Curation",
        description: "Diverse programming including music, dance, performances, and interactive experiences"
      },
      {
        title: "Logistics Management",
        description: "Crowd management, security coordination, and vendor management for large gatherings"
      },
      {
        title: "Community Engagement",
        description: "Local partnerships and community involvement for authentic celebrations"
      }
    ],
    stats: {
      events: "200+",
      satisfaction: "99%",
      clients: "75+"
    }
  },
  {
    id: "inaugurations",
    title: "Product Launches & Inaugurations",
    description: "Grand openings and product launches that make a statement. We create memorable moments that generate buzz and establish your brand presence in the market.",
    mainImage: "/assets/images/services/DSC01878-scaled-1.jpg",
    imageCaption: "Grand inauguration with VIP guests and media coverage",
    gallery: [
      "/assets/images/services/DSC01878-scaled-1.jpg",
      "/assets/images/services/DJI_0111-scaled.jpg",
      "/assets/images/services/DSC01514-scaled-1.jpg",
      "/assets/images/services/2B6A0384-scaled-1.jpg"
    ],
    features: [
      {
        title: "Launch Strategy",
        description: "Comprehensive launch planning with market impact and media coverage goals"
      },
      {
        title: "VIP Experience",
        description: "Exclusive experiences for dignitaries, stakeholders, and key guests"
      },
      {
        title: "Media Management",
        description: "Press coordination, photo opportunities, and media kit distribution"
      },
      {
        title: "Ceremonial Elements",
        description: "Traditional ceremonies, ribbon cutting, and symbolic moments"
      }
    ],
    stats: {
      events: "80+",
      satisfaction: "97%",
      clients: "40+"
    }
  }
];



// End-to-End Services
const endToEndServices = [
  {
    title: "Venue Sourcing",
    description: "Choosing the perfect venue that aligns with your event goals, budget, and guest experience expectations.",
    icon: MapPin
  },
  {
    title: "Creative Conceptualization", 
    description: "From broader vision to finest details, we craft inspiring concepts that blend creativity with precision execution.",
    icon: Palette
  },
  {
    title: "Production & Technical",
    description: "Complete technical production including lighting, sound, staging, AV equipment, and live streaming capabilities.",
    icon: Settings
  }
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section with Event-Focused Design - Mobile Optimized */}
      <section ref={heroRef} className="relative min-h-[100vh] sm:min-h-screen flex items-center overflow-hidden">
        {/* Background Image Carousel - Mobile Optimized */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Enhanced gradient overlay for better mobile readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70 sm:from-black/70 sm:via-black/50 sm:to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Main Hero Content - Mobile Optimized */}
        <div className="relative z-20 w-full mobile-safe-area">
          <div className="max-w-7xl mx-auto mobile-container">
            <div className="flex items-center justify-center min-h-[80vh] py-8 sm:py-0">
              
              {/* Centered Content - Mobile Typography */}
              <div className="text-white text-center max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-display leading-tight mb-6 sm:mb-8 mobile-heading">
                    <span className="text-white">Crafting</span>
                    <span className="text-[#F9A625] block">Unforgettable</span>
                    <span className="text-white">Experiences</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto mobile-body-text px-4 sm:px-0">
                    From corporate conferences to dream weddings, we transform your vision into extraordinary events that leave lasting impressions.
                  </p>

                  {/* Event Type Badges - Mobile Optimized */}
                  <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                    {['Corporate Events', 'Weddings', 'Celebrations', 'Product Launches'].map((type, index) => (
                      <motion.div
                        key={type}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="bg-white/20 backdrop-blur-sm text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium border border-white/30 hover:bg-white/30 transition-all duration-300 mobile-touch-target"
                      >
                        {type}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons - Touch Optimized */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
                    <Button 
                      className="btn-primary mobile-touch-target text-base sm:text-lg lg:text-xl font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-102 min-h-[48px]"
                    >
                      Plan Your Event
                      <Sparkles className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="mobile-touch-target border-2 border-white text-white hover:bg-white hover:text-[#2A3959] font-semibold px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg lg:text-xl rounded-2xl transition-all duration-300 hover:scale-102 min-h-[48px]"
                    >
                      <Phone className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                      Call Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Navigation - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-30">
          <div className="flex space-x-2">
            {heroImages.map((image, index) => (
              <button
                key={index}
                className={`mobile-touch-target w-4 h-4 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentImage ? 'bg-[#F9A625] scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`View ${image.category} image`}
              />
            ))}
          </div>
        </div>

        {/* Event Category Indicator - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-30">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
          >
            {heroImages[currentImage].category}
          </motion.div>
        </div>
      </section>

      {/* Event Services Categories - Mobile Optimized */}
      <section className="mobile-section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto mobile-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="bg-[#F9A625]/10 text-[#F9A625] border-[#F9A625]/30 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold mb-4 sm:mb-6 mobile-touch-target">
              🎭 Event Specializations
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-[#2A3959] mb-4 sm:mb-6 leading-tight mobile-heading">
              Every Event Type,
              <span className="text-[#F9A625] block">Perfectly Executed</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mobile-body-text">
              From intimate gatherings to grand celebrations, we specialize in creating memorable experiences across all event categories
            </p>
          </motion.div>

          <div className="mobile-grid">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  className="group relative mobile-card bg-white shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#F9A625]/30 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:bg-gradient-to-br hover:from-white hover:to-[#F9A625]/5 overflow-hidden mobile-animation"
                  onClick={() => scrollToService(category.id)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#F9A625]/10 to-transparent rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon Container - Mobile Optimized */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#F9A625]/20 to-[#F9A625]/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:from-[#F9A625]/30 group-hover:to-[#F9A625]/20 transition-all duration-500 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-[#F9A625] group-hover:scale-110 transition-all duration-300" />
                    </div>
                    
                    {/* Content - Mobile Typography */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#2A3959] mb-2 sm:mb-3 group-hover:text-[#F9A625] transition-colors duration-300 mobile-heading">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4 mobile-body-text">
                      Professional {category.name.toLowerCase()} planning and execution with attention to every detail
                    </p>
                    
                    {/* CTA - Touch Optimized */}
                    <div className="flex items-center justify-center text-[#F9A625] text-sm font-medium group-hover:text-[#2A3959] transition-colors duration-300 mobile-touch-target py-2">
                      <span>Explore Services</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Bottom CTA - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <div className="mobile-card bg-gradient-to-r from-[#2A3959] to-[#1a2332] max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 mobile-heading">Don&apos;t See Your Event Type?</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 mobile-body-text">We customize our services for any occasion. Let&apos;s discuss your unique requirements.</p>
              <Button className="btn-primary mobile-touch-target text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl min-h-[48px]">
                Discuss Custom Event
                <Phone className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Showcases - Mobile Optimized */}
      {serviceShowcases.map((service, index) => (
        <section key={service.id} id={service.id} className="mobile-section-padding">
          <div className="max-w-7xl mx-auto mobile-container">
            <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content Side - Mobile First */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`order-2 lg:order-none ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <Badge className="mb-4 sm:mb-6 bg-[#F9A625]/10 text-[#F9A625] border-[#F9A625]/20 font-body px-3 sm:px-4 py-2 text-sm mobile-touch-target">
                  {service.title.split(' ')[0]} {service.title.split(' ')[1]}
                </Badge>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4 sm:mb-6 text-[#2A3959] leading-tight mobile-heading">
                  {service.title}
                </h2>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 font-body leading-relaxed mobile-body-text">
                  {service.description}
                </p>
                
                {/* Key Features - Mobile Optimized */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F9A625] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-heading text-[#2A3959] mb-1 text-sm sm:text-base mobile-heading">{feature.title}</h4>
                        <p className="text-gray-600 font-body text-xs sm:text-sm mobile-body-text">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Success Metrics - Mobile Optimized */}
                <div className="mobile-card bg-gray-50 mb-6 sm:mb-8">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-display text-[#F9A625] mb-1">{service.stats.events}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-body">Events</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-display text-[#F9A625] mb-1">{service.stats.satisfaction}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-body">Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-display text-[#F9A625] mb-1">{service.stats.clients}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-body">Happy Clients</div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="btn-primary mobile-touch-target text-black font-heading px-6 sm:px-8 py-3 sm:py-4 rounded-full min-h-[48px] w-full sm:w-auto"
                >
                  Learn More About {service.title.split(' ')[0]} {service.title.split(' ')[1]}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </motion.div>
              
              {/* Visual Side - Mobile Optimized */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`order-1 lg:order-none ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                {/* Main Service Image - Mobile Responsive */}
                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl mb-4 sm:mb-6">
                  <Image 
                    src={service.mainImage} 
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <p className="text-xs sm:text-sm opacity-90 font-body">{service.imageCaption}</p>
                  </div>
                </div>
                
                {/* Gallery Grid - Mobile Responsive */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {service.gallery.slice(1, 4).map((image, idx) => (
                    <div key={idx} className="relative rounded-lg overflow-hidden mobile-touch-target">
                      <Image
                        src={image}
                        alt={`${service.title} example ${idx + 1}`}
                        width={200}
                        height={150}
                        className="w-full h-20 sm:h-24 object-cover cursor-pointer hover:opacity-80 transition-opacity mobile-animation"
                        sizes="(max-width: 768px) 33vw, 16vw"
                      />
                    </div>
                  ))}
                </div>
                
                <button className="mt-3 sm:mt-4 text-[#F9A625] hover:text-[#F9A625]/80 font-body text-sm transition-colors mobile-touch-target py-2">
                  View All Photos ({service.gallery.length})
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Enhanced Process Timeline - Mobile Optimized */}
      <section className="mobile-section-padding bg-gradient-to-br from-[#2A3959] via-[#1a2332] to-[#0f1419]">
        <div className="max-w-7xl mx-auto mobile-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="bg-[#F9A625]/20 text-[#F9A625] border-[#F9A625]/30 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 mobile-touch-target">
              🚀 Our Process
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-white mb-4 sm:mb-6 mobile-heading">
              Your Event Journey
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mobile-body-text">
              From initial consultation to final execution, we guide you through every step with precision and care
            </p>
          </motion.div>

          <div className="mobile-grid md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery & Consultation",
                description: "We start by understanding your vision, goals, and requirements through detailed consultations",
                icon: "💡",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02", 
                title: "Strategic Planning",
                description: "Our team creates a comprehensive event strategy with timelines, budgets, and creative concepts",
                icon: "📋",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Execution & Coordination",
                description: "We handle all logistics, vendor management, and on-site coordination with military precision",
                icon: "⚡",
                color: "from-orange-500 to-red-500"
              },
              {
                step: "04",
                title: "Success & Follow-up",
                description: "Post-event analysis, feedback collection, and maintaining relationships for future events",
                icon: "🎯",
                color: "from-green-500 to-emerald-500"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Connection Line - Only Desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-[#F9A625] to-transparent z-10"></div>
                )}
                
                <div className="mobile-card bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#F9A625]/50 transition-all duration-300 hover:bg-white/15 group-hover:scale-102 sm:group-hover:scale-105 h-full mobile-animation">
                  <div className="text-center">
                    {/* Step Number - Mobile Responsive */}
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg sm:text-2xl font-bold text-white">{process.step}</span>
                    </div>
                    
                    {/* Process Icon - Mobile Sized */}
                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{process.icon}</div>
                    
                    {/* Title - Mobile Typography */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#F9A625] transition-colors duration-300 mobile-heading">
                      {process.title}
                    </h3>
                    
                    {/* Description - Mobile Typography */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mobile-body-text">
                      {process.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <div className="mobile-card bg-gradient-to-r from-[#F9A625] to-[#e8951e] max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 mobile-heading">Ready to Get Started?</h3>
              <p className="text-white/90 mb-4 sm:mb-6 mobile-body-text">Let&apos;s discuss your event and create something extraordinary together</p>
              <Button className="bg-white text-[#F9A625] hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl mobile-touch-target min-h-[48px] w-full sm:w-auto">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* End-to-End Services - Mobile Optimized */}
      <section className="mobile-section-padding">
        <div className="max-w-7xl mx-auto mobile-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 sm:mb-6 bg-[#F9A625]/10 text-[#F9A625] border-[#F9A625]/20 font-body px-3 sm:px-4 py-2 text-sm mobile-touch-target">
                Complete Solutions
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-4 sm:mb-6 text-[#2A3959] mobile-heading">
                End-to-End Event Management
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-body mobile-body-text">
                Every aspect of your event handled with precision and care
              </p>
            </motion.div>
          </motion.div>

          <div className="mobile-grid md:grid-cols-2 lg:grid-cols-3">
            {endToEndServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mobile-card bg-white shadow-lg hover:shadow-xl transition-all duration-300 group mobile-animation"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#F9A625]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#F9A625]/20 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#F9A625]" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading mb-3 sm:mb-4 text-[#2A3959] group-hover:text-[#F9A625] transition-colors mobile-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed text-sm sm:text-base mobile-body-text">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Enhanced Footer CTA Section - Mobile Optimized */}
      <section className="mobile-section-padding bg-gradient-to-br from-[#2A3959] via-[#1a2332] to-[#0f1419]">
        <div className="max-w-7xl mx-auto mobile-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mobile-card bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="flex -space-x-2 sm:-space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#F9A625] to-[#e8951e] rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-white mb-4 sm:mb-6 mobile-heading">
                  Ready to Create Your
                  <span className="text-[#F9A625] block">Perfect Event?</span>
                </h2>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed mobile-body-text">
                  Join hundreds of satisfied clients who have trusted us with their most important moments. 
                  Let&apos;s transform your vision into an unforgettable reality.
                </p>

                {/* Enhanced Contact Options - Mobile Optimized */}
                <div className="mobile-grid md:grid-cols-3 mb-8 sm:mb-12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mobile-card bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#F9A625]/50 transition-all duration-300 mobile-animation"
                  >
                    <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-[#F9A625] mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 mobile-heading">Call Us Now</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 mobile-body-text">Speak directly with our event specialists</p>
                    <Button variant="outline" className="mobile-touch-target border-white/30 text-white hover:bg-white/10 text-sm sm:text-base min-h-[44px] w-full sm:w-auto">
                      +1 (555) 123-4567
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mobile-card bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#F9A625]/50 transition-all duration-300 mobile-animation"
                  >
                    <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-[#F9A625] mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 mobile-heading">Email Us</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 mobile-body-text">Get detailed proposals and answers</p>
                    <Button variant="outline" className="mobile-touch-target border-white/30 text-white hover:bg-white/10 text-sm sm:text-base min-h-[44px] w-full sm:w-auto">
                      hello@masifevents.com
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mobile-card bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#F9A625]/50 transition-all duration-300 mobile-animation"
                  >
                    <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-[#F9A625] mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 mobile-heading">Schedule Meeting</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 mobile-body-text">Book a free consultation session</p>
                    <Button variant="outline" className="mobile-touch-target border-white/30 text-white hover:bg-white/10 text-sm sm:text-base min-h-[44px] w-full sm:w-auto">
                      Book Now
                    </Button>
                  </motion.div>
                </div>

                {/* Primary CTA - Mobile Optimized */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    className="btn-primary mobile-touch-target text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg transition-all duration-300 hover:scale-102 hover:shadow-2xl min-h-[48px] w-full sm:w-auto"
                  >
                    Get Your Free Consultation
                    <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                  
                  <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm text-center px-4 sm:px-0">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Free consultation • No commitment • Quick response</span>
                  </div>
                </div>

                {/* Trust Indicators - Mobile Optimized */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                      <span className="text-xs sm:text-sm">Fully Insured & Licensed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      <span className="text-xs sm:text-sm">Award-Winning Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                      <span className="text-xs sm:text-sm">99% Client Satisfaction</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
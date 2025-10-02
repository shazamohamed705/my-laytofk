// Home hero section with animated background
import bgImage from '../../assets/LA2.png'
import groupImg from '../../assets/Group.png'
import LA6 from "../../assets/LA6.png"
import image1 from '../../assets/image 1.png'
import image2 from '../../assets/image 2.png'
import image3 from '../../assets/imag 3.png'
import rectangle23819 from '../../assets/Rectangle 23819.png'
import newLogo from '../../assets/NEW LOGO FINAL.png'
import vectorImg from '../../assets/Vector.png'
import { SiSpotify, SiAdobe, SiAmazon, SiZoom, SiSlack, SiZapier } from 'react-icons/si'
import { FaBrush, FaBullhorn, FaShareAlt, FaPenNib, FaChartLine, FaUsersCog, FaPuzzlePiece, FaBolt, FaBoxes, FaBars, FaGlobe, FaStar, FaChevronLeft, FaChevronRight, FaPhone, FaEnvelope, FaFax, FaMapMarkerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useCallback, useMemo, useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function DecorativeSquares() {
  const squares = [
    { top: '10%', right: '12%', size: 14, delay: '0s' },
    { top: '22%', left: '18%', size: 10, delay: '0.8s' },
    { top: '35%', right: '28%', size: 12, delay: '0.3s' },
    { top: '52%', left: '10%', size: 16, delay: '1.2s' },
    { top: '64%', right: '18%', size: 11, delay: '0.6s' },
    { top: '70%', left: '26%', size: 9, delay: '1.6s' },
    { top: '18%', left: '40%', size: 8, delay: '1.9s' },
    { top: '78%', right: '36%', size: 13, delay: '0.4s' },
  ]


  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out">
      {squares.map((sq, idx) => (
        <div
          key={idx}
          className="absolute rounded-md bg-white/20 ring-1 ring-white/25 backdrop-blur-[1px] animate-grid-float [will-change:transform] transition-all duration-300 ease-out filter group-hover:drop-shadow-[0_0_18px_rgba(99,102,241,0.65)]"
          style={{
            top: sq.top,
            right: sq.right,
            left: sq.left,
            width: `${sq.size}px`,
            height: `${sq.size}px`,
            animationDelay: sq.delay,
            animationDuration: '6.5s',
          }}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate();
  
  // Memoized plans array for better performance
  const plans = useMemo(() => [1, 2, 3, 4, 5], []);

  // Filter categories with correct icons - "الكل" first on the right
  const categories = useMemo(() => [
    { id: "web", label: "الويب", icon: <FaGlobe className="w-4 h-4" /> },
    { id: "social", label: "سوشيال ميديا", icon: <FaBoxes className="w-4 h-4" /> },
    { id: "apps", label: "التطبيقات", icon: <FaBoxes className="w-4 h-4" /> },
    { id: "all", label: "الكل", icon: <FaBars className="w-4 h-4" /> },
  ], []);

  // Memoized projects data to prevent unnecessary re-renders
  const projects = useMemo(() => [
    { 
      id: 1, 
      title: "موقع إلكتروني", 
      image: image1, 
      link: "/project/website-1",
      description: "موقع إلكتروني متكامل",
      category: "web"
    },
    { 
      id: 2, 
      title: "تطبيق موبايل", 
      image: image2, 
      link: "/project/mobile-app-1",
      description: "تطبيق موبايل متقدم",
      category: "apps"
    },
    { 
      id: 3, 
      title: "حملة سوشيال ميديا", 
      image: image3, 
      link: "/project/social-campaign-1",
      description: "حملة تسويقية على السوشيال ميديا",
      category: "social"
    },
    { 
      id: 4, 
      title: "تطبيق ويب", 
      image: rectangle23819, 
      link: "/project/web-app-1",
      description: "تطبيق ويب تفاعلي",
      category: "web"
    },
    { 
      id: 5, 
      title: "تطبيق أندرويد", 
      image: image1, 
      link: "/project/android-app-1",
      description: "تطبيق أندرويد متخصص",
      category: "apps"
    },
    { 
      id: 6, 
      title: "حملة إنستغرام", 
      image: image2, 
      link: "/project/instagram-campaign-1",
      description: "حملة تسويقية على إنستغرام",
      category: "social"
    },
    { 
      id: 7, 
      title: "متجر إلكتروني", 
      image: image3, 
      link: "/project/ecommerce-1",
      description: "متجر إلكتروني متكامل",
      category: "web"
    },
    { 
      id: 8, 
      title: "تطبيق iOS", 
      image: rectangle23819, 
      link: "/project/ios-app-1",
      description: "تطبيق iOS احترافي",
      category: "apps"
    },
  ], []);

  // Active filter state - default to "all"
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Continuous rotation state for partners
  const [rotationPosition, setRotationPosition] = useState(0);
  const sliderRef = useRef(null);
  
  // Memoized partners data for auto slider
  const partners = useMemo(() => [
    { id: 1, name: "Spotify", icon: <SiSpotify className="text-white" size={28} /> },
    { id: 2, name: "Slack", icon: <SiSlack className="text-white" size={28} /> },
    { id: 3, name: "Adobe", icon: <SiAdobe className="text-white" size={28} /> },
    { id: 4, name: "Zapier", icon: <SiZapier className="text-white" size={28} /> },
    { id: 5, name: "Zoom", icon: <SiZoom className="text-white" size={28} /> },
    { id: 6, name: "Amazon", icon: <SiAmazon className="text-white" size={28} /> },
  ], []);
  
  // Optimized filter handler with debouncing and smooth transitions
  const handleFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
  }, []);

  // Memoized filtered projects for better performance
  const filteredProjects = useMemo(() => {
    return projects.filter(project => 
      activeFilter === "all" || project.category === activeFilter
    ).slice(0, 8);
  }, [projects, activeFilter]);

  // Memoized testimonials data for better performance
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: "عبدالرحمن الزيات",
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4,
    },
    {
      id: 2,
      name: "اسراء عبدالغني",
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 4,
    },
    {
      id: 3,
      name: "مصطفى السيد",
      text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4,
    },
  ], []);

  const [active, setActive] = useState(1);

  // Optimized navigation functions with useCallback
  const next = useCallback(() => setActive((prev) => (prev + 1) % testimonials.length), [testimonials.length]);
  const prev = useCallback(() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length), [testimonials.length]);

  // Contact form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    countryCode: '020',
    subject: '',
    category: '',
    message: ''
  });


  const [isSubmitting, setIsSubmitting] = useState(false);

  // Optimized input change handler
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Removed test function for better performance

  // Optimized form submit handler
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        countryCode: '020',
        subject: '',
        category: '',
        message: ''
      });
      
      alert('تم إرسال الرسالة بنجاح!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);


  // Optimized navigation handler with useCallback
  const handleProjectClick = useCallback((projectLink) => {
    navigate(projectLink);
  }, [navigate]);

  // Optimized keyboard handler
  const handleKeyDown = useCallback((e, projectLink) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleProjectClick(projectLink);
    }
  }, [handleProjectClick]);

  // Optimized continuous rotation effect for partners - better performance
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    let animationId;
    let lastTime = 0;
    const targetFPS = isMobile ? 20 : 30; // Even lower FPS for better mobile performance
    const frameInterval = 1000 / targetFPS;
    
    // Pause animation when page is not visible (better performance)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      } else {
        if (!animationId) {
          animationId = requestAnimationFrame(animate);
        }
      }
    };
    
    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        setRotationPosition((prevPosition) => {
          const speed = isMobile ? 0.3 : 0.8; // Much slower for better performance
          return prevPosition + speed;
        });
        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationId = requestAnimationFrame(animate);
    
    // Listen for visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Scroll to section if URL has a hash (works when coming from any page)
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          // Use native smooth scroll; offset handled via scroll-margin-top CSS
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // run on mount
    scrollToHash();

    // run on hash changes within the same page
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  
  return (
    <main id="hero" className="pt-[56px] min-h-dvh relative overflow-hidden pb-20">
      {/* Removed patterned background to keep full black background */}

      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-600/20 blur-3xl animate-slow-spin"></div>
      <div className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl animate-slow-spin" style={{animationDirection:'reverse'}}></div>

      <div className="relative group mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero hover grid using LA2 image */}
        {/* Full-width hero grid overlay with per-cell hover effect */}
        <div className="absolute inset-0 z-20">
          {/* subtle grid lines across hero */}
          <div
            className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-[100vw] opacity-40 z-10 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0 1px, transparent 1px 40px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0 1px, transparent 1px 40px)'
            }}
          />
          {/* interactive tiles layer */}
          <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-[100vw]">
            <div
              className="grid h-full w-full"
              style={{
                gridTemplateColumns: 'repeat(30, minmax(0, 1fr))',
                gridAutoRows: '30px'
              }}
            >
              {Array.from({ length: 30 * 15 }).map((_, i) => (
                <div
                  key={i}
                  className="transition duration-150 ease-out pointer-events-auto"
                     onMouseEnter={(e) => {
                      // Get current position
                      const row = Math.floor(i / 30);
                      const col = i % 30;
                      
                      // Apply effect to current square
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.3)';
                      
                      // Apply effect to inner columns only (not outer border)
                      const innerSquares = [
                        i - 1, // left inner
                        i + 1, // right inner
                        i - 30, // top inner
                        i + 30  // bottom inner
                      ];
                      
                      innerSquares.forEach(adjIndex => {
                        if (adjIndex >= 0 && adjIndex < 30 * 15) {
                          const adjRow = Math.floor(adjIndex / 30);
                          const adjCol = adjIndex % 30;
                          
                          // Check if adjacent square is valid and not on outer edge
                          if (Math.abs(adjRow - row) <= 1 && Math.abs(adjCol - col) <= 1) {
                            const adjElement = e.currentTarget.parentElement?.children[adjIndex];
                            if (adjElement) {
                              adjElement.style.background = 'rgba(255,255,255,0.05)';
                              adjElement.style.boxShadow = '0 0 15px rgba(255,255,255,0.2)';
                            }
                          }
                        }
                      });
                    }}
                   onMouseLeave={(e) => {
                     // Reset current square
                     e.currentTarget.style.background = 'transparent';
                     e.currentTarget.style.boxShadow = 'none';
                     
                     // Reset all squares
                     const allSquares = e.currentTarget.parentElement?.children;
                     if (allSquares) {
                       Array.from(allSquares).forEach(square => {
                         square.style.background = 'transparent';
                         square.style.boxShadow = 'none';
                       });
                     }
                   }}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-50"
          style={{
            backgroundImage: `url(${newLogo})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '85% center',
            backgroundSize: '40%'
          }}
        />
        {/* Hero interactive squares only in hero */}
        <DecorativeSquares />
        <div className="grid lg:grid-cols-2 gap-10 items-center justify-items-end ml-auto relative">
          <div className="order-2 lg:order-2 lg:text-right w-full max-w-xl">
            <div className="p-0">
              <h1 className="font-bold leading-tight tracking-tight" style={{fontSize: '44px'}}>
               <span>من الفكرة للنجاح… إحنا معاك </span>
               </h1>
              <p className="mt-6 text-[#FFFFFF] text-lg">
                مع لايطوفك، هنرسم استراتيجيتك التسويقية ونوصل علامتك لجمهورك المستهدف بأفكار مبتكرة وحلول عملية.
              </p>
              <div className="mt-8 flex items-center gap-3 justify-end">
                <button
                  className="rounded-full text-[14px] font-semibold leading-none whitespace-nowrap text-white bg-[#235CFD] hover:bg-[#1f52e6] active:bg-[#1b49cc] transition-all duration-200 shadow-[0_6px_20px_rgba(35,92,253,0.45)] ring-1 ring-white/10 w-[111px] h-[44px] px-0 -translate-x-2 md:-translate-x-4"
                >
                  يلا بينا نبدأ
                </button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-1 w-full flex justify-end">
            <div className="relative max-w-xl w-full">
              {/* Animated Rainbow Icon */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative w-24 h-24">
                  <svg width="64" height="64" viewBox="0 0 64 64" className="w-full h-full">
                    <defs>
                      <linearGradient id="rainbow-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0000FF" />
                        <stop offset="25%" stopColor="#1E40AF" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="75%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#93C5FD" />
                      </linearGradient>
                      <linearGradient id="rainbow-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E40AF" />
                        <stop offset="25%" stopColor="#2563EB" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="75%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#93C5FD" />
                      </linearGradient>
                      <linearGradient id="rainbow-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="30%" stopColor="#3B82F6" />
                        <stop offset="60%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#93C5FD" />
                      </linearGradient>
                      <linearGradient id="rainbow-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="40%" stopColor="#60A5FA" />
                        <stop offset="80%" stopColor="#93C5FD" />
                        <stop offset="100%" stopColor="#BFDBFE" />
                      </linearGradient>
                      <linearGradient id="rainbow-gradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="50%" stopColor="#93C5FD" />
                        <stop offset="100%" stopColor="#DBEAFE" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M8 32 A24 24 0 0 1 56 32"
                      stroke="url(#rainbow-gradient-1)"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out infinite',
                        strokeDasharray: '100',
                        strokeDashoffset: '100'
                      }}
                    />
                    <path
                      d="M12 32 A20 20 0 0 1 52 32"
                      stroke="url(#rainbow-gradient-2)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="80"
                      strokeDashoffset="80"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out 0.5s infinite',
                        strokeDasharray: '80',
                        strokeDashoffset: '80'
                      }}
                    />
                    <path
                      d="M16 32 A16 16 0 0 1 48 32"
                      stroke="url(#rainbow-gradient-3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="60"
                      strokeDashoffset="60"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out 1s infinite',
                        strokeDasharray: '60',
                        strokeDashoffset: '60'
                      }}
                    />
                    <path
                      d="M20 32 A12 12 0 0 1 44 32"
                      stroke="url(#rainbow-gradient-4)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="40"
                      strokeDashoffset="40"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out 1.5s infinite',
                        strokeDasharray: '40',
                        strokeDashoffset: '40'
                      }}
                    />
                    <path
                      d="M24 32 A8 8 0 0 1 40 32"
                      stroke="url(#rainbow-gradient-5)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="30"
                      strokeDashoffset="30"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out 2s infinite',
                        strokeDasharray: '30',
                        strokeDashoffset: '30'
                      }}
                    />
                  </svg>
                </div>
              </div>
              {/* Animated Rainbow Icon */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative w-24 h-24">
                  <svg width="64" height="64" viewBox="0 0 64 64" className="w-full h-full">
                    <defs>
                      <linearGradient id="rainbow-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0000FF" />
                        <stop offset="25%" stopColor="#4169E1" />
                        <stop offset="50%" stopColor="#1E90FF" />
                        <stop offset="75%" stopColor="#00BFFF" />
                        <stop offset="100%" stopColor="#87CEEB" />
                      </linearGradient>
                      <linearGradient id="rainbow-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4169E1" />
                        <stop offset="25%" stopColor="#1E90FF" />
                        <stop offset="50%" stopColor="#00BFFF" />
                        <stop offset="75%" stopColor="#87CEEB" />
                        <stop offset="100%" stopColor="#B0E0E6" />
                      </linearGradient>
                      <linearGradient id="rainbow-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E90FF" />
                        <stop offset="30%" stopColor="#00BFFF" />
                        <stop offset="60%" stopColor="#87CEEB" />
                        <stop offset="100%" stopColor="#B0E0E6" />
                      </linearGradient>
                      <linearGradient id="rainbow-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00BFFF" />
                        <stop offset="40%" stopColor="#87CEEB" />
                        <stop offset="80%" stopColor="#B0E0E6" />
                        <stop offset="100%" stopColor="#E0F6FF" />
                      </linearGradient>
                      <linearGradient id="rainbow-gradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#87CEEB" />
                        <stop offset="50%" stopColor="#B0E0E6" />
                        <stop offset="100%" stopColor="#E0F6FF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M8 32 A24 24 0 0 1 56 32"
                      stroke="url(#rainbow-gradient-1)"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out infinite',
                        strokeDasharray: '100',
                        strokeDashoffset: '100'
                      }}
                    />
                    <path
                      d="M12 32 A20 20 0 0 1 52 32"
                      stroke="url(#rainbow-gradient-2)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="80"
                      strokeDashoffset="80"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out 0.5s infinite',
                        strokeDasharray: '80',
                        strokeDashoffset: '80'
                      }}
                    />
                    <path
                      d="M16 32 A16 16 0 0 1 48 32"
                      stroke="url(#rainbow-gradient-3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="60"
                      strokeDashoffset="60"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out 1s infinite',
                        strokeDasharray: '60',
                        strokeDashoffset: '60'
                      }}
                    />
                    <path
                      d="M20 32 A12 12 0 0 1 44 32"
                      stroke="url(#rainbow-gradient-4)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="40"
                      strokeDashoffset="40"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out 1.5s infinite',
                        strokeDasharray: '40',
                        strokeDashoffset: '40'
                      }}
                    />
                    <path
                      d="M24 32 A8 8 0 0 1 40 32"
                      stroke="url(#rainbow-gradient-5)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="30"
                      strokeDashoffset="30"
                      className="rainbow-draw-animation"
                      style={{ 
                        animation: 'rainbow-draw 3s ease-in-out 2s infinite',
                        strokeDasharray: '30',
                        strokeDashoffset: '30'
                      }}
                    />
                  </svg>
                </div>
              </div>
              <img alt="visual" src={groupImg} loading="eager" decoding="async" className="block w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      
      {/* About section - Integrated with Hero */}
      <section id="about" className="relative scroll-mt-[110px]">
        {/* Vector background pinned to the far left with no black gap */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -z-10 opacity-60"
          style={{
            width: '450px',
            height: '100%',
            backgroundImage: `url(${vectorImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'left center'
          }}
        />
        <div className="h-[1px] bg-white/20 mx-auto max-w-7xl"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          <h2 className="section-title mt-4">عن لايطوفك</h2>
          <p className="section-subtitle">نبذة صغيرة</p>
          <div className="grid lg:grid-cols-2 gap-10 items-start justify-items-end">
            <div className="relative justify-self-end lg:-mr-6">
              <div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                <img 
                  src={LA6} 
                  alt="about" 
                  loading="lazy" 
                  decoding="async" 
                  className="w-full h-80 sm:h-96 lg:h-120 object-cover object-center" 
                />
              </div>
            </div>
            <div className="lg:mt-8 justify-self-end lg:pl-0 lg:pr-6 text-right">
              <p className="text-right text-[#FFFFFF]" style={{fontSize:'20px', lineHeight:'34px', letterSpacing:'-0.006em', fontWeight:400}}>
                لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl ring-1 ring-white/10 p-4 text-center" style={{background:'#F71FA633'}}>
                  <div className="text-2xl font-extrabold text-[#F71FA6]">+5</div>
                  <div className="text-xs mt-1 text-[#F71FA6]">سنوات الخبرة</div>
                </div>
                <div className="rounded-xl ring-1 ring-white/10 p-4 text-center" style={{background:'#F6973F33'}}>
                  <div className="text-2xl font-extrabold text-[#F59E0B]">+20</div>
                  <div className="text-xs text-white/70 mt-1">مشروع مكتمل</div>
                </div>
                <div className="rounded-xl ring-1 ring-white/10 p-4 text-center" style={{background:'#2451FF33'}}>
                  <div className="text-2xl font-extrabold text-[#235CFD]">+5</div>
                  <div className="text-xs mt-1 text-[#235CFD]">سنوات</div>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <button className="rounded-full border border-white/20 text-white/70 px-6 py-2 text-xs">
                  اقرأ المزيد عنا
                </button>
              </div>
            </div>
          </div>
          {/* Partners strip - Optimized for center alignment */}
          <div className="relative mt-20">
            {/* Decorative line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-white/20 via-white/60 to-white/20 relative z-0"></div>
            
            {/* Centered company count text */}
            <div className="absolute left-1/2 -top-5 -translate-x-1/2 z-10">
              <div className="px-6 py-2 rounded-full bg-[#1f1f1f] text-sm text-white/90 shadow-[0_6px_30px_rgba(0,0,0,0.35)] text-center whitespace-nowrap">
                اكثر من 120 شركة تعمل معنا
              </div>
            </div>
            
            {/* Partners container - Full width with centered content */}
            <div
              className="bg-[#0d0f16]/80 relative w-full"
              style={{ 
                height: 132,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100vw',
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderStyle: 'solid',
                borderColor: '#262626',
                borderRadius: '0 0 12px 12px',
              }}
            >
              {/* Continuously rotating partners content - mobile optimized */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div 
                  ref={sliderRef}
                  className="flex items-center gap-4 md:gap-8 lg:gap-12 px-2 md:px-4 opacity-90"
                  style={{
                    transform: `translateX(-${(rotationPosition * (window.innerWidth < 768 ? 0.6 : 1.2)) % (partners.length * (window.innerWidth < 768 ? 100 : 120))}px)`,
                    transition: 'none', // Remove transition for continuous movement
                    willChange: 'transform', // Optimize for mobile performance
                    backfaceVisibility: 'hidden', // Better mobile performance
                    perspective: '1000px', // Hardware acceleration
                  }}
                >
                  {/* Optimized partners for smooth mobile performance */}
                  {[...partners, ...partners, ...partners].map((partner, index) => (
                    <div 
                      key={`${partner.id}-${index}`} 
                      className="flex items-center gap-2 md:gap-3 shrink-0 min-w-[80px] md:min-w-[100px] lg:min-w-[120px]"
                      style={{ willChange: 'transform' }}
                    >
                      <div className="flex-shrink-0">{partner.icon}</div>
                      <span className="text-white text-xs md:text-sm lg:text-base whitespace-nowrap">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services section - Integrated with About */}
      <section id="services" className="relative scroll-mt-[110px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-12 sm:pt-16">
          <h2 className="section-title">خدمتنا</h2>
          <p className="section-subtitle mb-14 -mt-2">حلول تسويقية متكاملة لصناعة الأثر ووصول علامتك بأفضل طريقة</p>

          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03] -mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 text-right divide-x divide-y divide-white/10">
            {/* Card 1 */}
            <div className="bg-transparent p-5 pr-14 hover:bg-white/[0.03] transition-colors relative">
              <div className="absolute top-4 right-4">
                <div className="h-8 w-8 rounded-lg grid place-items-center ring-1 ring-white/10 border-t" style={{borderTopColor:'#262626', background: 'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%), linear-gradient(229.29deg, rgba(36, 81, 255, 0.2) -68.25%, rgba(36, 81, 255, 0.05) 32.16%)'}}>
                  <FaBolt className="text-[#235CFD]" size={14} />
                </div>
              </div>
              <h3 className="font-semibold mb-2 mt-12">إدارة السوشيال ميديا</h3>
              <p className="text-white/60 leading-7 text-sm">نضع خطة محتوى ونُدير تواجدك على المنصات، نصمم وننشر ونحلل لنضمن تفاعل مستمر مع جمهورك.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-transparent p-5 pr-14 hover:bg-white/[0.03] transition-colors relative">
              <div className="absolute top-4 right-4">
                <div className="h-8 w-8 rounded-lg grid place-items-center ring-1 ring-white/10 border-t" style={{borderTopColor:'#262626', background: 'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%), linear-gradient(229.29deg, rgba(36, 81, 255, 0.2) -68.25%, rgba(36, 81, 255, 0.05) 32.16%)'}}>
                  <FaPuzzlePiece className="text-[#235CFD]" size={14} />
                </div>
              </div>
              <h3 className="font-semibold mb-2 mt-12">الحملات الإعلانية المدفوعة</h3>
              <p className="text-white/60 leading-7 text-sm">ننشىء حملات دقيقة على منصات الإعلانات لزيادة الوعي والتحويلات بأقل تكلفة ممكنة.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-transparent p-5 pr-14 hover:bg-white/[0.03] transition-colors relative">
              <div className="absolute top-4 right-4">
                <div className="h-8 w-8 rounded-lg grid place-items-center ring-1 ring-white/10 border-t" style={{borderTopColor:'#262626', background: 'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%), linear-gradient(229.29deg, rgba(36, 81, 255, 0.2) -68.25%, rgba(36, 81, 255, 0.05) 32.16%)'}}>
                  <FaBrush className="text-[#235CFD]" size={14} />
                </div>
              </div>
              <h3 className="font-semibold mb-2 mt-12">تصميم الهوية البصرية</h3>
              <p className="text-white/60 leading-7 text-sm">من الشعار إلى دليل الهوية، نصمم لك هوية متناسقة ترفع من قيمة العلامة وتزيد من الثقة.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-transparent p-5 pr-14 hover:bg-white/[0.03] transition-colors relative">
              <div className="absolute top-4 right-4">
                <div className="h-8 w-8 rounded-lg grid place-items-center ring-1 ring-white/10 border-t" style={{borderTopColor:'#262626', background: 'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%), linear-gradient(229.29deg, rgba(36, 81, 255, 0.2) -68.25%, rgba(36, 81, 255, 0.05) 32.16%)'}}>
                  <FaBrush className="text-[#235CFD]" size={14} />
                </div>
              </div>
              <h3 className="font-semibold mb-2 mt-12">كتابة المحتوى التسويقي</h3>
              <p className="text-white/60 leading-7 text-sm">نكتب محتوى جذاب ومتوافق مع محركات البحث؛ يعبّر عن صوت علامتك ويقود إلى الإجراء.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-transparent p-5 pr-14 hover:bg-white/[0.03] transition-colors relative">
              <div className="absolute top-4 right-4">
                <div className="h-8 w-8 rounded-lg grid place-items-center ring-1 ring-white/10 border-t" style={{borderTopColor:'#262626', background: 'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%), linear-gradient(229.29deg, rgba(36, 81, 255, 0.2) -68.25%, rgba(36, 81, 255, 0.05) 32.16%)'}}>
                  <FaPuzzlePiece className="text-[#235CFD]" size={14} />
                </div>
              </div>
              <h3 className="font-semibold mb-2 mt-12">الاستشارات والخطط التسويقية</h3>
              <p className="text-white/60 leading-7 text-sm">نرسم معك خارطة طريق تسويقية مبنية على بيانات، ونحدد أولويات وفرص النمو وفق أهدافك.</p>
            </div>

            {/* Card 6 */}
            <div className="bg-transparent p-5 pr-14 hover:bg-white/[0.03] transition-colors relative">
              <div className="absolute top-4 right-4">
                <div className="h-8 w-8 rounded-lg grid place-items-center ring-1 ring-white/10 border-t" style={{borderTopColor:'#262626', background: 'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0) 100%), linear-gradient(229.29deg, rgba(36, 81, 255, 0.2) -68.25%, rgba(36, 81, 255, 0.05) 32.16%)'}}>
                  <FaBolt className="text-[#235CFD]" size={14} />
                </div>
              </div>
              <h3 className="font-semibold mb-2 mt-12">إدارة العلاقات مع العملاء (CRM)</h3>
              <p className="text-white/60 leading-7 text-sm">نُحسن تجربة العملاء ونبني ولاءً مستدامًا عبر أتمتة عمليات المتابعة والتجزئة والعروض.</p>
            </div>
            </div>
          </div>
        </div>
      </section>
        <div className="section-divider my-14" />
      {/* Pricing section */}
       <section id="pricing" className="section mt-0 py-16 scroll-mt-[110px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="-translate-y-15">
            <h2 className="section-title">الاسعار</h2>
            <p className="section-subtitle mb-6" style={{textAlign: 'center ', direction: 'rtl'}}>اكتب كل اللي انت عاوزه</p>
          </div>

          {/* الكروت */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center mt-6 gap-8 sm:gap-7" style={{ gap: 'clamp(32px, 8vw, 28px)' }}>
            {plans.map((_, idx) => (
              <div
                key={idx}
                className={`text-center transition-all duration-300 hover:scale-105
                  ${
                    idx === 2
                      ? "bg-gradient-to-b from-[#0a0f3b] to-[#0f1d6a] border-2 border-[#235CFD] scale-110 relative z-10 my-8 sm:my-0"
                      : "bg-gradient-to-b from-[#0a0f3b] to-[#0c154a] border border-white/10"
                  }
                `}
                style={{ 
                  width: idx === 2 ? 'clamp(220px, 250px, 280px)' : 'clamp(200px, 223px, 250px)',
                  height: idx === 2 ? 'clamp(400px, 440px, 480px)' : 'clamp(380px, 433px, 470px)',
                  borderRadius: '38px',
                  borderWidth: '1.5px',
                  paddingTop: idx === 2 ? '32px' : '28px',
                  paddingRight: idx === 2 ? '32px' : '32px',
                  paddingBottom: idx === 2 ? '32px' : '28px',
                  paddingLeft: idx === 2 ? '32px' : '32px',
                  boxShadow: '0px 11px 62px 0px #2451FF33, -12px 12px 26.8px 0px #00000021 inset', 
                  backdropFilter: 'blur(25px)' 
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div></div>
                  <p className="text-[#235CFD] font-semibold text-sm">عرض الشهر</p>
                </div>
                
                <h3 className="text-5xl font-bold text-white mb-1">70%</h3>
                <p className="text-white/60 text-sm mb-2">تخفيض</p>
                
                <div className="border-t border-white/20 my-4"></div>
                
                <div className="space-y-3 mb-8">
                  <div className="text-center">
                    <p className="text-white/80 text-sm">النص اللي هتكتب</p>
                    <p className="text-[#235CFD] font-bold text-sm">50 ريال</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/80 text-sm">النص اللي هتكتب</p>
                    <p className="text-[#235CFD] font-bold text-sm">50 ريال</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/80 text-sm">النص اللي هتكتب</p>
                    <p className="text-[#235CFD] font-bold text-sm">50 ريال</p>
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95
                    ${
                      idx === 2
                        ? "bg-[#235CFD] hover:bg-[#1f52e6] text-white shadow-lg hover:shadow-xl"
                        : "bg-white/10 hover:bg-white/20 text-white/80 border border-white/20 hover:border-white/30"
                    }
                  `}
                >
                  اشترك الان
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider my-2" />
       {/* Projects section */}
       <section id="projects" className="section scroll-mt-[110px]">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">مشاريعنا السابقة</h2>
           <p className="section-subtitle">علشان احنا اجمد شركه في مصر</p>

           {/* Filter Bar - Enhanced with better UX and performance */}
           <div className="flex justify-center mb-12 px-4">
             <div className="flex bg-[#0a0f3b] rounded-full px-2 sm:px-6 py-3 gap-1 overflow-x-auto max-w-full shadow-lg border border-white/10">
               {categories.map((cat) => (
                 <button
                   key={cat.id}
                   onClick={() => handleFilterChange(cat.id)}
                   className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 rounded-full transition-all duration-300 relative whitespace-nowrap text-sm sm:text-base transform hover:scale-105 active:scale-95
                     ${
                       activeFilter === cat.id
                         ? "bg-[#235CFD] text-white shadow-lg ring-2 ring-[#235CFD]/30"
                         : "text-white/70 hover:text-white hover:bg-white/10 hover:shadow-md"
                     }
                   `}
                   aria-pressed={activeFilter === cat.id}
                 >
                   <span className="text-xs sm:text-sm transition-transform duration-200">{cat.icon}</span>
                   <span className="hidden sm:inline font-medium">{cat.label}</span>
                   <span className="sm:hidden font-medium">{cat.label.split(' ')[0]}</span>
                 </button>
               ))}
             </div>
           </div>

           {/* Curved Lines from Active Filter */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
             <svg width="400" height="200" viewBox="0 0 400 200" className="opacity-30">
               <path
                 d="M 200 20 Q 150 80 100 120 Q 50 160 0 200"
                 stroke="#235CFD"
                 strokeWidth="2"
                 fill="none"
                 strokeDasharray="5,5"
               />
               <path
                 d="M 200 20 Q 250 80 300 120 Q 350 160 400 200"
                 stroke="#235CFD"
                 strokeWidth="2"
                 fill="none"
                 strokeDasharray="5,5"
               />
             </svg>
           </div>

           {/* Projects Grid - Centered layout */}
           <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 relative z-10 px-4 sm:px-0">
             {filteredProjects.map((project) => (
                 <div
                   key={project.id}
                   onClick={() => handleProjectClick(project.link)}
                   className="group rounded-2xl overflow-hidden border border-white/20 bg-white/5 hover:scale-105 transition-all duration-300 hover:border-[#235CFD]/50 cursor-pointer w-64 h-48"
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => handleKeyDown(e, project.link)}
                   aria-label={`عرض مشروع ${project.title}`}
                 >
                   <div className="relative overflow-hidden">
                     <img
                       src={project.image}
                       alt={project.title}
                       loading="lazy"
                       decoding="async"
                       className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                       style={{ willChange: 'transform' }}
                     />
                   </div>
                   <div className="bg-black/80 p-4 text-center">
                     <p className="font-semibold text-white">{project.title}</p>
                   </div>
                 </div>
               ))}
           </div>
           </div>
       </section>
       
      <div className="section-divider mt-8" />
       {/* Testimonials section */}
       <section id="testimonials" className="bg-black text-white py-8 sm:py-12 text-center section scroll-mt-[110px]">
      {/* العنوان */}
      <div className="relative -top-8 sm:-top-15 px-4">
        <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">آراء العملاء</h2>
        <p className="section-subtitle text-sm sm:text-base">الاراء</p>
      </div>

      {/* الكروت - تصميم محسن للهاتف */}
      <div className="max-w-7xl mx-auto px-4">
        {/* عرض واحد في الموبايل، اثنان في التابلت، ثلاثة في الديسكتوب */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`relative rounded-2xl p-3 sm:p-4 lg:p-6 w-full transition-all duration-300 ${
                idx === active
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white scale-105 shadow-xl"
                  : "bg-[#0a0f3b] text-gray-300 hover:bg-[#0f1a4a]"
              }`}
              style={{
                minHeight: 'auto', // إزالة الارتفاع الثابت
                maxWidth: idx === active ? '100%' : '100%'
              }}
            >
              {/* صورة البروفايل */}
              <div className="absolute -top-4 sm:-top-6 lg:-top-10 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>

              <div className="mt-4 sm:mt-6 lg:mt-8 px-1 sm:px-2">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">{t.name}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-center">{t.text}</p>

                {/* التقييم */}
                <div className="flex justify-center mt-3 sm:mt-4 gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${
                        i < t.rating ? "text-orange-400 fill-orange-400" : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* أزرار السلايدر - محسنة للهاتف */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10 px-4">
        <button
          onClick={prev}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="الشهادة السابقة"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="flex gap-1 sm:gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                i === active ? "bg-blue-500 scale-125" : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`انتقل للشهادة ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-700 transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="الشهادة التالية"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
       </div>
     </section>
 
     <div className="section-divider" />
       {/* Image Gallery section */}
     <section id="gallery" className="bg-black text-white py-5 text-center section scroll-mt-[110px]">
        {/* العنوان */}
        <div className="relative -top-10">
        <h2 className="section-title">معرض الصور</h2>
        <p className="section-subtitle">الصور</p>
      </div>
       {/* معرض الصور */}
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
           {/* الصورة الأولى */}
           <div className="rounded-2xl overflow-hidden bg-gray-800 h-48 sm:h-56 md:h-64">
             <img 
               src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop" 
               alt="App icons"
               className="w-full h-full object-cover"
               loading="lazy"
               decoding="async"
             />
           </div>

           {/* الصورة الثانية */}
           <div className="rounded-2xl overflow-hidden bg-gray-800 h-48 sm:h-56 md:h-64">
             <img 
               src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop" 
               alt="Woman with smartphone"
               className="w-full h-full object-cover"
               loading="lazy"
               decoding="async"
             />
           </div>

           {/* الصورة الثالثة */}
           <div className="rounded-2xl overflow-hidden bg-gray-800 h-48 sm:h-56 md:h-64">
             <img 
               src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop" 
               alt="Smartphone interface"
               className="w-full h-full object-cover"
               loading="lazy"
               decoding="async"
             />
           </div>

           {/* الصورة الرابعة */}
           <div className="rounded-2xl overflow-hidden bg-gray-700 h-48 sm:h-56 md:h-64 flex items-center justify-center">
             <div className="text-gray-400 text-sm">صورة فارغة</div>
           </div>

           {/* الصورة الخامسة */}
           <div className="rounded-2xl overflow-hidden bg-gray-800 h-48 sm:h-56 md:h-64">
             <img 
               src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop" 
               alt="Hand holding smartphone"
               className="w-full h-full object-cover"
               loading="lazy"
               decoding="async"
             />
           </div>

           {/* الصورة السادسة */}
           <div className="rounded-2xl overflow-hidden bg-gray-800 h-48 sm:h-56 md:h-64">
             <img 
               src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" 
               alt="Hands with smartphone"
               className="w-full h-full object-cover"
               loading="lazy"
               decoding="async"
             />
           </div>

           {/* الصورة السابعة */}
           <div className="rounded-2xl overflow-hidden bg-gray-800 h-48 sm:h-56 md:h-64">
             <img 
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
               alt="Colorful art pieces"
               className="w-full h-full object-cover"
               loading="lazy"
               decoding="async"
             />
           </div>

           {/* الصورة الثامنة */}
           <div className="rounded-2xl overflow-hidden bg-gray-800 h-48 sm:h-56 md:h-64">
             <img 
               src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop" 
               alt="Design workspace"
               className="w-full h-full object-cover"
               loading="lazy"
               decoding="async"
             />
           </div>
         </div>

         {/* زر عرض الكل */}
         <div className="mt-12">
           <button className="bg-transparent border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg">
             عرض الكل
           </button>
           </div>
       </div>
     </section>
 
     <div className="section-divider" />
   {/* Contact Us section - Small */}
   <section id="contact" className="bg-black text-white py-8 sm:py-12 section scroll-mt-[110px]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-[416px_1fr] gap-6 lg:gap-8 items-start" dir="ltr">
           
          {/* Contact Information */}
          <div 
            className="border border-gray-700 lg:col-start-1 w-full lg:w-[416px] lg:mt-16"
             style={{
               minHeight: 'auto',
               borderRadius: '12px',
               borderWidth: '1px',
               padding: '24px',
               gap: '24px',
               backgroundColor: '#0D0D0D',
               direction: 'rtl'
             }}
           >
             <h3 className="text-lg font-bold mb-6 text-center">ارقامنا</h3>
             
             <div className="space-y-6">
               {/* Phone */}
    <a href="tel:01223993939" className="flex items-center gap-3 hover:text-blue-400 transition">
                 <FaPhone className="text-blue-500 text-sm" />
                 <div>
                   <p className="text-gray-400 text-xs">رقم الجوال</p>
                   <p className="text-blue-500 font-semibold text-sm">01223993939</p>
                 </div>
    </a>

               {/* Email */}
    <a href="mailto:help@company.sa" className="flex items-center gap-3 hover:text-blue-400 transition">
                 <FaEnvelope className="text-blue-500 text-sm" />
                 <div>
                   <p className="text-gray-400 text-xs">البريد الالكتروني</p>
                   <p className="text-blue-500 font-semibold text-sm">help@company.sa</p>
                 </div>
    </a>

               {/* Fax */}
    <a href="tel:0122222222" className="flex items-center gap-3 hover:text-blue-400 transition">
                 <FaFax className="text-blue-500 text-sm" />
                 <div>
                   <p className="text-gray-400 text-xs">فاكس</p>
                   <p className="text-blue-500 font-semibold text-sm">0122222222</p>
                 </div>
    </a>

               {/* Location */}
    <a 
      href="https://maps.google.com?q=مصر شارع" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-blue-400 transition"
    >
                 <FaMapMarkerAlt className="text-blue-500 text-sm" />
                 <div>
                   <p className="text-gray-400 text-xs">الموقع</p>
                   <p className="text-blue-500 font-semibold text-sm">مصر شارع</p>
                 </div>
    </a>

               {/* Social Media */}
               <div className="border-t border-gray-700 pt-4 mt-4">
                 <p className="text-gray-400 text-xs mb-3">تابعنا على</p>
                 <div className="flex gap-3">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
           className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center hover:opacity-80">
                     <span className="text-white text-xs font-bold">X</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
           className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center hover:opacity-80">
                     <span className="text-white text-xs font-bold">in</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
           className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:opacity-80">
                     <span className="text-white text-xs">📷</span>
        </a>
                 </div>
               </div>
             </div>
           </div>


          {/* Contact Form */}
          <div 
           className="w-full text-left lg:col-start-2"
            style={{
              padding: '24px',
             minHeight: 'auto',
             direction: 'rtl'
            }}
          >
            <div className="text-right mb-8" dir="rtl">
              <h2 className="section-title mb-2" style={{textAlign: 'right', direction: 'rtl'}}>تواصل معنا</h2>
            </div>
             
             <form onSubmit={handleSubmit} className="space-y-4">
               {/* Name Fields */}
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium mb-2 text-white" style={{textAlign: 'right', direction: 'rtl'}}>
                     الاسم الاول <span className="text-red-500">*</span>
                   </label>
                  <input
                     type="text"
                     name="firstName"
                     value={formData.firstName || ''}
                     onChange={handleInputChange}
                     placeholder="ادخل الاسم الاول"
                     required
                     autoComplete="given-name"
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:bg-gray-800 text-sm transition-all duration-200 text-right"
                     style={{ color: 'white', pointerEvents: 'auto' }}
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-2 text-white" style={{textAlign: 'right', direction: 'rtl'}}>
                     الاسم الاخير <span className="text-red-500">*</span>
                   </label>
                  <input
                     type="text"
                     name="lastName"
                     value={formData.lastName || ''}
                     onChange={handleInputChange}
                     placeholder="ادخل الاسم الاخير"
                     required
                     autoComplete="family-name"
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:bg-gray-800 text-sm transition-all duration-200 text-right"
                     style={{ color: 'white', pointerEvents: 'auto' }}
                   />
                 </div>
               </div>

               {/* Email and Mobile */}
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium mb-2 text-white" style={{textAlign: 'right', direction: 'rtl'}}>
                     البريد الالكتروني <span className="text-red-500">*</span>
                   </label>
                  <input
                     type="email"
                     name="email"
                     value={formData.email || ''}
                     onChange={handleInputChange}
                     placeholder="ادخل البريد الالكتروني"
                     required
                     autoComplete="email"
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:bg-gray-800 text-sm transition-all duration-200 text-right"
                     style={{ color: 'white', pointerEvents: 'auto' }}
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-2 text-white" style={{textAlign: 'right', direction: 'rtl'}}>
                     رقم الجوال <span className="text-red-500">*</span>
                   </label>
                  <div className="flex items-stretch rounded-lg bg-gray-800/50 focus-within:bg-gray-800 transition-all duration-200 overflow-hidden">
                     <select 
                       name="countryCode"
                       value={formData.countryCode}
                       onChange={handleInputChange}
                      className="px-3 py-3 bg-transparent text-black text-sm focus:outline-none border-l border-white/10 text-right"
                       style={{ color: 'gray ', pointerEvents: 'auto' }}
                     >
                       <option value="020" style={{ color: 'black', backgroundColor: 'white' }}>020</option>
                       <option value="010" style={{ color: 'black', backgroundColor: 'white' }}>010</option>
                       <option value="011" style={{ color: 'black', backgroundColor: 'white' }}>011</option>
                      <option value="012" style={{ color: 'black', backgroundColor: 'white' }}>012</option>
                     </select>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile || ''}
                      onChange={handleInputChange}
                      placeholder="00 000 0000"
                      required
                      autoComplete="tel"
                      className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm text-right"
                      style={{ color: 'white', pointerEvents: 'auto' }}
                    />
                   </div>
                 </div>
               </div>

               {/* Subject and Category */}
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium mb-2 text-white" style={{textAlign: 'right', direction: 'rtl'}}>موضوع</label>
                  <input
                     type="text"
                     name="subject"
                     value={formData.subject || ''}
                     onChange={handleInputChange}
                     placeholder="اكتب موضوعك"
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:bg-gray-800 text-sm transition-all duration-200 text-right"
                     style={{ color: 'white', pointerEvents: 'auto' }}
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium mb-2 text-white" style={{textAlign: 'right', direction: 'rtl'}}>الفئة</label>
                   <select 
                     name="category"
                     value={formData.category || ''}
                     onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-lg text-white focus:outline-none focus:bg-gray-800 text-sm transition-all duration-200 text-right"
                     style={{ color: 'white', pointerEvents: 'auto' }}
                   >
                     <option value="">اقتراحات</option>
                     <option value="support">دعم فني</option>
                     <option value="sales">مبيعات</option>
                     <option value="general">عام</option>
                   </select>
                 </div>
               </div>

               {/* Message */}
               <div>
                 <label className="block text-sm font-medium mb-2 text-white" style={{textAlign: 'right', direction: 'rtl'}}>كيف يمكننا المساعدة؟</label>
                <textarea
                   rows={3}
                   name="message"
                   value={formData.message || ''}
                   onChange={handleInputChange}
                   placeholder="نص تلميحي"
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:bg-gray-800 resize-none text-sm transition-all duration-200 text-right"
                   style={{ color: 'white', pointerEvents: 'auto' }}
                 ></textarea>
               </div>

               {/* Submit Button */}
               <div className="flex justify-end" dir="rtl" style={{textAlign: 'right'}}>
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-all duration-100 text-sm"
                   style={{textAlign: 'right', direction: 'rtl', marginRight: '0', marginLeft: 'auto'}}
                 >
                   {isSubmitting ? 'جاري الإرسال...' : 'ارسال'}
                 </button>
               </div>
             </form>
           </div>
           </div>
         </div>
       </section>
 
      <div className="section-divider" />
      {/* Map Section - Full Width */}
      <section id="map" className="bg-black text-white py-5 section scroll-mt-[110px]" dir="rtl">
         <div className="w-full px-4 -mt-6">
           <div className="text-center mb-5">
            <h2 className="section-title text-white mb-6">موقعنا</h2>
             <p className="text-gray-400 text-lg">اكتشف موقعنا على الخريطة</p>
           </div>
           
           <div className="relative">
             {/* Map Container - Full Width */}
             <div 
               className="border border-gray-700 overflow-hidden mx-auto"
               style={{
                 width: '100%',
                 height: '500px',
                 borderRadius: '16px',
                 backgroundColor: '#0D0D0D'
               }}
             >
               {/* Map Background */}
               <div className="w-full h-full bg-gray-900 relative">
                 {/* Map Roads and Streets */}
                 <svg className="w-full h-full absolute inset-0" viewBox="0 0 1200 500">
                   {/* Major Roads */}
                   <path d="M0 100 L1200 100" stroke="#4A5568" strokeWidth="4" fill="none"/>
                   <path d="M0 200 L1200 200" stroke="#4A5568" strokeWidth="4" fill="none"/>
                   <path d="M0 300 L1200 300" stroke="#4A5568" strokeWidth="4" fill="none"/>
                   <path d="M0 400 L1200 400" stroke="#4A5568" strokeWidth="4" fill="none"/>
                   
                   {/* Vertical Roads */}
                   <path d="M300 0 L300 500" stroke="#4A5568" strokeWidth="4" fill="none"/>
                   <path d="M600 0 L600 500" stroke="#4A5568" strokeWidth="4" fill="none"/>
                   <path d="M900 0 L900 500" stroke="#4A5568" strokeWidth="4" fill="none"/>
                   
                   {/* Minor Roads */}
                   <path d="M0 50 L1200 50" stroke="#6B7280" strokeWidth="2" fill="none"/>
                   <path d="M0 150 L1200 150" stroke="#6B7280" strokeWidth="2" fill="none"/>
                   <path d="M0 250 L1200 250" stroke="#6B7280" strokeWidth="2" fill="none"/>
                   <path d="M0 350 L1200 350" stroke="#6B7280" strokeWidth="2" fill="none"/>
                   <path d="M0 450 L1200 450" stroke="#6B7280" strokeWidth="2" fill="none"/>
                   
                   <path d="M150 0 L150 500" stroke="#6B7280" strokeWidth="2" fill="none"/>
                   <path d="M450 0 L450 500" stroke="#6B7280" strokeWidth="2" fill="none"/>
                   <path d="M750 0 L750 500" stroke="#6B7280" strokeWidth="2" fill="none"/>
                   <path d="M1050 0 L1050 500" stroke="#6B7280" strokeWidth="2" fill="none"/>
                   
                   {/* Roundabouts */}
                   <circle cx="300" cy="200" r="25" fill="#374151" stroke="#4A5568" strokeWidth="3"/>
                   <circle cx="600" cy="300" r="25" fill="#374151" stroke="#4A5568" strokeWidth="3"/>
                   <circle cx="900" cy="200" r="25" fill="#374151" stroke="#4A5568" strokeWidth="3"/>
                   
                   {/* Building Blocks */}
                   <rect x="20" y="20" width="260" height="160" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="320" y="20" width="260" height="160" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="620" y="20" width="260" height="160" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="920" y="20" width="260" height="160" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   
                   <rect x="20" y="220" width="260" height="160" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="320" y="220" width="260" height="160" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="620" y="220" width="260" height="160" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="920" y="220" width="260" height="160" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   
                   <rect x="20" y="420" width="260" height="60" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="320" y="420" width="260" height="60" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="620" y="420" width="260" height="60" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="920" y="420" width="260" height="60" fill="#2D3748" stroke="#4A5568" strokeWidth="2"/>
                   
                   {/* Parks/Green Spaces */}
                   <rect x="150" y="120" width="120" height="80" fill="#1A202C" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="450" y="220" width="120" height="80" fill="#1A202C" stroke="#4A5568" strokeWidth="2"/>
                   <rect x="750" y="120" width="120" height="80" fill="#1A202C" stroke="#4A5568" strokeWidth="2"/>
                   
                   {/* Water Features */}
                   <path d="M50 350 Q200 320 400 350 Q600 380 800 350 Q1000 320 1150 350 L1200 400 L0 400 Z" 
                         fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2"/>
                   
                   {/* Location Marker */}
                   <circle cx="600" cy="300" r="12" fill="#3B82F6" stroke="#1E40AF" strokeWidth="3"/>
                   <circle cx="600" cy="300" r="6" fill="#60A5FA"/>
                   
                   {/* Pulse Animation */}
                   <circle cx="600" cy="300" r="20" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.6">
                     <animate attributeName="r" values="20;40;20" dur="2s" repeatCount="indefinite"/>
                     <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
                   </circle>
                 </svg>
                 
                 {/* Map Overlay Info */}
                 <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-600">
                   <div className="flex items-center gap-3">
                     <FaMapMarkerAlt className="text-blue-500 text-lg" />
                     <div>
                       <p className="text-white text-sm font-semibold">موقعنا الرئيسي</p>
                       <p className="text-gray-300 text-xs">مصر، القاهرة - شارع التحرير</p>
                       <p className="text-blue-400 text-xs mt-1">📍 متاح 24/7</p>
                     </div>
                   </div>
                 </div>
                 
                 {/* Map Controls */}
                 <div className="absolute bottom-6 right-6 flex flex-col gap-3">
                   <button className="w-10 h-10 bg-black/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/90 transition-colors border border-gray-600">
                     <span className="text-lg font-bold">+</span>
                   </button>
                   <button className="w-10 h-10 bg-black/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/90 transition-colors border border-gray-600">
                     <span className="text-lg font-bold">−</span>
                   </button>
                   <button className="w-10 h-10 bg-black/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/90 transition-colors border border-gray-600">
                     <span className="text-sm">🎯</span>
                   </button>
                 </div>
                 
                 {/* Map Legend */}
                 <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-600">
                   <div className="flex items-center gap-4 text-xs">
                     <div className="flex items-center gap-2">
                       <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                       <span className="text-white">موقعنا</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <div className="w-3 h-3 bg-gray-500 rounded"></div>
                       <span className="text-white">مباني</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <div className="w-3 h-3 bg-green-600 rounded"></div>
                       <span className="text-white">حدائق</span>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Map Actions */}
             <div className="flex justify-center mt-8 gap-4">
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95 hover:shadow-lg">
                 <FaMapMarkerAlt className="text-sm" />
                 احصل على الاتجاهات
               </button>
               <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95 hover:shadow-lg">
                 <span>📍</span>
                 مشاركة الموقع
               </button>
             </div>
           </div>
         </div>
       </section>
    </main>

  )
}
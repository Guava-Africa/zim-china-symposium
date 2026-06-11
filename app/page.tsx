"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== NAVBAR - LOGO CENTERED ON MOBILE, BUTTON HIDDEN ON MOBILE ===== */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-xl py-2 md:py-3" : "bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none py-3 md:py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-17">
          <div className="flex md:justify-between items-center relative">
            
            {/* Logo - Centered on mobile, left-aligned on desktop */}
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 md:gap-3 group mx-auto md:mx-0">
              <img src={'/Zimchina logo.png'} height="280" width="280" className="" />
            </Link>

            {/* CTA Button - Hidden on mobile (hidden), visible on desktop */}
            <Link 
              href="/reserve" 
              className={`hidden md:inline-block ${
                scrolled 
                  ? "bg-red-600 hover:bg-red-800" 
                  : "bg-red-600 hover:bg-red-800"
              } text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              Register →
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION WITH SCROLL INDICATOR ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <video 
            src="video.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-left px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full md:py-12">
          <div className="-mt-36">
            <p className="text-md lg:text-lg text-gray-200 mt-6 md:mt-8 mb-13">
              Brought to you by <a href="https://www.africapaciti.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Africapaciti</a> & The Chamber of Chinese Enterprises in Zimbabwe
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mb-10 md:mb-8 leading-tight">
              Strengthening Relations To <span className="text-red-500">Unlock Zimbabwe's Potential</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-gray-200 mb-1">
              Zimbabwe-China Investment Symposium
            </p>
            <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-gray-200 mb-1">
              Building Strategic Partnerships
            </p>
            <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-gray-200 md:mb-1">
              Harare, Zimbabwe • 25 June 2026
            </p>
            <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8">
              Golden Conifer Conference Centre
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link 
                href="/reserve" 
                className="bg-red-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-base font-bold hover:bg-red-800 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Register
              </Link>
              <Link 
                href="#schedule" 
                className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-base font-bold hover:bg-gray-400 hover:text-navy-900 transition-all duration-300"
              >
                Schedule
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer" onClick={() => {
          const scheduleSection = document.getElementById('venue');
          if (scheduleSection) {
            scheduleSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <span className="text-white/70 text-xs md:text-sm hidden sm:block">Scroll</span>
            <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-1.5 md:w-1.5 md:h-2 bg-white rounded-full mt-1.5 md:mt-2 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VENUE SECTION ===== */}
      <section id="venue" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">Venue</h2>
              <div className="w-16 md:w-20 h-1 bg-gold-500 mb-4 md:mb-6"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 md:mb-4">Golden Conifer Wedding & Conference Centre</h3>
              <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Zimbabwe's premier venue for high-level international summits, equipped with state-of-the-art facilities and translation services.
              </p>
              <div className="space-y-2 md:space-y-3 text-gray-800 text-sm md:text-base">
                <p className="flex gap-2 md:gap-3 items-start">
                  <span className="text-lg md:text-xl">📍</span> 
                  <span>30 Quendon Rd, Harare, Zimbabwe</span>
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.5678!2d31.0170247!3d-17.7996766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a59143cbce15%3A0x35187c69341b23c!2sGolden%20Conifer%20Wedding%20%26%20Conference%20Centre!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Conifer Wedding & Conference Centre"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE SECTION ===== */}
      <section id="schedule" className="py-12 md:py-20 bg-gradient-to-b from-navy-900 to-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">Event Schedule Summary</h2>
            <div className="w-16 md:w-20 h-1 bg-gold-500 mx-auto"></div>
            <p className="text-blue-200 mt-3 text-xs md:text-sm">25 June 2026 • Harare, Zimbabwe</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              { time: "08:00 - 09:00", title: "Delegates Arrival & Registration", type: "special" },
              { time: "09:00 - 09:10", title: "Briefing Guest of Honour", type: "special" },
              { time: "09:10 - 10:30", title: "Session 1: Opening Ceremony", subtitle: "Opening Prayer & National Anthem", type: "normal" },
              { time: "10:30 - 11:00", title: "Tea Break", type: "special" },
              { time: "11:00 - 11:30", title: "Session 2: Creating an Attractive Investment Environment for Chinese Investors in Zimbabwe", speaker: "Moderator: Mr. Andy Hodges", type: "normal" },
              { time: "11:30 - 11:50", title: "Session 3: Chinese Embassy Remarks", speaker: "Minister of Industry", type: "normal" },
              { time: "12:15 - 13:00", title: "Session 4: Corporate Citizenship, Inclusivity, Social Integration", speaker: "Moderator: Mr. Chris Mugaga", type: "normal" },
              { time: "13:00 - 14:00", title: "Lunch", type: "special" },
              { time: "14:30 - 15:00", title: "Session 6: Unlocking Mining Investment Opportunities in Zimbabwe", type: "normal" },
              { time: "15:00 - 15:30", title: "Session 7: Remarks by Hon. Minister of Lands", type: "normal" },
              { time: "15:30 - 16:00", title: "Session 8: Enhanced Land Management", speaker: "Moderator: Dr. Ayo Odesula", type: "normal" },
              { time: "16:00 - 16:15", title: "Session 9: Resolutions and Way Forward", type: "normal" },
              { time: "16:15 - 16:25", title: "Closing Remarks", type: "special" },
              { time: "16:25 - 18:00", title: "Network Cocktail & Entertainment", type: "special" },
              { time: "18:00", title: "Delegates Departure", type: "special" },
            ].map((item, idx) => (
              <div key={idx} className={`p-3 md:p-4 rounded-lg mb-2 transition ${
                item.type === "special" 
                  ? "bg-gold-500/10 border-l-4 border-gold-500" 
                  : "bg-white/5 hover:bg-white/10"
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="text-gold-400 font-bold text-xs md:text-sm sm:w-28">{item.time}</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm md:text-base">{item.title}</div>
                    {item.subtitle && <div className="text-gray-300 text-xs md:text-sm">{item.subtitle}</div>}
                    {item.speaker && <div className="text-gold-400 text-xs mt-1">{item.speaker}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-10">
            <Link 
              href="/reserve" 
              className="inline-block bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-red-800 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Register →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-navy-900 text-gray-400 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-17">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <img src={'/Zimchina logo.png'} height="160" width="160" className="bg-white rounded-3xl"/>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed mt-4">
                Building Strategic Partnerships
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><Link href="/reserve" className="text-gold-400 hover:text-gold-300 transition">Register</Link></li>
                <li><a href="#schedule" className="text-gold-400 hover:text-gold-300 transition">Schedule</a></li>
                {/* <li><a href="#venue" className="text-gold-400 hover:text-gold-300 transition">Venue</a></li> */}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Contact</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li className="flex gap-2 break-all">📞 +263 242 778 899</li>
                <li className="flex gap-2 break-all">✉️ info@zimchinasymposium.com</li>
                {/* <li className="flex gap-2">📍 Harare, Zimbabwe</li> */}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Follow Us</h4>
              <div className="flex gap-3 md:gap-4">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-navy-800 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-navy-700 transition-all duration-300 hover:scale-110 text-sm md:text-xl">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-navy-800 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-navy-700 transition-all duration-300 hover:scale-110 text-sm md:text-xl">
                  <FaTwitter />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-navy-800 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-navy-700 transition-all duration-300 hover:scale-110 text-sm md:text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-navy-800 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-navy-700 transition-all duration-300 hover:scale-110 text-sm md:text-xl">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-900/50 pt-5 md:pt-6 text-center text-[10px] md:text-xs text-gray-500">
            <div>© {currentYear} Zimbabwe-China Investment Symposium. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
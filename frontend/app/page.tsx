"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from "@/components/Footer";

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

  // Schedule summary data
  const scheduleSummary = [
    { time: "08:00 – 09:00", title: "Delegates Arrival & Registration", type: "registration" },
    { time: "09:00 – 11:10", title: "Session 1: Opening Ceremony", type: "special" },
    { time: "11:10 – 11:35", title: "Tea Break", type: "break" },
    { time: "11:35 – 12:10", title: "Session 2: Investment Environment Plenary", type: "session" },
    { time: "12:10 – 12:55", title: "Session 3: Zero Tariffs Trade Policy", type: "session" },
    { time: "12:55 – 13:00", title: "Signing Ceremony", type: "special" },
    { time: "13:00 – 14:00", title: "Lunch", type: "break" },
    { time: "14:00 – 14:20", title: "Session 5: Mining Strategy Address", type: "session" },
    { time: "14:20 – 15:00", title: "Session 6: Mining Investment Plenary", type: "session" },
    { time: "15:00 – 15:20", title: "Session 7: Tourism Strategy Address", type: "session" },
    { time: "15:20 – 15:45", title: "Session 8: Tourism Plenary", type: "session" },
    { time: "15:45 – 16:00", title: "Session 9: Land Management Address", type: "session" },
    { time: "16:00 – 16:30", title: "Session 10: Land & Rural Development Plenary", type: "session" },
    { time: "16:30 – 16:45", title: "Session 11: Immigration Policy", type: "session" },
    { time: "16:45 – 17:10", title: "Session 12: Resolutions & Closing", type: "special" },
    { time: "17:10 – 19:00", title: "Networking Cocktail", type: "special" },
    { time: "19:00", title: "Delegates Departure", type: "end" },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav 
  className={`fixed top-0 w-full z-50 transition-all duration-500 ${
    scrolled ? "bg-white shadow-xl " : "bg-black/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
  }`}
>
  <div className="container mx-auto px-4 md:px-8 lg:px-12">
    <div className="flex md:justify-between items-center relative">
      <div className='flex items-center gap-9 p-3 mx-auto md:mx-0'>
        <Link href="/" className="flex items-center justify-center md:justify-start group mx-auto md:mx-0 transition-all duration-500">
          <img 
            src={'/Zimchina.webp'} 
            alt="Zimbabwe-China Symposium Logo"
            className={`transition-all duration-500 object-contain ${
              scrolled 
                ? "h-32 md:h-34 w-auto" 
                : "h-41 md:h-52 lg:h-55 w-auto ml-0 md:ml-30"
            }`}
          />
        </Link>
        <Link href="/" className="flex items-center justify-center md:justify-start group mx-auto md:mx-0 transition-all duration-500">
          <img 
            src={'/chamberlogo.webp'} 
            alt="Zimbabwe-China Symposium Logo"
            className={`transition-all duration-500 object-contain ${
              scrolled 
                ? "h-32 md:h-34 w-auto" 
                : "h-41 md:h-52 lg:h-55 w-auto"
            }`}
          />
        </Link>
      </div>
      <Link 
        href="/register" 
        className={`hidden md:inline-block transition-all duration-300 ${
          scrolled 
            ? "bg-red-600 hover:bg-red-800 text-white px-4 py-2 text-sm"
            : "bg-red-600 hover:bg-red-800 text-white px-5 py-2 text-base"
        } rounded-full font-semibold hover:shadow-lg hover:scale-105`}
      >
        Register for the Symposium →
      </Link>
    </div>
  </div>
</nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <video 
            src="video.webm" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-left px-4 md:px-8 lg:px-12 max-w-6xl mx-auto w-full pt-42 md:pt-60 lg:pt-73 pb-16">
          <p className="text-lg lg:text-2xl text-gray-300 mb-3 md:mb-4">
            Brought to you by <a href="https://www.africapaciti.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Africapaciti</a> & The Chamber of Chinese Enterprises in Zimbabwe
          </p>
          
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Strengthening Relations To <span className="text-red-500">Unlock Zimbabwe's Potential</span>
          </h1>
          
          <div className="space-y-1 mb-6 md:mb-8">
            <p className="text-lg sm:text-lg md:text-xl text-gray-200">
              Zimbabwe-China Investment Symposium
            </p>
            <p className="text-lg sm:text-lg md:text-xl text-gray-200">
              Building Strategic Partnerships
            </p>
            <p className="text-lg sm:text-lg md:text-xl text-gray-200">
              Harare, Zimbabwe • 2 July 2026
            </p>
            <p className="text-lg sm:text-lg md:text-xl text-gray-200">
              Golden Conifer Conference Centre
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link 
              href="/register" 
              className="bg-red-600 text-white px-5 md:px-7 py-3 md:py-2.5 rounded-full text-sm md:text-base font-bold hover:bg-red-900 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Register
            </Link>
            <Link 
              href="/schedule" 
              className="bg-transparent border-2 border-white text-white px-5 md:px-7 py-3 md:py-2.5 rounded-full text-sm md:text-base font-bold hover:bg-white/10 hover:border-white/80 transition-all duration-300"
            >
              Schedule
            </Link>
            <Link 
              href="/panelists" 
              className="border-2 border-red-700 text-white px-5 md:px-7 py-3 md:py-2.5 rounded-full text-sm md:text-base font-bold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Panelists
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-red-700 text-white px-5 md:px-7 py-3 md:py-2.5 rounded-full text-sm md:text-base font-bold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              About
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer" onClick={() => {
          const scheduleSection = document.getElementById('schedule');
          if (scheduleSection) {
            scheduleSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <div className="flex flex-col items-center gap-1">
            <span className="text-white/60 text-xs hidden sm:block">Scroll</span>
            <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-1.5 md:w-1.5 md:h-2 bg-white/60 rounded-full mt-1.5 md:mt-2 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VENUE SECTION ===== */}
      <section id="venue" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 md:mb-3">Venue</h2>
              <div className="w-16 h-1 bg-yellow-500 mb-4 md:mb-5"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 md:mb-3">Golden Conifer Wedding & Conference Centre</h3>
              <p className="text-gray-600 mb-4 md:mb-5 leading-relaxed text-sm md:text-base">
                Zimbabwe's premier venue for high-level international summits and equipped with state-of-the-art facilities.
              </p>
              <div className="space-y-2 text-gray-700 text-sm md:text-base">
                <p className="flex gap-2 items-start">
                  <span className="text-lg">📍</span> 
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

          {/* Venue Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
            <div className="relative h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center group">
              <img 
                src="/1.jpeg" 
                alt="Golden Conifer Conference Centre - Main Hall"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="flex flex-col items-center justify-center text-gray-400">
                        <span class="text-4xl mb-2">🏛️</span>
                        <span class="text-sm font-medium">Main Hall</span>
                        <span class="text-xs">Venue Photo 1</span>
                      </div>
                    `;
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>

            <div className="relative h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center group">
              <img 
                src="/2.jpeg" 
                alt="Golden Conifer Conference Centre - Conference Room"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="flex flex-col items-center justify-center text-gray-400">
                        <span class="text-4xl mb-2">🪑</span>
                        <span class="text-sm font-medium">Conference Room</span>
                        <span class="text-xs">Venue Photo 2</span>
                      </div>
                    `;
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>

            <div className="relative h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center group">
              <img 
                src="/3.jpeg" 
                alt="Golden Conifer Conference Centre - Outdoor Area"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="flex flex-col items-center justify-center text-gray-400">
                        <span class="text-4xl mb-2">🌳</span>
                        <span class="text-sm font-medium">Outdoor Area</span>
                        <span class="text-xs">Venue Photo 3</span>
                      </div>
                    `;
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE SUMMARY SECTION ===== */}
      <section id="schedule" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">Event Schedule Summary</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
            <p className="text-blue-200 mt-3 text-xs md:text-sm">2 July 2026 • Harare, Zimbabwe</p>
            <Link href="/schedule" className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition text-sm font-medium underline">
              View Full Detailed Schedule →
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {scheduleSummary.map((item, idx) => {
              let bgClass = "bg-white/5 hover:bg-white/10";
              let borderClass = "";
              
              if (item.type === "registration") {
                bgClass = "bg-yellow-500/10 border-l-4 border-yellow-500";
              } else if (item.type === "break") {
                bgClass = "bg-gray-500/10 border-l-4 border-gray-400";
              } else if (item.type === "special") {
                bgClass = "bg-green-500/10 border-l-4 border-green-500";
              } else if (item.type === "end") {
                bgClass = "bg-red-500/10 border-l-4 border-red-500";
              }
              
              return (
                <div key={idx} className={`p-3 md:p-4 rounded-lg mb-2 transition ${bgClass}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="text-white font-bold text-xs md:text-sm sm:w-28 flex-shrink-0">
                      {item.time}
                    </div>
                    <div className="flex-1 min-w-0 ">
                      <div className="text-white font-semibold text-sm md:text-base break-words">
                        {item.title}
                      </div>
                      {item.type === "session" && (
                        <div className="text-xs text-blue-300 mt-0.5">Panel Discussion • Featured Speakers</div>
                      )}
                      {item.type === "registration" && (
                        <div className="text-xs text-yellow-300 mt-0.5">Check-in & Welcome Coffee</div>
                      )}
                    </div>
                    {item.type === "session" && (
                      <span className="text-[10px] bg-blue-500/20 text-white px-2 py-0.5 rounded-full whitespace-nowrap">Session</span>
                    )}
                    {item.type === "break" && (
                      <span className="text-[10px] bg-gray-400/20 text-white px-2 py-0.5 rounded-full whitespace-nowrap">Break</span>
                    )}
                    {item.type === "special" && (
                      <span className="text-[10px] bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full whitespace-nowrap">Special</span>
                    )}
                    {item.type === "registration" && (
                      <span className="text-[10px] bg-yellow-500/20 text-white px-2 py-0.5 rounded-full whitespace-nowrap">Registration</span>
                    )}
                    {item.type === "end" && (
                      <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full whitespace-nowrap">End</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-8 md:mt-10">
            <Link 
              href="/register" 
              className="inline-block bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Register →
            </Link>
          </div>
        </div>
      </section>

      

      <Footer/>
    </>
  );
}
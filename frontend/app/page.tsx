"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

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
              href="/resolutions" 
              className={`hidden md:inline-block transition-all duration-300 ${
                scrolled 
                  ? "bg-red-600 hover:bg-red-800 text-white px-4 py-2 text-sm"
                  : "bg-red-600 hover:bg-red-800 text-white px-5 py-2 text-base"
              } rounded-full font-semibold hover:shadow-lg hover:scale-105`}
            >
              View Symposium Resolutions →
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
        
        <div className="relative z-10 text-left px-4 md:px-8 lg:px-12 max-w-6xl mx-auto w-full pt-60 md:pt-60 lg:pt-73 pb-16">
          <p className="text-lg lg:text-2xl text-gray-300 mb-3 md:mb-4">
            Brought to you by <a href="https://www.africapaciti.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Africapaciti</a> &amp; The Chamber of Chinese Enterprises in Zimbabwe
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
              href="/resolutions" 
              className="bg-red-600 text-white px-5 md:px-7 py-3 md:py-2.5 rounded-full text-sm md:text-base font-bold hover:bg-red-900 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Resolutions
            </Link>
            <Link 
              href="/remarks" 
              className="bg-yellow-500 text-black px-5 md:px-7 py-3 md:py-2.5 rounded-full text-sm md:text-base font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Speeches &amp; Remarks
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
          </div>
        </div>
      </section>

      {/* ===== POST-EVENT SUCCESS HIGHLIGHTS & STATS ===== */}
      <section id="success-highlights" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* Main Statement */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              A Resounding Success
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              The Inaugural Zimbabwe-China Investment Symposium was a resounding success, establishing key strategic alignments to expand bilateral trade and industrial growth. Bringing together senior cabinet ministers, leading financial groups, and close to eighty Chinese and Zimbabwean enterprises, the high-level meeting sparked intensive policy discussions, structural agreements, and immediate cross-border networks.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
              <span className="text-red-600 font-extrabold text-3xl md:text-4xl mb-2">420+</span>
              <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider mb-1">Registrations</h4>
              <p className="text-gray-500 text-xs">Delegates driving high-level bilateral trade channels.</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
              <span className="text-red-600 font-extrabold text-3xl md:text-4xl mb-2">US$10B</span>
              <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider mb-1">Cumulative FDI</h4>
              <p className="text-gray-500 text-xs">Establishing China as Zimbabwe's largest source of FDI.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
              <span className="text-red-600 font-extrabold text-3xl md:text-4xl mb-2">US$4.4B</span>
              <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider mb-1">Bilateral Trade</h4>
              <p className="text-gray-500 text-xs">Record 2025 volumes with a $740M surplus for Zim.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
              <span className="text-red-600 font-extrabold text-3xl md:text-4xl mb-2">1,750+</span>
              <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider mb-1">Licensed Projects</h4>
              <p className="text-gray-500 text-xs">ZIDA-licensed investments over the past 4-5 years.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm col-span-1 sm:col-span-2 lg:col-span-1">
              <span className="text-red-600 font-extrabold text-3xl md:text-4xl mb-2">1M+</span>
              <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider mb-1">Local Jobs</h4>
              <p className="text-gray-500 text-xs">Direct and indirect jobs generated across active partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXECUTIVE SUMMARY SECTION ===== */}
      <section className="py-12 md:py-16 bg-slate-900 border-t border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
          <div className="bg-gray-800 p-8 md:p-12 rounded-3xl shadow-md border border-gray-100">
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2 block">Official Report Excerpt</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Executive Summary</h2>
            
            <div className="space-y-4 text-white leading-relaxed text-base md:text-lg">
              <p>
                The inaugural <strong>Zimbabwe-China Investment Symposium 2026</strong> was held in Harare on 2 July 2026 under the theme <em className="text-red-600">"Strengthening Relations to Unlock Zimbabwe's Potential."</em> It was convened by Africapaciti Investment Group in partnership with the Chamber of Chinese Enterprises in Zimbabwe (CCEZ), with the support of the Embassy of the People's Republic of China and the Office of the President and Cabinet. It brought together Cabinet Ministers, Ministers of State for Provincial Affairs and Devolution, senior government officials, the Ambassador of the People's Republic of China, traditional leaders, development partners, financial institutions, and close to eighty Chinese and Zimbabwean enterprises. The event was described from the podium as the first Zimbabwe-China engagement of its kind driven primarily business-to-business rather than government-to-government, with organisers committing to an annual platform.
              </p>
              <p>
                The Symposium took stock of a mature and expanding economic relationship. Cumulative Chinese foreign direct investment in Zimbabwe was put at approximately <span className='underline font-bold'>US$10 billion</span>, making China the country's largest source of FDI. Bilateral trade reached a record <span className='underline font-bold'>US$4.4 billion</span> in 2025, up 15.2 percent year-on-year, with Zimbabwe recording a trade surplus of about <span className='underline font-bold'>US$740 million</span>, and Chinese investment and trade were credited with creating close to one million local jobs. ZIDA reported having licensed approximately 1,750 Chinese investments over the past four to five years, with active investments valued at about <span className='underline font-bold'>US$5.5 billion</span>, led by mining, manufacturing, construction, and energy.
              </p>
              <p>
                Across the day, several themes recurred independently across multiple speakers and sessions: alignment of Chinese investment with NDS2 and a shift from raw material exports toward value addition and beneficiation; China's unilateral, two-year zero-tariff window for African exports; the investment environment (including the Reserve Bank's "capital in, capital out" repatriation framework and ZIDA's one-stop investment services); land and mining governance; and skills and technology transfer.
              </p>
              <p>
                Concrete outcomes included the signing of an investment and partnership agreement between China Tobacco Company and Tian Ze Tobacco Company; the announcement of a planned 100,000-tonne-per-annum lithium sulphate plant; and the adoption of thirteen recommendations to be reviewed at the next annual symposium.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-gray-100">
              <Link 
                href="/remarks" 
                className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition"
              >
                Read Official Remarks &amp; Speeches →
              </Link>
              <Link 
                href="/resolutions" 
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition border border-gray-50"
              >
                Read 13 Key Resolutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
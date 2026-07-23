"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function ResolutionsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-xl py-2 md:py-3" : "backdrop-blur-lg md:bg-transparent md:backdrop-blur-none py-3 md:py-5"
      }`}>
        <div className="container mx-auto px-4 md:px-8 lg:px-17">
          <div className="flex md:justify-between items-center relative">
            <div className="flex gap-9 mx-auto md:mx-0">
              <Link href="/" className="flex items-center justify-center md:justify-start gap-2 md:gap-3 group">
                <img src="/Zimchina.webp" alt="Logo" className="h-35 md:h-49 w-auto" />
              </Link>
              <Link href="/" className="flex items-center justify-center md:justify-start gap-2 md:gap-3 group">
                <img src="/chamberlogo.webp" alt="Logo" className="h-35 md:h-49 w-auto" />
              </Link>
            </div>
            <Link href="/schedule" className={`hidden md:inline-block bg-red-600 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-red-700 transition`}>
              View Event Schedule →
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative pt-62 pb-16 md:pt-60 md:pb-20 bg-gradient-to-br from-red-900 to-blue-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Symposium Resolutions</h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-blue-200">
              The 13 Thematic Recommendations &amp; Accountability Framework
            </p>
          </div>
        </div>
      </section>

      {/* ===== RESOLUTIONS CONTENT ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:text-red-600 mb-6 transition font-medium">
              <FaArrowLeft size={14} /> Back to Home
            </Link>

            {/* Note Panel */}
            <div className="mb-8">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-black">A ACTIONABLE BLUEPRINT</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md uppercase">
                      Official policy resolutions adopted at the closing plenary session of the Zimbabwe-China Investment Symposium.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme 1 - Investment Climate */}
            <div className="mb-6">
              <div className="bg-blue-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">THEME 1: INVESTMENT CLIMATE &amp; POLICY ENVIRONMENT</h3>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-b-lg p-4 space-y-3">
                {[
                  { id: "Resolution 1", text: "Task <span class='font-bold text-blue-700'>ZIDA</span> to conduct prior structural consultations with key investor associations (such as CCEZ) before enacting new industrial, mining, or fiscal policy frameworks." },
                  { id: "Resolution 2", text: "Expedite and simplify capital injection registration and subsequent dividend repatriation workflows through coordinated <span class='font-bold text-blue-700'>ZIDA</span> and <span class='font-bold text-blue-700'>RBZ</span> dedicated desks." },
                  { id: "Resolution 3", text: "Standardize tax compliance requirements and streamline customs procedures through joint <span class='font-bold text-blue-700'>ZIMRA-CCEZ</span> working groups to resolve operational logjams." },
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-1 border-b border-blue-200 last:border-0">
                    <div className="sm:col-span-1">
                      <span className="text-md font-bold text-blue-700">{item.id}</span>
                    </div>
                    <div className="sm:col-span-3">
                      <span className="text-black text-md" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Theme 2 - Trade Policy */}
            <div className="mb-6">
              <div className="bg-green-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">THEME 2: TRADE &amp; ZERO-TARIFF MARKET ACCESS</h3>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-b-lg p-4 space-y-3">
                {[
                  { id: "Resolution 4", text: "Maximize benefits of China's <span class='font-bold text-green-700'>Zero-Tariff</span> policy by systematically mapping and publicizing eligible agricultural, horticultural, and processed export lines." },
                  { id: "Resolution 5", text: "Co-invest in critical trade-facilitating logistics, including cold-chain storage facilities, regional phytosanitary compliance labs, and trade processing centers." },
                  { id: "Resolution 6", text: "Coordinate with the <span class='font-bold text-green-700'>Agricultural Marketing Authority (AMA)</span> to fast-track negotiations on outstanding citrus, avocado, and chili protocols." },
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-1 border-b border-green-200 last:border-0">
                    <div className="sm:col-span-1">
                      <span className="text-md font-bold text-green-700">{item.id}</span>
                    </div>
                    <div className="sm:col-span-3">
                      <span className="text-black text-md" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Theme 3 - Mining & Beneficiation */}
            <div className="mb-6">
              <div className="bg-amber-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">THEME 3: MINING STRATEGY &amp; VALUE ADDITION</h3>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-b-lg p-4 space-y-3">
                {[
                  { id: "Resolution 7", text: "Accelerate domestic value addition and localized mineral processing (such as lithium chemical precursor production) rather than exporting raw ores." },
                  { id: "Resolution 8", text: "Establish standardized environmental and operational compliance codes of practice for heap-leach operations and open-cast gold mining." },
                  { id: "Resolution 9", text: "Deploy green mining practices to prevent heavy metal runoffs, safeguarding clean water sources shared by downstream agricultural and local communities." },
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-1 border-b border-amber-200 last:border-0">
                    <div className="sm:col-span-1">
                      <span className="text-md font-bold text-amber-700">{item.id}</span>
                    </div>
                    <div className="sm:col-span-3">
                      <span className="text-black text-md" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Theme 4 - Land & Rural Development */}
            <div className="mb-6">
              <div className="bg-emerald-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">THEME 4: LAND MANAGEMENT &amp; RURAL DEVELOPMENT</h3>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-b-lg p-4 space-y-3">
                {[
                  { id: "Resolution 10", text: "Standardize title structures and joint-venture frameworks on agricultural land to guarantee structural investment security for large-scale agro-projects." },
                  { id: "Resolution 11", text: "Formulate balanced, localized dispute-resolution mechanisms to manage overlap conflicts arising between surface agricultural rights and mineral concession rights." },
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-1 border-b border-emerald-200 last:border-0">
                    <div className="sm:col-span-1">
                      <span className="text-md font-bold text-emerald-700">{item.id}</span>
                    </div>
                    <div className="sm:col-span-3">
                      <span className="text-black text-md" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Theme 5 - Immigration & Corporate Stewardship */}
            <div className="mb-6">
              <div className="bg-purple-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">THEME 5: IMMIGRATION, LABOUR &amp; CSR</h3>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-b-lg p-4 space-y-3">
                {[
                  { id: "Resolution 12", text: "Expedite multi-year investor visas and clear professional permit structures for technical personnel via specialized immigration channels." },
                  { id: "Resolution 13", text: "Align corporate social investment activities with local community-led priorities under the guidance of the Ministry of Industry and Commerce CSR framework." },
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-1 border-b border-purple-200 last:border-0">
                    <div className="sm:col-span-1">
                      <span className="text-md font-bold text-purple-700">{item.id}</span>
                    </div>
                    <div className="sm:col-span-3">
                      <span className="text-black text-md" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="text-center mt-12 bg-gradient-to-br from-red-900 to-blue-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Explore the Agenda</h3>
              <p className="text-blue-200 mb-4 text-md">Review the chronological sequence of sessions that shaped these resolutions.</p>
              <Link href="/schedule" className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition hover:scale-105 text-md">
                View Event Schedule →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
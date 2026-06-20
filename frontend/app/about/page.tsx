"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== NAVBAR - ONLY THIS CHANGED ===== */}
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
            <Link href="/register" className={`hidden md:inline-block bg-red-600 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-red-700 transition`}>
              Register for the Symposium →
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== ABOUT HERO ===== */}
      <section className="relative pt-62 pb-16 md:pt-60 md:pb-20 bg-gradient-to-br from-red-900 to-blue-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About the Symposium</h1>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-blue-200">
              Strengthening Relations to Unlock Zimbabwe's Potential
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* What is it */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">What is the Zimbabwe-China Investment Symposium?</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Zimbabwe-China Investment Symposium is a high-level strategic platform designed to deepen bilateral relations between the Republic of Zimbabwe and the People's Republic of China through enhanced trade, investment, knowledge exchange, and sustainable economic cooperation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As Zimbabwe continues to pursue its National Development Strategy 2 (NDS2) and Vision 2030 objectives, the symposium seeks to create meaningful engagement between government leaders, investors, development partners, financial institutions, industry captains, and policymakers from both countries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The symposium recognises the longstanding diplomatic and economic ties between Zimbabwe and China and aims to leverage these relations to unlock new opportunities for inclusive growth, industrialisation, infrastructure development, technology transfer, and job creation.
              </p>
            </div>

            {/* Purpose */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Purpose</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed">
                The symposium seeks to facilitate dialogue and collaboration between key stakeholders to identify and unlock investment opportunities across priority sectors of Zimbabwe's economy while promoting a conducive environment for Chinese investment and strategic partnerships.
              </p>
            </div>

            {/* Objectives */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Strategic Objectives</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Strengthen Relations", desc: "Strengthen economic and diplomatic relations between Zimbabwe and China" },
                  { title: "Promote Investment", desc: "Promote Zimbabwe as a preferred investment destination" },
                  { title: "Showcase Opportunities", desc: "Showcase investment opportunities across key sectors of the economy" },
                  { title: "Align with NDS2", desc: "Align investment opportunities with Zimbabwe's National Development Strategy 2" },
                  { title: "Foster Partnerships", desc: "Foster strategic partnerships between Zimbabwean and Chinese businesses" },
                  { title: "Policy Dialogue", desc: "Facilitate discussions on investment policies, incentives, and regulatory frameworks" },
                  { title: "Knowledge Sharing", desc: "Encourage knowledge sharing and technology transfer" },
                  { title: "Provincial Development", desc: "Promote provincial development and decentralised investment opportunities" },
                  { title: "Identify Solutions", desc: "Identify practical solutions to challenges affecting trade and investment" },
                  { title: "Actionable Recommendations", desc: "Develop actionable recommendations for strengthening long-term Zimbabwe-China cooperation" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-xl border-l-4 border-gold-500">
                    <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Key Focus Areas</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The symposium will feature keynote presentations, panel discussions, investment showcases, and networking opportunities centred around the following thematic areas:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Investment incentives and tax rebates",
                  "Special Economic Zones and investment regulations",
                  "Access to finance and financial inclusion",
                  "Currency stability and capital repatriation",
                  "China's zero-tariff trade policy",
                  "Trade facilitation and export promotion",
                  "Mining and mineral beneficiation",
                  "Infrastructure development",
                  "Tourism and hospitality development",
                  "Provincial economic opportunities",
                  "Land management and rural development",
                  "Immigration policies for investors",
                  "Skills development and human capital enhancement",
                  "Sustainable development and responsible investment practices"
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-gray-700 text-sm">• {item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Expected Outcomes</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Enhanced collaboration between Zimbabwean and Chinese stakeholders",
                  "Increased awareness of investment opportunities in Zimbabwe",
                  "New business partnerships and investment commitments",
                  "Strengthened public-private sector engagement",
                  "Improved understanding of Zimbabwe's investment environment",
                  "Recommendations for policy enhancement and investment facilitation",
                  "Increased participation of provincial economies in attracting foreign direct investment",
                  "Frameworks for continued engagement between stakeholders beyond the symposium"
                ].map((item, idx) => (
                  <div key={idx} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-gray-700 text-sm">✅ {item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Target Audience</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-6">
                The symposium will bring together:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Senior government officials",
                  "Diplomatic representatives",
                  "Chinese and Zimbabwean investors",
                  "Business leaders and entrepreneurs",
                  "Financial institutions",
                  "Development partners",
                  "Industry associations and chambers of commerce",
                  "Provincial government representatives",
                  "Regulatory authorities",
                  "Academia and research institutions",
                  "Small and medium enterprises",
                  "Media organisations"
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-gray-700 text-sm">👤 {item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Zimbabwe */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Why Zimbabwe?</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zimbabwe stands at the cusp of a new era of economic prosperity. With a wealth of natural resources, 
                a skilled workforce, and a strategic location in Southern Africa, the country offers unparalleled 
                investment opportunities under the "Zimbabwe is Open for Business" policy.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { value: "$12.5B+", label: "Investment Pipeline" },
                  { value: "28M", label: "Regional Market Access" },
                  { value: "45+", label: "Minerals & Resources" },
                  { value: "10+", label: "SEZs Established" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl md:text-2xl font-bold text-red-600">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why China */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Why China?</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed">
                As Zimbabwe's largest trading partner and a key ally under the Belt and Road Initiative, 
                China brings unparalleled capital, technology, and expertise. The symposium serves as a bridge 
                to connect Chinese enterprise with Zimbabwean opportunity, creating a win-win partnership 
                for mutual prosperity and sustainable development.
              </p>
            </div>

            {/* ===== AFRICAPACITI SECTION ===== */}
            <div className="mb-12 mt-16">
              <div className="flex items-center gap-4 mb-6">
                <img src="/africapaciti.png" alt="Africapaciti" className="h-12 md:h-16 w-auto" />
                <div className="w-16 h-1 bg-gold-500"></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Why Africapaciti?</h2>
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Africapaciti</strong> is a premier investment advisory firm dedicated to bridging the gap between international investors and Africa's most promising markets. With deep expertise in the Zimbabwean investment landscape, Africapaciti provides comprehensive support to foreign investors seeking to navigate the country's business environment.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">🤝</div>
                    <h4 className="font-bold text-black">Investor Support</h4>
                    <p className="text-sm text-gray-600">End-to-end guidance for foreign investors, from market entry to operational success</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">📋</div>
                    <h4 className="font-bold text-black">Regulatory Navigation</h4>
                    <p className="text-sm text-gray-600">Expert assistance with compliance, licensing, and regulatory requirements</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">🔗</div>
                    <h4 className="font-bold text-black">Strategic Partnerships</h4>
                    <p className="text-sm text-gray-600">Connecting investors with key stakeholders, partners, and opportunities</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">🌍</div>
                    <h4 className="font-bold text-black">Market Intelligence</h4>
                    <p className="text-sm text-gray-600">In-depth market research and intelligence to inform investment decisions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== CHAMBER SECTION ===== */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <img src="/chamberlogo.webp" alt="The Chamber of Chinese Enterprises in Zimbabwe" className="h-12 md:h-16 w-auto" />
                <div className="w-16 h-1 bg-gold-500"></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">The Chamber of Chinese Enterprises in Zimbabwe</h2>
              <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>The Chamber of Chinese Enterprises in Zimbabwe (CCEZ)</strong> is the official representative body for Chinese businesses operating in Zimbabwe. With over 100 member companies across various sectors, the Chamber serves as a vital bridge between the Chinese business community and Zimbabwean stakeholders.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">🏢</div>
                    <h4 className="font-bold text-black">100+ Member Companies</h4>
                    <p className="text-sm text-gray-600">Representing diverse sectors including mining, infrastructure, manufacturing, and services</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">🤝</div>
                    <h4 className="font-bold text-black">B2B & B2G Facilitation</h4>
                    <p className="text-sm text-gray-600">Creating meaningful connections between Chinese enterprises and Zimbabwean partners</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-bold text-black">Investment Promotion</h4>
                    <p className="text-sm text-gray-600">Actively promoting Chinese investment into Zimbabwe's key economic sectors</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl mb-2">🌐</div>
                    <h4 className="font-bold text-black">Cultural Bridge</h4>
                    <p className="text-sm text-gray-600">Fostering cultural understanding and strengthening economic ties between the two nations</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
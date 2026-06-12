"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-xl py-2 md:py-3" : "bg-black/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none py-3 md:py-5"
      }`}>
        <div className="container mx-auto px-4 md:px-8 lg:px-17">
          <div className="flex md:justify-between items-center relative">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 md:gap-3 group mx-auto md:mx-0">
              <img src="/Zimchina logo.png" alt="Logo" className="h-10 md:h-14 w-auto" />
            </Link>
            <Link href="/reserve" className={`hidden md:inline-block bg-red-600 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-red-700 transition`}>
              Reserve Seat →
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== ABOUT HERO ===== */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-red-900 to-blue-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About the Symposium</h1>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-blue-200">
              Unlocking Zimbabwe's potential through strategic partnership with China
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
                The Zimbabwe-China Investment Symposium is a premier high-level forum dedicated to strengthening economic ties, 
                fostering strategic partnerships, and unlocking investment opportunities between Zimbabwe and the People's Republic of China.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Now in its inaugural year, the symposium brings together government officials, business leaders, investors, 
                and policymakers to explore mutually beneficial opportunities across key sectors including infrastructure, 
                energy, mining, agriculture, manufacturing, and technology.
              </p>
            </div>

            {/* Objectives */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Strategic Objectives</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Attract Investment", desc: "Showcase Zimbabwe's investment potential to Chinese investors and corporations" },
                  { title: "Policy Dialogue", desc: "Facilitate high-level discussions on investment policies and regulatory frameworks" },
                  { title: "Partnership Building", desc: "Create meaningful B2B and B2G connections between Zimbabwean and Chinese entities" },
                  { title: "Knowledge Exchange", desc: "Share best practices in technology, innovation, and sustainable development" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-xl border-l-4 border-gold-500">
                    <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
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

            {/* Event Details Box */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-2xl p-8 text-white mt-8">
              <h3 className="text-2xl font-bold mb-4">Event at a Glance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gold-400 font-semibold">📅 Date</p>
                  <p className="mb-3">25 June 2026</p>
                  <p className="text-gold-400 font-semibold">📍 Venue</p>
                  <p>Golden Conifer Conference Centre, Harare</p>
                </div>
                <div>
                  <p className="text-gold-400 font-semibold">👥 Attendees</p>
                  <p className="mb-3">Government Officials, CEOs, Investors, Policy Makers</p>
                  <p className="text-gold-400 font-semibold">🌐 Format</p>
                  <p>In-Person • By Invitation Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-navy-900 text-gray-400 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-17">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <img src="/Zimchina logo.png" height="160" width="160" className="bg-white rounded-3xl"/>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed mt-4">Building Strategic Partnerships</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><Link href="/about" className="text-gold-400 hover:text-gold-300 transition">About</Link></li>
                <li><Link href="/panelists" className="text-gold-400 hover:text-gold-300 transition">Panelists</Link></li>
                <li><Link href="/reserve" className="text-gold-400 hover:text-gold-300 transition">Reserve Seat</Link></li>
                <li><a href="#schedule" className="text-gold-400 hover:text-gold-300 transition">Schedule</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Contact</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li className="flex gap-2 break-all">📞 +263 242 778 899</li>
                <li className="flex gap-2 break-all">✉️ info@zimchinasymposium.com</li>
                <li className="flex gap-2">📍 Harare, Zimbabwe</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Follow Us</h4>
              <div className="flex gap-3 md:gap-4">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-navy-800 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-navy-700 transition text-sm md:text-xl">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-navy-800 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-navy-700 transition text-sm md:text-xl">
                  <FaTwitter />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-navy-800 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-navy-700 transition text-sm md:text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-navy-800 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-300 hover:bg-navy-700 transition text-sm md:text-xl">
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
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function PanelistsPage() {
  const [scrolled, setScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const panelists = [
    {
      name: "Hon. Prof. Mthuli Ncube",
      title: "Minister of Finance, Economic Development & Investment Promotion",
      organization: "Government of Zimbabwe",
      topic: "Keynote: Zimbabwe's Investment Landscape",
      achievements: "Oxford-trained economist, former AfDB Chief Economist",
    },
    {
      name: "H.E. Zhou Ding",
      title: "Ambassador of China to Zimbabwe",
      organization: "Embassy of the People's Republic of China",
      topic: "China-Africa Cooperation under FOCAC",
      achievements: "Career diplomat with extensive Africa experience",
    },
    {
      name: "Dr. John Mushayavanhu",
      title: "Governor",
      organization: "Reserve Bank of Zimbabwe",
      topic: "Monetary Policy & Investment Climate",
      achievements: "Former CBZ Holdings CEO, Banking veteran",
    },
    {
      name: "Ms. Tinashe Machaka",
      title: "CEO",
      organization: "Zimbabwe Investment & Development Agency (ZIDA)",
      topic: "One-Stop Investment Services",
      achievements: "Driving investment facilitation reforms",
    },
    {
      name: "Mr. Liu Dian",
      title: "Executive Director",
      organization: "China Council for the Promotion of International Trade (CCPIT)",
      topic: "Chinese Enterprise Expansion into Africa",
      achievements: "Leading China-Africa trade initiatives",
    },
    {
      name: "Dr. Chen Xiaodong",
      title: "Vice President",
      organization: "China-Africa Development Fund",
      topic: "Financing Major Infrastructure Projects",
      achievements: "$5B+ in African investments",
    },
    {
      name: "Hon. Dr. Anxious Masuka",
      title: "Minister of Lands, Agriculture, Fisheries & Rural Development",
      organization: "Government of Zimbabwe",
      topic: "Land Management & Agricultural Transformation",
      achievements: "Agricultural economist, policy architect",
    },
    {
      name: "Ms. Barbara Murasiranwa",
      title: "Group Head of Investments",
      organization: "Africapaciti Holdings",
      topic: "Corporate Citizenship & Community Development",
      achievements: "20+ years in investment banking",
    },
  ];

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

      {/* ===== PANELISTS HERO ===== */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-navy-900 to-blue-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Meet Our Panelists</h1>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-blue-200">
              Distinguished leaders shaping the future of Zimbabwe-China relations
            </p>
          </div>
        </div>
      </section>

      {/* ===== PANELISTS GRID ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {panelists.map((panelist, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Placeholder Image - No image source */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👤</div>
                    <div className="text-gray-400 text-sm">Speaker Photo</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-black text-lg leading-tight mb-1">{panelist.name}</h3>
                  <p className="text-red-600 text-sm font-semibold mb-1">{panelist.title}</p>
                  <p className="text-gray-500 text-xs mb-3">{panelist.organization}</p>
                  
                  <div className="bg-gold-50 rounded-lg p-3 mb-3">
                    <p className="text-xs text-gray-700">
                      <span className="font-semibold text-gold-600">Topic:</span> {panelist.topic}
                    </p>
                  </div>
                  
                  <p className="text-xs text-gray-500 italic">
                    {panelist.achievements}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* More Coming Soon */}
          <div className="text-center mt-12 p-8 bg-gray-50 rounded-2xl">
            <p className="text-gray-600">+ Additional panelists to be announced</p>
            <p className="text-sm text-gold-600 mt-2">Stay tuned for updates</p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join These Distinguished Leaders</h2>
          <p className="text-blue-200 mb-6">Secure your seat at the premier investment symposium</p>
          <Link href="/reserve" className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition">
            Reserve Your Seat →
          </Link>
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
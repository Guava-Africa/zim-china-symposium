"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PanelistsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const panelists = [
    // Session 1 - Opening Ceremony
    {
      name: "Hon. Sen. C.Z. Tawengwa",
      title: "Minister of State for Provincial Affairs and Devolution",
      organization: "Government of Zimbabwe",
      topic: "Welcome Remarks",
      achievements: "Provincial development and devolution",
    },
    {
      name: "Mrs. Tsungai Muguti",
      title: "Group Chief Executive Officer",
      organization: "Africapaciti Investment Group",
      topic: "Opening Remarks",
      achievements: "Investment advisory and strategic partnerships",
    },
    {
      name: "H.E. Ambassador Zhou",
      title: "Ambassador of China to Zimbabwe",
      organization: "Embassy of the People's Republic of China",
      topic: "Remarks on behalf of the Government of China",
      achievements: "Strengthening China-Zimbabwe bilateral relations",
    },
    {
      name: "Hon. Eng. Tafadzwa Muguti",
      title: "Permanent Secretary for Presidential Affairs and Devolution",
      organization: "Office of the President",
      topic: "Chinese Participation in Provincial Economies",
      achievements: "Devolution and provincial development",
    },
    {
      name: "Dr. W. Manungo",
      title: "Deputy Chief Secretary",
      organization: "Office of the President and Cabinet",
      topic: "Aligning Chinese Investments with NDS2",
      achievements: "National Development Strategy implementation",
    },
    {
      name: "Hon. July Moyo",
      title: "Minister of Energy and Power Development",
      organization: "Government of Zimbabwe",
      topic: "Keynote Address",
      achievements: "Energy sector development and policy",
    },

    // Session 2 - Investment Environment
    {
      name: "Mr. Andy Hodges",
      title: "Group Head of Investments and Advisory Services",
      organization: "Africapaciti Investment Group",
      topic: "Moderator: Investment Environment Plenary",
      achievements: "20+ years in investment advisory",
    },
    {
      name: "Hon. Deputy Minister of Finance",
      title: "Deputy Minister of Finance, Economic Development and Investment Promotion",
      organization: "Government of Zimbabwe",
      topic: "Investment Incentives and Tax Rebates",
      achievements: "Economic policy and fiscal management",
    },
    {
      name: "Mr. Zhang Guangyi",
      title: "Vice President",
      organization: "Chamber of Chinese Enterprises in Zimbabwe",
      topic: "Investment Environment for Chinese Investors",
      achievements: "Chinese business community leadership",
    },
    {
      name: "RBZ Deputy Governor",
      title: "Deputy Governor",
      organization: "Reserve Bank of Zimbabwe",
      topic: "Currency Stability and Capital Repatriation",
      achievements: "Monetary policy and financial stability",
    },
    {
      name: "ZIDA Chief Executive Officer",
      title: "CEO",
      organization: "Zimbabwe Investment and Development Agency (ZIDA)",
      topic: "Investment Facilitation and SEZs",
      achievements: "Investment promotion and facilitation",
    },
    {
      name: "FIU Director General",
      title: "Director General",
      organization: "Financial Intelligence Unit (FIU)",
      topic: "Anti-Money Laundering Compliance",
      achievements: "Financial intelligence and compliance",
    },
    {
      name: "ZIMRA Commissioner General",
      title: "Commissioner General",
      organization: "Zimbabwe Revenue Authority (ZIMRA)",
      topic: "Taxation and Revenue Administration",
      achievements: "Revenue policy and tax administration",
    },

    // Session 3 - Zero Tariffs
    {
      name: "Director for Trade",
      title: "Director for Trade",
      organization: "Embassy of the People's Republic of China",
      topic: "Unpacking China's Zero Tariffs Trade Policy",
      achievements: "Trade policy and promotion",
    },
    {
      name: "Mr. Allan Majuru",
      title: "Chief Executive Officer",
      organization: "ZimTrade",
      topic: "Moderator: Zero Tariffs Plenary",
      achievements: "Export development and trade facilitation",
    },
    {
      name: "Mr. S. Kuvarika",
      title: "Chief Executive Officer",
      organization: "Confederation of Zimbabwe Industries (CZI)",
      topic: "Zero Tariffs: Industrial Perspective",
      achievements: "Industrial policy and manufacturing",
    },
    {
      name: "Mr. C. Isaya",
      title: "Chief Executive Officer",
      organization: "AMA",
      topic: "Zero Tariffs: Agricultural Perspective",
      achievements: "Agricultural development and exports",
    },
    {
      name: "Mr. T. Chimedza",
      title: "Head of Business Development",
      organization: "TIMB",
      topic: "Zero Tariffs: Mining Perspective",
      achievements: "Mining and mineral beneficiation",
    },
    {
      name: "Ms. Shanel Liu",
      title: "Representative",
      organization: "Chamber of Chinese Enterprises in Zimbabwe",
      topic: "Zero Tariffs: Business Community Perspective",
      achievements: "Chinese business community leadership",
    },
    {
      name: "Mr. Solomon Nyanhongo",
      title: "Chief Executive",
      organization: "Stanbic Bank Zimbabwe",
      topic: "Zero Tariffs: Banking Sector Perspective",
      achievements: "Banking and financial services",
    },

    // Session 5 - Mining Address
    {
      name: "Hon. I. Kambamura",
      title: "Minister of Mines and Mining Development",
      organization: "Government of Zimbabwe",
      topic: "Zimbabwe's Mining and Mining Development Strategy (NDS2)",
      achievements: "Mining sector policy and development",
    },

    // Session 6 - Mining Plenary
    {
      name: "Ms. Sekai",
      title: "Chief Executive Officer",
      organization: "Confederation of Zimbabwe Industries (CZI)",
      topic: "Moderator: Mining Investment Plenary",
      achievements: "Industrial development and leadership",
    },
    {
      name: "Mr. Zhou Xuegong",
      title: "Chief Executive Officer",
      organization: "Jinnan Group",
      topic: "Mining Investment Opportunities",
      achievements: "Chinese mining investment in Zimbabwe",
    },
    {
      name: "Mr. Gong Xuedong",
      title: "Chairman",
      organization: "Lithium Producer Association",
      topic: "Lithium Mining and Beneficiation",
      achievements: "Lithium mining sector development",
    },
    {
      name: "Chamber of Mines CEO",
      title: "Chief Executive Officer",
      organization: "Chamber of Mines Zimbabwe",
      topic: "Mining Sector Overview",
      achievements: "Mining industry representation",
    },

    // Session 7 - Tourism Address
    {
      name: "Hon. B. Rwodzi",
      title: "Minister of Tourism and Hospitality",
      organization: "Government of Zimbabwe",
      topic: "Re-Defining Zimbabwe's Tourism and Hospitality Strategy",
      achievements: "Tourism policy and development",
    },

    // Session 8 - Tourism Plenary
    {
      name: "Mr. Chris Mugaga",
      title: "Chief Executive Officer",
      organization: "Zimbabwe National Chamber of Commerce (ZNCC)",
      topic: "Moderator: Tourism Plenary",
      achievements: "Business development and chamber leadership",
    },
    {
      name: "Mr. Zhao Ke",
      title: "Chief Executive Officer",
      organization: "Chinese Zimbabwe Exchange Center",
      topic: "Chinese Cultural and Business Exchange",
      achievements: "China-Zimbabwe cultural and economic exchange",
    },

    // Session 9 - Land Address
    {
      name: "Hon. V. Haritatos",
      title: "Minister of Lands and Rural Development",
      organization: "Government of Zimbabwe",
      topic: "Land Management and Rural Development Strategy",
      achievements: "Land reform and rural development",
    },

    // Session 10 - Land Plenary
    {
      name: "Dr. Ayo Adesola",
      title: "Country Representative",
      organization: "UNDP",
      topic: "Moderator: Land Management Plenary",
      achievements: "Sustainable development and land management",
    },
    {
      name: "Ms. Yu Dongping",
      title: "Chief Executive Officer",
      organization: "Chinese Enterprise in Zimbabwe",
      topic: "Land Management for Investment",
      achievements: "Chinese business investment",
    },
    {
      name: "Dr. Tsitsi Choruma Dozwa",
      title: "Commissioner",
      organization: "Zimbabwe Land Commission",
      topic: "Land Policy and Administration",
      achievements: "Land governance and policy",
    },

    // Session 11 - Immigration
    {
      name: "Ms. R. Gono",
      title: "Chief Director",
      organization: "Zimbabwe Department of Immigration",
      topic: "Unpacking Zimbabwe's Immigration Policy for Investors",
      achievements: "Immigration policy and administration",
    },

    // Session 12 - Resolutions & Closing
    {
      name: "Mrs. Bridget Makani",
      title: "Chief Director, Provincial Economic Planning and Devolution",
      organization: "Department of Presidential Affairs and Devolution",
      topic: "Resolutions and Way Forward",
      achievements: "Economic planning and devolution",
    },
    {
      name: "William Wen",
      title: "Secretary General",
      organization: "Chamber of Chinese Enterprises in Zimbabwe",
      topic: "Closing Remarks and Vote of Thanks",
      achievements: "Chinese business community leadership",
    },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-xl py-2 md:py-3" : "backdrop-blur-sm md:bg-transparent md:backdrop-blur-none py-3 md:py-5"
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

      {/* ===== PANELISTS HERO ===== */}
      <section className="relative pt-62 pb-16 md:pt-60 md:pb-20 bg-gradient-to-br from-red-900 to-blue-900">
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
                {/* Placeholder Image */}
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
          <Link href="/register" className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition">
            Register for the Symposium →
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
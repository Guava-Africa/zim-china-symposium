"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function SchedulePage() {
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
            <Link href="/register" className={`hidden md:inline-block bg-red-600 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-red-700 transition`}>
              Register for the Symposium →
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative pt-62 pb-16 md:pt-60 md:pb-20 bg-gradient-to-br from-red-900 to-blue-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Full Event Schedule</h1>
            <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-blue-200">
              2 July 2026 • Golden Conifer Conference Centre, Harare
            </p>
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE CONTENT ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:text-red-600 mb-6 transition font-medium">
              <FaArrowLeft size={14} /> Back to Home
            </Link>

            {/* Registration */}
            <div className="mb-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-black">08:00 – 09:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">DELEGATES ARRIVAL AND REGISTRATION</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-black">08:45 – 09:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">BRIEFING OF GUEST OF HONOUR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 1 - Opening Ceremony */}
            <div className="mb-6">
              <div className="bg-red-600 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 1: OPENING CEREMONY</h3>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-b-lg p-4 space-y-3">
                {[
                  { time: "09:00 – 09:05", text: "Opening Prayer" },
                  { time: "09:05 – 09:10", text: "National Anthems (两国国歌)" },
                  { time: "09:10 – 09:15", text: "Kuwomberwa Kwemadzishe / Greeting the Chiefs" },
                  { time: "09:15 – 09:20", text: "Welcome Video - Zimbabwe–China Investment Symposium" },
                  { time: "09:20 – 09:30", text: "Welcome Remarks – <span class='font-bold text-red-700'>Hon. Sen. C.Z. Tawengwa</span> (Minister of State for Provincial Affairs and Devolution)" },
                  { time: "09:30 – 09:40", text: "Opening Remarks – <span class='font-bold text-red-700'>Mrs. Tsungai Muguti</span> (Group Chief Executive Officer, Africapaciti Investment Group)" },
                  { time: "09:40 – 09:50", text: "Welcome Remarks and Introduction of Ambassador – <span class='font-bold text-red-700'>Chairperson of the Chamber of Chinese Enterprises in Zimbabwe</span>" },
                  { time: "09:50 – 10:10", text: "Remarks on behalf of the Government of the People's Republic of China – <span class='font-bold text-red-700'>His Excellency Ambassador Zhou</span> (Ambassador of China to Zimbabwe)" },
                  { time: "10:10 – 10:25", text: "Call for Chinese Participation in Provincial Economies – <span class='font-bold text-red-700'>Hon. Eng. Tafadzwa Muguti</span> (Permanent Secretary for Presidential Affairs and Devolution)" },
                  { time: "10:25 – 10:40", text: "Aligning Chinese Investments with NDS2 – <span class='font-bold text-red-700'>Dr. W. Manungo</span> (Deputy Chief Secretary, Office of the President and Cabinet)" },
                  { time: "10:40 – 11:10", text: "Keynote Address – <span class='font-bold text-red-700'>Hon. July Moyo</span> (Minister of Energy and Power Development)" },
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 py-1 border-b border-red-200 last:border-0">
                    <div className="sm:col-span-1">
                      <span className="text-md font-bold text-red-600">{item.time}</span>
                    </div>
                    <div className="sm:col-span-3">
                      <span className="text-black text-md" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tea Break */}
            <div className="mb-6">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-black">11:10 – 11:35</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">TEA BREAK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 2 - Plenary */}
            <div className="mb-6">
              <div className="bg-blue-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 2: PLENARY – INVESTMENT ENVIRONMENT</h3>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-blue-700">11:35 – 12:10</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Creating and Maintaining an Attractive Investment Environment for Chinese Investors in Zimbabwe</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Moderator:</span> <span className="font-bold text-blue-700">Mr. Andy Hodges</span> (Group Head of Investments and Advisory Services, Africapaciti Investment Group)</p>
                      <p className="text-black text-md"><span className="font-bold">Focus Areas:</span> Investment Incentives • Tax Rebates • Special Economic Zones • Access to Finance • Anti-Money Laundering Laws • Currency Stability • Dividends Repatriation</p>
                      <p className="text-black text-md"><span className="font-bold">Panellists:</span></p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Hon. Deputy Minister of Finance</span> (Government of Zimbabwe)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Mr. Zhang Guangyi</span> (Vice President, Chamber of Chinese Enterprises in Zimbabwe)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Deputy Governor</span> (Reserve Bank of Zimbabwe)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Chief Executive Officer</span> (Zimbabwe Investment and Development Agency)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Director General</span> (Financial Intelligence Unit)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Commissioner General</span> (Zimbabwe Revenue Authority)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 3 - Zero Tariffs */}
            <div className="mb-6">
              <div className="bg-green-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 3: ZERO TARIFFS TRADE POLICY</h3>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-b-lg p-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-green-700">12:10 – 12:25</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Unpacking China's Zero Tariffs Trade Policy – <span className="font-bold text-green-700">Director for Trade</span> (Embassy of the People's Republic of China in Zimbabwe)</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 pt-2 border-t border-green-300">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-green-700">12:25 – 12:55</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Plenary Session on Zero Tariffs</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Moderator:</span> <span className="font-bold text-green-700">Mr. Allan Majuru</span> (Chief Executive Officer, ZimTrade)</p>
                      <p className="text-black text-md"><span className="font-bold">Panellists:</span></p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Mr. S. Kuvarika</span> (Chief Executive Officer, Confederation of Zimbabwe Industries)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Mr. C. Isaya</span> (Chief Executive Officer, Agricultural Marketing Authority)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Mr. T. Chimedza</span> (Head of Business Development, Tobacco Industry and Marketing Board)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Mr. S. Heri</span> (Chairman, Horticultural Development Council)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Ms. Shanel Liu</span> (Chamber of Chinese Enterprises in Zimbabwe)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Mr. Solomon Nyanhongo</span> (Chief Executive, Stanbic Bank Zimbabwe)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signing Ceremony */}
            <div className="mb-6">
              <div className="bg-amber-600 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 4: SIGNING CEREMONY</h3>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-amber-700">12:55 – 13:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">Investment and Partnership Agreement Signing Ceremony</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lunch */}
            <div className="mb-6">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-black">13:00 – 14:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">LUNCH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 5 - Mining Address */}
            <div className="mb-6">
              <div className="bg-amber-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 5: MINING – GOVERNMENT ADDRESS</h3>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-amber-700">14:00 – 14:20</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Zimbabwe's Mining and Mining Development Strategy (National Development Strategy 2) – <span className="font-bold text-amber-700">Hon. I. Kambamura</span> (Minister of Mines and Mining Development)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 6 - Mining Plenary */}
            <div className="mb-6">
              <div className="bg-amber-800 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 6: PLENARY – MINING INVESTMENT</h3>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-amber-700">14:20 – 15:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Unlocking Mining Investment Opportunities in Zimbabwe</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Moderator:</span> <span className="font-bold text-amber-700">Ms. Sekai</span> (Chief Executive Officer, Confederation of Zimbabwe Industries)</p>
                      <p className="text-black text-md"><span className="font-bold">Panellists:</span></p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Chief Executive Officer</span> (Blanket Mining Corporation)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Mr. Zhou Xuegong</span> (Chief Executive Officer, Jinnan Group)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Mr. Gong Xuedong</span> (Chairman, Lithium Producer Association)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Chief Executive Officer</span> (Chamber of Mines Zimbabwe)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Hon. Dr. J. Muswere</span> (Ministry of Skills Development)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Hon. E. Chadzamira</span> (Masvingo Provincial Government)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Hon. Adv. I. Ndudzo</span> (Mashonaland East Provincial Government)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 7 - Tourism Address */}
            <div className="mb-6">
              <div className="bg-teal-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 7: TOURISM – GOVERNMENT ADDRESS</h3>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-teal-700">15:00 – 15:20</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Re-Defining Zimbabwe's Tourism and Hospitality Strategy – <span className="font-bold text-teal-700">Hon. B. Rwodzi</span> (Minister of Tourism and Hospitality)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 8 - Tourism Plenary */}
            <div className="mb-6">
              <div className="bg-teal-800 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 8: PLENARY – TOURISM & HOSPITALITY</h3>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-teal-700">15:20 – 15:45</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Promoting Tourism and Hospitality Leveraging Provincial Endowments</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Moderator:</span> <span className="font-bold text-teal-700">Mr. Chris Mugaga</span> (Chief Executive Officer, Zimbabwe National Chamber of Commerce)</p>
                      <p className="text-black text-md"><span className="font-bold">Panellists:</span></p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-teal-700">Chief Executive Officer</span> (Rainbow Tourism Group)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-teal-700">Chief Executive Officer</span> (Zimbabwe Tourism Authority)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-teal-700">Mr. Zhao Ke</span> (Chief Executive Officer, Chinese Zimbabwe Exchange Center)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-teal-700">Hon. R. Moyo</span> (Matabeleland North Provincial Government)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-teal-700">Hon. Magomo</span> (Mashonaland Central Provincial Government)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 9 - Land Address */}
            <div className="mb-6">
              <div className="bg-emerald-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 9: LAND – GOVERNMENT ADDRESS</h3>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-emerald-700">15:45 – 16:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Appreciating Zimbabwe's Land Management and Rural Development Strategy – <span className="font-bold text-emerald-700">Hon. V. Haritatos</span> (Minister of Lands and Rural Development)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 10 - Land Plenary */}
            <div className="mb-6">
              <div className="bg-emerald-800 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 10: PLENARY – LAND & RURAL DEVELOPMENT</h3>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-emerald-700">16:00 – 16:30</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Enhanced Land Management and Rural Development</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Moderator:</span> <span className="font-bold text-emerald-700">Dr. Ayo Adesola</span> (Country Representative, United Nations Development Programme)</p>
                      <p className="text-black text-md"><span className="font-bold">Panellists:</span></p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Ms. Yu Dongping</span> (Chief Executive Officer)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Hon. M. Chono</span> (Mashonaland West Provincial Government)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Hon. Adv. Mugadza</span> (Manicaland Provincial Government)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Chairman</span> (Zimbabwe National Residents Association Organisation)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Dr. Tsitsi Choruma Dozwa</span> (Commissioner, Zimbabwe Land Commission)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Director General</span> (Environmental Management Authority)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 11 - Immigration */}
            <div className="mb-6">
              <div className="bg-purple-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 11: IMMIGRATION POLICY</h3>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-purple-700">16:30 – 16:45</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Unpacking Zimbabwe's Immigration Policy for Investors – <span className="font-bold text-purple-700">Ms. R. Gono</span> (Chief Director, Department of Immigration)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 12 - Resolutions & Closing */}
            <div className="mb-6">
              <div className="bg-indigo-800 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 12: RESOLUTIONS & CLOSING</h3>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-b-lg p-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-indigo-700">16:45 – 17:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Resolutions and Way Forward</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Presenter:</span> <span className="font-bold text-indigo-700">Mrs. Bridget Makani</span> (Chief Director, Provincial Economic Planning and Devolution, Department of Presidential Affairs and Devolution)</p>
                      <p className="text-black text-md ml-4">• Presentation of Key Symposium Resolutions</p>
                      <p className="text-black text-md ml-4">• Recommendations on Enhancing Zimbabwe–China Investment Cooperation</p>
                      <p className="text-black text-md ml-4">• Priority Actions for Government, Investors, Financial Institutions and Development Partners</p>
                      <p className="text-black text-md ml-4">• Framework for Continued Engagement and Follow-Up</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 pt-2 border-t border-indigo-300">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-indigo-700">17:00 – 17:10</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Closing Remarks and Vote of Thanks – <span className="font-bold text-indigo-700">William Wen</span> (Secretary General, Chamber of Chinese Enterprises in Zimbabwe)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Networking Cocktail */}
            <div className="mb-6">
              <div className="bg-rose-700 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">NETWORKING COCKTAIL</h3>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-rose-700">17:10 – 19:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Networking Cocktail and Entertainment – <span className="font-semibold">Hosted by Chinese Enterprises in Zimbabwe</span></span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 mt-2 pt-2 border-t border-rose-300">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-rose-700">19:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">Delegates Departure and End of Programme</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Register CTA */}
            <div className="text-center mt-12 bg-gradient-to-br from-red-900 to-blue-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Join?</h3>
              <p className="text-blue-200 mb-4 text-md">Secure your seat at the Zimbabwe-China Investment Symposium</p>
              <Link href="/register" className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition hover:scale-105 text-md">
                Register Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
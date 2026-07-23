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
            <Link href="/resolutions" className={`hidden md:inline-block bg-red-600 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-red-700 transition`}>
              View Symposium Resolutions →
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative pt-62 pb-16 md:pt-60 md:pb-20 bg-gradient-to-br from-red-900 to-blue-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Full Event Schedule</h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
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
                    <span className="text-md font-bold text-black">08:00 – 08:30</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">DELEGATES ARRIVAL AND REGISTRATION</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 1 - Opening Ceremony */}
            <div className="mb-6">
              <div className="bg-red-600 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">SESSION 1: OPENING CEREMONY &amp; MINISTERIAL ADDRESSES</h3>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-b-lg p-4 space-y-3">
                {[
                  { time: "08:30 – 08:35", text: "Opening Prayer" },
                  { time: "08:35 – 08:40", text: "National Anthems of Zimbabwe and The People's Republic of China" },
                  { time: "08:40 – 08:45", text: "Kuwomberwa Kwemadzishe / Greeting the Chiefs" },
                  { time: "08:45 – 08:50", text: "Welcome Video - Zimbabwe – China Investment Symposium" },
                  { time: "08:50 – 09:00", text: "Welcome Remarks – <span class='font-bold text-red-700'>Hon. Senator C. Tawengwa</span> (Minister of State for Provincial Affairs and Devolution for Harare Metropolitan Province)" },
                  { time: "09:00 – 09:10", text: "Opening Remarks – <span class='font-bold text-red-700'>Mrs. T. Muguti</span> (Group Chief Executive Officer, Africapaciti Investment Group)" },
                  { time: "09:10 – 09:20", text: "Welcome Remarks and Introduction of Ambassador – <span class='font-bold text-red-700'>Mr. Benson Xu</span> (Chairperson, The Chamber of Chinese Enterprises in Zimbabwe)" },
                  { time: "09:20 – 09:30", text: "Remarks on behalf of the Government of the People's Republic of China – <span class='font-bold text-red-700'>His Excellency Ambassador Zhou Ding</span> (Ambassador of China to Zimbabwe)" },
                  { time: "09:30 – 09:40", text: "Call for Chinese Participation in Provincial Economies – <span class='font-bold text-red-700'>Hon. Eng. T. Muguti</span> (Permanent Secretary for Presidential Affairs and Devolution, Office of the President)" },
                  { time: "09:40 – 09:50", text: "Aligning Chinese Investments with NDS2 and Introduction of Guest of Honour – <span class='font-bold text-red-700'>Hon. Dr. W. Manungo</span> (Deputy Chief Secretary, Office of the President and Cabinet)" },
                  { time: "09:50 – 10:10", text: "Keynote Address – <span class='font-bold text-red-700'>Hon. July Moyo</span> (Minister of Energy and Power Development)" },
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
                    <span className="text-md font-bold text-black">10:10 – 10:35</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">TEA BREAK &amp; GROUP PHOTO SESSION</span>
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
                    <span className="text-md font-bold text-blue-700">10:35 – 11:10</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Creating and Maintaining an Attractive Investment Environment for Chinese Investors in Zimbabwe</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Moderator:</span> <span className="font-bold text-blue-700">Mr. A. Hodges</span> (Group Head of Investments and Advisory Services, Africapaciti Investment Group)</p>
                      <p className="text-black text-md"><span className="font-bold">Focus Areas:</span> Investment Incentives • Tax Rebates • Special Economic Zones • Access to Finance • Currency Stability • Dividends Repatriation</p>
                      <p className="text-black text-md"><span className="font-bold">Panellists:</span></p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Hon. K.D. Mnangagwa</span> (Deputy Minister of Finance, Economic Development and Investment Promotion)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Mr. Zhang Guangyi</span> (Group Country Representative, China Railway International)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Dr. I. Matshe</span> (Deputy Governor, Reserve Bank of Zimbabwe)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Mrs. S. Chizwima</span> (Chief Investment Promotion Officer, Zimbabwe Investment and Development Agency)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Mr. O. Chiperesa</span> (Director General, Financial Intelligence Unit)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Ms. R. Chinamasa</span> (Commissioner General, Zimbabwe Revenue Authority)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-blue-700">Mrs. P. Sadomba</span> (Head Investor Relations and Communications, FBC Group)</p>
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
                    <span className="text-md font-bold text-green-700">11:10 – 11:25</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Unpacking China's Zero Tariffs Trade Policy – <span className="font-bold text-green-700">Mr. Huang Minghai</span> (Director for Trade, Embassy of the People's Republic of China in Zimbabwe)</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 pt-2 border-t border-green-300">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-green-700">11:25 – 11:55</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Plenary Session on Zero Tariffs</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Moderator:</span> <span className="font-bold text-green-700">Mr. A. Majuru</span> (Chief Executive Officer, ZimTrade)</p>
                      <p className="text-black text-md"><span className="font-bold">Panellists:</span></p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Mr. C. Isaya</span> (Chief Executive Officer, Agricultural Marketing Authority)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Mr. S. Heri</span> (Chairperson, Horticultural Development Council)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Mrs. L. Nielson</span> (Chief Executive Officer, Horticultural Development Council)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Ms. Carrie Li</span> (Executive Vice Chairperson of Zimbabwe Chinese Business Association, Chief Editor of China Zimbabwe News)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-green-700">Mr. S. Nyanhongo</span> (Chief Executive Officer, Stanbic Bank Zimbabwe)</p>
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
                    <span className="text-md font-bold text-amber-700">11:55 – 12:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">Investment and Partnership Agreement Signing Ceremony</span>
                    <div className="text-black text-md font-medium mt-1">China Tobacco Company / TIAN ZE Tobacco Company</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lunch */}
            <div className="mb-6">
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-black">12:00 – 13:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">LUNCH BREAK</span>
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
                    <span className="text-md font-bold text-amber-700">13:00 – 13:20</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Zimbabwe Government's Mining and Mining Development Strategy as Defined in the National Development Strategy 2 – <span className="font-bold text-amber-700">Hon. Dr. Eng. P. Kambamura</span> (Minister of Mines and Mining Development)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Session 6 & 10 Combined Plenary */}
            <div className="mb-6">
              <div className="bg-amber-800 text-white px-4 py-3 rounded-t-lg">
                <h3 className="font-bold text-lg">COMBINED PLENARY: UNLOCKING RESOURCES, LAND &amp; RURAL DEVELOPMENT</h3>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-b-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-amber-700">13:20 – 15:30</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Synergizing Resource Stewardship, Land Management, and Rural Value Addition</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Co-Moderators:</span> <span className="font-bold text-amber-700">Ms. S. Kuverika</span> (CZI CEO) &amp; <span className="font-bold text-emerald-700">Dr. Ayo Adesola</span> (Resident Representative, UNDP)</p>
                      <p className="text-black text-md"><span className="font-bold">Focus Areas:</span> Mineral Processing (Lithium &amp; Chrome) • Heap-Leach Gold Code of Practice • Water Protection • Agricultural Land Secure Joint Ventures • Surface vs. Sub-Surface Rights Disputes</p>
                      <p className="text-black text-md"><span className="font-bold">Panellists:</span></p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Mr. P. Magaramombe</span> (Chief Executive Officer, Fidelity Gold Refinery)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Mr. Rain X He</span> (Investor Representative, Chenxi Investments)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Mr. Ye Jianguo</span> (Chief Executive Officer, Kamativi Mining Company)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-amber-700">Mr. I. Kwesu</span> (Chief Executive Officer, Chamber of Mines Zimbabwe)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Hon. V.P. Haritatos</span> (Minister of Lands and Rural Development)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Ms. Yu Dongping</span> (Business Consultant, The Chamber of Chinese Enterprises in Zimbabwe)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Dr. T. Dozwa</span> (Commissioner, Zimbabwe Land Commission)</p>
                      <p className="text-black text-md ml-4">• <span className="font-bold text-emerald-700">Mr. A. Chigona</span> (Director General, Environmental Management Authority)</p>
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
                    <span className="text-md font-bold text-purple-700">15:30 – 15:45</span>
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
                <h3 className="font-bold text-lg">SESSION 12: RESOLUTIONS &amp; CLOSING WAY FORWARD</h3>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-b-lg p-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-indigo-700">15:45 – 16:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <p className="text-black font-bold text-lg">Resolutions and Way Forward</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-black text-md"><span className="font-bold">Presenter:</span> <span className="font-bold text-indigo-700">Mrs. B. Makani</span> (Chief Director, Provincial Economic Planning and Devolution, Department of Presidential Affairs and Devolution, Office of the President)</p>
                      <p className="text-black text-md ml-4">• Presentation of the 13 Core Symposium Resolutions</p>
                      <p className="text-black text-md ml-4">• Recommendations on Enhancing Zimbabwe–China Investment Cooperation</p>
                      <p className="text-black text-md ml-4">• Structural Framework for Continued Engagement and Follow-Up</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 pt-2 border-t border-indigo-300">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-indigo-700">16:00 – 16:10</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Closing Remarks and Vote of Thanks – <span className="font-bold text-indigo-700">Mr. W. Wen</span> (Secretary General, The Chamber of Chinese Enterprises in Zimbabwe)</span>
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
                    <span className="text-md font-bold text-rose-700">16:10 – 18:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black text-md">Networking Cocktail and Entertainment – <span className="font-semibold">Hosted by Africapaciti and The Chamber of Chinese Enterprises in Zimbabwe</span></span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 mt-2 pt-2 border-t border-rose-300">
                  <div className="sm:col-span-1">
                    <span className="text-md font-bold text-rose-700">18:00</span>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-black font-semibold text-md">Delegates Departure and End of Programme</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Register CTA */}
            <div className="text-center mt-12 bg-gradient-to-br from-red-900 to-blue-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Explore the Resolutions</h3>
              <p className="text-blue-200 mb-4 text-md">Read the official 13 action points adopted during the closing sessions of the symposium.</p>
              <Link href="/resolutions" className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition hover:scale-105 text-md">
                View Resolutions Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
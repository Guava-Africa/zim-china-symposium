"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaQuoteLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function RemarksPage() {
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
        scrolled ? "bg-white shadow-xl py-2 md:py-3" : "backdrop-blur-lg bg-slate-950/40 md:bg-transparent py-3 md:py-5"
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
            <Link href="/resolutions" className="hidden md:inline-block bg-red-600 text-white px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-red-700 transition">
              View Resolutions →
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative pt-62 pb-16 md:pt-60 md:pb-20 bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 border-b-4 border-amber-500">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-amber-400 text-slate-950 px-4 py-1 rounded-full font-extrabold text-xs tracking-widest uppercase mb-4 inline-block">
              Official Speeches
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Speeches &amp; Remarks
            </h1>
            <div className="w-24 h-1.5 bg-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-300">
              Key addresses delivered by leaders across government, diplomacy, and enterprise at the Zimbabwe-China Investment Symposium.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SPEECHES SECTION ===== */}
      <section className="py-12 md:py-16 bg-slate-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto space-y-10">
            
            <Link href="/" className="inline-flex items-center gap-2 text-slate-800 hover:text-red-600 transition font-bold bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <FaArrowLeft size={14} /> Back to Home
            </Link>

            {/* 1. MRS T. MUGUTI - Red Left Border */}
            <article className="bg-white border-l-8 border-red-600 p-6 md:p-10 rounded-2xl shadow-md space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                  Opening Remarks
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Mrs. T. Muguti</h2>
                <p className="text-red-600 font-semibold text-lg">Group CEO – Africapaciti Investments Group</p>
              </div>
              <div className="text-slate-800 space-y-4 leading-relaxed text-base md:text-lg">
                <p>On behalf of Africapaciti Investment Group, it is my distinct honour to welcome you to the Inaugural Zimbabwe-China Investment Symposium.</p>
                <p>Allow me to begin by expressing our sincere appreciation to the Office of the President and Cabinet, the Ministry of Foreign Affairs and International Trade, and all our Government partners for their support in making this inaugural symposium possible. I also extend my gratitude to our strategic partners, the Chamber of Chinese Enterprises in Zimbabwe, whose collaboration and shared vision have helped bring this platform to life.</p>
                <p>Today is more than the opening of a symposium. It is the beginning of a new chapter—a chapter where dialogue leads to collaboration, collaboration inspires investment, and investment creates opportunity. What Zimbabwe needed was a trusted platform where Government and the private sectors of both Zimbabwe and China engage openly, where investors connect directly with opportunity, and where conversations become partnerships.</p>
                
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600 my-6 italic text-slate-900 font-medium relative">
                  <FaQuoteLeft className="text-red-200 text-3xl absolute top-3 right-3" />
                  "We believe the best solutions are created when Government, business, and investors sit at the same table—not as separate stakeholders, but as partners working towards a shared vision."
                </div>

                <p>Many know Africapaciti for our investment work, but we are an investment and development corporation committed to unlocking Africa's potential through strategic investments, project development, advisory services, and innovative financing across key sectors. Our purpose remains to connect people, unlock opportunity, and transform potential into lasting impact.</p>
                <p>That purpose is captured in our guiding philosophy: <em>Embracing African Ingenuity</em>. It reflects our belief that Africa's greatest resource is not only found beneath the ground, but within its people. At Africapaciti, we have made it our mission to build the bridges between Government and the private sector, international investors and local opportunity, and policy and enterprise.</p>
                <p>The relationship between Zimbabwe and China has stood the test of time through friendship, mutual respect, and cooperation. Together, we have an opportunity to build partnerships that create lasting value for our two nations and the broader African continent.</p>
              </div>
            </article>

            {/* 2. MR BENSON XU - Amber/Gold Left Border */}
            <article className="bg-white border-l-8 border-amber-500 p-6 md:p-10 rounded-2xl shadow-md space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                  Welcome Address
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Mr. Benson Xu</h2>
                <p className="text-amber-600 font-semibold text-lg">Chairperson – Chamber of Chinese Enterprises in Zimbabwe (CCEZ) &amp; Managing Director – DISCO</p>
              </div>
              <div className="text-slate-800 space-y-4 leading-relaxed text-base md:text-lg">
                <p>Your Excellencies, Honourable Ministers, Deputy Ministers, Distinguished Government Senior Officials, Esteemed Business Leaders, Ladies and Gentlemen,</p>
                <p>It is my profound honour to address this distinguished assembly at the Zimbabwe-China Investment Symposium. I wish to extend my sincere gratitude to the Government of Zimbabwe and all partners who have come together to create this vital platform under the theme: "Strengthening Relations to Unlock Zimbabwe's Potential."</p>
                <p>The friendship between Zimbabwe and China has stood the test of time, built on trust, mutual understanding, and a shared vision for prosperity. Over the decades, our two countries have developed a close and productive partnership that continues to deliver real benefits for both our peoples.</p>
                <p>Established on June 27, 2006, the Chamber of Chinese Enterprises in Zimbabwe (CCEZ) officially marked its 20th anniversary—a milestone that underscores its long-standing role as a key bridge between the Chinese business community and Zimbabwean stakeholders.</p>
                
                <p className="font-semibold text-slate-900">Chinese enterprises operating in Zimbabwe remain fully committed to supporting the country's development ambitions across core sectors:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong className="text-amber-600 block mb-1">Dinson Iron and Steel Company (DISCO)</strong> Driving forward industrialisation with an integrated steel industrial park in Manhize.
                  </li>
                  <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong className="text-amber-600 block mb-1">Huayou Cobalt</strong> Operating Africa's first lithium sulfate production line at its Arcadia facility.
                  </li>
                  <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong className="text-amber-600 block mb-1">Sinohydro</strong> Units 7 and 8 at Hwange Thermal Power Station contributed to 183 days without power cuts.
                  </li>
                  <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <strong className="text-amber-600 block mb-1">China Tianze Tobacco</strong> Supporting Zimbabwe's tobacco sector through out-grower initiatives and exports.
                  </li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl text-slate-800 italic">
                  <p className="mb-2 font-semibold">Lessons from Shona Wisdom:</p>
                  <p className="mb-1"><em>"Chikuni chimwe hachikodzi sadza"</em> — A single log cannot cook sadza. Unity is the foundation of all great achievements.</p>
                  <p><em>"Kandiro kanoenda kunobva kamwe"</em> — The plate returns to where it came from—speaking to reciprocity and mutual benefit.</p>
                </div>
              </div>
            </article>

            {/* 3. HIS EXCELLENCY AMBASSADOR ZHOU DING - Crimson Left Border */}
            <article className="bg-white border-l-8 border-red-700 p-6 md:p-10 rounded-2xl shadow-md space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                  Diplomatic Address
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">His Excellency Ambassador Zhou Ding</h2>
                <p className="text-red-700 font-semibold text-lg">Ambassador of the People's Republic of China to the Republic of Zimbabwe</p>
              </div>
              <div className="text-slate-800 space-y-4 leading-relaxed text-base md:text-lg">
                <p>It is my great honour to address the Zimbabwe-China Investment Symposium. Today's symposium comes at a pivotal juncture as Zimbabwe advances its economic transformation and industrialization agenda.</p>
                
                <h3 className="text-xl font-extrabold text-red-900 mt-6 uppercase tracking-wide border-b border-slate-200 pb-2">
                  Four Defining Features of China-Zimbabwe Relations
                </h3>
                
                <div className="space-y-3">
                  <p><strong>1. Deep Political Trust &amp; All-Weather Friendship:</strong> Our time-honoured friendship took root during Zimbabwe's liberation struggle and continues to grow on revolutionary camaraderie.</p>
                  <p><strong>2. Remarkable Economic &amp; Trade Outcomes:</strong> China is Zimbabwe's largest source of FDI (cumulative USD 10 billion). Bilateral trade hit USD 4.4 billion in 2025 (up 15.2%), yielding a Zimbabwean surplus of USD 740 million and creating nearly one million local jobs.</p>
                  <p><strong>3. Strong Economic Complementarity:</strong> Zimbabwe is endowed with lithium, chrome, and agricultural products; China offers vast markets, affordable technology, and capital.</p>
                  <p><strong>4. People-Centred Cooperation:</strong> Chinese enterprises have invested over USD 100 million in hundreds of CSR projects nationwide, including schools, clinics, roads, and boreholes.</p>
                </div>

                <h3 className="text-xl font-extrabold text-red-900 mt-8 uppercase tracking-wide border-b border-slate-200 pb-2">
                  Key Priorities for Deeper Cooperation
                </h3>
                
                <ol className="list-decimal pl-6 space-y-2 font-medium text-slate-800">
                  <li><strong>Infrastructure Development:</strong> Expanding transport, power, and digital infrastructure to lower industrial production costs.</li>
                  <li><strong>Local Value Addition:</strong> Adopting a realistic, step-by-step roadmap for mineral beneficiation.</li>
                  <li><strong>Predictable Business Environment:</strong> Maintaining policy stability to preserve long-term investor confidence.</li>
                  <li><strong>Strong Public Partnerships:</strong> Working together to foster accurate narratives and highlight mutual contributions.</li>
                </ol>
              </div>
            </article>

            {/* 4. HON. JULY MOYO - Emerald Green Left Border */}
            <article className="bg-white border-l-8 border-emerald-600 p-6 md:p-10 rounded-2xl shadow-md space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                  Keynote Address
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Hon. July Moyo</h2>
                <p className="text-emerald-700 font-semibold text-lg">Minister of Energy and Power Development, Government of Zimbabwe</p>
              </div>
              <div className="text-slate-800 space-y-4 leading-relaxed text-base md:text-lg">
                <p>It is an honour to officiate at this symposium. The Zimbabwe-China Investment Symposium provides stakeholders with a platform for sharing opportunities, addressing challenges, and improving the operating environment for investors.</p>
                <p>Under the visionary leadership of His Excellency President Dr. Emmerson Dambudzo Mnangagwa, Government has embarked on Vision 2030 — "Towards a prosperous and empowered upper middle-income society by 2030."</p>
                
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 my-6">
                  <h4 className="text-emerald-900 font-extrabold text-lg mb-3">Zimbabwe Energy Compact Targets (by 2030):</h4>
                  <ul className="space-y-2 text-slate-800 text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Achieve 100% household access to electricity (320,000 on-grid &amp; 200,000 off-grid connections annually).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Raise clean cooking solution access from 38.6% to 70%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Increase renewable energy capacity to 2,640 MW.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Mobilize USD 9.5 billion in total energy investments, with USD 4.42 billion expected from private sector partners.</span>
                    </li>
                  </ul>
                </div>

                <p>Government expects investors to work closely with national authorities, conduct business professionally, adhere to health and safety regulations, accelerate technology transfer, and prioritize local employment.</p>
              </div>
            </article>

            {/* 5. MR WILLIAM WEN - Blue Left Border */}
            <article className="bg-white border-l-8 border-blue-600 p-6 md:p-10 rounded-2xl shadow-md space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                  Closing Remarks
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Mr. William Wen</h2>
                <p className="text-blue-600 font-semibold text-lg">Secretary General – Chamber of Chinese Enterprises in Zimbabwe (CCEZ)</p>
              </div>
              <div className="text-slate-800 space-y-4 leading-relaxed text-base md:text-lg">
                <p>As we conclude the inaugural Zimbabwe-China Investment Symposium 2026, it is my great honour, on behalf of CCEZ and Africapaciti, to deliver the closing remarks.</p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-4 text-slate-900 font-medium">
                  "Chinese companies have invested over USD 10 Billion into Zimbabwe. That demonstrates our deep commitment to this nation. We are here to stay and work together in partnership to build Zimbabwe."
                </div>

                <p className="font-bold text-slate-900">As the Chamber of Chinese Enterprises in Zimbabwe, we remain committed to:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Serving as an active bridge between government and business;</li>
                  <li>Strengthening communication and information exchange;</li>
                  <li>Supporting compliant and sustainable investment;</li>
                  <li>Promoting local skills development and corporate social responsibility;</li>
                  <li>Contributing directly to Zimbabwe's industrialization and economic transformation.</li>
                </ul>
                <p className="text-xl font-bold text-red-600 pt-2">
                  May the friendship between Zimbabwe and China continue to grow stronger. Ndinotenda Zvikuru - Tatenda, Siyabonga. Thank you.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
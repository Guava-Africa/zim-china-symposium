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
    // ===== 1. MINISTER GUEST OF HONOUR =====
    {
      name: "Honourable July Moyo",
      title: "Minister of Energy and Power Development",
      organization: "Government of Zimbabwe",
      topic: "Keynote Address",
      bio: "Hon. July Moyo is the Minister of Energy and Power Development and a senior member of Zanu-PF. He was educated at Chegato High School and has held various high-level positions in the Zimbabwean government, including serving as the Governor of the Midlands Province starting in 1999. His extensive political experience is currently focused on energy security and power infrastructure development.",
      image: "/bioPics/Speakers/Minister of Energy  and Power Development - Hon July Moyo.png",
    },
    // ===== 2. AMBASSADOR =====
    {
      name: "His Excellency Ambassador Zhou Ding",
      title: "Ambassador of China to Zimbabwe",
      organization: "Embassy of the People's Republic of China",
      topic: "Remarks on behalf of the Government of China",
      bio: "His Excellency Ambassador Zhou Ding serves as the Ambassador of the People's Republic of China to the Republic of Zimbabwe. He has an extensive diplomatic background and is a key figure in strengthening bilateral relations between the two nations. His work focuses on fostering cooperation in trade, infrastructure, and culture, and he is a strong advocate for educational and industrial exchange programs.",
      image: "/bioPics/Speakers/His Excellency Ambassador Zhou.png",
    },
    // ===== 3. GROUP CEO =====
    {
      name: "Mrs. Tsungai Muguti",
      title: "Group Chief Executive Officer",
      organization: "Africapaciti Investment Group",
      topic: "Opening Remarks",
      bio: "Mrs. Tsungai Muguti is the Group Chief Executive Officer of Africapaciti Investment Group. As a seasoned corporate leader, she provides strategic direction across a diversified portfolio including infrastructure, fintech, and information technology. She holds a Bachelor of Arts in Marketing from Richmond American University London, which forms the foundation of her expertise in driving industrial and digital growth across Africa.",
      image: "/bioPics/Speakers/Group Chief Executive Officer Africapaciti Investments Group - Mrs T Muguti.png",
    },
    // ===== 4. CHINESE CHAMBER PRESIDENT =====
    {
      name: "Mr. Benson Xu",
      title: "Chairperson and Managing Director",
      organization: "The Chamber of Chinese Enterprises in Zimbabwe / Dinson Iron and Steel Company (DISCO)",
      topic: "Welcome Remarks and Introduction of Ambassador of China to Zimbabwe",
      bio: "Mr. Benson Xu is the Chairperson of The Chamber of Chinese Enterprises in Zimbabwe and the Managing Director of Dinson Iron and Steel Company (DISCO). He has been instrumental in spearheading major industrial projects, notably the Manhize steel plant, which is a cornerstone of Zimbabwe's industrialization strategy. His academic background includes studies at LS University, and he possesses significant experience in large-scale investment and infrastructure development.",
    image:'/bioPics/Benson.jpeg'
    },
    // ===== 5. ANDY HODGES =====
    {
      name: "Mr. Andy F. Hodges",
      title: "Group Head of Investments and Advisory Services",
      organization: "Africapaciti Investment Group",
      topic: "Moderator: Investment Environment Plenary",
      bio: "Mr. Andy Hodges is the Group Head of Investments and Advisory Services at Africapaciti Investment Group. He is a highly regarded investment banker and a prominent figure in Zimbabwe's financial and media sectors. Mr. Hodges holds an MBA in International Business and has extensive expertise in trade finance, investment strategy, and business development. Beyond his corporate role, he is well-known as a media personality, serving as a director of ceremonies, broadcaster, and the founder of Shonaa Productions.",
      image: "/bioPics/Moderators/andy hodges.jpeg",
    },
    // ===== 6. OTHER MINISTERS =====
    {
      name: "Honourable Senator Charles Zvidzayi Tawengwa",
      title: "Minister of State for Provincial Affairs and Devolution",
      organization: "Harare Metropolitan Province",
      topic: "Welcome Remarks",
      bio: "Hon. Senator Charles Zvidzayi Tawengwa is a prominent Zimbabwean politician currently serving as the Minister of State for Provincial Affairs and Devolution for Harare Metropolitan Province. His long-standing political career includes serving as the Mayor of Harare, a position he was installed into in 1993. He is also a member of parliament representing the interests of the Harare Metropolitan area.",
      image: "/bioPics/Speakers/Minister of State for provincial Affairs and Devolution Hon Sen C.Z. Tawengwa.png",
    },
    {
      name: "Honourable Dr. Eng. Polite Kambamura",
      title: "Minister of Mines and Mining Development",
      organization: "Government of Zimbabwe",
      topic: "Zimbabwe's Mining and Mining Development Strategy (NDS2)",
      bio: "Hon. Dr. Eng. Polite Kambamura is the Minister of Mines and Mining Development. A mining engineer by profession, he brings technical expertise to the ministry, focusing on the growth of the mining sector, mineral beneficiation, and the implementation of the National Development Strategy 2 (NDS2) in the mining industry.",
      image: "/bioPics/Speakers/Minister of Mines and Mining Development - Hon I Kambamura.png",
    },
    {
      name: "Honourable Barbara Rwodzi",
      title: "Minister of Tourism and Hospitality Industry",
      organization: "Government of Zimbabwe",
      topic: "Re-Defining Zimbabwe's Tourism and Hospitality Strategy",
      bio: "Hon. Barbara Rwodzi is the Minister of Tourism and Hospitality Industry. She holds a Master of Business Administration (MBA) from Nottingham Trent University in England and a Bachelor Honours Degree in Business Studies. She is a key figure in promoting Zimbabwe's tourism potential and enhancing the hospitality sector's contribution to the economy.",
      image: "/bioPics/Speakers/Minister Of Tourism and Hospitality - Hon B Rwodzi.png",
    },
    {
      name: "Honourable Vangelis Peter Haritatos",
      title: "Minister of Lands and Rural Development",
      organization: "Government of Zimbabwe",
      topic: "Land Management and Rural Development Strategy",
      bio: "Hon. Vangelis Peter Haritatos is the Minister of Lands and Rural Development. He was educated in Zimbabwe, Italy, and the United States. He graduated from Kansas State University in 2007 with honors degrees in both Political Science and Economics, and he also holds a degree in business administration. He is focused on land management and rural industrialization.",
      image: "/bioPics/Speakers/Minister of Lands and Rural Development - Hon V Haritatos.png",
    },
    {
      name: "Honourable Dr. Jenfan Muswere",
      title: "Minister of Skills Audit and Development",
      organization: "Government of Zimbabwe",
      topic: "Skills Transfer and Human Capital Development",
      bio: "Hon. Dr. Jenfan Muswere is the Minister of Skills Audit and Development. He holds multiple Doctor of Philosophy (PhD) degrees, including one in Development Studies focused on Corporate Governance, and others in Strategic Mining PPP Investments and ICT. He also holds an MBA and has training in Civil and Structural Engineering, reflecting a diverse and highly technical academic background.",
    image:"/bioPics/Honourable Dr. Jenfan Muswere.jpg"
    },
    {
      name: "Honourable Ezra Chadzamira",
      title: "Minister of State for Provincial Affairs and Devolution",
      organization: "Masvingo Province",
      topic: "Provincial Mining Investment Opportunities",
      bio: "Hon. Ezra Chadzamira is the Minister of State for Provincial Affairs and Devolution for Masvingo Province. He is a dedicated provincial leader and politician, focused on regional economic development, devolution, and the implementation of national programs at the provincial level.",
    image:'/bioPics/Honourable Ezra Chadzamira.jpeg'
    },
    {
      name: "Honourable Advocate Itayi Ndudzo",
      title: "Minister of State for Provincial Affairs and Devolution",
      organization: "Mashonaland East Province",
      topic: "Provincial Development Opportunities",
      bio: "Hon. Advocate Itayi Ndudzo is the Minister of State for Provincial Affairs and Devolution for Mashonaland East Province. As a legal professional and Advocate, he brings a strong legal and administrative perspective to his role in provincial governance and development.",
      image: "/bioPics/Panelists/Minister of State for Provincial Affairs and Devolutionin Mashonaland East Province - Hon Adv I Ndudzo.jpg",
    },
  {
      name: "Honourable Richard Moyo",
      title: "Minister of State for Provincial Affairs and Devolution",
      organization: "Matabeleland North Province",
      topic: "Provincial Investment Opportunities",
      bio: "Hon. Richard Moyo serves as the Minister of State for Provincial Affairs and Devolution for Matabeleland North Province. He is a passionate advocate for tourism-led economic growth and works tirelessly to position his province as a prime destination for both domestic and international investment.",
   image:'/bioPics/Honourable R. Moyo.jpg'
   },
    {
      name: "Honourable Christopher Magomo",
      title: "Minister of State for Provincial Affairs and Devolution",
      organization: "Mashonaland Central Province",
      topic: "Provincial Tourism Opportunities",
      bio: "Hon. Christopher Magomo is the Minister of State for Provincial Affairs and Devolution for Mashonaland Central Province. He champions the development of tourism infrastructure and promotes the region's rich cultural heritage and natural endowments as key drivers of provincial economic growth and investment.",
    image:'/bioPics/Honourable C. Magomo.jpeg'
    },
    {
      name: "Honourable Marian Chombo",
      title: "Minister of State for Provincial Affairs and Devolution",
      organization: "Mashonaland West Province",
      topic: "Provincial Rural Development",
      bio: "Hon. Marian Chombo is the Minister of State for Provincial Affairs and Devolution for Mashonaland West Province. She is an experienced politician and administrator, overseeing regional development and the implementation of government policies within her province.",
    image:'/bioPics/Honourable Marian Chombo.jpg'
  },
    {
      name: "Honourable Advocate Misheck Mugadza",
      title: "Minister of State for Provincial Affairs and Devolution",
      organization: "Manicaland Province",
      topic: "Provincial Community Development",
      bio: "Hon. Advocate Misheck Mugadza is the Minister of State for Provincial Affairs and Devolution for Manicaland Province. A legal professional by training, he applies his expertise to provincial administration, focusing on economic planning and community development.",
      image: "/bioPics/Panelists/Minister of state for provincial affairs and devolution for manicaland province - Hon Adv Mugadza.png",
    },
    // ===== 7. DEPUTY CHIEF SEC MANUNGO =====
    {
      name: "Honourable Dr. Willard Lowenstern Manungo",
      title: "Deputy Chief Secretary",
      organization: "Office of the President and Cabinet",
      topic: "Aligning Chinese Investments with NDS2",
      bio: "Honourable Dr. Willard Lowenstern Manungo is the Deputy Chief Secretary in the Office of the President and Cabinet. He has a distinguished career in public service, having previously served as the Permanent Secretary for Finance and Economic Development. Dr. Manungo is an expert in economics and public finance, playing a vital role in the formulation and implementation of Zimbabwe's national economic strategies.",
      image: "/bioPics/Speakers/Deputy Chief Secretary in the Office Of The President and Cabinet -Dr W Manungo.png",
    },
    // ===== 8. PS MUGUTI =====
    {
      name: "Honourable Engineer Tafadzwa Muguti",
      title: "Permanent Secretary for Presidential Affairs and Devolution",
      organization: "Office of the President",
      topic: "Chinese Participation in Provincial Economies",
      bio: "Hon. Eng. Tafadzwa Muguti is the Permanent Secretary for Presidential Affairs and Devolution in the Office of the President. He is an accomplished businessman and dynamic leadership expert, responsible for overseeing all Presidential affairs and the country's Devolution programme. Recognized as one of the young leaders in Government, he is known for his proactive approach to governance and commitment to addressing administrative inefficiencies.",
      image: "/bioPics/Speakers/Permanent Secretary for presidential Affairs and Devolution in the Office Of The President - Hon Eng Tafadzwa Muguti.png",
    },
    // ===== 9. SG CHAMBER CHINESE =====
    {
      name: "Mr. William Wen",
      title: "Secretary General",
      organization: "The Chamber of Chinese Enterprises in Zimbabwe",
      topic: "Closing Remarks and Vote of Thanks",
      bio: "Mr. William Wen is the Secretary General of The Chamber of Chinese Enterprises in Zimbabwe. He holds a Master of Accounting and Financial Analysis from Hong Kong Polytechnic University. He is a key facilitator of business relations, providing financial and strategic support to Chinese enterprises operating in Zimbabwe.",
    image: '/bioPics/William wen, SG OF CCEZ.jpeg'
    },
    // ===== 10. DEPUTY MINISTERS =====
    {
      name: "Honourable David Kudakwashe Mnangagwa",
      title: "Deputy Minister of Finance, Economic Development and Investment Promotion",
      organization: "Government of Zimbabwe",
      topic: "Investment Incentives and Tax Rebates",
      bio: "Hon. David Kudakwashe Mnangagwa is the Deputy Minister of Finance, Economic Development and Investment Promotion. He holds a Bachelor of Science degree in Business Administration and Actuarial Science from Drake University in the USA (2011). He further expanded his academic portfolio with a Bachelor of Laws (LLB) from the University of Zimbabwe in 2023 and also holds a degree in tourism from a local institution.",
      image: "/bioPics/Panelists/Honerable Deputy Minister of Finance, Economic Development and Investment - Hon D. K Mnangagwa.png",
    },
    // ===== 11. OTHER PERM SECS =====
    // ===== 12. OTHER STAKEHOLDERS =====
    {
      name: "Mr. Tafadzwa Chinamo",
      title: "Chief Executive Officer",
      organization: "Zimbabwe Investment and Development Agency (ZIDA)",
      topic: "Investment Facilitation and SEZs",
      bio: "Mr. Tafadzwa Chinamo is the Chief Executive Officer of the Zimbabwe Investment and Development Agency (ZIDA). With over 25 years of experience in the investment sector, he has held leadership roles as an Investment Analyst and Fund Manager. He is a key figure in promoting Zimbabwe as a preferred investment destination and facilitating both domestic and foreign direct investment.",
      image: "/bioPics/Panelists/Zimbabwe Investment Development Agency Chief Executive Officer -  Mr T Chinamano.png",
    },
    {
      name: "Mr. Allan Majuru",
      title: "Chief Executive Officer",
      organization: "ZimTrade",
      topic: "Moderator: Zero Tariffs Plenary",
      bio: "Mr. Allan Majuru is the Chief Executive Officer of ZimTrade, Zimbabwe's national trade development and promotion organization. He holds a Master of Science (MSc) in Agricultural and Applied Economics, obtained jointly from the University of Zimbabwe and the University of Pretoria in 2009. He is dedicated to expanding Zimbabwe's export footprint and enhancing the global competitiveness of local products.",
      image: "/bioPics/Speakers/Chief Executive Officer of ZimTrade- Allan Majuru.png",
    },
    {
      name: "Mr. Solomon Nyanhongo",
      title: "Chief Executive Officer",
      organization: "Stanbic Bank Zimbabwe",
      topic: "Zero Tariffs: Banking Sector Perspective",
      bio: "Mr. Solomon Nyanhongo is the Chief Executive Officer of Stanbic Bank Zimbabwe. He holds an Honours Accounting Degree from the University of Zimbabwe and is a Chartered Accountant (CA(Z)), having completed his professional training through Deloitte University and the University of South Africa (UNISA). He is a prominent leader in the Zimbabwean banking sector.",
      image: "/bioPics/Panelists/Stanbic Bank Zimbabwe Chief Executive Officer - Mr Solomon Nyanhongo (2) - Copy.png",
    },
    {
      name: "Dr. Innocent Matshe",
      title: "Deputy Governor",
      organization: "Reserve Bank of Zimbabwe",
      topic: "Currency Stability and Capital Repatriation",
      bio: "Dr. Innocent Matshe is the Deputy Governor of the Reserve Bank of Zimbabwe. He holds a Doctor of Philosophy (PhD) in Economics from the University of Manchester (1999). A respected economist, Dr. Matshe has extensive experience in university teaching and research, with specialized knowledge in Microeconomics, Agricultural, and Development Economics.",
      image: "/bioPics/Panelists/Deputy Governor; Reserve Bank Of Zimbabwe - Dr Innocent Matshe.png",
    },
    {
      name: "Ms. Regina Chinamasa",
      title: "Commissioner General",
      organization: "Zimbabwe Revenue Authority (ZIMRA)",
      topic: "Taxation and Revenue Administration",
      bio: "Ms. Regina Chinamasa is the Commissioner General of the Zimbabwe Revenue Authority (ZIMRA). A graduate of the University of Zimbabwe, she is a tax expert with over 28 years of experience in revenue mobilization, tax administration, and the enforcement of fiscal laws, ensuring compliance and transparency in the national tax system.",
      image: "/bioPics/Panelists/Zimbabwe Revenue Authority  Commisioner General - Ms Regina Chinamasa.png",
    },
    {
      name: "Mr. Oliver Chiperesa",
      title: "Director General",
      organization: "Financial Intelligence Unit (FIU)",
      topic: "Anti-Money Laundering Compliance",
      bio: "Mr. Oliver Chiperesa is the Director General of the Financial Intelligence Unit (FIU) of Zimbabwe. He holds a degree from the University of Zimbabwe and is an expert in financial crime prevention and anti-money laundering (AML) frameworks. He is a frequent speaker on financial integrity and leads national efforts to combat illicit financial flows.",
      image: "/bioPics/Panelists/Financial Intelligence Unit Director General - Mr Oliver Chiperesa.png",
    },
    {
      name: "Mr. Aaron Chigona",
      title: "Director General",
      organization: "Environmental Management Authority (EMA)",
      topic: "Environmental Management and Land Use",
      bio: "Mr. Aaron Chigona is the Director General of the Environmental Management Agency (EMA). He holds a Master's Degree in Ecology Tropical and Farm Management from the University of Zimbabwe. He is responsible for leading national efforts in environmental protection, land restoration, and sustainable resource management.",
      image: "/bioPics/Panelists/Environmental Management Authority General Director - Mr A Chigona.png",
    },
    {
      name: "Dr. Ayodele Odusola",
      title: "Resident Representative",
      organization: "United Nations Development Programme (UNDP)",
      topic: "Moderator: Land Management Plenary",
      bio: "Dr. Ayodele Odusola is the UNDP Resident Representative in Zimbabwe. He holds a Doctor of Philosophy (PhD) in Economics from the University of Ibadan, Nigeria. Previously the UNDP Chief Economist for Africa, he brings profound expertise in development economics and international cooperation to his work in Zimbabwe.",
      image: "/bioPics/Moderators/Country Representative UNDP - Dr Ayo Adesola.png",
    },
    {
      name: "Dr. Tsitsi Choruma Dozwa",
      title: "Commissioner",
      organization: "Zimbabwe Land Commission",
      topic: "Land Policy and Administration",
      bio: "Dr. Tsitsi Choruma Dozwa is a Commissioner at the Zimbabwe Land Commission and serves as the Secretary for Service Commissions. She holds multiple advanced degrees, including a Doctor of Education (Ed.D.) from Seattle University and a PhD in Comparative Politics from Michigan State University. She is an expert in organizational leadership and public policy.",
   image:"/bioPics/Dr-Tsitsi-Choruma.jpg"
    },
    {
      name: "Mr. Peter Magaramombe",
      title: "Chief Executive Officer",
      organization: "Fidelity Gold Refinery",
      topic: "Mining Investment Opportunities",
      bio: "Mr. Peter Magaramombe is the Chief Executive Officer of Fidelity Gold Refinery, Zimbabwe's sole authorized gold buyer and exporter. He has extensive experience in the mining and financial services sectors, driving gold value chain development and mineral beneficiation. He continues to strengthen the country's gold marketing and production initiatives.",
    image:"/bioPics/Mr. P Magaramombe.jpg"
    },
    {
      name: "Mr. Isaac Kwesu",
      title: "Chief Executive Officer",
      organization: "Chamber of Mines Zimbabwe",
      topic: "Mining Sector Overview",
      bio: "Mr. Isaac Kwesu is the Chief Executive Officer of the Chamber of Mines of Zimbabwe. He holds a Master of Science (MSc) Degree in Economics from the University of Zimbabwe. Formerly the Chamber's Chief Economist, he provides expert analysis and leadership on policies affecting the mining industry's growth and sustainability.",
      image: "/bioPics/Panelists/Chamber Of Mines Zimbabwe Chief Executive Officer - Mr Isaac Kwesu.png",
    },
    {
      name: "Mr. Tendai Madziwanyika",
      title: "Chief Executive Officer",
      organization: "Rainbow Tourism Group (RTG)",
      topic: "Tourism Investment Opportunities",
      bio: "Mr. Tendai Madziwanyika is the Chief Executive Officer of Rainbow Tourism Group (RTG). He is a seasoned hospitality executive with a wealth of experience in managing large-scale tourism operations and driving growth in the hospitality industry.",
      image: "/bioPics/Panelists/Chief Executive Officer Rainbow Tourism Group - Mr T Madziwanyika.png",
    },
    {
      name: "Dr. George Manyaya",
      title: "Chief Executive Officer",
      organization: "Zimbabwe Tourism Authority (ZTA)",
      topic: "Tourism Promotion and Strategy",
      bio: "Dr. George Manyaya is the Chief Executive Officer of the Zimbabwe Tourism Authority (ZTA). He holds a Doctorate in Business Administration and has extensive experience in corporate affairs and public relations. He leads national efforts to market Zimbabwe as a premier tourist destination globally.",
      image: "/bioPics/Panelists/Chief Executive Officer Zimbabwe Tourism Authority - Dr G M Manyaya - Copy.png",
    },
    {
      name: "Ms. Yu Dongping",
      title: "Business Consultant",
      organization: "The Chamber of Chinese Enterprises in Zimbabwe",
      topic: "Land Management for Investment",
      bio: "Ms. Yu Dongping is the Business Consultant of The Chamber of Chinese Enterprises in Zimbabwe. As a leading executive in the mining sector, she oversees the operations of one of Zimbabwe's most significant lithium mines, contributing to the country's position in the global green energy supply chain.",
    image:'/bioPics/Ms. Yu dongping.jpeg'
    },
    {
      name: "Mr. Chris Mugaga",
      title: "Chief Executive Officer",
      organization: "Zimbabwe National Chamber of Commerce (ZNCC)",
      topic: "Moderator: Tourism Plenary",
      bio: "Mr. Chris Mugaga is the Chief Executive Officer of the Zimbabwe National Chamber of Commerce (ZNCC). He is a renowned economist and business leader who provides strategic direction to the chamber, advocating for a vibrant private sector and contributing to national economic policy discourse.",
      image: "/bioPics/Moderators/Zimbabwe National Chamber of Commerce Chief Executive Officer - Mr Chris Mugaga.png",
    },
    {
      name: "Ms. Sekai Kuverika",
      title: "Chief Executive Officer",
      organization: "Confederation of Zimbabwe Industries (CZI)",
      topic: "Moderator: Mining Investment Plenary",
      bio: "Ms. Sekai Kuverika is the Chief Executive Officer of the Confederation of Zimbabwe Industries (CZI). She is a leading voice in industrial policy and advocacy, working to create a conducive environment for manufacturing and industrial growth in Zimbabwe through strategic engagement with the government and international partners.",
      image: "/bioPics/Moderators/Ms Sekai - Chief Executive Officer Confederation of Zimbabwean Industries.png",
    },
    {
      name: "Mr. Clever Isaya",
      title: "Chief Executive Officer",
      organization: "Agricultural Marketing Authority (AMA)",
      topic: "Zero Tariffs: Agricultural Perspective",
      bio: "Mr. Clever Isaya is the Chief Executive Officer of the Agricultural Marketing Authority (AMA). He brings over 18 years of leadership experience across agriculture, telecommunications, and manufacturing, having held senior roles at NetOne, Econet, and Cairns Foods. He holds an MBA from the University of Gloucestershire and a BCom Honours in Marketing from NUST.",
      image: "/bioPics/Panelists/Agricultural Marketing Authority Chief Executive Officer - Mr C Isaya.png",
    },
    {
      name: "Mr. Huang Minghai",
      title: "Director for Trade and Economic & Commercial Counsellor",
      organization: "Embassy of the People's Republic of China",
      topic: "Unpacking China's Zero Tariffs Trade Policy",
      bio: "Mr. Huang Minghai serves as the Director for Trade and the Economic & Commercial Counsellor at the Embassy of the People's Republic of China in Zimbabwe. He is a central figure in coordinating trade relations and economic cooperation between the two countries, focusing on investment facilitation and bilateral trade agreements.",
    image: '/bioPics/Mr.huang minghai commercial concilor from chinsese embassy.jpeg'
    },
    {
      name: "Mr. T. Chimedza",
      title: "Head of Business Development",
      organization: "Tobacco Industry and Marketing Board (TIMB)",
      topic: "Zero Tariffs: Mining Perspective",
      bio: "Mr. T. Chimedza is the Head of Business Development at the Tobacco Industry and Marketing Board (TIMB). He focuses on developing the tobacco industry, one of Zimbabwe's key export sectors.",
      image: "/bioPics/Panelists/Tobacco Industry and Marketing Board Head of Business Development- Mr T Chimedza.png",
    },
    {
      name: "Mr. Zhang Guangyi",
      title: "Vice President",
      organization: "The Chamber of Chinese Enterprises in Zimbabwe",
      topic: "Investment Environment for Chinese Investors",
      bio: "Mr. Zhang Guangyi is the Vice President of The Chamber of Chinese Enterprises in Zimbabwe. He is actively involved in facilitating business cooperation and promoting research and educational exchanges between Chinese enterprises and Zimbabwean institutions, contributing to the growth of bilateral economic ties.",
      image:"/bioPics/Zhang guangyi.jpeg"
    },
    {
      name: "Mr. Rain. X. He",
      title: "Investor Representive",
      organization: "Chenxi Investments",
      topic: "Mining Investment Opportunities",
      bio: "Mr. Rain X. He is the Investor Representative for Chenxi Investments. He is a prominent figure in cross-border investment and mineral resource development, overseeing strategic investment initiatives that connect Chinese capital with high-potential mining projects in Zimbabwe. He plays a key role in facilitating sustainable partnerships that contribute to the growth of Zimbabwe's mining sector and the broader economic development of the country.",
      image:"/bioPics/Rain. X. He.jpeg"
    },
    {
      name: "Mr. Gong Xuedong",
      title: "Chief Executive Officer",
      organization: "Bikita Minerals",
      topic: "Lithium Mining and Beneficiation",
      bio: "Mr. Gong Xuedong is the Chairman of the Lithium Producer Association and the Managing Director of Bikita Minerals. He is a pivotal figure in Zimbabwe's lithium industry, advocating for value addition, sustainable mining practices, and the strategic development of the country's mineral wealth.",
    image:'/bioPics/MR.GONG XUEDONG CEO OF BIKITA.jpeg'
    },
    {
      name: "Mr. Zhao Ke",
      title: "Chief Executive Officer",
      organization: "Chinese Zimbabwe Exchange Center",
      topic: "Chinese Cultural and Business Exchange",
      bio: "Mr. Zhao Ke, also known as Steve Zhao, is the Chief Executive Officer of the Chinese Zimbabwe Exchange Center. He holds a PhD in Microelectronics and is a key facilitator of cultural and economic exchanges between China and Zimbabwe, supporting trade initiatives and bilateral cooperation.",
      image: "/bioPics/Panelists/Chief Executive Officer Chinese Zimbabwe Exchange center - Mr Zhao Ke.png",
    },
    {
      name: "Mr. S. Heri",
      title: "Chairperson",
      organization: "Horticultural Development Council (HDC)",
      topic: "Zero Tariffs: Horticulture Perspective",
      bio: "Mr. S. Heri serves as the Chairperson of the Horticultural Development Council (HDC). He advocates for the growth of Zimbabwe's horticultural sector and its integration into global value chains.",
    },
    {
      name: "Mr. Shalvar Chikomba",
      title: "Chairperson",
      organization: "Zimbabwe National Organization of Associations and Residents Trusts (ZNOART)",
      topic: "Residents' Rights and Land Issues",
      bio: "Mr. Shalvar Chikomba is the Chairperson of the Zimbabwe National Residents Association (ZNOART). Educated at Glen Norah High, he is a prominent community leader who advocates for residents' rights, improved service delivery, and sustainable urban development.",
    image:'/bioPics/Mr. Shalvar Chikomba.jpg'
    },
    {
      name: "Ms. Shanel Liu",
      title: "Member",
      organization: "The Chamber of Chinese Enterprises in Zimbabwe",
      topic: "Zero Tariffs: Business Community Perspective",
      bio: "Ms. Shanel Liu is the Vice President and Vice Secretary of The Chamber of Chinese Enterprises in Zimbabwe. She holds an MBA and has extensive experience in government relations and industrial development. She plays a vital role in bridging the gap between Chinese investors and the Zimbabwean government to foster sustainable economic partnerships.",
    },
    // {
    //   name: "Mr. S. Kuvarika",
    //   title: "Former Chief Executive Officer",
    //   organization: "Confederation of Zimbabwe Industries (CZI)",
    //   topic: "Zero Tariffs: Industrial Perspective",
    //   bio: "Mr. S. Kuvarika is the former Chief Executive Officer of the Confederation of Zimbabwe Industries (CZI). He has extensive experience in industrial policy, manufacturing, and business development.",
    // },
    {
      name: "Ms. Respect Gono",
      title: "Chief Director, Department of Immigration",
      organization: "Department of Immigration",
      topic: "Unpacking Zimbabwe's Immigration Policy for Investors",
      bio: "Ms. Respect Gono is the Chief Director of the Department of Immigration. With over 27 years of experience in the civil service, including a tenure in the Office of the President and Cabinet, she is a senior administrator focused on immigration policy, border management, and e-government initiatives.",
   image:'/bioPics/Ms. Respect Gono.jpg'
    },
    {
      name: "Mrs. Bridget Makani",
      title: "Chief Director, Provincial Economic Planning and Devolution",
      organization: "Department of Presidential Affairs and Devolution",
      topic: "Resolutions and Way Forward",
      bio: "Mrs. Bridget Makani is the Chief Director for Provincial Economic Planning and Devolution in the Office of the President and Cabinet. She is a senior government official responsible for coordinating economic planning and the devolution of power to provincial levels to ensure inclusive national growth.",
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
              View Symposium Resolutions →
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== PANELISTS HERO ===== */}
      <section className="relative pt-62 pb-16 md:pt-60 md:pb-20 bg-gradient-to-br from-red-900 to-blue-900">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Meet our Speakers, Moderators and Panelists</h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-blue-200">
              Distinguished leaders shaping the future of Zimbabwe-China relations
            </p>
          </div>
        </div>
      </section>

      {/* ===== PANELISTS GRID ===== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {panelists.map((panelist, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                {/* Taller Image Container */}
                <div className="relative w-full h-122 md:h-80 lg:h-106 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {panelist.image ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <img 
                        src={panelist.image} 
                        alt={panelist.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="flex flex-col items-center justify-center w-full h-full text-gray-400">
                                <span class="text-6xl mb-2">👤</span>
                                <span class="text-sm">Photo Unavailable</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full text-gray-400">
                      <img src='/Zimchina.webp' className="h-70"/>

                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-black text-base leading-tight mb-1">{panelist.name}</h3>
                  <p className="text-red-600 text-sm font-semibold mb-1">{panelist.title}</p>
                  <p className="text-gray-500 text-sm mb-2">{panelist.organization}</p>
                  
                  <div className="bg-gray-200 rounded-lg p-3 mb-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-red-600">Topic:</span> <span className="font-bold">{panelist.topic}</span>
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {panelist.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900">
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
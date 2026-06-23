import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
    <footer className="bg-slate-900 text-gray-400 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-17">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <img src="/Zimchina logo.png" height="260" width="260" className="bg-white rounded-3xl"/>
              <p className="text-xs md:text-sm text-gray-100 leading-relaxed mt-4">Building Strategic Partnerships</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-white">
                <li><Link href="/about" className=" hover:text-yellow-300 transition">About</Link></li>
                <li><Link href="/panelists" className=" hover:text-yellow-300 transition">Panelists</Link></li>
                <li><Link href="/register" className=" hover:text-yellow-300 transition">Register for the Symposium</Link></li>
                <li><Link href="/schedule" className=" hover:text-yellow-300 transition">Schedule</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Contact</h4>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-400">
                <p>Official Delegation Desk:</p>
                <li className="flex gap-2 break-all">📞 Precious Mpanduki: +263 786 262 716</li>
                <li className="flex gap-2 break-all">✉️ info@.com</li>
                <li className="flex gap-2">📍 Harare, Zimbabwe</li>
              </ul>

              <ul className="space-y-1 mt-5 md:space-y-2 text-xs md:text-sm text-gray-400">
                <p>Business Enquires:</p>
                <li className="flex gap-2 break-all">📞 Andy Hodges: +263 773 491 634</li>
                <li className="flex gap-2 break-all">✉️ andy.hodges@africapaciti.com</li>
                <li className="flex gap-2">📍 Harare, Zimbabwe</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">Follow Us</h4>
              <div className="flex gap-3 md:gap-4">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:text-yellow-300 hover:bg-slate-700 transition text-sm md:text-xl">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:text-yellow-300 hover:bg-slate-700 transition text-sm md:text-xl">
                  <FaTwitter />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:text-yellow-300 hover:bg-slate-700 transition text-sm md:text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:text-yellow-300 hover:bg-slate-700 transition text-sm md:text-xl">
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
  )
}

"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  nationality: string;
  nationalId: string;
  phone: string;
  organization: string;
  profileImage?: FileList;
};

export default function ReservePage() {
  const { register, handleSubmit, formState: { isSubmitting, isSubmitted } } = useForm<FormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    console.log("Registration submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isSubmitted) {
    return (
      <main className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-12">
            <div className="text-5xl md:text-6xl mb-4">✅</div>
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">Registration Received</h1>
            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">Thank you for your interest in the Zimbabwe-China Investment Symposium.</p>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">Our team will review your application and contact you within 48 hours to confirm your seat.</p>
            <Link href="/" className="inline-block bg-black text-white px-5 md:px-6 py-2 rounded-full hover:bg-gray-800 transition text-sm md:text-base">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Full Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://tvbrics.com/upload/dev2fun.imagecompress/webp/resize_cache/iblock/c1a/1000_1000_1/hkz3aw10w3exdtlevblemqoljiekz829.webp"
          alt="Zimbabwe and China Flags"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-gray-400 mb-4 md:mb-6 transition text-sm md:text-base">
            ← Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Form Column */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-xl p-5 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-2">Reserve Your Seat</h2>
                <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6">Please fill out the form below to secure your invitation</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                    <div className="w-full md:w-1/2">
                      <label className="block text-sm font-semibold text-black mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Hon. John Doe"
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base"
                        {...register("fullName", { required: true })}
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label className="block text-sm font-semibold text-black mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. name@gmail.com"
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base"
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                    <div className="w-full md:w-1/2">
                      <label className="block text-sm font-semibold text-black mb-1">National ID/ Passport Number *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. 123456789C43 or AB1234567"
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base"
                        {...register("nationalId", { required: true })}
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label className="block text-sm font-semibold text-black mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. +263 77 123 4567"
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base"
                        {...register("phone", { required: true })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">Organization *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Organization/Company Name"
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base"
                      {...register("organization", { required: true })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">Nationality *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Zimbabwean, Chinese, South African"
                      className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base"
                      {...register("nationality", { required: true })}
                    />
                  </div>

                  {/* Image Upload Section */}
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">Profile Photo</label>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <div className="flex-1">
                        <input 
                          type="file"
                          accept="image/*"
                          className="w-1/2 px-3 md:px-4 py-2 md:py-9 border cursor-pointer border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                          {...register("profileImage")}
                          onChange={handleImageChange}
                        />
                        {/* <p className="text-xs text-gray-500 mt-1">Upload a recent photo for your delegate badge (JPEG, PNG, max 5MB)</p> */}
                      </div>
                      {imagePreview && (
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500 flex-shrink-0">
                          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white py-2.5 md:py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg"
                  >
                    {isSubmitting ? "Processing..." : "Submit Registration →"}
                  </button>
                  
                  <p className="text-[11px] md:text-xs text-gray-500 text-center mt-3 md:mt-4">
                    By submitting this form, you agree to our terms and conditions. Our team will confirm your registration within 48 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Info Column */}
            <div className="w-full lg:w-1/3 space-y-4 md:space-y-6">
              <div className="backdrop-blur-3xl rounded-2xl shadow-xl p-5 md:p-6 text-white">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 flex items-center gap-2">
                  <span className="text-xl">🌐</span> Translation Services
                </h3>
                <p className="text-xs md:text-sm text-white/90">
                  Chinese/English interpretation will be provided throughout the symposium for all official sessions.
                </p>
              </div>

              <div className="backdrop-blur-3xl rounded-2xl shadow-xl p-5 md:p-6 text-white">
                <h3 className="font-bold text-gold-400 text-base md:text-lg mb-2 md:mb-3">Event Details</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <li className="flex gap-2 items-center">📅 <span>25 June, 2026</span></li>
                  <li className="flex gap-2 items-center">📍 <span>Harare, Zimbabwe</span></li>
                  <li className="flex gap-2 items-center">🏛️ <span>Golden Conifer Conference Centre</span></li>
                </ul>
              </div>

              <div className="backdrop-blur-3xl rounded-2xl shadow-xl p-5 md:p-6 text-white">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3">Need Assistance?</h3>
                <p className="text-xs md:text-sm text-white/90 mb-2 md:mb-3">Contact our official delegation desk:</p>
                <p className="text-xs md:text-sm">📞 +263 242 778 899</p>
                <p className="text-xs md:text-sm break-all">✉️ registration@zimchinasymposium.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from "@/components/Spinner";
import axios from 'axios';

type FormData = {
  fullName: string;
  email: string;
  nationality: string;
  jobTitle: string;
  phone: string;
  title: string;
  organization: string;
  profileImage?: FileList;
};

export default function RegisterPage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'waiting' | 'error'>('idle');
  const [regNumber, setRegNumber] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const MAX_REGISTRATIONS = 200;

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://starfish-app-8pzk8.ondigitalocean.app';
      
      console.log('🚀 API URL:', apiUrl);
      
      const formDataToSend = new FormData();
      formDataToSend.append('title', data.title);
      formDataToSend.append('fullName', data.fullName);
      formDataToSend.append('email', data.email);
      formDataToSend.append('phone', data.phone);
      formDataToSend.append('nationality', data.nationality);
      formDataToSend.append('jobTitle', data.jobTitle);
      formDataToSend.append('organization', data.organization);
      
      if (selectedFile) {
        formDataToSend.append('profileImage', selectedFile);
      }
      
      // Log FormData contents
      console.log('📦 Sending:');
      for (let pair of formDataToSend.entries()) {
        console.log(`   ${pair[0]}: ${pair[1]}`);
      }
      
      // Use fetch with better error handling
      const response = await fetch(`${apiUrl}/api/register`, {
        method: 'POST',
        body: formDataToSend,
      });
      
      console.log('📥 Response status:', response.status);
      console.log('📥 Response status text:', response.statusText);
      
      // First, try to get the response as text
      const responseText = await response.text();
      console.log('📥 Raw response:', responseText);
      
      // Try to parse as JSON
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.error('❌ Failed to parse JSON:', e);
        throw new Error('Invalid response from server');
      }
      
      console.log('📥 Parsed response:', result);
      
      // Check if registration was successful
      if (response.ok && result.success) {
        setRegNumber(result.data?.regNumber || 0);
        
        if (result.data?.regNumber > MAX_REGISTRATIONS) {
          setSubmitStatus('waiting');
        } else {
          setSubmitStatus('success');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      // If we get here, there was an error
      // Show the error message from the backend
      const errorMsg = result.error || result.message || 'Registration failed. Please try again.';
      console.error('❌ Backend error:', errorMsg);
      setErrorMessage(errorMsg);
      setSubmitStatus('error');
      
    } catch (error) {
      console.error('❌ Submission error:', error);
      setSubmitStatus('error');
      
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        setErrorMessage('Cannot connect to server. Please check your internet connection.');
      } else if (error instanceof Error) {
        setErrorMessage(error.message || 'Registration failed. Please try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size too large. Please upload an image under 5MB.');
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file (JPEG, PNG, etc.)');
        return;
      }
      
      setSelectedFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Title options
  const titleOptions = [
    "Mr.", "Mrs.", "Ms.", "Dr.", "Prof.", "Hon.", "Eng.", "Rev.", "Amb.", "Chief", "Sir", "Madam"
  ];

  // Nationality options
  const nationalityOptions = [
    { value: "Zimbabwean", flag: "https://flagcdn.com/zw.svg", code: "ZW" },
    { value: "Chinese", flag: "https://flagcdn.com/cn.svg", code: "CN" },
    { value: "South African", flag: "https://flagcdn.com/za.svg", code: "ZA" },
    { value: "Botswanan", flag: "https://flagcdn.com/bw.svg", code: "BW" },
    { value: "Zambian", flag: "https://flagcdn.com/zm.svg", code: "ZM" },
    { value: "Mozambican", flag: "https://flagcdn.com/mz.svg", code: "MZ" },
    { value: "Namibian", flag: "https://flagcdn.com/na.svg", code: "NA" },
    { value: "Angolan", flag: "https://flagcdn.com/ao.svg", code: "AO" },
    { value: "Malawian", flag: "https://flagcdn.com/mw.svg", code: "MW" },
    { value: "Lesothan", flag: "https://flagcdn.com/ls.svg", code: "LS" },
    { value: "Eswatini", flag: "https://flagcdn.com/sz.svg", code: "SZ" },
    { value: "Japanese", flag: "https://flagcdn.com/jp.svg", code: "JP" },
    { value: "South Korean", flag: "https://flagcdn.com/kr.svg", code: "KR" },
    { value: "Indian", flag: "https://flagcdn.com/in.svg", code: "IN" },
    { value: "Pakistani", flag: "https://flagcdn.com/pk.svg", code: "PK" },
    { value: "Bangladeshi", flag: "https://flagcdn.com/bd.svg", code: "BD" },
    { value: "Sri Lankan", flag: "https://flagcdn.com/lk.svg", code: "LK" },
    { value: "Nepalese", flag: "https://flagcdn.com/np.svg", code: "NP" },
    { value: "Indonesian", flag: "https://flagcdn.com/id.svg", code: "ID" },
    { value: "Malaysian", flag: "https://flagcdn.com/my.svg", code: "MY" },
    { value: "Singaporean", flag: "https://flagcdn.com/sg.svg", code: "SG" },
    { value: "Vietnamese", flag: "https://flagcdn.com/vn.svg", code: "VN" },
    { value: "Thai", flag: "https://flagcdn.com/th.svg", code: "TH" },
    { value: "Filipino", flag: "https://flagcdn.com/ph.svg", code: "PH" },
    { value: "Tanzanian", flag: "https://flagcdn.com/tz.svg", code: "TZ" },
    { value: "Kenyan", flag: "https://flagcdn.com/ke.svg", code: "KE" },
    { value: "Ugandan", flag: "https://flagcdn.com/ug.svg", code: "UG" },
    { value: "Rwandan", flag: "https://flagcdn.com/rw.svg", code: "RW" },
    { value: "Nigerian", flag: "https://flagcdn.com/ng.svg", code: "NG" },
    { value: "Ghanaian", flag: "https://flagcdn.com/gh.svg", code: "GH" },
    { value: "Egyptian", flag: "https://flagcdn.com/eg.svg", code: "EG" },
    { value: "Moroccan", flag: "https://flagcdn.com/ma.svg", code: "MA" },
    { value: "American", flag: "https://flagcdn.com/us.svg", code: "US" },
    { value: "British", flag: "https://flagcdn.com/gb.svg", code: "GB" },
    { value: "German", flag: "https://flagcdn.com/de.svg", code: "DE" },
    { value: "French", flag: "https://flagcdn.com/fr.svg", code: "FR" },
    { value: "Other", flag: "https://flagcdn.com/un.svg", code: "🌍" },
  ];

  // Success Screen
  if (submitStatus === 'success') {
    return (
      <main className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-12">
            <div className="text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 mb-4 md:mb-6">
                <div className="flex flex-col items-center">
                  <img src="/Zimchina.webp" alt="Zimbabwe-China Symposium" className="h-20 w-auto md:h-57 hover:bg-white/60 hover:rounded-xl md:p-2 transition-all duration-300" />
                </div>
              </div>
            </div>
            
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">Registration Successful!</h1>
            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              Thank you for registering for the Zimbabwe-China Investment Symposium.
            </p>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
              A confirmation email has been sent to your inbox. Please check your email for details.
            </p>
            <Link href="/" className="inline-block bg-black text-white px-5 md:px-6 py-2 rounded-full hover:bg-gray-800 transition text-sm md:text-base">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Waiting List Screen
  if (submitStatus === 'waiting') {
    return (
      <main className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-12">
            <div className="text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 mb-4 md:mb-6">
                <div className="flex flex-col items-center">
                  <img src="/Zimchina.webp" alt="Zimbabwe-China Symposium" className="h-20 w-auto md:h-57 hover:bg-white/60 hover:rounded-xl md:p-2 transition-all duration-300" />
                </div>
              </div>
            </div>
            
            <div className="text-6xl mb-4">⏳</div>
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">Thank You for Registering</h1>
            <p className="text-xl md:text-2xl font-bold text-black mb-3">You are on the Waiting List</p>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
              A confirmation email has been sent to your inbox. Please check your email for details.
            </p>
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
          src="/bothflags.webp"
          alt="Zimbabwe and China Flags"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-8 md:pt-12 pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-yellow-400 mb-4 md:mb-4 transition text-sm md:text-base bg-black/30 backdrop-blur-sm px-3 py-1.5 md:py-2 rounded-full">
            <FaArrowLeft size={12} className="md:w-[14px] md:h-[14px]" /> Back to Home
          </Link>

          {/* Logos Section */}
          <div className="text-center mb-8 md:mb-12 bg-white/85 rounded-xl">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 mb-4 md:mb-6">
              <div className="flex flex-col items-center">
                <img src="/Zimchina.webp" alt="Zimbabwe-China Symposium" className="h-55 w-auto md:h-47 md:p-2 transition-all duration-300" />
              </div>
              <div className="flex flex-col items-center">
                <a href="https://www.africapaciti.com" target="_blank" rel="noopener noreferrer">
                  <img src="/africapaciti.webp" alt="Africapaciti" className="h-24 w-auto md:h-47 md:p-2 transition-all duration-300" />
                </a>
              </div>
              <div className="flex flex-col items-center">
                <img src="/chamberlogo.webp" alt="Chamber of Chinese Enterprises" className="h-24 w-auto md:h-47 md:p-2 transition-all duration-300" />
              </div>
            </div>
            <p className="text-black text-sm md:text-lg font-bold italic tracking-wide pb-2">Building Strategic Partnerships</p>
            <p className="text-black text-sm md:text-lg font-bold italic tracking-wide pb-2">            
              Brought to you by <a href="https://www.africapaciti.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Africapaciti</a> & The Chamber of Chinese Enterprises in Zimbabwe
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Form Column */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white/85 rounded-2xl shadow-xl p-5 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-2">Register for the Symposium</h2>
                <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6">Please fill out the form below to secure your invitation</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-semibold text-black mb-1">Title *</label>
                      <select 
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black bg-white text-sm md:text-base"
                        {...register("title", { required: true })}
                      >
                        <option value="">Select Title</option>
                        {titleOptions.map((title) => (
                          <option key={title} value={title}>{title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-semibold text-black mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base"
                        {...register("fullName", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-semibold text-black mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. name@gmail.com"
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
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

                  <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-semibold text-black mb-1">Nationality *</label>
                      <select 
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black bg-white text-sm md:text-base"
                        {...register("nationality", { required: true })}
                      >
                        <option value="">Select Nationality</option>
                        {nationalityOptions.map((nationality) => (
                          <option key={nationality.value} value={nationality.value}>
                            {nationality.value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <label className="block text-sm font-semibold text-black mb-1">Job Title *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Minister/Chief Executive Officer"
                        className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base"
                        {...register("jobTitle", { required: true })}
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

                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1">Profile Photo</label>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <div className="flex-1 w-full">
                        <input 
                          type="file"
                          accept="image/*"
                          className="w-full px-3 md:px-4 py-6 md:py-9 border cursor-pointer border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-black placeholder-gray-400 bg-white text-sm md:text-base file:mr-2 file:py-1 file:px-2 md:file:mr-3 md:file:py-1 md:file:px-3 file:rounded-full file:border-0 file:text-xs md:file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                          onChange={handleImageChange}
                        />
                      </div>
                      {imagePreview && (
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 border-yellow-500 flex-shrink-0">
                          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Error Message - Shows backend error messages */}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 backdrop-blur-sm border border-red-500 rounded-xl text-black">
                      <p className="font-semibold">❌ Registration Failed</p>
                      <p className="text-sm">{errorMessage}</p>
                    </div>
                  )}

                  {isSubmitting ? 
                    <Spinner />
                  :
                    <button 
                      type="submit" 
                      className="w-full cursor-pointer bg-red-600 text-white py-2.5 md:py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 text-base md:text-lg"
                    >
                      Submit Registration →
                    </button>
                  }
                  
                  <p className="text-[11px] md:text-xs text-gray-500 text-center mt-3 md:mt-4">
                    By submitting this form, you agree to our terms and conditions.
                  </p>
                </form>
              </div>
            </div>

            {/* Info Column */}
            <div className="w-full lg:w-1/3 space-y-4 md:space-y-6">

              <div className="backdrop-blur-3xl rounded-2xl shadow-xl p-5 md:p-6 text-white">
                <h3 className="font-bold text-yellow-400 text-base md:text-lg mb-2 md:mb-3">Event Details</h3>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <li className="flex gap-2 items-center">📅 <span>2 July, 2026</span></li>
                  <li className="flex gap-2 items-center">📍 <span>Harare, Zimbabwe</span></li>
                  <li className="flex gap-2 items-center">🏛️ <span>Golden Conifer Conference Centre</span></li>
                </ul>
              </div>

              <div className="backdrop-blur-3xl rounded-2xl shadow-xl p-5 md:p-6 text-white">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3">Need Assistance?</h3>
                <p className="text-xs md:text-sm text-white/90 mb-2 md:mb-3">Contact our Official Delegation Desk:</p>
                <p className="text-xs md:text-sm">📞 Precious Mpanduki: +263 786 262 716</p>
                <p className="text-xs md:text-sm break-all">✉️ info@zimchinasymposium.com</p>

                <p className="text-xs md:text-sm text-white/90 mb-2 md:mb-3 mt-9">Business Enquiries:</p>
                <p className="text-xs md:text-sm">📞 Andy Hodges: +263 773 491 634</p>
                <p className="text-xs md:text-sm break-all">✉️ andy.hodges@africapaciti.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
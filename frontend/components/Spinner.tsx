"use client";

export default function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-9 h-9">
        <div className="absolute inset-0 rounded-full border-4 border-red-500 border-t-white animate-spin"></div>
      </div>
    </div>
  );
}
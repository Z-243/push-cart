"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    // if image is loaded
    if (imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="min-h-[90vh] relative flex flex-col overflow-hidden">
      {/* Low-res Image */}
      <img
        className="w-full h-full object-cover object-center"
        src="low_res/banner.jpeg"
        alt="banner-low-res"
      />

      {/* High-res Image */}
      <img
        ref={imgRef}
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-200 z-40"
        src="med_res/banner.png"
        alt="banner-med-res"
        style={{ opacity: isLoaded ? 1 : 0 }}
        onLoad={() => setIsLoaded(true)}
      />

      {/* CTA Overlay */}
      <div className="absolute inset-0 z-40 flex items-center justify-center">
        <div className="flex flex-col items-center w-full gap-4 p-8 bg-white bg-opacity-90 max-w-xl mx-auto rounded-md shadow-lg">
          {/* Headings */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-medium text-gray-700 tracking-wide">
              COOLEST FINDS AT
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              PUSH CART
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#stickers">
              <button className="bg-neutral-800 text-white px-5 py-2 rounded-md font-medium hover:opacity-70 transition-opacity cursor-pointer">
                Shop Stickers
              </button>
            </a>
            <a href="#planners">
              <button className="bg-neutral-800 text-white px-5 py-2 rounded-md font-medium hover:opacity-70 transition-opacity cursor-pointer">
                Shop Planners
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

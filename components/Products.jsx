"use client";

import { useState } from "react";
import Portal from "./Portal";
import { useProducts } from "@/context/ProductContext";

export default function Products(props) {
  const { planners, stickers } = props;
  const [portalImage, setPortalImage] = useState(null);

  const { handleIncrementProduct, cart } = useProducts();

  if (!planners.length || !stickers.length) {
    return null;
  }

  return (
    <>
      {portalImage && (
        <Portal
          handleClosePortal={() => {
            setPortalImage(null);
          }}
        >
          <div className="absolute inset-0 z-[1005] flex items-center justify-center p-4">
            <div className="max-w-[90vw] max-h-[90vh] overflow-auto bg-white rounded-md shadow-xl p-4">
              <img
                className="w-auto h-auto max-h-[80vh] object-contain "
                src={`med_res/${portalImage}.png`}
                alt={`${portalImage}-high-res`}
              />
            </div>
          </div>
        </Portal>
      )}
      {/* Planners Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <h2
            id="planners"
            className="text-2xl sm:text-3xl font-bold text-gray-800"
          >
            Discover Our Planners
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Minimal, classic & made for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {planners.map((planner, plannerIndex) => {
            const plannerName = planner.name;
            const plannerImgUrl = planner.name.replaceAll(" ", "_");
            return (
              <div
                key={plannerIndex}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-3 sm:p-4 flex flex-col items-center text-center"
              >
                <button
                  onClick={() => {
                    setPortalImage(plannerImgUrl);
                  }}
                  className="w-fit h-fit p-0 border-none shadow-none cursor-zoom-in rounded-none "
                >
                  <img
                    src={`low_res/${plannerImgUrl}.jpeg`}
                    alt={`${plannerImgUrl}-low-res`}
                    loading="lazy"
                    className="w-full h-auto object-contain rounded-md mb-3"
                  />
                </button>

                <p className="text-base font-semibold text-gray-800 mb-1">
                  {plannerName}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {planner.description}
                </p>

                {/* Price + Add to Cart */}
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-auto">
                  <span className="text-lg font-bold text-gray-900">
                    <span className="text-sm font-normal">$</span>
                    {planner.price / 100}
                  </span>
                  <button
                    onClick={() => {
                      const plannerProductId = planner.product_id;
                      handleIncrementProduct(plannerProductId, 1, planner);
                    }}
                    className="bg-neutral-800 text-white px-4 py-2 rounded-md font-medium hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stickers Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-8">
          <h2
            id="stickers"
            className="text-2xl sm:text-3xl font-bold text-gray-800"
          >
            Explore Our Stickers
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Fun, aesthetic & functional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {stickers.map((sticker, index) => {
            const stickerName = sticker.name;
            const stickerImgUrl = sticker.name.replaceAll(" ", "_");
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-3 sm:p-4 flex flex-col items-center text-center"
              >
                <button
                  onClick={() => {
                    setPortalImage(stickerImgUrl);
                  }}
                  className="w-fit h-fit p-0 border-none shadow-none cursor-zoom-in rounded-none "
                >
                  <img
                    src={`low_res/${stickerImgUrl}.jpeg`}
                    alt={`${stickerImgUrl}-low-res`}
                    loading="lazy"
                    className="w-full h-auto object-contain rounded-md mb-3"
                  />
                </button>

                <p className="text-base font-semibold text-gray-800 mb-1">
                  {stickerName}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {sticker.description}
                </p>

                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-auto">
                  <span className="text-lg font-bold text-gray-900">
                    <span className="text-sm font-normal">$</span>
                    {sticker.price / 100}
                  </span>
                  <button
                    onClick={() => {
                      const stickerProductId = sticker.product_id;
                      handleIncrementProduct(stickerProductId, 1, sticker);
                    }}
                    className="bg-neutral-800 text-white px-4 py-2 rounded-md font-medium hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

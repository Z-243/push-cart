"use client";

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartPage() {
  const { cart, handleIncrementProduct } = useProducts();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function createCheckout() {
    try {
      setIsLoading(true);
      setError("");
      if (!email || !email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }

      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

      const lineItems = Object.keys(cart).map((key) => {
        const item = cart[key];
        return {
          product_id: item.product_id,
          quantity: item.quantity,
          // amount: Number(item.price) || 0,
        };
      });

      if (lineItems.length === 0) {
        console.warn("Cart is empty, no checkout initiated.");
        return;
      }

      const response = await fetch(`${baseURL}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_cart: lineItems,
          customer: {
            email: email || "",
            name: "Anonymous",
          },
          billing: {
            city: "N/A",
            country: "US",
            state: "N/A",
            street: "N/A",
            zipcode: "00000",
          },
        }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        // Redirect to Dodo checkout
        router.push(data.url);
      } else {
        console.error("Checkout error:", data.error || "No URL returned.");
        setError("Failed to initiate checkout.");
      }
    } catch (err) {
      console.error("Error creating checkout", err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {Object.keys(cart).length === 0 && <p>You have no items in your cart!</p>}
      <div className="space-y-4">
        {Object.keys(cart).map((item, itemIndex) => {
          const itemData = cart[item];
          const itemQuantity = itemData?.quantity;

          if (!itemData || !itemData.name) return null;

          const imgName = itemData.name.replaceAll(" ", "_");
          const imgUrl = "low_res/" + imgName + ".jpeg";

          return (
            <div
              key={itemIndex}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 p-3 sm:p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <img
                src={imgUrl}
                alt={`${imgName}-img`}
                className="h-full w-24 h-30 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{itemData.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {itemData.description?.slice(0, 100)}
                  {itemData.description?.length > 100 ? "..." : ""}
                </p>
                <h4 className="text-base font-medium mt-2">
                  ${itemData.price / 100}
                </h4>
                <div className="flex items-center gap-2 mt-3">
                  <label className="text-sm font-medium">Quantity:</label>
                  <input
                    type="number"
                    value={itemQuantity}
                    placeholder="2"
                    className="w-16 px-2 py-1 border border-gray-300 rounded-md"
                    onChange={(e) => {
                      const newValue = e.target.value;
                      handleIncrementProduct(
                        itemData.product_id,
                        newValue,
                        itemData,
                        true
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-md mx-auto mt-6 mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:border-neutral-600 transition"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      <div className="mt-10 gap-3 flex flex-col sm:flex-row justify-between items-center">
        <Link href={"/"}>
          <button className="text-sm font-medium text-neutral-700 hover:underline cursor-pointer">
            ← Continue Shopping
          </button>
        </Link>
        <button
          onClick={createCheckout}
          disabled={isLoading}
          className="px-6 py-2 bg-neutral-800 text-white rounded-lg hover:opacity-60 transition cursor-pointer"
        >
          {isLoading ? "Processing..." : "Checkout"}
        </button>
      </div>
    </section>
  );
}

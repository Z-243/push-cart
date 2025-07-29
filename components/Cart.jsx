"use client";

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";

export default function Cart() {
  const { cart } = useProducts();
  const numProducts = Object.keys(cart).reduce((acc, curr, currIndex) => {
    const quantity = cart[curr]?.quantity || 0;
    const sum = acc + parseInt(quantity);
    return sum;
  }, 0);

  return (
    <div className="relative">
      <Link
        href="/cart"
        className="inline-flex items-center justify-center p-3 rounded-full text-neutral-800 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
      >
        <i className="fa-solid fa-cart-shopping text-xl"></i>
      </Link>

      {numProducts > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-semibold rounded-full px-2 py-0.5 shadow">
          {numProducts}
        </span>
      )}
    </div>
  );
}

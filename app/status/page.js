"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function StatusPage() {
  const params = useSearchParams();
  const status = params.get("status");
  const paymentId = params.get("payment_id");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      {status === "succeeded" ? (
        <>
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            🎉 Payment Successful!
          </h2>
          <p className="mb-4">Payment ID: {paymentId}</p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            ❌ Payment Failed or Cancelled
          </h2>
        </>
      )}
      <a
        href="/"
        className="bg-neutral-800 text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition-opacity"
      >
        Continue Shopping
      </a>
    </div>
  );
}

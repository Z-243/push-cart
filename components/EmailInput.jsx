"use client";
import { useState } from "react";
export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setEmail("");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-w-0 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600 transition"
          required
        />
        <button
          type="submit"
          className="bg-neutral-800 text-white px-5 py-2 rounded-md font-medium hover:opacity-70 transition-opacity cursor-pointer"
        >
          Sign Up
        </button>
      </form>

      {submitted && <p className="text-green-600 mt-3 font-medium">Done 🎉</p>}
    </div>
  );
}

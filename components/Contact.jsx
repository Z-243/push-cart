"use client";
import { useState } from "react";

export default function Contact() {
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);

    e.target.reset();

    setTimeout(() => setDone(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-gray-600 mb-10">
        Have a question about your order, our stickers, or planners? We'd love
        to hear from you!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600"
            placeholder="Let us know how we can help"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-neutral-800 text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition-opacity cursor-pointer"
        >
          Send Message
        </button>
      </form>

      {done && (
        <p className="mt-4 text-green-600 text-left font-medium">Done 🎉</p>
      )}
    </div>
  );
}

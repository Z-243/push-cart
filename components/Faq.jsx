"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of planners do you offer?",
    answer: `We offer a variety of planners including:

• Daily Planner – A high-res minimalist layout with vintage charm.  
• Weekly Planner – Clean weekly spreads with space for notes, priorities, and reminders.  
• Monthly Organiser – A floral-themed planner for monthly goals and to-do lists.  
• Monthly Budget Planner – A lavender-toned tracker for income, expenses, and savings.  
• Self-Care Planner – A vintage butterfly-themed wellness planner for mood and nutrition tracking.  
• To-Do List Planner – A sleek, fuss-free layout to stay productive.`,
  },

  {
    question: "Can I get a quick overview of your stickers?",
    answer: `Sure! Some of our customer favorites include:

• "Made with Freshness" Circle Sticker – A charming label of guaranteed goodness.  
• "Wash Your Hands with Soap" Circle Sticker – Aesthetic and hygienic, perfect for stylish reminders.`,
  },

  {
    question: "Are your planners and stickers printable or physical?",
    answer:
      "Our products are delivered as high-quality printable PDFs, perfect for instant download and home printing.",
  },

  {
    question: "Can I use your planners digitally?",
    answer:
      "Yes! All planners are compatible with apps like GoodNotes, Notability, and other PDF annotation tools.",
  },

  {
    question: "Do you offer bundles or discounted sets?",
    answer:
      "Yes! We often offer themed bundles — like full self-care sets or productivity packs. Keep an eye on our shop or sign up for our newsletter!",
  },

  {
    question: "What’s your return or refund policy?",
    answer:
      "Since our products are digital downloads, we typically don’t offer refunds. But if you run into any issues, just reach out — we’re happy to help!",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-md">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 font-medium flex justify-between items-center hover:bg-gray-50 transition cursor-pointer"
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 mt-1 text-gray-600 whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

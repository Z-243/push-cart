"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error(props) {
  const { error, reset } = props;

  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h3 className="text-2xl font-semibold text-red-600 mb-6">
        Something went wrong 😔
      </h3>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className="bg-neutral-800 text-white px-5 py-2 rounded-md font-medium hover:opacity-80 transition-opacity cursor-pointer"
          onClick={reset}
        >
          Reset
        </button>
        <Link
          href="/"
          className="bg-neutral-800 text-white px-5 py-2 rounded-md font-medium hover:opacity-80 transition-opacity cursor-pointer"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

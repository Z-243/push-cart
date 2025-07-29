import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <p className="text-4xl font-bold text-gray-800 mb-6">404</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Page Not Found 😕
      </h2>
      <Link href="/">
        <button className="bg-neutral-800 text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition-opacity cursor-pointer">
          Go Home
        </button>
      </Link>
    </div>
  );
}

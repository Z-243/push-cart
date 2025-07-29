import Link from "next/link";
import "./globals.css";
import Head from "./head";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductProvider from "@/context/ProductContext";

export const metadata = {
  title: "PushCart",
  description: "Your ultimate destination for cool finds",
};

export default function RootLayout({ children }) {
  return (
    <ProductProvider>
      <html lang="en">
        <Head />
        <body className="bg-white text-gray-900">
          <div id="portal" />
          <div id="app" className="flex flex-col min-h-screen relative">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white shadow-md">
              <div className="max-w-7xl mx-auto px-6 py-4 flex sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/"
                  className="text-xl font-bold bg-gray-900 text-white px-3 py-1 rounded"
                >
                  PushCart
                </Link>
                <h5 className="text-center text-sm text-gray-600 hidden sm:block">
                  Get it. Love it.
                </h5>
                <div className="relative">
                  <Cart />
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 mt-8 w-full px-6 py-16">
              <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2">
                {/* Email Signup */}
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold">
                    Unlock early access to new products, promotions, and more!
                  </h5>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <EmailInput />
                  </div>
                </div>

                {/* Links */}
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="space-y-1 min-w-[140px]">
                    <h3 className="font-semibold text-sm text-gray-700 uppercase">
                      More Projects
                    </h3>
                    <Link
                      href="https://feelue.netlify.app/"
                      target="_blank"
                      className="block text-gray-600 hover:text-gray-800"
                    >
                      Feelue
                    </Link>
                    <Link
                      href="https://clear-mode.netlify.app/"
                      target="_blank"
                      className="block text-gray-600 hover:text-gray-800"
                    >
                      Clear Mode
                    </Link>
                  </div>
                  <div className="space-y-1 min-w-[140px]">
                    <h3 className="font-semibold text-sm text-gray-700 uppercase">
                      Store
                    </h3>
                    <Link
                      href="/"
                      className="block text-gray-600 hover:text-gray-800"
                    >
                      Home
                    </Link>
                    <Link
                      href="/cart"
                      className="block text-gray-600 hover:text-gray-800"
                    >
                      Cart
                    </Link>
                  </div>
                  <div className="space-y-1 min-w-[140px]">
                    <h3 className="font-semibold text-sm text-gray-700 uppercase">
                      Support
                    </h3>
                    <Link
                      href="/contact"
                      className="block text-gray-600 hover:text-gray-800"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/faq"
                      className="block text-gray-600 hover:text-gray-800"
                    >
                      FAQs
                    </Link>
                  </div>
                </div>

                {/* Socials */}
                <div className="md:col-span-2 flex flex-col gap-4 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Ⓒ{" "}
                    <a href="/" className="underline hover:text-gray-800">
                      PushCart
                    </a>{" "}
                    2025 — Built with Next.js
                  </p>
                  <div className="flex items-center gap-4 text-xl text-gray-600">
                    <Link
                      href="https://www.linkedin.com/in/shrey-c-/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin hover:text-blue-600" />
                    </Link>
                    <Link href="https://github.com/Z-243" target="_blank">
                      <i className="fa-brands fa-github hover:text-black" />
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductProvider>
  );
}

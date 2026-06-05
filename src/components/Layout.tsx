import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FFCE63] flex flex-col font-sans antialiased text-gray-800 selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="flex grow w-full max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

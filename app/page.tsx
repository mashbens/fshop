"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { ProductHero } from "@/components/products/ProductHero";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProductList } from "@/components/products/ProductList";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/data/products";
import { SiteConfig } from "@/data/siteConfig"


export default function OnePageShop() {
  const [isDark, setIsDark] = useState(true);

  const themeClasses = {
    background: isDark 
      ? "bg-gradient-to-b from-gray-900 to-gray-800" 
      : "bg-gradient-to-b from-gray-50 to-white",
    card: isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
    textPrimary: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-400" : "text-gray-600"
  };

  return (
    <main className={`min-h-screen ${themeClasses.background} p-6`}>
      <div className="max-w-6xl mx-auto">
        <Header 
          isDark={isDark} 
          toggleDarkMode={() => setIsDark(!isDark)} 
          themeClasses={themeClasses}
        />

        <ProductHero 
          product={products[0]} 
          themeClasses={themeClasses} 
          phone={SiteConfig.phone}
        />

        <BenefitsSection 
          themeClasses={themeClasses} 
          phone={SiteConfig.phone}
        />

        <ProductList 
          products={products} 
          themeClasses={themeClasses} 
          phone={SiteConfig.phone}
        />

        <Footer themeClasses={themeClasses} />
      </div>
    </main>
  );
}
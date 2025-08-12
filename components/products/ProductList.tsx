"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { formatRupiah } from "@/lib/utils";

interface Product {
  id: number;
  title: string;
  price: number;
  desc: string;
  img: string;
  category?: string;
  minOrder?: number;
}

interface ThemeClasses {
  card?: string;
  textPrimary?: string;
  textSecondary?: string;
  buttonSecondary?: string;
}

interface ProductListProps {
  products: Product[];
  themeClasses?: ThemeClasses;
  phone: string;
}

export const ProductList = ({ products, themeClasses = {}, phone }: ProductListProps) => {
  // Default classes that will be merged with custom themeClasses
  const defaultClasses = {
    card: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
    textPrimary: "text-gray-900 dark:text-white",
    textSecondary: "text-gray-600 dark:text-gray-400",
    buttonSecondary: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
  };

  // Merge default classes with custom themeClasses
  const mergedClasses = {
    card: themeClasses?.card || defaultClasses.card,
    textPrimary: themeClasses?.textPrimary || defaultClasses.textPrimary,
    textSecondary: themeClasses?.textSecondary || defaultClasses.textSecondary,
    buttonSecondary: themeClasses?.buttonSecondary || defaultClasses.buttonSecondary
  };

  const handleOrder = (productTitle: string, price: number) => {
    const text = `Halo, saya mau pesan ${productTitle} (${formatRupiah(price)}). Apakah stok tersedia?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="products" className="p-6 pt-12">
      <h3 className={`text-xl font-bold mb-6 ${mergedClasses.textPrimary}`}>
        🛍️ Beberapa Produk Unggulan Kami
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.article
            key={product.id}
            whileHover={{ y: -6 }}
            className={`${mergedClasses.card} rounded-2xl p-4 shadow-sm border transition-all duration-300`}
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={product.id <= 3} // Only prioritize first 3 images
              />
            </div>
            
            <div className="mt-4">
              <h4 className={`font-semibold text-lg ${mergedClasses.textPrimary}`}>
                {product.title}
                {product.minOrder && (
                  <span className="block text-xs font-normal mt-1">
                    Min. order: {product.minOrder} pcs
                  </span>
                )}
              </h4>
              <p className={`text-sm mt-2 ${mergedClasses.textSecondary}`}>
                {product.desc}
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <div className={`text-lg font-bold ${mergedClasses.textPrimary}`}>
                  {formatRupiah(product.price)}
                </div>
                
                <div className="flex gap-2">
                  <WhatsAppButton
                    phone={phone}
                    message={`Saya mau pesan ${product.title}`}
                    className="px-3 py-2 text-sm"
                  />
                  <button
                    onClick={() => handleOrder(product.title, product.price)}
                    className={`px-3 py-2 rounded-md border text-sm ${mergedClasses.buttonSecondary}`}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
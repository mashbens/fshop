"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OnePageShop() {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const phone = "6281234567890";

  const products = [
    {
      id: 1,
      title: "Glow Serum 30ml",
      price: 129000,
      desc: "Mencerahkan kulit, cepat meresap, cocok untuk semua jenis kulit.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 2,
      title: "Herbal Tea Pack",
      price: 85000,
      desc: "Campuran herbal organik untuk rileks dan tidur lebih nyenyak.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 3,
      title: "Minimalist Tote Bag",
      price: 159000,
      desc: "Kanvas tebal, jahitan rapi, kapasitas besar.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const formatRupiah = (n: number) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const goToWhatsApp = (productTitle: string, price: number) => {
    const text = `Halo kak, saya mau pesan ${productTitle} (Rp ${formatRupiah(
      price
    )}). Apakah stok tersedia?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // Theme classes
  const themeClasses = {
    background: isDark
      ? "bg-gradient-to-b from-gray-900 to-gray-800"
      : "bg-gradient-to-b from-gray-50 to-white",
    card: isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
    textPrimary: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-400" : "text-gray-600",
    buttonSecondary: isDark
      ? "border-gray-600 text-gray-300 hover:bg-gray-700"
      : "border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <main className={`min-h-screen ${themeClasses.background} flex items-center justify-center p-6`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`max-w-6xl w-full ${themeClasses.card} rounded-2xl shadow-xl overflow-hidden border`}
      >
        {/* HEADER */}
        <header className="md:flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-xl ${
                isDark
                  ? "bg-gradient-to-br from-gray-700 to-gray-600"
                  : "bg-gradient-to-br from-gray-200 to-gray-300"
              } flex items-center justify-center font-semibold text-lg ${themeClasses.textPrimary}`}
            >
              FS
            </div>
            <div>
              <h1 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
                FSHOP Snack & Grosir
              </h1>
                <p className={`text-sm ${themeClasses.textSecondary}`}>
                Distributor Bahan Baku & Snack Terpercaya untuk Usaha Anda di Jabodetabek               
                </p>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${
                isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "Halo kak, saya mau tanya produk dan ongkir"
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-md"
            >
              Chat WA
            </a>
            <a
              href="#products"
              className={`text-sm ${themeClasses.textSecondary} hover:underline`}
            >
              Lihat Produk
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6"
          >
            <h2
              className={`text-3xl md:text-4xl font-extrabold leading-tight ${themeClasses.textPrimary}`}
            >
              FSHOP Snack & Grosir
              <span
                className={`block ${
                  isDark ? "text-gray-300" : "text-gray-600"
                } mt-2 text-xl font-medium`}
              >
                Pasokan cepat, harga grosir, kualitas terjamin — langsung dari gudang kami ke toko Anda.
              </span>
            </h2>
            <p className={`mt-4 ${themeClasses.textSecondary}`}>
              FSHOP Snack & Grosir adalah agen distribusi bahan baku makanan, minyak goreng, tepung terigu, snack rumahan, dan berbagai kebutuhan toko kelontong di area Jabodetabek.
              Kami tidak menjual eceran — semua pembelian dalam jumlah grosir dengan harga yang kompetitif dan kualitas terbaik.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
                className={`px-5 py-3 rounded-lg ${
                  isDark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
                } ${themeClasses.textPrimary} font-medium shadow`}
              >
                Lihat Semua
              </button>
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  "Halo kak, saya mau tanya promo"
                )}`}
                target="_blank"
                rel="noreferrer"
                className={`px-5 py-3 rounded-lg border ${themeClasses.buttonSecondary}`}
              >
                Tanyakan Promo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6"
          >
            <div
              className={`relative ${
                isDark
                  ? "bg-gradient-to-br from-gray-700 to-gray-600"
                  : "bg-gradient-to-br from-gray-100 to-gray-50"
              } rounded-xl p-4 shadow-inner`}
            >
              {isLoading ? (
                <div className="w-full aspect-[4/3] rounded-xl bg-gray-500 animate-pulse"></div>
              ) : (
                <Image
                  src={products[0].img}
                  alt={products[0].title}
                  width={800}
                  height={600}
                  className="w-full rounded-xl object-cover aspect-[4/3]"
                  priority
                />
              )}
              <div
                className={`absolute -bottom-6 left-6 w-64 md:w-72 ${
                  isDark ? "bg-gray-800/90" : "bg-white/90"
                } backdrop-blur-sm rounded-xl p-4 shadow-lg border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h3 className={`font-semibold ${themeClasses.textPrimary}`}>
                  {products[0].title}
                </h3>
                <p className={`mt-1 text-sm ${themeClasses.textSecondary}`}>
                  {products[0].desc}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className={`text-lg font-bold ${themeClasses.textPrimary}`}>
                    Rp {formatRupiah(products[0].price)}
                  </div>
                  <button
                    onClick={() =>
                      goToWhatsApp(products[0].title, products[0].price)
                    }
                    className="px-3 py-2 rounded-md bg-green-600 text-white font-medium shadow hover:bg-green-700"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

                {/* PRODUCT LIST */}
        <section id="products" className="p-6 pt-12">
          <h3 className={`text-xl font-bold mb-4 ${themeClasses.textPrimary}`}>
            🛍️ Katalog Produk Unggulan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className={`${themeClasses.card} rounded-2xl p-4 shadow-sm`}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  {isLoading ? (
                    <div className="w-full h-full bg-gray-500 animate-pulse"></div>
                  ) : (
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="mt-3">
                  <h4 className={`font-semibold ${themeClasses.textPrimary}`}>
                    {p.title}
                  </h4>
                  <p className={`text-sm ${themeClasses.textSecondary} mt-1`}>
                    {p.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className={`text-lg font-bold ${themeClasses.textPrimary}`}>
                      Rp {formatRupiah(p.price)}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => goToWhatsApp(p.title, p.price)}
                        className="px-3 py-2 rounded-md bg-green-600 text-white text-sm font-medium shadow hover:bg-green-700"
                      >
                        Pesan
                      </button>
                      <button
                        onClick={() =>
                          alert("Tambah fitur: detail produk (modal/page)")
                        }
                        className={`px-3 py-2 rounded-md border text-sm ${themeClasses.buttonSecondary}`}
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

        {/* BENEFITS SECTION */}
        <section className="p-6 pt-0">
          <div className={`rounded-2xl p-6 ${isDark ? "bg-gray-700/50" : "bg-gray-100"} grid grid-cols-1 md:grid-cols-2 gap-6`}>
            <div>
              <h3 className={`text-xl font-bold mb-4 ${themeClasses.textPrimary}`}>
                ✨ Kelebihan FSHOP
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✅</span>
                  <span className={themeClasses.textSecondary}>
                    <strong className={themeClasses.textPrimary}>Harga Grosir Kompetitif</strong> — lebih murah untuk pembelian dalam jumlah besar.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✅</span>
                  <span className={themeClasses.textSecondary}>
                    <strong className={themeClasses.textPrimary}>Stok Selalu Ready</strong> — langsung dari gudang, tidak perlu menunggu lama.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✅</span>
                  <span className={themeClasses.textSecondary}>
                    <strong className={themeClasses.textPrimary}>Pengiriman Cepat</strong> — area Jabodetabek, langsung sampai ke toko Anda.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✅</span>
                  <span className={themeClasses.textSecondary}>
                    <strong className={themeClasses.textPrimary}>Produk Lengkap</strong> — bahan baku + snack dalam satu pengiriman.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-4 ${themeClasses.textPrimary}`}>
                ℹ️ Info Pemesanan
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? "text-blue-400" : "text-blue-600"} mt-0.5`}>📦</span>
                  <span className={themeClasses.textSecondary}>
                    <strong className={themeClasses.textPrimary}>Minimal Order:</strong> sesuai paket grosir (tidak melayani eceran).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? "text-yellow-400" : "text-yellow-600"} mt-0.5`}>🚚</span>
                  <span className={themeClasses.textSecondary}>
                    <strong className={themeClasses.textPrimary}>Area Pengiriman:</strong> Jabodetabek.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`${isDark ? "text-green-400" : "text-green-600"} mt-0.5`}>💬</span>
                  <span className={themeClasses.textSecondary}>
                    <strong className={themeClasses.textPrimary}>Pesan Sekarang via WhatsApp</strong> — klik tombol di bawah untuk terhubung langsung dengan admin.
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    "Halo FSHOP, saya mau tanya tentang produk grosir"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-md font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi Admin Sekarang
                </a>
              </div>
            </div>
          </div>
        </section>



        {/* FOOTER */}
        <footer
          className={`p-6 border-t ${
            isDark ? "border-gray-700" : "border-gray-200"
          } flex items-center justify-between`}
        >
          <div className={`text-sm ${themeClasses.textSecondary}`}>
            © {new Date().getFullYear()} FSHOP Snack & Grosir — Distributor Bahan Baku Jabodetabek
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className={`text-sm ${themeClasses.textSecondary} hover:underline`}
            >
              FAQ
            </a>
            <a
              href="#"
              className={`text-sm ${themeClasses.textSecondary} hover:underline`}
            >
              Kebijakan
            </a>
          </div>
        </footer>

        {/* FLOATING WA BUTTON */}
        <div className="fixed right-6 bottom-6 md:bottom-8 md:right-8">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() =>
              window.open(
                `https://wa.me/${phone}?text=${encodeURIComponent("Halo FSHOP, saya mau tanya produk grosir")}`,
                "_blank"
              )
            }
            className="w-14 h-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white"
            aria-label="Chat WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}
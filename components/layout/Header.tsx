"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "../ui/DarkModeToggle";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { SiteConfig } from "../../data/siteConfig";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = ({ 
  isDark, 
  toggleDarkMode, 
  themeClasses 
}: {
  isDark: boolean;
  toggleDarkMode: () => void;
  themeClasses: any;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Produk", path: "/products" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Mitra Blog", path: "/blog" },
    { name: "Karir", path: "/careers" }
  ];

  const activeClass = isDark 
    ? "bg-gray-700 text-white" 
    : "bg-gray-200 text-gray-900";

  return (
    <header className="relative">
      <div className="md:flex items-center justify-between p-6">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl ${
              isDark ? "bg-gradient-to-br from-gray-700 to-gray-600" 
                    : "bg-gradient-to-br from-gray-200 to-gray-300"
            } flex items-center justify-center font-semibold text-lg ${themeClasses.textPrimary}`}>
              FS
            </div>
            <div className="hidden md:block">
              <h1 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
                {SiteConfig.businessName}
              </h1>
              {/* <p className={`text-sm ${themeClasses.textSecondary}`}> */}
                {/* {SiteConfig.description} */}
              {/* </p>s */}
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex items-center gap-6 mt-4 md:mt-0`}>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row gap-1 md:gap-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      pathname === item.path
                        ? activeClass
                        : `${themeClasses.textPrimary} hover:bg-opacity-10 ${isDark ? 'hover:bg-white' : 'hover:bg-gray-900'}`
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-200 dark:border-gray-700">
            <DarkModeToggle isDark={isDark} toggle={toggleDarkMode} />
            <WhatsAppButton 
              phone={SiteConfig.phone} 
              message="Halo kak, saya mau tanya produk dan ongkir"
              className="px-4 py-2 rounded-xl w-full md:w-auto justify-center"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
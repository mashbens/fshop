"use client";
import { DarkModeToggle } from "../ui/DarkModeToggle";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { SiteConfig } from "../../data/siteConfig"


export const Header = ({ 
  isDark, 
  toggleDarkMode, 
  themeClasses 
}: {
  isDark: boolean;
  toggleDarkMode: () => void;
  themeClasses: any;
}) => (
  <header className="md:flex items-center justify-between p-6">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl ${
        isDark ? "bg-gradient-to-br from-gray-700 to-gray-600" 
               : "bg-gradient-to-br from-gray-200 to-gray-300"
      } flex items-center justify-center font-semibold text-lg ${themeClasses.textPrimary}`}>
        FS
      </div>
      <div>
        <h1 className={`text-lg font-bold ${themeClasses.textPrimary}`}>
          {SiteConfig.businessName}
        </h1>
        <p className={`text-sm ${themeClasses.textSecondary}`}>
          {SiteConfig.description}
        </p>
      </div>
    </div>

    <div className="mt-4 md:mt-0 flex items-center gap-3">
      <DarkModeToggle isDark={isDark} toggle={toggleDarkMode} />
      <WhatsAppButton 
        phone={SiteConfig.phone} 
        message="Halo kak, saya mau tanya produk dan ongkir"
        className="px-4 py-2 rounded-xl"
      />
    </div>
  </header>
);
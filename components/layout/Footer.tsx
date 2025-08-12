"use client";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SiteConfig } from "@/data/siteConfig";

interface FooterProps {
  themeClasses: {
    textPrimary: string;
    textSecondary: string;
  };
}

export const Footer = ({ themeClasses }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t ${themeClasses.textSecondary} py-8 px-6`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className={`text-lg font-semibold ${themeClasses.textPrimary}`}>
            {SiteConfig.businessName}
          </h3>
          <p className="text-sm">
            Distributor bahan baku dan snack grosir untuk usaha di Jabodetabek
          </p>
          <WhatsAppButton 
            phone={SiteConfig.phone}
            message="Halo, saya mau tanya tentang produk grosir"
            // className="w-full md:w-auto"
            className="px-5 py-3 rounded-lg"
            // variant="secondary"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={`text-lg font-semibold ${themeClasses.textPrimary} mb-4`}>
            Tautan Cepat
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#products" className="hover:underline">Produk Kami</a></li>
            <li><a href="#" className="hover:underline">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className={`text-lg font-semibold ${themeClasses.textPrimary} mb-4`}>
            Kontak Kami
          </h4>
          <address className="not-italic text-sm space-y-2">
            <p>Jl. Raya Contoh No. 123</p>
            <p>Jakarta Selatan, DKI Jakarta</p>
            <p>Indonesia</p>
            <p>Email: info@fshop.com</p>
            <p>Telp: (021) 12345678</p>
          </address>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className={`text-lg font-semibold ${themeClasses.textPrimary} mb-4`}>
            Jam Operasional
          </h4>
          <ul className="text-sm space-y-2">
            <li className="flex justify-between">
              <span>Senin-Jumat:</span>
              <span>08:00 - 17:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sabtu:</span>
              <span>09:00 - 15:00</span>
            </li>
            <li className="flex justify-between">
              <span>Minggu:</span>
              <span>Tutup</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={`border-t mt-8 pt-6 text-center text-sm ${themeClasses.textSecondary}`}>
        <p>© {currentYear} {SiteConfig.businessName}. All rights reserved.</p>
        <p className="mt-1">Developed with ❤️ for Indonesian businesses</p>
      </div>
    </footer>
  );
};
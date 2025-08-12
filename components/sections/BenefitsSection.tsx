"use client";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SiteConfig } from "@/data/siteConfig";

interface BenefitsSectionProps {
  themeClasses: {
    textPrimary: string;
    textSecondary: string;
    card: string;
  };
  phone: string;
}

export const BenefitsSection = ({ themeClasses, phone }: BenefitsSectionProps) => {
  return (
    <section className="p-6 pt-0">
      <div className={`rounded-2xl p-6 ${themeClasses.card} grid grid-cols-1 md:grid-cols-2 gap-6`}>
        {/* Benefits Column */}
        <div>
          <h3 className={`text-xl font-bold mb-4 ${themeClasses.textPrimary}`}>
            ✨ Kelebihan {SiteConfig.businessName}
          </h3>
          <ul className="space-y-3">
            {SiteConfig.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                {/* <span className="text-green-500 mt-0.5">✓</span> */}
                <span className={themeClasses.textSecondary}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Order Info Column */}
        <div>
          <h3 className={`text-xl font-bold mb-4 ${themeClasses.textPrimary}`}>
            ℹ️ Info Pemesanan
          </h3>
          <ul className="space-y-3 mb-6">
            {SiteConfig.orderInfo.map((info, index) => {
              let icon = "📦";
              if (info.includes("🚚")) icon = "🚚";
              if (info.includes("💬")) icon = "💬";
              
              return (
                <li key={index} className="flex items-start gap-2">
                  {/* <span className="mt-0.5">{icon}</span> */}
                  <span className={themeClasses.textSecondary}>
                    {info}
                  </span>
                </li>
              );
            })}
          </ul>
          
          {/* <WhatsAppButton
            phone={phone}
            message={`Halo ${SiteConfig.businessName}, saya mau tanya tentang produk grosir`}
            className="w-full md:w-auto justify-center"
          /> */}
        </div>
      </div>
    </section>
  );
};
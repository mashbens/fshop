"use client";
import Image from "next/image";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { SiteConfig } from "../../data/siteConfig"

export const ProductHero = ({ 
  product, 
  themeClasses,
  phone
}: {
  product: any;
  themeClasses: any;
  phone: string;
}) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
    <div className="p-6">
      <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight ${themeClasses.textPrimary}`}>
        {SiteConfig.businessName}
        <span className={`block ${themeClasses.textSecondary} mt-2 text-xl font-medium`}>
          Pasokan cepat, harga grosir, kualitas terjamin
        </span>
      </h2>
      <p className={`mt-4 ${themeClasses.textSecondary}`}>
        {SiteConfig.longDescription}
      </p>
      <div className="mt-6 flex gap-3">
        <WhatsAppButton 
          phone={phone}
          message="Halo kak, saya mau tanya promo"
          className="px-5 py-3 rounded-lg"
          variant="secondary"
        />
      </div>
    </div>

    <div className="relative rounded-xl p-4 shadow-inner">
      <Image
        src={product.img}
        alt={product.title}
        width={800}
        height={600}
        className="w-full rounded-xl object-cover aspect-[4/3]"
        priority
      />
      <div className={`absolute -bottom-3 left-6 w-64 md:w-72 ${
        themeClasses.card
      } backdrop-blur-sm rounded-xl p-4 shadow-lg border`}>
        <h3 className={`font-semibold ${themeClasses.textPrimary}`}>
          {product.title}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <div className={`text-lg font-bold ${themeClasses.textPrimary}`}>
            Rp {product.price.toLocaleString('id-ID')}
          </div>
          <WhatsAppButton 
            phone={phone}
            message={`Saya mau pesan ${product.title}`}
            className="px-3 py-2 rounded-md"
          />
        </div>
      </div>
    </div>
  </section>
);
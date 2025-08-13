import { ProductList } from "@/components/products/ProductList";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Daftar Produk</h1>
      {/* <ProductList products={products} /> */}
    </div>
  );
}
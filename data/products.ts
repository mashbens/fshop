export interface Product {
  id: number;
  title: string;
  price: number;
  desc: string;
  img: string;
  category?: string;
  minOrder?: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Minyak Goreng Kelapa 5L",
    price: 125000,
    desc: "Minyak goreng premium untuk usaha makanan, kemasan pouch ekonomis.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    category: "bahan-baku",
    minOrder: 10
},
{
    id: 2,
    title: "Tepung Terigu Protein Tinggi 25kg",
    price: 275000,
    desc: "Tepung terigu khusus untuk roti dan bakery, kualitas industri.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    category: "bahan-baku", 
    minOrder: 5
},
{
    id: 3,
    title: "Snack Keripik Singkong Balado",
    price: 35000,
    desc: "Keripik singkong pedas manis, kemasan 500gr untuk toko kelontong.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    category: "snack",
    minOrder: 20
},
{
    id: 4, 
    title: "Gula Pasir Kemasan 1kg",
    price: 15000,
    desc: "Gula pasir kristal putih, kemasan standar toko.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    category: "bahan-baku",
    minOrder: 50
},
{
    id: 5,
    title: "Kacang Telur Gurih",
    price: 28000,
    desc: "Kacang tanah berbalut tepung, kemasan 250gr.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    category: "snack",
    minOrder: 30
},
{
    id: 6,
    title: "Bumbu Masak Instan Komplit",
    price: 8500,
    desc: "Paket bumbu lengkap untuk usaha makanan, isi 10 sachet.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    category: "bahan-baku",
    minOrder: 100
  }
];

// Helper functions
export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};
import { ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  brand: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 'LKR 337,000',
    image: 'https://smartmobile.lk/image/cache/catalog/Apple%20iPhone%2015%20Pro%20Max-500x500.jpg',
    rating: 5,
    brand: 'Apple',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 'LKR 241,000',
    image: 'https://banana.lk/wp-content/uploads/2024/08/galaxy-s24-ultra-gray.jpg',
    rating: 5,
    brand: 'Samsung',
  },
  {
    id: 3,
    name: 'Google Pixel 8 Pro',
    price: 'LKR 154,000',
    image: 'https://smartmobile.lk/image/cache/catalog/Google%20Pixel%208%20Pro-500x500.jpg',
    rating: 4,
    brand: 'Google',
  },
  {
    id: 4,
    name: 'iPhone 15',
    price: 'LKR 197,000',
    image: 'https://smartmobile.lk/image/cache/catalog/Apple%20iPhone%2015-500x500.jpg',
    rating: 5,
    brand: 'Apple',
  },
  {
    id: 5,
    name: 'Samsung Galaxy Z Fold 5',
    price: 'LKR 327,000',
    image: 'https://celltronics.lk/wp-content/uploads/2023/07/Untitled-design-11.png',
    rating: 5,
    brand: 'Samsung',
  },
  {
    id: 6,
    name: 'Google Pixel 8',
    price: 'LKR 232,000',
    image: 'https://ihome.lk/wp-content/uploads/2024/08/Google-Pixel-8-5G-8GB-RAM-128GB-02.jpg',
    rating: 4,
    brand: 'Google',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured Products
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our curated selection of the latest flagship smartphones
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-zinc-950 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
            >
              <div className="aspect-square bg-zinc-900 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < product.rating
                            ? 'fill-white text-white'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    {product.price}
                  </span>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-semibold">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

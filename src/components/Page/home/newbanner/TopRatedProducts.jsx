import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const API_URL = "https://product-rec-server.vercel.app";

// লোডিং স্পিনার
function Spinner() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-10 h-10 border-4 border-t-transparent border-gray-300 rounded-full animate-spin" />
    </div>
  );
}

export function TopRatedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_URL}/products`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        // রেটিং অনুযায়ী সাজানো
        const sorted = data.sort((a, b) => b.rating - a.rating);
        setProducts(sorted.slice(0, 6));
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Top Rated Products</h2>
        <p className="text-sm text-gray-600 mb-6">
          আমাদের সেরা রেটিং পাওয়া প্রোডাক্টগুলো দেখুন।
        </p>

        {loading ? (
          <Spinner />
        ) : products.length === 0 ? (
          <p className="text-gray-500">কোনো প্রোডাক্ট পাওয়া যায়নি।</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p) => (
              <article
                key={p._id}
                className="bg-white rounded-lg shadow p-4"
              >
                <img
                  src={p.image || "https://via.placeholder.com/300"}
                  alt={p.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="font-medium text-lg mt-3 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-600 h-14 overflow-hidden">
                  {p.description || "No description provided."}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-orange-500">
                    ⭐ {p.rating?.toFixed(1) || "0"}
                  </span>
                  <Link
                    to={`/products/${p._id}`}
                    className="text-[rgb(255,98,84)] text-sm hover:underline"
                  >
                    View
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

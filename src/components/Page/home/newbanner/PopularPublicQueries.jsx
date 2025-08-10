import React, { useEffect, useState } from "react";
import { Link } from "react-router";

// Backend API URL
const API_URL = "https://product-rec-server.vercel.app"; 

// Simple spinner component
function Spinner() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-10 h-10 border-4 border-t-transparent border-gray-300 rounded-full animate-spin" />
    </div>
  );
}

// PopularPublicQueries Component
export function PopularPublicQueries() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_URL}/queries`);
        if (!res.ok) throw new Error("Failed to fetch queries");

        const data = await res.json();

        // sort by newest first and take first 6
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setQueries(sorted.slice(0, 6));
      } catch (err) {
        console.error("Failed to load queries:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Popular Public Queries</h2>
        <p className="text-sm text-gray-600 mb-6">
          লগইন না করেও সামান্য প্রশ্নগুলো দেখুন। বিস্তারিত জানতে লগইন করুন।
        </p>

        {loading ? (
          <Spinner />
        ) : queries.length === 0 ? (
          <p className="text-gray-500">কোনো প্রশ্ন পাওয়া যায়নি।</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {queries.map((q) => (
              <article
                key={q._id}
                className="bg-white rounded-lg shadow p-4"
              >
                <h3 className="font-medium text-lg mb-2">{q.title}</h3>
                <p className="text-sm text-gray-600 h-14 overflow-hidden">
                  {q.description || "No description provided."}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(q.createdAt).toLocaleDateString()}
                  </span>
                  <Link
                    to={`/queries/${q._id}`}
                    className="text-[rgb(255,98,84)] text-sm hover:underline"
                    aria-label={`View query ${q.title}`}
                  >
                    See more
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

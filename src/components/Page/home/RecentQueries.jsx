import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const RecentQueries = () => {
  const [recentQueries, setRecentQueries] = useState([]);

  useEffect(() => {
    axios.get("https://product-rec-server.vercel.app/queries")
      .then((res) => {        
        const sorted = res.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 6);
        setRecentQueries(sorted);
      })
      .catch((err) => console.error("Failed to fetch queries:", err));
  }, []);

  if (recentQueries.length === 0) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  return (
    <section className=" px-4 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Recent Queries</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recentQueries.map((query) => (
          <div key={query._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img
              src={query.imageUrl}
              alt={query.productName}
              className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{query.queryTitle}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Product:</span> {query.productName}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Brand:</span> {query.productBrand}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Posted by:</span> {query.name}
              </p>
              <Link
                to={`/queries/${query._id}`}
                className="mt-auto inline-block text-center bg-[rgb(255,98,84)] text-white py-2 px-4 rounded hover:bg-[rgb(255,98,8)] transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentQueries;

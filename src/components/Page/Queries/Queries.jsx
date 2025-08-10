import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { FaThList, FaThLarge } from "react-icons/fa";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [view, setView] = useState("grid");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get("https://product-rec-server.vercel.app/queries")
      .then((res) => {
        const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setQueries(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredQueries = queries.filter(query =>
    query.queryTitle.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container mx-auto  py-10">
      {/* Header and View Toggle */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold">All Product Queries</h2>
        <div className="flex gap-3">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded ${view === "list" ? "bg-[rgb(255,98,84)] text-white" : "bg-gray-200 text-gray-700"}`}
          >
            <FaThList size={20} />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded ${view === "grid" ? "bg-[rgb(255,98,84)] text-white" : "bg-gray-200 text-gray-700"}`}
          >
            <FaThLarge size={20} />
          </button>
        </div>
      </div>

      {/* 🔍 Search Input & Clear Button */}
      <div className="mb-8 flex flex-col md:flex-row items-center gap-4 justify-center">
        <input
          type="text"
          placeholder="Search by product name..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-red-300"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText && (
          <button
            onClick={() => setSearchText("")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-lg"
          >
            Clear
          </button>
        )}
      </div>

      {/* Render Filtered Queries */}
      {filteredQueries.length === 0 ? (
        <p className="text-center text-gray-500">No queries matched.</p>
      ) : (
        <div
          className={`grid gap-6 ${
            view === "grid"
              ? "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {filteredQueries.map((query) => (
            <div
              key={query._id}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between"
            >
              <img
                src={query.imageUrl}
                alt={query.productName}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{query.queryTitle}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Product:</span> {query.productName}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Brand:</span> {query.productBrand}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Posted by:</span> {query.name}
              </p>

              <div className="mt-auto pt-4">
                <p className="mb-3 text-gray-700">
                  Recommendations: <span className="font-bold">{query.recommendationCount}</span>
                </p>
                <Link
                  to={`/queries/${query._id}`}
                  className="block text-center w-full bg-[rgb(255,98,84)] hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Recommend
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Queries;

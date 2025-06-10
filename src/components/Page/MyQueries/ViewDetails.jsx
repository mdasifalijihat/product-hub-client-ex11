import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ViewDetails = () => {
  const { id } = useParams();
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/queries/${id}`)
      .then((res) => {
        setQuery(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch query:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!query) return <p className="text-center mt-10">Query not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={query.imageUrl}
            alt={query.productName}
            className="w-full md:w-64 h-auto rounded-xl border"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {query.queryTitle}
          </h2>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Product:</span>{" "}
            {query.productName} ({query.productBrand})
          </p>
          <p className="text-gray-600 mb-4 whitespace-pre-line">
            <span className="font-semibold">Reason:</span>{" "}
            {query.reasonDetails}
          </p>

          {/* User Info */}
          <div className="flex items-center gap-4 mt-6">
            <img
              src={query.photoURL}
              alt="User"
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <p className="font-medium text-gray-800">{query.name}</p>
              <p className="text-sm text-gray-500">{query.email}</p>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-6 flex justify-between text-sm text-gray-500">
            <p>Posted: {new Date(query.createdAt).toLocaleString()}</p>
            <p>Recommendations: {query.recommendationCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

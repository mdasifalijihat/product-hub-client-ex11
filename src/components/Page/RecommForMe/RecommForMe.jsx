import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../AuthContext/AuthContext";

const RecommForMe = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://product-rec-server.vercel.app/recommendations/for-my-queries?email=${user.email}`
        )
        .then((res) => setRecommendations(res.data))
        .catch((err) => console.error("Error fetching recommendations:", err));
    }
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Recommendations for Your Queries
      </h2>

      {recommendations.length === 0 ? (
        <p className="text-center text-gray-600">
          No recommendations found for your queries.
        </p>
      ) : (
        <>
          
          <div className="space-y-6 sm:hidden">
            {recommendations.map((rec) => (
              <div key={rec._id} className="border rounded-lg overflow-hidden">
                {/* image on top */}
                <img
                  src={rec.imageUrl}
                  alt={rec.recommendedProduct}
                  className="w-full h-52 object-cover"
                />

                {/* text stack */}
                <div className="p-4 space-y-1 text-sm">
                  <p>
                    <strong>Query Title:</strong> {rec.queryTitle}
                  </p>
                  <p>
                    <strong>Recommended Product:</strong>{" "}
                    {rec.recommendedProduct}
                  </p>
                  <p>
                    <strong>Title:</strong> {rec.title}
                  </p>
                  <p>
                    <strong>Reason:</strong> {rec.reason}
                  </p>
                  <p>
                    <strong>Recommender:</strong> {rec.recommenderName}
                    <br />
                    <span className="text-gray-500">
                      {rec.recommenderEmail}
                    </span>
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(rec.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="overflow-x-auto hidden sm:block">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Query Title</th>
                  <th className="border px-4 py-2">Recommender</th>
                  <th className="border px-4 py-2">Title</th>
                  <th className="border px-4 py-2">Recommended Product</th>
                  <th className="border px-4 py-2">Reason</th>
                  <th className="border px-4 py-2">Image</th>
                  <th className="border px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.map((rec) => (
                  <tr key={rec._id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{rec.queryTitle}</td>
                    <td className="border px-4 py-2">
                      {rec.recommenderName}
                      <br />
                      <span className="text-xs text-gray-500">
                        {rec.recommenderEmail}
                      </span>
                    </td>
                    <td className="border px-4 py-2">{rec.title}</td>
                    <td className="border px-4 py-2">
                      {rec.recommendedProduct}
                    </td>
                    <td className="border px-4 py-2">{rec.reason}</td>
                    <td className="border px-4 py-2 ">
                      <img
                        src={rec.imageUrl}
                        alt={rec.recommendedProduct}                        
                        className="w-20 h-20 lg:w-[250px] lg:h-[250px] object-cover rounded  "
                      />
                    </td>
                    <td className="border px-4 py-2">
                      {new Date(rec.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default RecommForMe;

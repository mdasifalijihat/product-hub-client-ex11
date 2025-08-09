import React, { useEffect, useState, use } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { AuthContext } from "../../../AuthContext/AuthContext";

const QueryDetails = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const [query, setQuery] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get(`https://product-rec-server.vercel.app/queries/${id}`)
      .then((res) => setQuery(res.data));
    axios
      .get(
        `https://product-rec-server.vercel.app/recommendations?queryId=${id}`
      )
      .then((res) => setRecommendations(res.data));
  }, [id]);

  const handleAddRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const recommendation = {
      queryId: id,
      queryTitle: query.queryTitle,
      productName: query.productName,
      userEmail: query.email,
      userName: query.name,
      recommenderEmail: user.email,
      recommenderName: user.displayName,
      title: form.title.value,
      recommendedProduct: form.recommendedProduct.value,
      imageUrl: form.imageUrl.value,
      reason: form.reason.value,
      createdAt: new Date().toISOString(),
    };

    axios
      .post(
        "https://product-rec-server.vercel.app/recommendations",
        recommendation
      )
      .then(() => {
        axios.patch(
          `https://product-rec-server.vercel.app/queries/recommend-count/${id}`,
          { inc: 1 }
        );
        form.reset();
        axios
          .get(
            `https://product-rec-server.vercel.app/recommendations?queryId=${id}`
          )
          .then((res) => setRecommendations(res.data));
      });
  };

  if (!query) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Query Details</h2>
        <div className="flex flex-col md:flex-row gap-6 text-black">
          <div className="md:order-2 flex-1 md:max-w-[450px]">
            <img
              src={query.imageUrl}
              alt={query.productName}
              className="w-full h-auto md:h-[450px] object-cover rounded-lg"
            />
          </div>
          <div className="md:order-1 flex-1 space-y-1">
            <p>
              <strong>Product:</strong> {query.productName}
            </p>
            <p>
              <strong>Brand:</strong> {query.productBrand}
            </p>
            <p>
              <strong>Query Title:</strong> {query.queryTitle}
            </p>
            <p>
              <strong>Reason:</strong> {query.reasonDetails}
            </p>
            <p>
              <strong>Recommendation Count:</strong> {query.recommendationCount}
            </p>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>
            <strong>Posted By:</strong> {query.name} ({query.email})
          </p>
          {query.photoURL ? (
            <img
              src={query.photoURL}
              alt="User"
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
              👤
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl text-black font-semibold mb-4">Add a Recommendation</h3>
        <form onSubmit={handleAddRecommendation} className="space-y-4">
          <input
            name="title"
            type="text"
            placeholder="Recommendation Title"
            className="input input-bordered w-full"
            required
          />
          <input
            name="recommendedProduct"
            type="text"
            placeholder="Recommended Product Name"
            className="input input-bordered w-full"
            required
          />
          <input
            name="imageUrl"
            type="url"
            placeholder="Recommended Product Image URL"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="reason"
            placeholder="Recommendation Reason"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="btn bg-red-500 text-white hover:bg-red-600"
          >
            Add Recommendation
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">All Recommendations</h3>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div key={rec._id} className="border p-4 rounded-md">
              <div className="flex flex-col-reverse sm:flex-row justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-bold">{rec.title}</h4>
                  <p>{rec.reason}</p>

                  <div className="text-sm text-gray-600 space-y-0.5">
                    <p>
                      <span className="font-semibold">Query Title:</span>{" "}
                      {rec.queryTitle}
                    </p>
                    <p>
                      <span className="font-semibold">Product Name:</span>{" "}
                      {rec.productName}
                    </p>
                    <p>
                      <span className="font-semibold">Query Creator:</span>{" "}
                      {rec.userName} ({rec.userEmail})
                    </p>
                    <p>
                      <span className="font-semibold">Recommender:</span>{" "}
                      {rec.recommenderName} ({rec.recommenderEmail})
                    </p>
                    <p>
                      <span className="font-semibold">Query ID:</span>{" "}
                      {rec.queryId}
                    </p>
                    <p>
                      <span className="font-semibold">Recommended on:</span>{" "}
                      {new Date(rec.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                <img
                  src={rec.imageUrl}
                  alt="Recommended Product"
                  className="w-full h-auto sm:w-24 sm:h-24 lg:w-[450px] lg:h-[450px] rounded object-cover"
                />
              </div>
            </div>
          ))}
          {recommendations.length === 0 && <p>No recommendations yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;

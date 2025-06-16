import React, { useContext } from "react";
import { AuthContext } from "../../../AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddQueries = () => {
  const { user } = useContext(AuthContext);

  const handleAddQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const imageUrl = form.imageUrl.value;
    const queryTitle = form.queryTitle.value;
    const reasonDetails = form.reasonDetails.value;

    const newQuery = {
      productName,
      productBrand,
      imageUrl,
      queryTitle,
      reasonDetails,
      email: user?.email,
      name: user?.displayName,
      photoURL: user?.photoURL,
      createdAt: new Date().toISOString(),
      recommendationCount: 0,
    };

    axios
      .post("https://product-rec-server.vercel.app/queries", newQuery) 
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire("Success", "Query added successfully!", "success");
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Something went wrong!", "error");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-8">
      <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Add a Product Query
        </h2>
        <form onSubmit={handleAddQuery} className="space-y-5">
          <input
            name="productName"
            type="text"
            placeholder="Product Name"
            required
            className="input input-bordered w-full"
          />
          <input
            name="productBrand"
            type="text"
            placeholder="Product Brand"
            required
            className="input input-bordered w-full"
          />
          <input
            name="imageUrl"
            type="url"
            placeholder="Product Image URL"
            required
            className="input input-bordered w-full"
          />
          <input
            name="queryTitle"
            type="text"
            placeholder="Query Title"
            required
            className="input input-bordered w-full"
          />
          <textarea
            name="reasonDetails"
            placeholder="Boycotting Reason Details"
            required
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="btn w-full bg-red-500 text-white hover:bg-red-600 border-none"
          >
            Add Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQueries;

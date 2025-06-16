import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateQuery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://product-rec-server.vercel.app/queries/${id}`)
      .then((res) => {
        setQuery(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedQuery = {
      productName: form.productName.value,
      productBrand: form.productBrand.value,
      imageUrl: form.imageUrl.value,
      queryTitle: form.queryTitle.value,
      reasonDetails: form.reasonDetails.value,
    };

    axios.put(`https://product-rec-server.vercel.app/queries/${id}`, updatedQuery)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Your query has been updated.",
          confirmButtonColor: "#ff6254"
        }).then(() => {
          navigate("/myqueries");
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Something went wrong. Please try again.",
        });
      });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!query) return <p className="text-center mt-10">Query not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 mb-13">
      <h2 className="text-2xl font-bold mb-6">Update Your Query</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          name="productName"
          defaultValue={query.productName}
          type="text"
          required
          placeholder="Product Name"
          className="w-full input input-bordered"
        />
        <input
          name="productBrand"
          defaultValue={query.productBrand}
          type="text"
          required
          placeholder="Product Brand"
          className="w-full input input-bordered"
        />
        <input
          name="imageUrl"
          defaultValue={query.imageUrl}
          type="url"
          required
          placeholder="Product Image URL"
          className="w-full input input-bordered"
        />
        <input
          name="queryTitle"
          defaultValue={query.queryTitle}
          type="text"
          required
          placeholder="Query Title"
          className="w-full input input-bordered"
        />
        <textarea
          name="reasonDetails"
          defaultValue={query.reasonDetails}
          placeholder="Boycotting Reason Details"
          required
          className="w-full textarea textarea-bordered"
        />
        <button
          type="submit"
          className="btn btn-primary w-full bg-red-500 hover:bg-red-600 border-none"
        >
          Update Query
        </button>
      </form>
    </div>
  );
};

export default UpdateQuery;

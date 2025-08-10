import React, { useEffect, useState, use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const MyQueries = () => {
  const { user } = use(AuthContext);
  const [queries, setQueries] = useState([]);
  const [layout, setLayout] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;
    axios.get(`https://product-rec-server.vercel.app/queries?email=${user.email}`)
      .then(res => {
        const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setQueries(sorted);
      })
      .catch(err => console.error(err));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://product-rec-server.vercel.app/queries/${id}`)
          .then(() => {
            setQueries(prev => prev.filter(q => q._id !== id));
            Swal.fire("Deleted!", "Your query has been deleted.", "success");
          });
      }
    });
  };

  // Return grid column classes based on layout
  const getGridColsClass = () => {
    if (layout === 1) return "md:grid-cols-1";
    if (layout === 2) return "md:grid-cols-2";
    return "md:grid-cols-3";
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Banner */}
      <div className="bg-red-100 p-6 rounded-lg text-center mb-6">
        <h2 className="text-2xl font-bold text-red-600 mb-8">Your Product Queries</h2>
        <Link to="/addqueries" className="bg-[rgb(255,98,84)] hover:bg-red-600 text-white px-5 py-2 rounded shadow">
          Add New Query
        </Link>
      </div>

      {/* Layout Toggle Buttons */}
      <div className="flex justify-end gap-2 mb-4">
        {[1, 2, 3].map(num => (
          <button
            key={num}
            onClick={() => setLayout(num)}
            className={`px-4 py-1 border ${layout === num ? "bg-[rgb(255,98,84)] text-white" : "bg-white"} rounded`}
          >
            {num}x Layout
          </button>
        ))}
      </div>

      {/* Query Cards */}
      {queries.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">No queries found. Add your first one!</p>
          <Link to="/addqueries" className="mt-4 inline-block bg-[rgb(255,98,84)] text-white px-4 py-2 rounded">
            Add Query
          </Link>
        </div>
      ) : (
        <div className={`grid grid-cols-1 gap-6 ${getGridColsClass()}`}>
          {queries.map(query => (
            <div key={query._id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
              <img
                src={query.imageUrl}
                alt={query.productName}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-bold mb-1 truncate">{query.productName}</h3>
              <p className="text-sm text-gray-500 mb-1">Brand: {query.productBrand}</p>
              <p className="text-sm italic mb-2">"{query.queryTitle}"</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => navigate(`/query/${query._id}`)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  View Details
                </button>
                <button
                  onClick={() => navigate(`/updatequery/${query._id}`)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(query._id)}
                  className="bg-[rgb(255,98,84)] text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQueries;

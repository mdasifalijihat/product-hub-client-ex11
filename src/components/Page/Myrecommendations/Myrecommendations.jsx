import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthContext/AuthContext";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [myRecs, setMyRecs] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/my-recommendations?email=${user.email}`)
        .then((res) => setMyRecs(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = async (recId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This recommendation will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/recommendations/${recId}`);

        setMyRecs((prev) => prev.filter((rec) => rec._id !== recId));

        Swal.fire("Deleted!", "Your recommendation has been removed.", "success");
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  if (!user) return <p>Please log in to see your recommendations.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">My Recommendations</h2>

      {myRecs.length === 0 ? (
        <p>You haven't added any recommendations yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Recommended</th>
                <th className="p-3 text-left">Reason</th>
                <th className="p-3 text-left">Query Title</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {myRecs.map((rec) => (
                <tr key={rec._id} className="border-t">
                  <td className="p-3">{rec.recommendedProduct}</td>
                  <td className="p-3">{rec.title}</td>
                  <td className="p-3">{rec.reason}</td>
                  <td className="p-3">{rec.queryTitle}</td>
                  <td className="p-3">{new Date(rec.createdAt).toLocaleDateString()}</td>
                  <td className="p-3">
                    <img
                      src={rec.imageUrl}
                      alt={rec.recommendedProduct}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(rec._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyRecommendations;

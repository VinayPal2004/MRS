import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Materials() {
  const navigate = useNavigate();

  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/materials");
      const data = await res.json();
      setMaterials(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Materials</h1>
            <p className="text-slate-400">
              Manage raw materials inventory
            </p>
          </div>

          <button
            onClick={() => navigate("/add-material")}
            className="bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-lg"
          >
            + Add Material
          </button>
        </div>

        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">

          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="p-4 text-left">S.No</th>
                <th className="p-4 text-left">Material Name</th>
                <th className="p-4 text-left">Unit</th>
                <th className="p-4 text-left">Stock</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {materials.length > 0 ? (
                materials.map((material, index) => (
                  <tr
                    key={material._id}
                    className="border-t border-slate-800 hover:bg-slate-800"
                  >
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{material.name}</td>
                    <td className="p-4">{material.unit}</td>
                    <td className="p-4">{material.stock}</td>

                    <td className="p-4">
                      {material.stock > 0 ? (
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                          In Stock
                        </span>
                      ) : (
                        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
                          Out of Stock
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-8 text-gray-400"
                  >
                    No Materials Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default Materials;
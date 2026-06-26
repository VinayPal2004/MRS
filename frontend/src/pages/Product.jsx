import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Products</h1>
            <p className="text-slate-400 mt-2">
              Manage Products and Bill of Materials (BOM)
            </p>
          </div>

          <button
            onClick={() => navigate("/add-product")}
            className="bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-lg"
          >
            + Add Product
          </button>
        </div>

        {/* Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="text-left p-4">S.No</th>
                <th className="text-left p-4">Product Name</th>
                <th className="text-left p-4">BOM Items</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr
                    key={product._id}
                    className="border-t border-slate-800 hover:bg-slate-800"
                  >
                    <td className="p-4">{index + 1}</td>

                    <td className="p-4">
                      {product.productName}
                    </td>

                    <td className="p-4">
                      {product.bom ? product.bom.length : 0}
                    </td>

                    <td className="p-4">
                      ₹{product.price}
                    </td>

                    <td className="p-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                        Active
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-8 text-gray-400"
                  >
                    No Products Found
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

export default Products;
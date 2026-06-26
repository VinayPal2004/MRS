import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

const navigate = useNavigate();
const [productName, setProductNmae] = useState("");
const [materials, setMaterials] = useState([]);
const [price, setPrice] = useState("");
const [bom, setBom] = useState([
  {
     material: "",
    quantityPerPiece: "",
  }
]);

useEffect(() => {
  fetchMaterials();
}, []);

const fetchMaterials = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/materials");
    const data = await res.json();
    setMaterials(data);
  } catch (err) {
    console.log(err);
  }
};
const handleChange = (index, field, value) => {
  const updated = [...bom];
  updated[index][field] = value;
  setBom(updated);
};
const addRow = () => {
  setBom([
    ...bom,
    {
      material: "",
      quantityPerPiece: "",
    },
  ]);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productName,
        price: Number(price),
        bom,
      }),
    });

    if (res.ok) {
      alert("Product Created Successfully");
      navigate("/products");
    } else {
      const err = await res.json();
      alert(err.message);
    }
  } catch (error) {
    console.log(error);
  }
};
return (
  <div className="min-h-screen bg-slate-950 text-white p-8">
    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8">

      <h1 className="text-3xl font-bold mb-6">
        Create Product
      </h1>

      <form onSubmit={handleSubmit}>

        {/* Product Name */}
        <div className="mb-6">
          <label className="block mb-2 text-slate-300">
            Product Name
          </label>

          <input
            type="text"
            placeholder="Enter Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
            required
          />
        </div>
        <div className="mb-6">
  <label className="block mb-2 text-slate-300">
    Product Price
  </label>

  <input
    type="number"
    placeholder="Enter Product Price"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-500"
    required
  />
</div>

        {/* BOM */}
        <h2 className="text-xl font-semibold mb-4 text-cyan-400">
          Bill of Materials (BOM)
        </h2>

        {bom.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-4 mb-4"
          >
            {/* Material Dropdown */}
            <select
              value={item.material}
              onChange={(e) =>
                handleChange(index, "material", e.target.value)
              }
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3"
              required
            >
              <option value="">Select Material</option>

              {materials.map((material) => (
                <option
                  key={material._id}
                  value={material._id}
                >
                  {material.name}
                </option>
              ))}
            </select>

            {/* Quantity */}
            <input
              type="number"
              placeholder="Quantity Per Piece"
              value={item.quantityPerPiece}
              onChange={(e) =>
                handleChange(
                  index,
                  "quantityPerPiece",
                  Number(e.target.value)
                )
              }
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3"
              required
            />
          </div>
        ))}

        <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={addRow}
            className="bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-lg"
          >
            + Add Material
          </button>

          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg"
          >
            Create Product
          </button>
        </div>

      </form>

    </div>
  </div>
);
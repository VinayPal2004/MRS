import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMaterial() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    unit: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/materials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          stock: Number(formData.stock),
        }),
      });

      if (res.ok) {
        alert("Material Added Successfully");
        navigate("/materials");
      } else {
        const err = await res.json();
        alert(err.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-8 rounded-xl w-[450px]"
      >
        <h1 className="text-3xl text-white mb-6 font-bold">
          Add Material
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Material Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-slate-800 text-white"
          required
        />

        <select
          name="unit"
          value={formData.unit}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-slate-800 text-white"
          required
        >
          <option value="">Select Unit</option>
          <option value="Kg">Kg</option>
          <option value="Gram">Gram</option>
          <option value="Liter">Liter</option>
          <option value="Meter">Meter</option>
          <option value="Piece">Piece</option>
        </select>

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded bg-slate-800 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 p-3 rounded text-white"
        >
          Add Material
        </button>
      </form>
    </div>
  );
}

export default AddMaterial;
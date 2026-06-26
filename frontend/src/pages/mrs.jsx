import { useState } from "react";

function MrsReport() {
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const companies = [
    "ABC Steel Industries",
    "Sharma Metals Pvt Ltd",
    "Global Plastics",
  ];

  const products = [
    "Metal Chair",
    "Office Table",
    "Steel Cabinet",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      company,
      product,
      quantity,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-8">

        <h1 className="text-3xl font-bold mb-6">
          Generate MRS Report
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
          >
            <option value="">Select Company</option>

            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>

          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
          >
            <option value="">Select Product</option>

            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Required Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
          />

          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg"
          >
            Generate Report
          </button>
        </form>

        {company && product && quantity && (
          <div className="mt-8 bg-slate-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-4">
              MRS Report
            </h2>

            <p><strong>Company:</strong> {company}</p>
            <p><strong>Product:</strong> {product}</p>
            <p><strong>Quantity:</strong> {quantity}</p>

            <div className="mt-5">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-2">Material</th>
                    <th className="text-left py-2">Required Qty</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="py-2">Steel Sheet</td>
                    <td>{quantity * 2} Kg</td>
                  </tr>

                  <tr>
                    <td className="py-2">Aluminium Rod</td>
                    <td>{quantity * 1} Kg</td>
                  </tr>

                  <tr>
                    <td className="py-2">Copper Wire</td>
                    <td>{quantity * 3} Meter</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default MrsReport;
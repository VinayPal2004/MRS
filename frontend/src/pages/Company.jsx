function Companies() {
  const companies = [
    {
      id: 1,
      name: "ABC Steel Industries",
      contact: "9876543210",
      city: "Delhi",
      status: "Active",
    },
    {
      id: 2,
      name: "Sharma Metals Pvt Ltd",
      contact: "9876543211",
      city: "Mumbai",
      status: "Active",
    },
    {
      id: 3,
      name: "Global Plastics",
      contact: "9876543212",
      city: "Pune",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Copper Solutions Ltd",
      contact: "9876543213",
      city: "Bangalore",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Companies</h1>
            <p className="text-slate-400 mt-2">
              Manage suppliers and vendor companies
            </p>
          </div>

          <button className="bg-cyan-600 hover:bg-cyan-700 px-5 py-3 rounded-lg font-medium transition">
            + Add Company
          </button>
        </div>

        {/* Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Company Name</th>
                <th className="text-left p-4">Contact</th>
                <th className="text-left p-4">City</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {companies.map((company) => (
                <tr
                  key={company.id}
                  className="border-t border-slate-800 hover:bg-slate-800 transition"
                >
                  <td className="p-4">{company.id}</td>
                  <td className="p-4 font-medium">{company.name}</td>
                  <td className="p-4">{company.contact}</td>
                  <td className="p-4">{company.city}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        company.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {company.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Companies;
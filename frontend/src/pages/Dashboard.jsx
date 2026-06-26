function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">
          Material Requirement System
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Streamline inventory planning, production management,
          and material requirement forecasting.
        </p>

        <button className="mt-8 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-900/40">
          Get Started
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300">
          <div className="text-cyan-400 text-4xl mb-4">📦</div>
          <h2 className="text-xl font-semibold mb-2">Materials</h2>
          <p className="text-slate-400">
            Manage Raw Materials Inventory
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300">
          <div className="text-cyan-400 text-4xl mb-4">🏭</div>
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p className="text-slate-400">
            Create and Manage BOM Products
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300">
          <div className="text-cyan-400 text-4xl mb-4">📋</div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="text-slate-400">
            Track Production Orders
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300">
          <div className="text-cyan-400 text-4xl mb-4">📊</div>
          <h2 className="text-xl font-semibold mb-2">MRS Report</h2>
          <p className="text-slate-400">
            Generate Material Estimates
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
            Welcome to MRS Dashboard
          </h3>

          <p className="text-slate-400">
            Monitor materials, manage product BOMs, process orders,
            and generate accurate material requirement reports from
            one centralized dashboard.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
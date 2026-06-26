import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
              M
            </div>

            <div>
              <h1 className="text-white font-bold text-xl">
                MRS System
              </h1>
              <p className="text-slate-400 text-xs">
                Material Requirement Planning
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="px-4 py-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
            >
              Dashboard
            </Link>

            <Link
              to="/materials"
              className="px-4 py-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
            >
              Materials
            </Link>

            <Link
              to="/products"
              className="px-4 py-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
            >
              Products
            </Link>

            <Link
              to="/companies"
              className="px-4 py-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
            >
              Companies
            </Link>

            <Link
              to="/orders"
              className="px-4 py-2 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition-all duration-300"
            >
              Orders
            </Link>

            <Link
              to="/mrs"
              className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all duration-300"
            >
              MRS Report
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
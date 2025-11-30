import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import React from "react";

function Header({ onToggleCart }) {
  const selectTotalItems = (state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0);

  const totalItems = useSelector(selectTotalItems);

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-40 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MOBILE: stack | DESKTOP: space-between */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
          {/* LOGO */}
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">
            Ecommerce Store
          </h2>

          {/* RIGHT SIDE GROUP (search + cart) */}
          <div className="flex items-center gap-3">
            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 px-3 py-2 rounded-md w-full sm:w-52 lg:w-64 focus:outline-none focus:ring-2"
            />

            {/* CART */}
            <button
              className="relative p-2 bg-gray-200 text-gray-700 rounded-full hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
              onClick={onToggleCart}
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

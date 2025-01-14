import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const AdminMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button
        className={`${
          isMenuOpen ? "top-2 right-2" : "top-5 right-7"
        } bg-[#151515] p-2 fixed rounded-lg `}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaTimes color="white" />
        ) : (
          <>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
          </>
        )}
      </button>

      {isMenuOpen && (
        <section className="bg-[#151515] p-4 fixed right-7 top-5">
          <ul className="list-none mt-2">
            <li>
              <NavLink
                to="/admin/dashboard"
                className="list-item py-2 px-3 mb-5 hover:bg-[#2e2d2d] rounded-sm"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Admin Menu
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/dashboard"
                className="list-item py-2 px-3 mb-5 hover:bg-[#2e2d2d] rounded-sm"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Admin Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/categorylist"
                className="list-item py-2 px-3 mb-5 hover:bg-[#2e2d2d] rounded-sm"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Create Category
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/productlist"
                className="list-item py-2 px-3 mb-5 hover:bg-[#2e2d2d] rounded-sm"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Create Product
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/allproductslist"
                className="list-item py-2 px-3 mb-5 hover:bg-[#2e2d2d] rounded-sm"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                All Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/userlist"
                className="list-item py-2 px-3 mb-5 hover:bg-[#2e2d2d] rounded-sm"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Manage Users
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/orderlist"
                className="list-item py-2 px-3 mb-5 hover:bg-[#2e2d2d] rounded-sm"
                style={({ isActive }) => ({
                  color: isActive ? "greenyellow" : "white",
                })}
              >
                Manage Orders
              </NavLink>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};
export default AdminMenu;

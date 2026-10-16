import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./SideBar";
import useCartStore from "../store/cartStore";

const defaultLinks = [{ label: "HOME", to: "/" }];

function Header({
  brand = "ShopOnline",
  navLinks = defaultLinks,
  showCart = true,
  actions = null,
  className = "",
  theme = "dark",
  onToggleTheme = () => {},
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const cartCount = useCartStore((state) =>
    state.cartAllProduct.reduce(
      (total, product) => total + (product.count || 1),
      0,
    ),
  );

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header className={`container-fluid shop-header ${className}`}>
        <nav
          className="navbar d-flex justify-content-between align-items-center"
          aria-label="Main navigation"
        >
          <div className="d-flex align-items-center gap-3">
            <button
              type="button"
              className="header-icon-btn sidebar-toggle"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation sidebar"
              aria-expanded={sidebarOpen}
              aria-controls="shop-sidebar"
            >
              <i className="fa-solid fa-bars" aria-hidden="true" />
            </button>

            <NavLink
              to="/"
              className="header-brand text-decoration-none fw-bold"
              onClick={closeSidebar}
            >
              {brand}
            </NavLink>
          </div>

          <ul className="header-main-nav d-flex align-items-center gap-3 m-0 p-0">
            {navLinks.map(({ label, to }) => (
              <li key={to} className="list-unstyled">
                <NavLink
                  to={to}
                  className="nav-theme-link text-decoration-none fw-bold"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="header-actions d-flex align-items-center gap-2">
            {actions}

            <button
              type="button"
              className="header-icon-btn theme-toggle"
              onClick={onToggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              title={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
            >
              <i
                className={`fa-solid ${
                  theme === "dark" ? "fa-sun" : "fa-moon"
                }`}
                aria-hidden="true"
              />
            </button>

            {showCart && (
              <NavLink
                to="/cart"
                aria-label={`Shopping cart, ${cartCount} items`}
                className="header-icon-btn cart-toggle text-decoration-none position-relative"
              >
                <i className="fa-solid fa-cart-shopping" aria-hidden="true" />

                {cartCount > 0 && (
                  <span className="badge bg-danger cart-count-badge">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            )}
          </div>
        </nav>
      </header>
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} brand={brand} />
    </>
  );
}

export default Header;

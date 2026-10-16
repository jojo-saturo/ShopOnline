
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useCartStore from "../store/cartStore";

const defaultLinks = [{ label: "HOME", to: "/" }];

const sidebarLinks = [
  {
    label: "Shop All Fragrances",
    icon: "fa-store",
    to: "/",
  },
  {
    label: "Men's Fragrances",
    icon: "fa-user-tie",
    to: "/",
  },
  {
    label: "Women's Fragrances",
    icon: "fa-spray-can-sparkles",
    to: "/",
  },
  {
    label: "Unisex Fragrances",
    icon: "fa-people-arrows",
    to: "/",
  },
  {
    label: "New Arrivals",
    icon: "fa-sparkles",
    to: "/",
  },
  {
    label: "Best Sellers",
    icon: "fa-fire",
    to: "/",
  },
  {
    label: "My Wishlist",
    icon: "fa-heart",
    to: "/wishlist",
  },
  {
    label: "Track My Order",
    icon: "fa-box",
    to: "/track-order",
  },
  {
    label: "Fragrance Finder",
    icon: "fa-magnifying-glass",
    to: "/fragrance-finder",
  },
  {
    label: "Gift Sets",
    icon: "fa-gift",
    to: "/",
  },
];

function Header({
  brand = "TheScentMall",
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
                <i
                  className="fa-solid fa-cart-shopping"
                  aria-hidden="true"
                />

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

      {sidebarOpen && (
        <div className="sidebar-layer">
          <button
            type="button"
            className="sidebar-backdrop"
            onClick={closeSidebar}
            aria-label="Close navigation sidebar"
          />

          <aside
            id="shop-sidebar"
            className="shop-sidebar"
            aria-label="Store navigation"
          >
            <div className="sidebar-heading">
              <NavLink
                to="/"
                className="header-brand text-decoration-none fw-bold"
                onClick={closeSidebar}
              >
                {brand}
              </NavLink>

              <button
                type="button"
                className="header-icon-btn sidebar-close"
                onClick={closeSidebar}
                aria-label="Close sidebar"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </div>

            <NavLink
              to="/account"
              className="sidebar-account text-decoration-none"
              onClick={closeSidebar}
            >
              <span className="account-avatar">
                <i className="fa-solid fa-user" aria-hidden="true" />
              </span>

              <span className="account-details">
                <strong>Welcome to TheScentMall</strong>
                <small>Sign in or create an account</small>
              </span>

              <i
                className="fa-solid fa-chevron-right account-chevron"
                aria-hidden="true"
              />
            </NavLink>

            <div className="sidebar-section-label">
              EXPLORE FRAGRANCES
            </div>

            <div className="sidebar-menu">
              {sidebarLinks.map(({ label, icon, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  className="sidebar-link text-decoration-none"
                  onClick={closeSidebar}
                >
                  <i
                    className={`fa-solid ${icon}`}
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                  <i
                    className="fa-solid fa-chevron-right sidebar-chevron"
                    aria-hidden="true"
                  />
                </NavLink>
              ))}
            </div>

            <div className="sidebar-promo">
              <i
                className="fa-solid fa-wand-magic-sparkles"
                aria-hidden="true"
              />
              <h6>Find Your Signature Scent</h6>
              <p>
                Discover fragrances that match your style and personality.
              </p>
              <NavLink to="/" onClick={closeSidebar}>
                Explore Collection
                <i className="fa-solid fa-arrow-right ms-2" />
              </NavLink>
            </div>

            <div className="sidebar-footer">
              <i className="fa-solid fa-headset" aria-hidden="true" />
              <span>Need help? Customer Support</span>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Header;

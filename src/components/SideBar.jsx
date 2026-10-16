
import React from "react";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  { label: "Shop All Fragrances", icon: "fa-store", to: "/" },
  { label: "Men's Fragrances", icon: "fa-user-tie", to: "/" },
  { label: "Women's Fragrances", icon: "fa-spray-can-sparkles", to: "/" },
  { label: "Unisex Fragrances", icon: "fa-people-arrows", to: "/" },
  { label: "New Arrivals", icon: "fa-sparkles", to: "/" },
  { label: "Best Sellers", icon: "fa-fire", to: "/" },
  { label: "My Wishlist", icon: "fa-heart", to: "/wishlist" },
  { label: "Track My Order", icon: "fa-box", to: "/track-order" },
  {
    label: "Fragrance Finder",
    icon: "fa-magnifying-glass",
    to: "/fragrance-finder",
  },
  { label: "Gift Sets", icon: "fa-gift", to: "/" },
];

function Sidebar({ isOpen, onClose, brand = "ShopOnline" }) {
  if (!isOpen) return null;

  return (
    <div className="sidebar-layer">
      <button
        type="button"
        className="sidebar-backdrop"
        onClick={onClose}
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
            onClick={onClose}
          >
            {brand}
          </NavLink>

          <button
            type="button"
            className="header-icon-btn sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>

        <NavLink
          to="/account"
          className="sidebar-account text-decoration-none"
          onClick={onClose}
        >
          <span className="account-avatar">
            <i className="fa-solid fa-user" aria-hidden="true" />
          </span>

          <span className="account-details">
            <strong>Welcome to ShopOnline</strong>
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
              onClick={onClose}
            >
              <i className={`fa-solid ${icon}`} aria-hidden="true" />
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
          <NavLink to="/" onClick={onClose}>
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
  );
}

export default Sidebar;

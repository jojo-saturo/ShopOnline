import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/", icon: "fa-house", end: true },
  { label: "About", to: "/about", icon: "fa-circle-info" },
  { label: "Contact", to: "/contact", icon: "fa-envelope" },
];

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Bottom navigation">
      {links.map(({ label, to, icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `bottom-nav-link${isActive ? " active" : ""}`
          }
        >
          <i className={`fa-solid ${icon}`} aria-hidden="true" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;

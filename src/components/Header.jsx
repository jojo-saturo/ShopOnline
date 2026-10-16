import React from "react";
import { NavLink } from "react-router-dom";
import useCartStore from "../store/cartStore";

const defaultLinks = [{ label: "HOME", to: "/" }];

function Header({
  brand = "",
  navLinks = defaultLinks,
  showCart = true,
  actions = null,
  className = "",
}) {
  const cartCount = useCartStore((state) =>
    state.cartAllProduct.reduce(
      (total, product) => total + (product.count || 1),
      0,
    ),
  );

  return (
    <header className={`container-fluid ${className}`}>
      <nav className="navbar d-flex justify-content-between align-items-center">
        {brand && (
          <NavLink to="/" className="text-light text-decoration-none fw-bold">
            {brand}
          </NavLink>
        )}

        <ul className="d-flex flex-wrap align-items-center gap-3 m-0 p-0">
          {navLinks.map(({ label, to }) => (
            <li key={to} className="list-unstyled">
              <NavLink
                to={to}
                className={"text-light text-decoration-none fw-bold"}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="d-flex align-items-center gap-3">
          {actions}

          {showCart && (
            <NavLink
              to="/cart"
              aria-label={`Shopping cart, ${cartCount} items`}
              className="text-light text-decoration-none position-relative"
            >
              <i className="fa-solid fa-cart-shopping fs-4"></i>

              {cartCount > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </span>
              )}
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

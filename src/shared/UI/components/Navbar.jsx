import { Heart, ShoppingCart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../../features/auth/hooks/useAuth";

/* ---------- one-time entrance animation ---------- */
const navStyles = `
@keyframes navIn {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  .skm-navbar-anim { animation: none !important; }
}
`;

/* ---------- small sparkle logo mark (ties into the site's "% OFF" badge icon) ---------- */
const SkyMartLogo = () => (
  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#8c5226] shadow-inner transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
    <svg viewBox="0 0 100 100" className="h-5 w-5">
      <path
        d="M50 6 C53 36 64 47 94 50 C64 53 53 64 50 94 C47 64 36 53 6 50 C36 47 47 36 50 6 Z"
        fill="#FCE7D4"
      />
    </svg>
  </span>
);

/* ---------- desktop link with a growing underline on hover ---------- */
const linkClasses = ({ isActive }) =>
  `group relative py-1 text-sm font-medium transition-colors duration-200 ${
    isActive ? "text-amber-900 font-semibold" : "text-gray-700 hover:text-amber-800"
  }`;

const NavItem = ({ to, children, onClick }) => (
  <NavLink to={to} end onClick={onClick} className={linkClasses}>
    <span>{children}</span>
    <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-amber-900 transition-all duration-300 group-hover:w-full" />
  </NavLink>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let {logOut} = useAuth();

  // Mobile menu open ho toh background scroll disable
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Scroll par navbar shrink + blur animation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileItems = [
    { label: "Home", to: "/home" },
    { label: "Products", to: "/home/product" },
    { label: "About", to: "/home/about" },
    { label: "Cart", to: "/home/cart" },
  ];

  return (
    <>
      <style>{navStyles}</style>

      {/* ================= FIXED FLOATING PILL NAVBAR ================= */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
        <div
          className={`skm-navbar-anim flex w-full items-center justify-between gap-6 rounded-full border transition-all duration-500 ease-out ${
            scrolled
              ? "mt-2 max-w-3xl border-blue-300/60 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md"
              : "mt-4 max-w-5xl border-blue-300 bg-blue-200/95 px-6 py-3 shadow-md backdrop-blur-sm"
          }`}
          style={{ animation: "navIn 700ms cubic-bezier(.16,1,.3,1) both" }}
        >
          {/* Logo */}
          <NavLink
            to="/home"
            onClick={() => setIsOpen(false)}
            className="group flex flex-shrink-0 items-center gap-2"
          >
            <SkyMartLogo />
            <span className="text-xl font-extrabold tracking-tight text-gray-800">
              Sky<span className="text-amber-900">Mart</span>
            </span>
          </NavLink>

          {/* Desktop links */}
          <nav className="hidden items-center gap-6 md:flex">
            <NavItem to="/home">Home</NavItem>
            <NavItem to="/home/product">Products</NavItem>
            <NavItem to="/home/about">About</NavItem>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <NavItem to='/home/favorite' ><Heart /></NavItem>
            <NavItem to="/home/cart"><ShoppingCart /></NavItem>
            <button
            onClick={() => logOut()}
            className="rounded-full bg-[#8c5226] px-5 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-amber-900 active:scale-95">
              Logout
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 rounded-full p-2 text-gray-800 transition-colors hover:bg-blue-100 hover:text-amber-900 md:hidden"
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* ================= MOBILE FULL-SCREEN MENU ================= */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-blue-100/98 backdrop-blur-sm transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="mb-12 flex flex-col items-center gap-8">
          {mobileItems.map(({ label, to }, i) => (
            <NavLink
              key={label}
              to={to}
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-4xl font-bold transition-colors duration-200 ${
                  isActive ? "text-amber-900" : "text-gray-700 hover:text-amber-900"
                }`
              }
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 400ms ease ${i * 80}ms, transform 400ms ease ${i * 80}ms`,
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => logOut()}
          className="rounded-full bg-[#8c5226] px-10 py-4 text-2xl font-medium text-white shadow-lg transition-all duration-200 hover:bg-amber-900 active:scale-95"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
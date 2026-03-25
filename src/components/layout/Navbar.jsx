"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, User, ChevronRight } from "lucide-react";
import CartDrawer from "../ui/CartDrawer";

export default function Navbar({ cartCount }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Philosophy", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Journal", href: "#" },
  ];

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav className="fixed top-0 w-full z-50 px-6 sm:px-8 md:px-12 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-auto">
        {/* Left: Logo + Desktop Links */}
        <div className="flex items-center gap-10 md:gap-12">
          <a href="#" className="text-2xl md:text-3xl font-bold tracking-widest uppercase">
            Kokoro
          </a>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:opacity-60 transition-opacity">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search — desktop only */}
          <button className="hidden md:flex p-2 hover:scale-110 transition-transform" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>

          {/* Login / Sign Up — desktop */}
          <button
            onClick={() => { setAuthMode("login"); setAuthOpen(true); }}
            className="hidden md:flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold border border-white/60 rounded-full px-4 py-1.5 hover:bg-white hover:text-black transition-all duration-200"
          >
            <User className="w-3.5 h-3.5" />
            Login
          </button>

          {/* Cart */}
          <CartDrawer cartCount={cartCount} />

          {/* Hamburger — mobile */}
          <button
            className="md:hidden p-2 hover:scale-110 transition-transform"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[70] bg-[#0f0f0f] text-white flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <span className="text-xl font-bold tracking-widest uppercase">Kokoro</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-3 text-sm uppercase tracking-widest font-medium border-b border-white/10 hover:opacity-60 transition-opacity"
            >
              {link.label}
              <ChevronRight className="w-4 h-4 opacity-40" />
            </a>
          ))}

          {/* Search row */}
          <button className="flex items-center justify-between py-3 text-sm uppercase tracking-widest font-medium border-b border-white/10 hover:opacity-60 transition-opacity w-full">
            Search
            <Search className="w-4 h-4 opacity-40" />
          </button>
        </nav>

        {/* Auth Buttons */}
        <div className="px-6 pb-10 flex flex-col gap-3">
          <button
            onClick={() => { setAuthMode("login"); setAuthOpen(true); setMobileOpen(false); }}
            className="w-full py-3 text-sm uppercase tracking-widest font-semibold border border-white/40 rounded-full hover:bg-white hover:text-black transition-all duration-200"
          >
            Login
          </button>
          <button
            onClick={() => { setAuthMode("signup"); setAuthOpen(true); setMobileOpen(false); }}
            className="w-full py-3 text-sm uppercase tracking-widest font-semibold bg-white text-black rounded-full hover:bg-white/80 transition-all duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* ── Auth Modal ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
          authOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setAuthOpen(false)}
      />

      {/* Modal Card */}
      <div
        className={`fixed z-[90] top-1/2 left-1/2 -translate-x-1/2 w-[90vw] max-w-sm bg-[#111] text-white rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ${
          authOpen ? "-translate-y-1/2 opacity-100" : "-translate-y-[45%] opacity-0 pointer-events-none"
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/10">
          <div className="flex gap-6">
            <button
              onClick={() => setAuthMode("login")}
              className={`text-sm uppercase tracking-widest font-semibold transition-opacity ${
                authMode === "login" ? "opacity-100" : "opacity-30"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setAuthMode("signup")}
              className={`text-sm uppercase tracking-widest font-semibold transition-opacity ${
                authMode === "signup" ? "opacity-100" : "opacity-30"
              }`}
            >
              Sign Up
            </button>
          </div>
          <button onClick={() => setAuthOpen(false)} className="p-1 hover:opacity-60 transition-opacity">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-8 py-8 flex flex-col gap-4">
          {authMode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
          />

          {authMode === "login" && (
            <div className="text-right">
              <button className="text-xs text-white/40 hover:text-white/70 transition-colors tracking-wider uppercase">
                Forgot password?
              </button>
            </div>
          )}

          <button className="mt-2 w-full py-3.5 bg-white text-black text-sm uppercase tracking-widest font-semibold rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-150">
            {authMode === "login" ? "Continue" : "Create Account"}
          </button>

          <p className="text-center text-xs text-white/30 tracking-wide">
            {authMode === "login" ? (
              <>
                No account?{" "}
                <button onClick={() => setAuthMode("signup")} className="text-white/60 hover:text-white underline transition-colors">
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already a member?{" "}
                <button onClick={() => setAuthMode("login")} className="text-white/60 hover:text-white underline transition-colors">
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
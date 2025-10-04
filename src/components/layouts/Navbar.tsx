"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Container from "@/components/container";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/about", label: "ABOUT US" },
    { href: "/impact", label: "IMPACT" },
    { href: "/get-involved", label: "GET INVOLVED" },
    { href: "/stay-informed", label: "STAY INFORMED" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <Container>
        {/* Top row: Logo + Search + Hamburger */}
        <div className="flex justify-between items-center h-14 xl:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/81.svg"
              alt="Logo"
              width={120}
              height={48}
              className="object-contain"
            />
          </div>

          {/* Search + Hamburger */}
          <div className="flex items-center gap-4">
            <Search className="text-primary" />
            {/* Hamburger for mobile */}
            <button
              className="xl:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="flex flex-col gap-4 mt-4 xl:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-blue-700 font-semibold"
                    : "text-blue-500 hover:text-blue-700"
                }
              >
                {link.label}
              </a>
            ))}
            {/* CTA buttons */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="text-primary font-medium text-center">
                Take a Pledge
              </div>
              <a
                href="/donate"
                className="block text-center px-4 py-2 bg-accent text-white rounded-lg hover:bg-blue-700 transition"
              >
                Donate
              </a>
            </div>
          </div>
        )}

        {/* Desktop menu + CTA */}
        <div className="hidden xl:flex justify-between items-center mt-6">
          {/* Nav links */}
          <nav>
            <ul className="flex gap-12 text-base font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={
                      pathname === link.href
                        ? "text-blue-700 font-semibold"
                        : "text-blue-500 hover:text-blue-700"
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA buttons */}
          <div className="flex gap-4">
            <div className="flex items-center justify-center text-primary font-medium">
              Take a Pledge
            </div>
            <a
              href="/donate"
              className="flex items-center justify-center px-4 py-2 text-white bg-accent rounded-lg hover:bg-blue-700 transition"
            >
              Donate
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

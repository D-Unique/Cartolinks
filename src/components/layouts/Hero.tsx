"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/container";

const heroLinks = [
  { title: "WHO ARE WE", link: "/about" },
  { title: "LEADERSHIP", link: "/leadership" },
  { title: "OUR VOLUNTEER TEAM", link: "/our-volunteer-team" },
  { title: "MILESTONES", link: "/milestones" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-white">
      <Container size="app">
        {/* Hero image */}
        <div className="relative w-full h-[200px] sm:h-[280px] md:h-[360px] xl:h-[540px]">
          <Image
            src="/images/hero.svg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop hero links */}
        <nav className="hidden xl:flex justify-center mt-6 space-x-16 text-2xl font-bold">
          {heroLinks.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className={`${
                item.title === "MILESTONES"
                  ? "text-accent hover:underline"
                  : "text-blue-500 hover:underline"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger menu */}
        <div className="flex xl:hidden justify-between items-center mt-4 bg-[#F5F5FA] rounded-lg px-4 h-14">
          <span className="text-primary font-medium text-sm">Milestone</span>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Image
              src={menuOpen ? "/images/X-icon.png" : "/images/Vector.png"}
              alt="Menu"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* Slide-down mobile menu */}
        {menuOpen && (
          <div className="flex flex-col gap-3 mt-2 bg-[#F5F5FA] rounded-lg p-4">
            {heroLinks.map((link) => (
              <a
                key={link.link}
                href={link.link}
                className={`${
                  link.title === "MILESTONES"
                    ? "text-accent font-semibold"
                    : "text-blue-500"
                } hover:underline`}
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

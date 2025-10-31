"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  const leftNavItems = ["home", "experience"];
  const rightNavItems = ["projects", "blog"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--color-background)] border-b border-[var(--color-border)] py-4 md:py-8 px-8 z-50">
      <div>
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center">
            {leftNavItems.map((item, index) => (
              <Link
                key={item}
                href={item === "home" ? "/" : `/${item}`}
                onClick={() => setActiveItem(item)}
                className="relative px-4 py-2 group"
                style={{
                  textDecoration: "none",
                  marginRight: index < leftNavItems.length - 1 ? "1.5rem" : "0",
                }}
              >
                <span
                  className={`text-lg font-light tracking-wide transition-all font-serif ${
                    activeItem === item
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {item}
                </span>
                <span
                  className={`absolute -inset-x-0.5 -inset-y-0.5 bg-[var(--color-border)] rounded -z-10 transition-opacity ${
                    activeItem === item
                      ? "opacity-40"
                      : "opacity-0 group-hover:opacity-30"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div style={{ margin: "0 3rem" }}>
            <h1 className="text-5xl font-light text-[var(--color-text-primary)] tracking-wide whitespace-nowrap font-['Dancing_Script',cursive]">
              Hailey Pan
            </h1>
          </div>

          <div className="flex items-center">
            {rightNavItems.map((item, index) => (
              <Link
                key={item}
                href={item === "home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
                className="relative px-4 py-2 group"
                style={{
                  textDecoration: "none",
                  marginLeft: index > 0 ? "1.5rem" : "0",
                }}
              >
                <span
                  className={`text-lg font-light tracking-wide transition-all font-serif ${
                    activeItem === item
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {item}
                </span>
                <span
                  className={`absolute -inset-x-0.5 -inset-y-0.5 bg-[var(--color-border)] rounded -z-10 transition-opacity ${
                    activeItem === item
                      ? "opacity-50"
                      : "opacity-0 group-hover:opacity-30"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center space-y-3">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-wide whitespace-nowrap font-['Dancing_Script',cursive] text-center">
              Hailey Pan
            </h1>
          </div>

          <div className="flex justify-center gap-2 sm:gap-4 md:gap-6">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <Link
                key={item}
                href={item === "home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
                className="relative px-2 py-1 no-underline group"
              >
                <span
                  className={`text-sm sm:text-base font-light tracking-wide transition-all font-serif ${
                    activeItem === item
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {item}
                </span>
                <span
                  className={`absolute -inset-x-0.5 -inset-y-0.5 bg-[var(--color-border)] rounded -z-10 transition-opacity ${
                    activeItem === item
                      ? "opacity-50"
                      : "opacity-0 group-hover:opacity-30"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

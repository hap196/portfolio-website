'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('');

  const leftNavItems = ['about', 'experience'];
  const rightNavItems = ['projects', 'contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--color-background)] border-b border-[var(--color-border)] py-8 px-8 z-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center">
            {leftNavItems.map((item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
                className="relative px-4 py-2"
                style={{ 
                  textDecoration: 'none',
                  marginRight: index < leftNavItems.length - 1 ? '1.5rem' : '0'
                }}
              >
                <span
                  className={`text-lg font-light tracking-wide transition-all font-serif ${
                    activeItem === item
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {item}
                </span>
                {activeItem === item && (
                  <span className="absolute -inset-x-5 -inset-y-2 border-2 border-[var(--color-text-primary)] rounded-full -z-10" />
                )}
              </Link>
            ))}
          </div>

          <Link href="/" style={{ margin: '0 3rem', textDecoration: 'none' }}>
            <h1 className="text-4xl font-light italic text-[var(--color-text-primary)] tracking-wide whitespace-nowrap font-['Playfair_Display',Georgia,serif]">
              Hailey Pan
            </h1>
          </Link>

          <div className="flex items-center">
            {rightNavItems.map((item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
                className="relative px-4 py-2"
                style={{ 
                  textDecoration: 'none',
                  marginLeft: index > 0 ? '1.5rem' : '0'
                }}
              >
                <span
                  className={`text-lg font-light tracking-wide transition-all font-serif ${
                    activeItem === item
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {item}
                </span>
                {activeItem === item && (
                  <span className="absolute -inset-x-5 -inset-y-2 border-2 border-[var(--color-text-primary)] rounded-full -z-10" />
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center space-y-6">
          <Link href="/" className="no-underline">
            <h1 className="text-4xl font-light italic text-[var(--color-text-primary)] tracking-wide whitespace-nowrap font-['Playfair_Display',Georgia,serif] text-center">
              Hailey Pan
            </h1>
          </Link>

          <div className="flex justify-center gap-2 sm:gap-4 md:gap-6">
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
                className="relative px-4 py-2 no-underline"
              >
                <span
                  className={`text-lg font-light tracking-wide transition-all font-serif ${
                    activeItem === item
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {item}
                </span>
                {activeItem === item && (
                  <span className="absolute -inset-x-5 -inset-y-2 border-2 border-[var(--color-text-primary)] rounded-full -z-10" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
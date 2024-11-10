'use client'

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#1a1a2e] via-[#0f3460] to-[#53354a] text-white p-4 fixed w-full z-50 shadow-lg transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-[#a74536] hover:text-white transition-all">
        Usman Designs
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about-me" className="nav-link">About</Link>
          <Link href="/skills" className="nav-link">Skills</Link>
          <Link href="/education" className="nav-link">Education</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <AiOutlineClose className="text-3xl text-[#b36a5e] hover:text-white transition-all" />
            ) : (
              <AiOutlineMenu className="text-3xl text-[#b36a5e] hover:text-white transition-all" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center space-y-4 mt-4 md:hidden">
          <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about-me" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</Link>
          <Link href="/education" className="nav-link" onClick={() => setIsMenuOpen(false)}>Education</Link>
        </nav>
      )}

      <style jsx>{`
        /* Link styles */
        .nav-link {
          font-weight: bold;
          font-size: 1.125rem;
          color: #b36a5e;
          transition: color 0.3s ease, transform 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ff8c94;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }

        .nav-link:hover {
          color: #ff8c94;
          transform: scale(1.05);
        }

        .nav-link:hover::before {
          transform: translateX(0);
        }
      `}</style>
    </header>
  );
}

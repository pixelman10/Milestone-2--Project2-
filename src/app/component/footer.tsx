'use client'

import Link from 'next/link';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1a1a2e] via-[#0f3460] to-[#53354a] text-white p-6 shadow-lg mt-0">
      <ul className="social-links flex justify-center space-x-6 md:space-x-8 lg:space-x-10">
        <li className="group">
          <Link href="https://github.com/pixelman10">
            <FaGithubSquare className="social-icon text-4xl text-gray-300 transition-transform transform group-hover:scale-110 group-hover:text-blue-500" />
          </Link>
        </li>
        <li className="group">
          <Link href="https://www.linkedin.com/in/usman-khan-aa34842b5/">
            <FaLinkedin className="linkedin-icon text-4xl text-green-500 transition-transform transform group-hover:scale-110 group-hover:text-[#0a66c2]" />
          </Link>
        </li>
        <li className="group">
          <Link href="https://www.instagram.com/khan_usman27/">
            <AiOutlineInstagram className="instagram-icon text-4xl text-pink-500 transition-transform transform group-hover:scale-110 group-hover:text-[#C13584]" />
          </Link>
        </li>
      </ul>
      <p className="text-center text-gray-400 mt-4 text-sm">
        &copy; 2024 Muhammad Usman Khan. All rights reserved.
      </p>

      <style jsx>{`
        .social-icon {
          transition: transform 0.3s ease, color 0.3s ease;
        }

        /* Hover animations */
        .group:hover .social-icon {
          color: inherit;
          transform: scale(1.1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .social-links {
            space-x-4;
          }
        }

        @media (max-width: 640px) {
          .social-links {
            space-x-3;
          }
          .text-sm {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </footer>
  );
}

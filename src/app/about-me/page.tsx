'use client'

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f3460] text-white">
      <div className="card bg-[#16213e] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg shadow-lg shadow-cyan-500/50 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="card-content text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient bg-clip-text bg-gradient-to-r from-[#ff8c94] to-[#ff5e5e] animate-gradient">
            About Me
          </h1>
          <ul className="space-y-4 text-left text-lg sm:text-xl">
            <li className="animate-slide-up opacity-0 transform translate-y-6">
              <span className="text-[24px] sm:text-[30px] font-semibold mr-3">Name:</span> Muhammad Usman Khan
            </li>
            <li className="animate-slide-up opacity-0 transform translate-y-6 delay-200">
              <span className="text-[24px] sm:text-[30px] font-semibold mr-3">Profession:</span> Web Developer
            </li>
            <li className="animate-slide-up opacity-0 transform translate-y-6 delay-400">
              <span className="text-[24px] sm:text-[30px] font-semibold mr-3">Email:</span> muk200710@gmail.com
            </li>
            <li className="animate-slide-up opacity-0 transform translate-y-6 delay-600">
              <span className="text-[24px] sm:text-[30px] font-semibold mr-3">Contact:</span> +923003978468
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Text Gradient Animation */
        .text-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 4s ease infinite;
        }

        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Slide-Up Animation */
        .animate-slide-up {
          animation: slideUp 1s ease forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Box Styling */
        .card {
          width: 100%;
          max-width: 600px; /* Default max-width for small screens */
        }

        @media (min-width: 768px) {
          .card {
            max-width: 750px; /* Larger box size on medium screens */
          }
        }

        @media (min-width: 1024px) {
          .card {
            max-width: 900px; /* Larger box size on large screens */
          }
        }

        /* Hover Effect for Shadow */
        .card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
}

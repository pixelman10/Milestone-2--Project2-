'use client'

export default function Skills() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f3460] text-white px-4">
      <div className="skills-card bg-[#16213e] p-8 md:p-12 lg:p-16 rounded-lg shadow-lg shadow-cyan-500/50 transform transition duration-500 hover:scale-105 w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
        <div className="skills-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-clip-text bg-gradient-to-r from-[#ff8c94] to-[#ff5e5e] animate-gradient">
            My Skills in IT
          </h1>
          <ul className="space-y-4 text-left text-lg md:text-xl lg:text-2xl">
            <li className="animate-slide-up opacity-0 transform translate-y-6">
              <span className="text-[30px] font-semibold mr-3">• HTML</span>
            </li>
            <li className="animate-slide-up opacity-0 transform translate-y-6 delay-200">
              <span className="text-[30px] font-semibold mr-3">• CSS</span>
            </li>
            <li className="animate-slide-up opacity-0 transform translate-y-6 delay-400">
              <span className="text-[30px] font-semibold mr-3">• Typescript</span>
            </li>
            <li className="animate-slide-up opacity-0 transform translate-y-6 delay-600">
              <span className="text-[30px] font-semibold mr-3">• Next.js</span>
            </li>
            <li className="animate-slide-up opacity-0 transform translate-y-6 delay-800">
              <span className="text-[30px] font-semibold mr-3">• Node.js</span>
            </li>
            <li className="animate-slide-up opacity-0 transform translate-y-6 delay-1000">
              <span className="text-[30px] font-semibold mr-3">• Graphic Designing</span>
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

        /* Responsive Card Hover Animation */
        @media (min-width: 1024px) {
          .skills-card {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }

          .skills-card:hover {
            box-shadow: 0px 10px 30px rgba(0, 255, 255, 0.4);
          }
        }
      `}</style>
    </div>
  );
}

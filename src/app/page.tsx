'use client'

import Image from 'next/image';
import profilephoto from "../../public/Image/WhatsApp Image 2024-11-01 at 14.44.41_b91fd056.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-animated">
      <section className="home flex flex-col items-center text-center pt-16">
        <div className="profile-container flex justify-center items-center h-40vh">
          <div className="profile-pic transition-transform duration-700 transform hover:scale-110 hover:rotate-3d rounded-full w-72 h-72 mb-8 border-4 border-[#0f3460] overflow-hidden shadow-xl shadow-cyan-500/50">
            <Image src={profilephoto} alt="Profile Photo" width={288} height={288} className="rounded-full"/>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c94] to-[#ff5e5e] animate-gradient">
          Hi, It&apos;s <span className="text-[#ffafbd]">Muhammad Usman Khan</span>
        </h1>
        <p className="typing-text text-2xl font-bold text-gray-200 mt-4 mb-6">I&apos;m a Full Stack Developer</p>
        <p className="description text-xl font-bold text-gray-400 max-w-xl animate-slide-up">
          I am a web developer focused on crafting pixel-perfect, responsive designs that are both visually captivating and user-friendly.
        </p>
      </section>
      <style jsx>{`
        /* Dynamic Background Animation */
        .bg-gradient-animated {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #53354a);
          background-size: 300% 300%;
          animation: gradientAnimationBg 15s ease infinite;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        
        @keyframes gradientAnimationBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Text Gradient Animation */
        .animate-gradient {
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
          animation: slideUp 1.5s ease-in forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes slideUp {
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Typing Effect */
        .typing-text {
          overflow: hidden;
          border-right: .15em solid #ff5e5e;
          white-space: nowrap;
          animation: typing 3s steps(30, end), blink-caret .75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #ff5e5e; }
        }
      `}</style>
    </div>
  );
}

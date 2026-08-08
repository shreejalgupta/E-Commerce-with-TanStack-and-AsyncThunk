import { NavLink } from "react-router";
import { Home, ShoppingBag } from "lucide-react";

const styles = `
@keyframes floatChar { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
@keyframes blinkEyes { 0%, 88%, 100% { transform: scaleY(1); } 92% { transform: scaleY(0.1); } }
@keyframes armWave { 0%, 100% { transform: rotate(-6deg); } 50% { transform: rotate(10deg); } }
@keyframes glassSearch { 0%, 100% { transform: rotate(-10deg) translateX(0); } 50% { transform: rotate(6deg) translateX(6px); } }
@keyframes shadowPulse { 0%, 100% { transform: scaleX(1); opacity: 0.3; } 50% { transform: scaleX(0.82); opacity: 0.16; } }
@keyframes digitFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes twinkle { 0%, 100% { opacity: 0.18; transform: scale(0.9); } 50% { opacity: 0.55; transform: scale(1.05); } }
@media (prefers-reduced-motion: reduce) {
  .skm-anim { animation: none !important; }
}
`;

const SPARKLE_D =
  "M50 20 C52 40 60 48 80 50 C60 52 52 60 50 80 C48 60 40 52 20 50 C40 48 48 40 50 20 Z";

const sparkles = [
  { x: 8, y: 16, size: 20, delay: 0 },
  { x: 89, y: 12, size: 16, delay: 500 },
  { x: 14, y: 82, size: 18, delay: 900 },
  { x: 90, y: 78, size: 14, delay: 300 },
  { x: 50, y: 8, size: 12, delay: 1200 },
];

const ErrorPage = () => {
  return (
    <div className="relative flex  flex-col items-center justify-center overflow-hidden  py-30 text-center">
      <style>{styles}</style>

      {/* scattered brand sparkles */}
      {sparkles.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 100 100"
          className="skm-anim pointer-events-none absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle 3.2s ease-in-out ${s.delay}ms infinite`,
          }}
        >
          <path d={SPARKLE_D} fill="#E8792E" />
        </svg>
      ))}

      {/* ================= 404 ================= */}
      <div className="mb-2 flex text-8xl font-extrabold tracking-tight text-[#1B2340] sm:text-9xl">
        {"404".split("").map((ch, i) => (
          <span
            key={i}
            className="skm-anim inline-block"
            style={{
              color: i === 1 ? "#E8792E" : "#1B2340",
              animation: `digitFloat 2.6s ease-in-out ${i * 200}ms infinite`,
            }}
          >
            {ch}
          </span>
        ))}
      </div>

      {/* ================= animated character ================= */}
      <div
        className="skm-anim relative my-4"
        style={{ animation: "floatChar 3.4s ease-in-out infinite" }}
      >
        <svg width="220" height="200" viewBox="0 0 220 200">
          <defs>
            <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F0A868" />
              <stop offset="100%" stopColor="#8c5226" />
            </linearGradient>
          </defs>

          {/* body */}
          <ellipse cx="108" cy="112" rx="68" ry="60" fill="url(#bodyGrad)" />

          {/* left arm holding the magnifying glass, waving */}
          <g style={{ transformOrigin: "168px 118px" }}>
            <g
              className="skm-anim"
              style={{ transformOrigin: "168px 118px", animation: "armWave 2.4s ease-in-out infinite" }}
            >
              <rect x="163" y="100" width="10" height="42" rx="5" fill="#8c5226" />
              {/* magnifying glass */}
              <g
                className="skm-anim"
                style={{ transformOrigin: "195px 92px", animation: "glassSearch 2.8s ease-in-out infinite" }}
              >
                <circle cx="195" cy="92" r="17" fill="#EAF1FD" stroke="#1B2340" strokeWidth="4" />
                <line x1="207" y1="104" x2="220" y2="117" stroke="#1B2340" strokeWidth="5" strokeLinecap="round" />
              </g>
            </g>
          </g>

          {/* eyes (blinking) */}
          <g style={{ transformOrigin: "84px 106px" }} className="skm-anim" >
            <g style={{ transformOrigin: "84px 106px", animation: "blinkEyes 4.5s ease-in-out infinite" }}>
              <circle cx="84" cy="106" r="12" fill="#FDF6EC" />
              <circle cx="86" cy="108" r="6" fill="#1B2340" />
            </g>
          </g>
          <g style={{ transformOrigin: "132px 106px" }} className="skm-anim">
            <g style={{ transformOrigin: "132px 106px", animation: "blinkEyes 4.5s ease-in-out 120ms infinite" }}>
              <circle cx="132" cy="106" r="12" fill="#FDF6EC" />
              <circle cx="130" cy="108" r="6" fill="#1B2340" />
            </g>
          </g>

          {/* worried eyebrows */}
          <path d="M70 84 Q84 76 96 86" stroke="#1B2340" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M122 88 Q134 76 148 82" stroke="#1B2340" strokeWidth="4" fill="none" strokeLinecap="round" />

          {/* small surprised mouth */}
          <ellipse cx="108" cy="140" rx="8" ry="10" fill="#1B2340" opacity="0.85" />

          {/* rosy cheeks */}
          <circle cx="66" cy="126" r="7" fill="#E8792E" opacity="0.35" />
          <circle cx="150" cy="126" r="7" fill="#E8792E" opacity="0.35" />
        </svg>

        {/* ground shadow */}
        <div
          className="skm-anim mx-auto h-4 w-32 rounded-full bg-[#1B2340]"
          style={{ animation: "shadowPulse 3.4s ease-in-out infinite" }}
        />
      </div>

      {/* ================= copy ================= */}
      <h1 className="mt-2 text-2xl font-bold text-[#1B2340] sm:text-3xl">
        Oops! This page wandered off.
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-gray-500 sm:text-base">
        We searched every shelf but couldn't find what you're looking for.
        It may have been moved, sold out, or never existed.
      </p>

      {/* ================= actions ================= */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <NavLink
          to="/home"
          className="flex items-center justify-center gap-2 rounded-full bg-[#8c5226] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-amber-900 active:scale-95"
        >
          <Home size={18} />
          Back to Home
        </NavLink>
        <NavLink
          to="/home/product"
          className="flex items-center justify-center gap-2 rounded-full border border-[#8c5226] px-6 py-3 text-sm font-medium text-[#8c5226] transition-all duration-200 hover:bg-[#8c5226] hover:text-white active:scale-95"
        >
          <ShoppingBag size={18} />
          Browse Products
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
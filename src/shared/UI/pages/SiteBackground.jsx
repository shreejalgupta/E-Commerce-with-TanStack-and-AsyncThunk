import { useEffect, useRef } from "react";

/* ---------- animations ---------- */
const bgStyles = `
@keyframes drift1 { 0%, 100% { transform: translate(var(--px, 0px), var(--py, 0px)) scale(1); } 50% { transform: translate(calc(var(--px, 0px) + 30px), calc(var(--py, 0px) - 20px)) scale(1.06); } }
@keyframes drift2 { 0%, 100% { transform: translate(var(--px, 0px), var(--py, 0px)) scale(1); } 50% { transform: translate(calc(var(--px, 0px) - 25px), calc(var(--py, 0px) + 25px)) scale(1.08); } }
@keyframes drift3 { 0%, 100% { transform: translate(var(--px, 0px), var(--py, 0px)) scale(1); } 50% { transform: translate(calc(var(--px, 0px) + 20px), calc(var(--py, 0px) + 18px)) scale(1.05); } }
@keyframes twinkle { 0%, 100% { opacity: 0.18; transform: scale(0.9) rotate(0deg); } 50% { opacity: 0.55; transform: scale(1.05) rotate(8deg); } }
@media (prefers-reduced-motion: reduce) {
  .skm-bg-anim { animation: none !important; }
}
`;

const SPARKLE_D =
  "M50 20 C52 40 60 48 80 50 C60 52 52 60 50 80 C48 60 40 52 20 50 C40 48 48 40 50 20 Z";

const sparkles = [
  { x: 8, y: 14, size: 22, delay: 0 },
  { x: 88, y: 10, size: 16, delay: 600 },
  { x: 18, y: 76, size: 18, delay: 1200 },
  { x: 92, y: 62, size: 14, delay: 300 },
  { x: 55, y: 90, size: 20, delay: 900 },
  { x: 40, y: 6, size: 12, delay: 1500 },
  { x: 70, y: 34, size: 10, delay: 2000 },
];

/* ---------- fixed background, sits behind everything (-z-10) ---------- */
const SiteBackground = () => {
  const blobsRef = useRef([]);

  // gentle parallax: blobs lean very slightly toward the cursor
  useEffect(() => {
    let frame = null;
    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        blobsRef.current.forEach((el, i) => {
          if (!el) return;
          const factor = (i + 1) * 8;
          el.style.setProperty("--px", `${x * factor}px`);
          el.style.setProperty("--py", `${y * factor}px`);
        });
        frame = null;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FBF7F2]">
      <style>{bgStyles}</style>

      {/* soft blurred brand-color blobs, slow drift + cursor parallax */}
      <div
        ref={(el) => (blobsRef.current[0] = el)}
        className="skm-bg-anim absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#CDE1FB] opacity-70 blur-3xl"
        style={{ animation: "drift1 16s ease-in-out infinite" }}
      />
      <div
        ref={(el) => (blobsRef.current[1] = el)}
        className="skm-bg-anim absolute top-10 -right-32 h-[420px] w-[420px] rounded-full bg-[#F6C89A] opacity-50 blur-3xl"
        style={{ animation: "drift2 20s ease-in-out infinite" }}
      />
      <div
        ref={(el) => (blobsRef.current[2] = el)}
        className="skm-bg-anim absolute -bottom-40 left-1/3 h-[480px] w-[480px] rounded-full bg-[#E8D3BE] opacity-40 blur-3xl"
        style={{ animation: "drift3 18s ease-in-out infinite" }}
      />

      {/* faint dotted texture for depth */}
      <svg className="absolute inset-0 h-full w-full opacity-30">
        <defs>
          <pattern id="skm-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#CBD9EF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skm-dots)" />
      </svg>

      {/* scattered sparkles, matching the logo/badge icon, twinkling gently */}
      {sparkles.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 100 100"
          className="skm-bg-anim absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle 3.6s ease-in-out ${s.delay}ms infinite`,
          }}
        >
          <path d={SPARKLE_D} fill="#E8792E" />
        </svg>
      ))}
    </div>
  );
};

export default SiteBackground;
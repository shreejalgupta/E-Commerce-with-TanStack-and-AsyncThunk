/* SkyMartAppLoader.jsx
   Full-screen loader — use once, on initial site load / auth check / cold start.
   <SkyMartAppLoader /> renders fixed over the whole viewport.
*/

const styles = `
@keyframes sparkleDraw { to { stroke-dashoffset: 0; } }
@keyframes sparkleFill { to { opacity: 1; } }
@keyframes barFill { from { width: 0%; } to { width: 100%; } }
@keyframes letterUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes bobFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@media (prefers-reduced-motion: reduce) {
  .skm-anim { animation: none !important; }
}
`;

const SparkleMark = ({ size = 72 }) => {
  const d =
    "M50 4 C53 38 62 47 96 50 C62 53 53 62 50 96 C47 62 38 53 4 50 C38 47 47 38 50 4 Z";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <path
        d={d}
        fill="none"
        stroke="#E8792E"
        strokeWidth="4"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        className="skm-anim"
        style={{ animation: "sparkleDraw 900ms ease-out forwards" }}
      />
      <path
        d={d}
        fill="#E8792E"
        opacity="0"
        className="skm-anim"
        style={{ animation: "sparkleFill 400ms ease-out 750ms forwards" }}
      />
    </svg>
  );
};

const SkyMartAppLoader = () => {
  const word = "SkyMart";

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FBF7F2]">
      <style>{styles}</style>

      <div
        className="skm-anim"
        style={{ animation: "bobFloat 2.4s ease-in-out infinite" }}
      >
        <SparkleMark size={72} />
      </div>

      <div className="mt-5 flex text-3xl font-bold tracking-tight">
        {word.split("").map((ch, i) => (
          <span
            key={i}
            className="inline-block skm-anim"
            style={{
              color: i < 3 ? "#1B2340" : "#E8792E",
              animation: `letterUp 500ms ease-out ${300 + i * 60}ms both`,
            }}
          >
            {ch}
          </span>
        ))}
      </div>

      <p
        className="mt-2 text-sm text-[#8A6A52] skm-anim"
        style={{ animation: "letterUp 500ms ease-out 900ms both" }}
      >
        Unwrapping your beauty picks...
      </p>

      {/* <div className="mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-[#E7DCCB]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#E8792E] to-[#6B3410] skm-anim"
          style={{ animation: "barFill 1.8s ease-in-out 200ms forwards" }}
        />
      </div> */}
    </div>
  );
};

export default SkyMartAppLoader;
/* SkyMartRouteLoader.jsx
   In-page / section loader — use whenever content is being fetched
   (Home, Products, About). Renders a slim scanning progress bar plus
   skeleton cards shaped like the real product cards, so layout doesn't
   jump when data lands.

   Usage:
     <SkyMartRouteLoader count={4} />
*/

const styles = `
@keyframes shimmerSweep { from { background-position: -150% 0; } to { background-position: 150% 0; } }
@keyframes topBarScan { 0% { left: -35%; width: 35%; } 50% { left: 55%; width: 45%; } 100% { left: 100%; width: 35%; } }
@media (prefers-reduced-motion: reduce) {
  .skm-anim { animation: none !important; }
}
`;

const SkeletonCard = () => {
  const shimmer =
    "bg-[linear-gradient(90deg,#EFE7DA_0%,#FBF3E4_40%,#EFE7DA_80%)] bg-[length:250%_100%] skm-anim";

  return (
    <div className="rounded-xl border border-[#DCE7FA] bg-white p-3">
      <div
        className={`h-36 w-full rounded-lg ${shimmer}`}
        style={{ animation: "shimmerSweep 1.6s linear infinite" }}
      />
      <div
        className={`mt-3 h-3 w-16 rounded-full ${shimmer}`}
        style={{ animation: "shimmerSweep 1.6s linear infinite 80ms" }}
      />
      <div
        className={`mt-2 h-4 w-3/4 rounded ${shimmer}`}
        style={{ animation: "shimmerSweep 1.6s linear infinite 120ms" }}
      />
      <div
        className={`mt-2 h-3 w-1/2 rounded ${shimmer}`}
        style={{ animation: "shimmerSweep 1.6s linear infinite 160ms" }}
      />
      <div
        className={`mt-3 h-9 w-full rounded-lg ${shimmer}`}
        style={{ animation: "shimmerSweep 1.6s linear infinite 200ms" }}
      />
    </div>
  );
};

const SkyMartRouteLoader = ({ count = 6 }) => {
  return (
    <div className="relative ">
      <style>{styles}</style>

      <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-[#DCE7FA]">
        <div
          className="absolute top-0 h-full rounded-full bg-gradient-to-r from-[#E8792E] to-[#6B3410] skm-anim"
          style={{ animation: "topBarScan 1.1s ease-in-out infinite" }}
        />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default SkyMartRouteLoader;
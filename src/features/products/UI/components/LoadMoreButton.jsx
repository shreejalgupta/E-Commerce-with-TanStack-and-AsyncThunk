import { Sparkles, Check } from "lucide-react";

/* ---------- animations ---------- */
const styles = `
@keyframes skmSpin { to { transform: rotate(360deg); } }
@keyframes skmScan { 0% { left: -30%; width: 30%; } 50% { left: 55%; width: 40%; } 100% { left: 100%; width: 30%; } }
@keyframes skmPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
@media (prefers-reduced-motion: reduce) {
  .skm-anim { animation: none !important; }
}
`;

/**
 * <LoadMoreButton
 *   loading={boolean}   // fetch in progress
 *   hasMore={boolean}   // false once the list is exhausted
 *   onClick={() => {}}  // fetch next page
 * />
 */
const LoadMoreButton = ({ loading = false, hasMore = true, onClick }) => {
  if (!hasMore) {
    return (
      <div className="flex flex-col items-center gap-2 py-6">
        <style>{styles}</style>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-[#8c5226]">
          <Check size={16} />
        </span>
        <p className="text-sm font-medium text-gray-500">
          You've seen everything on the shelf.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-8 ">
      <style>{styles}</style>

      <button
        type="button"
        onClick={onClick}
        disabled={loading}
        className={`skm-anim relative overflow-hidden rounded-full px-8 py-3 text-sm font-medium shadow-md transition-all duration-200 cursor-pointer ${
          loading
            ? "cursor-wait bg-[#8c5226]/90 text-white"
            : "bg-[#8c5226] text-white hover:scale-105 hover:bg-amber-900 active:scale-95"
        }`}
        style={loading ? { animation: "skmPulse 1.6s ease-in-out infinite" } : undefined}
      >
        <span className="relative z-10 flex items-center gap-2">
          <Sparkles
            size={16}
            className={loading ? "skm-anim" : ""}
            style={loading ? { animation: "skmSpin 900ms linear infinite" } : undefined}
          />
          {loading ? "Loading more..." : "Load More"}
        </span>

        {/* scanning progress line, only while loading */}
        {loading && (
          <span className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden bg-white/20">
            <span
              className="skm-anim absolute top-0 h-full rounded-full bg-white/80"
              style={{ animation: "skmScan 1.1s ease-in-out infinite" }}
            />
          </span>
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton;
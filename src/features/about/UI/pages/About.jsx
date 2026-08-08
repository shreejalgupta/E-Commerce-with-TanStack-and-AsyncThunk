import { Link } from "react-router";
import { Sparkles, ShieldCheck, Heart, Users, ArrowRight } from "lucide-react";

const styles = `
@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes floatSlow { 0%, 100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-10px) rotate(2deg); } }
@keyframes twinkle { 0%, 100% { opacity: 0.25; transform: scale(0.9) rotate(0deg); } 50% { opacity: 0.6; transform: scale(1.08) rotate(10deg); } }
@media (prefers-reduced-motion: reduce) {
  .skm-anim { animation: none !important; }
}
`;

const SPARKLE_D =
  "M50 20 C52 40 60 48 80 50 C60 52 52 60 50 80 C48 60 40 52 20 50 C40 48 48 40 50 20 Z";

const stats = [
  { value: "120+", label: "Brands stocked" },
  { value: "40k+", label: "Orders shipped" },
  { value: "4.6★", label: "Average rating" },
  { value: "30 days", label: "To return anything" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Authenticity first",
    body: "Every product ships sealed, sourced directly from the brand — never from a reseller we haven't checked.",
  },
  {
    icon: Sparkles,
    title: "Curated, not dumped",
    body: "We turn down more products than we list. If it's on the shelf, someone here has actually used it.",
  },
  {
    icon: Heart,
    title: "Here after checkout",
    body: "Warranties, easy returns, and a real person to talk to if something arrives wrong.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#FBF7F2] font-sans text-gray-900">
      <style>{styles}</style>

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        {[
          { x: 8, y: 20, size: 16, delay: 0 },
          { x: 90, y: 18, size: 12, delay: 500 },
        ].map((s, i) => (
          <svg
            key={i}
            viewBox="0 0 100 100"
            className="skm-anim pointer-events-none absolute"
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

        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span
            className="skm-anim inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#8c5226]"
            style={{ animation: "fadeUp 600ms ease-out both" }}
          >
            <Sparkles size={12} /> Our story
          </span>
          <h1
            className="skm-anim mt-5 font-serif text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl"
            style={{ animation: "fadeUp 600ms ease-out 100ms both" }}
          >
            We stock what we'd actually use.
          </h1>
          <p
            className="skm-anim mx-auto mt-5 max-w-xl text-base text-gray-600 sm:text-lg"
            style={{ animation: "fadeUp 600ms ease-out 200ms both" }}
          >
            SkyMart started as a shelf of things our own friends kept
            re-buying. It's grown, but the bar hasn't moved: if we wouldn't
            hand it to someone we love, it doesn't make the cut.
          </p>
        </div>
      </section>

      {/* ============================= STATS ============================= */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-blue-200 bg-white p-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-[#8c5226]">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================= MISSION ============================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Less shelf-clutter, more shelf-life.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Most beauty marketplaces optimize for how many products they can
              list. We optimize for how many you'll actually finish. Every
              listing goes through the same three questions: is it authentic,
              is it worth repurchasing, and would we tell a friend about it.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              That's also why every product page shows real stock counts,
              honest ratings, and a warranty you can actually use — not just
              marketing copy.
            </p>
            <Link
              to="/home/product"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8c5226] px-7 py-3 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-amber-900 active:scale-95"
            >
              See what's on the shelf <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-[#F6C89A] opacity-60 blur-2xl" />
            <svg
              viewBox="0 0 100 160"
              className="skm-anim absolute left-16 top-10 h-48 w-32 drop-shadow-xl"
              style={{ animation: "floatSlow 5s ease-in-out infinite" }}
            >
              <rect x="30" y="8" width="40" height="20" rx="6" fill="#8c5226" />
              <rect x="20" y="28" width="60" height="122" rx="20" fill="#CDE1FB" stroke="#a9c8f5" strokeWidth="2" />
              <rect x="20" y="28" width="60" height="60" rx="20" fill="#ffffff" opacity="0.35" />
            </svg>
          </div>
        </div>
      </section>

      {/* ============================= VALUES ============================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          What we won't compromise on
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-blue-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-[#8c5226]">
                <Icon size={20} />
              </span>
              <p className="mt-4 font-semibold text-gray-900">{title}</p>
              <p className="mt-1.5 text-sm text-gray-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================= CTA ============================= */}
      <section className="mx-4 mb-16 overflow-hidden rounded-3xl bg-[#3d2412] px-8 py-14 text-center sm:mx-6 sm:px-16 lg:mx-auto lg:max-w-7xl">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
          <Users size={18} />
        </span>
        <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Come see what's new.
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-white/70">
          New drops land every Friday, curated the same way as everything
          else on the shelf.
        </p>
        <Link
          to="/home/product"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-[#3d2412] shadow-md transition-transform duration-200 hover:scale-105"
        >
          Browse products <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
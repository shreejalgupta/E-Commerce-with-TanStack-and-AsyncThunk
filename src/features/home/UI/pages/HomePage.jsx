import { Link, useNavigate } from "react-router";
import {
  Sparkles,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
  ArrowRight,
  Mail,
  Stars,
} from "lucide-react";
import ProductCard from "../../../products/UI/components/ProductCard";
import { useAllProduct } from "../../../products/hooks/productHook";
import SparkleField from "../components/SparkleField";

/* ---------- animations (same "skm-anim" convention as the rest of the app) ---------- */
const pageStyles = `
@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes badgeBob { 0%, 100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-10px) rotate(3deg); } }
@keyframes bottleFloat { 0%, 100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-12px) rotate(-1deg); } }
@keyframes lipstickFloat { 0%, 100% { transform: translateY(0) rotate(6deg); } 50% { transform: translateY(-16px) rotate(3deg); } }
@keyframes glowPulse { 0%, 100% { opacity: 0.55; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
@keyframes twinkle { 0%, 100% { opacity: 0.25; transform: scale(0.9) rotate(0deg); } 50% { opacity: 0.6; transform: scale(1.08) rotate(10deg); } }
@media (prefers-reduced-motion: reduce) {
  .skm-anim { animation: none !important; }
}
`;


/* ---------- content (grounded in the real catalog, not filler) ---------- */
const categories = [
  { label: "Makeup", emoji: "💄" },
  { label: "Skincare", emoji: "🧴" },
  { label: "Fragrance", emoji: "🌸" },
  { label: "Nail Care", emoji: "💅" },
  { label: "Hair Care", emoji: "🧖" },
  { label: "Tools & Brushes", emoji: "🖌️" },
];

const bestsellers = [
  // { brand: "Essence", name: "Essence Mascara Lash Princess", price: "8.94", was: "9.99", off: "10% OFF", rating: 2.56 },
  // { brand: "Glamour Beauty", name: "Eyeshadow Palette with Mirror", price: "16.35", was: "19.99", off: "18% OFF", rating: 2.86 },
  // { brand: "Velvet Touch", name: "Powder Canister", price: "13.51", was: "14.99", off: "10% OFF", rating: 4.64 },
  // { brand: "Chic Cosmetics", name: "Red Lipstick", price: "11.41", was: "12.99", off: "12% OFF", rating: 4.36 },
];

const testimonials = [
  { quote: "The Powder Canister lasted through a full wedding day without a single touch-up. Genuinely impressed.", name: "Priya R.", initials: "PR" },
  { quote: "The mirror on the Eyeshadow Palette is actually useful, not just a gimmick — I use it every morning.", name: "Meera S.", initials: "MS" },
  { quote: "Ordered the Red Lipstick on a Tuesday, wore it out by Thursday. Shipping was faster than expected.", name: "Ananya K.", initials: "AK" },
];

/* ---------- small building blocks ---------- */




/* ================================================================== */

const HomePage = () => {
  let navigate = useNavigate()
  let {data: bestsellers} = useAllProduct(4)

  return (
    <div className=" bg-[#FBF7F2] font-sans text-gray-900">
      <style>{pageStyles}</style>

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <SparkleField
          items={[
            { x: 6, y: 20, size: 16, delay: 0 },
            { x: 92, y: 15, size: 12, delay: 500 },
            { x: 10, y: 80, size: 14, delay: 1000 },
          ]}
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* left: copy */}
          <div>
            <span
              className="skm-anim inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#8c5226]"
              style={{ animation: "fadeUp 600ms ease-out both" }}
            >
              <Sparkles size={12} /> New this week
            </span>

            <h1
              className="skm-anim mt-5 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl"
              style={{ animation: "fadeUp 600ms ease-out 100ms both" }}
            >
              Beauty,
              <br />
              unboxed.
            </h1>

            <p
              className="skm-anim mt-5 max-w-md text-base text-gray-600 sm:text-lg"
              style={{ animation: "fadeUp 600ms ease-out 200ms both" }}
            >
              Skincare, makeup, and fragrance from labels people actually
              reach for twice. No guesswork, no dupes of dupes.
            </p>

            <div
              className="skm-anim mt-8 flex flex-wrap items-center gap-3"
              style={{ animation: "fadeUp 600ms ease-out 300ms both" }}
            >
              <Link
                to="/home/product"
                className="inline-flex items-center gap-2 rounded-full bg-[#8c5226] px-7 py-3 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-amber-900 active:scale-95"
              >
                Shop bestsellers <ArrowRight size={16} />
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-[#8c5226] hover:text-[#8c5226]"
              >
                Browse categories
              </a>
            </div>

            <div
              className="skm-anim mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-500"
              style={{ animation: "fadeUp 600ms ease-out 400ms both" }}
            >
              <span className="flex items-center gap-1.5">
                <Truck size={14} className="text-[#8c5226]" /> Free shipping over $40
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#8c5226]" /> Authenticity guaranteed
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw size={14} className="text-[#8c5226]" /> 30-day easy returns
              </span>
            </div>
          </div>

          {/* right: product spotlight */}
          <div className="relative mx-auto h-80 w-80 sm:h-96 sm:w-96">
            <div
              className="skm-anim absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-[#F6C89A] blur-2xl"
              style={{ animation: "glowPulse 4s ease-in-out infinite" }}
            />

            {/* bottle silhouette */}
            <svg
              viewBox="0 0 100 160"
              className="skm-anim absolute left-10 top-10 h-56 w-40 drop-shadow-xl sm:h-64 sm:w-44"
              style={{ animation: "bottleFloat 5s ease-in-out infinite" }}
            >
              <rect x="30" y="8" width="40" height="20" rx="6" fill="#8c5226" />
              <rect x="20" y="28" width="60" height="122" rx="20" fill="#CDE1FB" stroke="#a9c8f5" strokeWidth="2" />
              <rect x="20" y="28" width="60" height="60" rx="20" fill="#ffffff" opacity="0.35" />
            </svg>

            {/* lipstick silhouette */}
            <svg
              viewBox="0 0 60 160"
              className="skm-anim absolute right-6 bottom-6 h-44 w-24 drop-shadow-xl sm:h-52 sm:w-28"
              style={{ animation: "lipstickFloat 4.2s ease-in-out infinite 300ms" }}
            >
              <rect x="8" y="66" width="44" height="94" rx="12" fill="#2b1a10" />
              <path d="M12 66 L48 66 L40 18 Q30 2 20 18 Z" fill="#E8792E" />
            </svg>

            {/* floating discount badge, same shape as real product-card badges */}
            <div
              className="skm-anim absolute -left-4 top-4 rounded-full bg-[#E8792E] px-4 py-1.5 text-xs font-bold text-white shadow-lg"
              style={{ animation: "badgeBob 3s ease-in-out infinite" }}
            >
              12% OFF
            </div>
          </div>
        </div>
      </section>

      {/* ============================= CATEGORIES ============================= */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Shop by category
        </h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
          {categories.map((c) => (
            <button
              key={c.label}
              
              onClick={() => navigate('/home/product')}
              className="flex min-w-[136px] flex-col items-center gap-3 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#8c5226] hover:shadow-md sm:min-w-0"
            >
              <span className="text-3xl">{c.emoji}</span>
              <span className="text-sm font-medium text-gray-800">{c.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ============================= BESTSELLERS ============================= */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Bestsellers this month
          </h2>
          <Link
            to="/home/product"
            className="hidden items-center gap-1 text-sm font-medium text-[#8c5226] hover:underline sm:flex"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-10 place-items-center py-5">
          {bestsellers.map((p, index) => (
            <ProductCard key={p.id || index} product={p} />
          ))}
        </div>
      </section>

      {/* ============================= PROMO BANNER ============================= */}
      <section className="relative mx-4 overflow-hidden rounded-3xl bg-[#3d2412] px-8 py-14 text-center sm:mx-6 sm:px-16 lg:mx-auto lg:max-w-7xl">
        <SparkleField
          items={[
            { x: 8, y: 20, size: 20, delay: 0, color: "#F6C89A" },
            { x: 90, y: 25, size: 16, delay: 600, color: "#F6C89A" },
            { x: 50, y: 80, size: 14, delay: 1200, color: "#F6C89A" },
          ]}
        />
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Your shelf, refreshed.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/70 sm:text-base">
          New drops land every Friday. Get 12% off your first restock when you
          sign up below.
        </p>
        <a
          href="#newsletter"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-[#3d2412] shadow-md transition-transform duration-200 hover:scale-105"
        >
          Get the code <ArrowRight size={16} />
        </a>
      </section>

      {/* ============================= TRUST ROW ============================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { icon: Truck, title: "Free shipping over $40", body: "Standard delivery in 1–5 business days depending on the item." },
            { icon: ShieldCheck, title: "Authenticity guaranteed", body: "Every product ships sealed, sourced directly from the brand." },
            { icon: RotateCcw, title: "30-day easy returns", body: "Changed your mind? Send it back, no questions asked." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-[#8c5226]">
                <Icon size={20} />
              </span>
              <p className="font-semibold text-gray-900">{title}</p>
              <p className="text-sm text-gray-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================= TESTIMONIALS ============================= */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            What people are saying
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-blue-200 bg-white p-6">
                <Stars rating={5} />
                <p className="mt-3 text-sm leading-relaxed text-gray-700">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8c5226] text-xs font-bold text-white">
                    {t.initials}
                  </span>
                  <span className="text-sm font-medium text-gray-800">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= NEWSLETTER ============================= */}
      <section id="newsletter" className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#8c5226] text-white">
          <Mail size={18} />
        </span>
        <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Get first access to restocks
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          One email a week. No spam, unsubscribe whenever.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8c5226]"
          />
          <button
            type="submit"
            className="rounded-full bg-[#8c5226] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-amber-900"
          >
            Subscribe
          </button>
        </form>
      </section>


      
    </div>
  );
};

export default HomePage;
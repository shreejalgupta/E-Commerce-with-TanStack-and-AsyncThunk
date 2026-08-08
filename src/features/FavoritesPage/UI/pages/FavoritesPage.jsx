import { useState } from "react";
import { Link } from "react-router";
import { Heart, ShoppingBag, Sparkles, Star, ArrowRight } from "lucide-react";
import { useFav } from "../../hooks/useFav";
import ProductCard from "../../../products/UI/components/ProductCard";

const styles = `
@keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes heartFloat { 0%, 100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-10px) rotate(4deg); } }
@media (prefers-reduced-motion: reduce) {
  .skm-anim { animation: none !important; }
}
`;

const initialFavorites =[];

const Stars = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={13}
        className={i < Math.round(rating) ? "fill-[#E8792E] text-[#E8792E]" : "text-gray-300"}
      />
    ))}
    <span className="ml-1 text-xs text-gray-500">({rating})</span>
  </div>
);

const EmptyFavorites = () => (
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <div className="relative h-28 w-28">
      <div className="absolute inset-0 rounded-full bg-blue-100 blur-xl" />
      <Heart
        size={60}
        className="skm-anim relative mx-auto mt-7 text-[#8c5226]"
        style={{ animation: "heartFloat 3s ease-in-out infinite" }}
      />
    </div>
    <h2 className="mt-6 font-serif text-2xl font-bold text-gray-900">No favorites yet</h2>
    <p className="mt-2 max-w-xs text-sm text-gray-500">
      Tap the heart on anything you'd reach for twice — it'll show up here.
    </p>
    <Link
      to="/home/product"
      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8c5226] px-7 py-3 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-amber-900 active:scale-95"
    >
      Browse products <ArrowRight size={16} />
    </Link>
  </div>
);

const FavoritesPage = () => {
  // const [favorites, setFavorites] = useState(initialFavorites);
  let {favoriteItem: favorites, removeFavItem} = useFav();
  

  return (
    <div className="min-h-screen bg-[#FBF7F2] pt-28 pb-20 font-sans text-gray-900">
      <style>{styles}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1
          className="skm-anim font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          style={{ animation: "fadeUp 500ms ease-out both" }}
        >
          Your Favorites
        </h1>
        {favorites.length > 0 && (
          <p className="mt-1 text-sm text-gray-500">
            {favorites.length} item{favorites.length === 1 ? "" : "s"} saved
          </p>
        )}

        {favorites.length === 0 ? (
          <EmptyFavorites />
        ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-10 place-items-center">
            {favorites.map((p, index) => (
              <ProductCard key={p.id || index} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
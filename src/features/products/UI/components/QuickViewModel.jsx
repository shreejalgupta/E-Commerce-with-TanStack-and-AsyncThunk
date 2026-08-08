import { useState, useEffect, useCallback } from "react";
import { X, Star, Minus, Plus, Heart, ShoppingBag, Sparkles, Truck, ShieldCheck, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { useQuickView } from "../../hooks/productHook";
import { useCart } from "../../../cart/hooks/useCart";
import { useFav } from "../../../FavoritesPage/hooks/useFav";

const styles = `
@keyframes qvBackdropIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes qvBackdropOut { from { opacity: 1; } to { opacity: 0; } }
@keyframes qvPanelIn { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes qvPanelOut { from { opacity: 1; transform: translateY(0) scale(1); } to { opacity: 0; transform: translateY(16px) scale(0.97); } }
@media (prefers-reduced-motion: reduce) {
  .skm-anim { animation: none !important; }
}
`;

const Stars = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.round(rating) ? "fill-[#E8792E] text-[#E8792E]" : "text-gray-300"}
      />
    ))}
    <span className="ml-1 text-xs text-gray-500">({rating})</span>
  </div>
);

/**
 * <QuickViewModal
 *   product={{
 *     brand, name, price, was, off, rating, stock,
 *     tags: ["Beauty", "Mascara"], description, shipping, warranty,
 *   }}
 *   onClose={() => setQuickViewProduct(null)}
 *   onAddToCart={(product, qty) => {}}
 *   isFavorite={boolean}
 *   onToggleFavorite={() => {}}
 * />
 *
 * Render it only when a product is selected, e.g.:
 *   {quickViewProduct && (
 *     <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
 *   )}
 */
const QuickViewModal = ({
//   product,
//   onClose,
//   onAddToCart,
//   isFavorite = false,
//   onToggleFavorite,
}) => {

  
    const [isHovered, setIsHovered] = useState(false);
  const [closing, setClosing] = useState(false);

  let {quickViewProduct: product} = useSelector(store => store.quickView) 
let {handleRemove, handleQtyChange,getCartItem, navigate} = useCart()
      let item = getCartItem.find(elem => elem.id === product.id)
      let {addFavItem,removeFavItem, favoriteItem} = useFav();
        let isWishlisted = favoriteItem.find(elem => elem.id === product.id)
        
  
    let {handleClose} = useQuickView()
    console.log(handleClose)
  
  if (!product) return null;

  const {
    brand,
    name: title,
    price,
    was,
    off,
    rating = 0,
    stock,
    tags = [],
    description,
    shippingInformation: shipping,
    warrantyInformation: warranty,
  } = product;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      style={{ animation: `${closing ? "qvBackdropOut" : "qvBackdropIn"} 200ms ease-out both` }}
      onClick={handleClose}
    >
      <style>{styles}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl sm:grid-cols-2"
        style={{ animation: `${closing ? "qvPanelOut" : "qvPanelIn"} 220ms ease-out both` }}
      >
        <button
          type="button"
          
          onClick={handleClose}
          aria-label="Close quick view"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm transition-colors hover:bg-white hover:text-gray-800 cursor-pointer"
        >
          <X size={16} />
        </button>

        {/* image side */}
        <div className="relative flex h-56 items-center justify-center bg-blue-50 sm:h-auto">
            <img src={product.images[0]} />
          {off && (
            <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-[#E8792E] px-2.5 py-1 text-[11px] font-bold text-white">
              <Sparkles size={10} /> {off}
            </span>
          )}
          <Sparkles size={64} className="text-blue-200" />
        </div>

        {/* details side */}
        <div className="flex flex-col p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#E8792E]">{brand}</p>
          <h2 className="mt-1 font-serif text-xl font-bold leading-snug text-gray-900">{name}</h2>

          <div className="mt-2">
            <Stars rating={rating} />
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#8c5226]">${price}</span>
            {was && <span className="text-sm text-gray-400 line-through">${was}</span>}
          </div>

          {description && (
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
          )}

          {(stock || tags.length > 0) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {stock && (
                <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                  {stock} in stock
                </span>
              )}
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* quantity + actions */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-gray-300 px-1 py-1">
              <button
                type="button"
               disabled={item.qty === 1}
          onClick={() => handleQtyChange(product.id, -1)}
          className={`flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 ${item.qty === 1 ? 'cursor-no-drop' : 'cursor-pointer'}`}
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
              <button
                type="button"
                disabled={item.qty === product.stock}
          onClick={() => handleQtyChange(product.id, 1)}
          className={`flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 ${item.qty === product.stock ? 'cursor-no-drop' : 'cursor-pointer'}`}
              >
                <Plus size={14} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {isWishlisted ? removeFavItem(product) : addFavItem(product)}}
              aria-label="Toggle favorite"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 transition-colors hover:bg-gray-50 cursor-pointer"
            >
              <Heart
                size={16}
                className={isWishlisted ? "fill-[#E8792E] text-[#E8792E]" : "text-gray-500"}
              />
            </button>
          </div>

          <button
          onClick={() => item ? navigate('/home/cart') : handleAddToCart(product) }
          className="w-full flex items-center cursor-pointer justify-center gap-2 rounded-xl py-2.5 text-sm font-bold text-white transition-all duration-300"
          // disabled={item}
          style={{
            background: item
              ? "#5F3413"
              : "linear-gradient(135deg, #8B4A1F 0%, #6F3813 100%)",
            transform: isHovered ? "translateY(-1px)" : "translateY(0)",
          }}
        >
          <ShoppingCart
            size={16}
            className={item ? "animate-bounce" : ""}
          />
          {item ? "Added!" : "Add to Cart"}
        </button>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Truck size={12} /> {shipping}
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={12} /> {warranty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
import React, { useState } from "react";
import {
  Heart,
  Eye,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import QuickViewModal from "./QuickViewModel";
import { useQuickView } from "../../hooks/productHook";
import { useCart } from "../../../cart/hooks/useCart";
import { useFav } from "../../../FavoritesPage/hooks/useFav";

const ProductCard = ({ product, setQuickView, setQuickViewProduct }) => {
  const [isHovered, setIsHovered] = useState(false);
  let {handleAddToCart, isInCart, navigate} = useCart()
  // console.log('This is product->',product)
  const isAdding = isInCart(product.id)  
  console.log("isAdding ->",isAdding)
  let {addFavItem,removeFavItem, favoriteItem} = useFav();
  let isWishlisted = favoriteItem.find(elem => elem.id === product.id)
  
  
  
  // let isWishlisted = 

  
  const {
    title,
    brand,
    price,
    discountPercentage,
    rating,
    stock,
    availabilityStatus,
    thumbnail,
    warrantyInformation,
    shippingInformation,
    tags = [],
  } = product;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2,
  );
  const isLowStock = stock < 20;

  // const handleAddToCart = () => {
  //   setIsAdding(true);

  //   setTimeout(() => setIsAdding(false), 1200);
  // };

  let {handleQuickeView} = useQuickView();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[300px] rounded-2xl border border-[#9CC4EF]  bg-white overflow-hidden transition-all duration-500 ease-out"
      style={{
        boxShadow: isHovered
          ? "0 20px 40px -12px rgba(139,74,31,0.28), 0 0 0 2px #E8792A55"
          : "0 4px 14px -6px rgba(15,23,42,0.12)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0px)",
      }}
    >
      {/* subtle line-art background inspired by topographic doodle pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 420"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BFDCFB" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#BFDCFB" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="300" height="420" fill="url(#fadeMask)" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M -20 ${40 + i * 24} C 60 ${10 + i * 24}, 100 ${70 + i * 24}, 180 ${30 + i * 24} S 320 ${60 + i * 24}, 340 ${20 + i * 24}`}
            fill="none"
            stroke="#8B4A1F"
            strokeOpacity={isHovered ? 0.14 : 0.07}
            strokeWidth="1.4"
            style={{ transition: "stroke-opacity 0.5s ease" }}
          />
        ))}
      </svg>

      {/* discount ribbon */}
      {discountPercentage > 0 && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1 rounded-full bg-[#E8792A] text-white text-xs font-bold px-3 py-1 shadow-sm">
          <Sparkles size={12} strokeWidth={2.5} />
          {Math.round(discountPercentage)}% OFF
        </div>
      )}

      {/* wishlist button */}
      <button
        onClick={() => {isWishlisted ? removeFavItem(product) : addFavItem(product)}}
        aria-label="Add to wishlist"
        className="absolute top-3 right-3 z-20 grid place-items-center w-9 h-9 rounded-full bg-white/90 backdrop-blur transition-transform duration-300 hover:scale-110"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
      >
        <Heart
          size={18}
          strokeWidth={2}
          className="transition-colors duration-300 cursor-pointer"
          fill={isWishlisted ? "#E8792A" : "none"}
          color={isWishlisted ? "#E8792A" : "#8B4A1F"}
        />
      </button>

      {/* image */}
      <div className="relative z-10 h-52 flex items-center justify-center bg-gradient-to-b from-[#EAF3FF] to-white overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="h-40 w-40 object-contain transition-transform duration-500 ease-out"
          style={{
            transform: isHovered
              ? "scale(1.12) rotate(-2deg)"
              : "scale(1) rotate(0deg)",
          }}
        />

        {/* quick view overlay on hover */}
        <div
          className="absolute inset-0 flex items-end justify-center pb-3 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? "auto" : "none",
          }}
        >
          <button
            onClick={() => handleQuickeView(product)}
            className="flex items-center cursor-pointer gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#0B1220]/85 text-white hover:bg-[#0B1220] transition-colors"
          >
            <Eye size={14} /> Quick view
          </button>

          
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 p-4 pt-3">
        <p className="text-[11px] uppercase tracking-wide font-semibold text-[#E8792A] mb-1">
          {brand}
        </p>

        <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-1.5 line-clamp-2 cursor-pointer">
          {title}
        </h3>

        <div className="flex items-center gap-1 mb-2.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star
              key={n}
              size={13}
              fill={n <= Math.round(rating) ? "#E8792A" : "none"}
              color={n <= Math.round(rating) ? "#E8792A" : "#D1D5DB"}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-xl font-extrabold text-[#8B4A1F]">
            ${discountedPrice}
          </span>
          {discountPercentage > 0 && (
            <span className="text-sm text-gray-400 line-through">${price}</span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
              isLowStock
                ? "bg-red-50 text-red-600"
                : "bg-[#E9F5E9] text-green-700"
            }`}
          >
            {availabilityStatus === "In Stock"
              ? `${stock} in stock`
              : availabilityStatus}
          </span>
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#EAF1FB] text-[#3573B8] capitalize"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => isAdding ? navigate('/home/cart') : handleAddToCart(product) }
          className="w-full flex items-center cursor-pointer justify-center gap-2 rounded-xl py-2.5 text-sm font-bold text-white transition-all duration-300"
          // disabled={isAdding}
          style={{
            background: isAdding
              ? "#5F3413"
              : "linear-gradient(135deg, #8B4A1F 0%, #6F3813 100%)",
            transform: isHovered ? "translateY(-1px)" : "translateY(0)",
          }}
        >
          <ShoppingCart
            size={16}
            className={isAdding ? "animate-bounce" : ""}
          />
          {isAdding ? "Added!" : "Add to Cart"}
        </button>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 text-[10.5px] text-gray-500">
          <span className="flex items-center gap-1">
            <Truck size={13} /> {shippingInformation}
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck size={13} /> {warrantyInformation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

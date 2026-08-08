import { useState } from "react";
import { Link } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag, Lock, Sparkles, ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import CartItemRow from "../components/CartItemRow";


const styles = `
@keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes bagFloat { 0%, 100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-12px) rotate(3deg); } }
@media (prefers-reduced-motion: reduce) {
  .skm-anim { animation: none !important; }
}
`;

let initialItems;

const FREE_SHIPPING_THRESHOLD = 40;
const SHIPPING_FEE = 4.99;


const EmptyCart = () => (
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <style>{styles}</style>
    <div className="relative h-28 w-28">
      <div className="absolute inset-0 rounded-full bg-blue-100 blur-xl" />
      <ShoppingBag
        size={64}
        className="skm-anim relative mx-auto mt-6 text-[#8c5226]"
        style={{ animation: "bagFloat 3s ease-in-out infinite" }}
      />
    </div>
    <h2 className="mt-6 font-serif text-2xl font-bold text-gray-900">Your cart's empty</h2>
    <p className="mt-2 max-w-xs text-sm text-gray-500">
      Nothing on the shelf yet — go find something worth repurchasing.
    </p>
    <Link
      to="/home/product"
      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8c5226] px-7 py-3 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-amber-900 active:scale-95"
    >
      Browse products <ArrowRight size={16} />
    </Link>
  </div>
);

const CartPage = () => {
  let items = useSelector(store => store.cartItem.cartItem) || []
  console.log(items)
  const [promo, setPromo] = useState("");

  const handleQtyChange = (id, delta) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
    );
  };

  // const handleRemove = (id) => {
  //   setItems((prev) => prev.filter((it) => it.id !== id));
  // };

  const subtotal = items?.reduce((sum, it) => sum + it.price * it.qty, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#FBF7F2] pt-28 pb-20 font-sans text-gray-900">
      <style>{styles}</style>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1
          className="skm-anim font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          style={{ animation: "fadeUp 500ms ease-out both" }}
        >
          Your Cart
        </h1>
        {items.length > 0 && (
          <p className="mt-1 text-sm text-gray-500">
            {items.reduce((n, it) => n + it.qty, 0)} item
            {items.reduce((n, it) => n + it.qty, 0) === 1 ? "" : "s"}
          </p>
        )}

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* item list */}
            <div className="rounded-2xl border border-blue-200 bg-white px-5 lg:col-span-2">
              {items.map((item) => (
                <CartItemRow
                  key={item.id}
                  product={item}
                  onQtyChange={handleQtyChange}
                />
              ))}
            </div>

            {/* order summary */}
            <div className="h-fit rounded-2xl border border-blue-200 bg-white p-6 lg:sticky lg:top-28">
              <h2 className="font-serif text-lg font-bold text-gray-900">Order Summary</h2>

              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="Promo code"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8c5226]"
                />
                <button
                  type="button"
                  className="rounded-lg border border-[#8c5226] px-4 text-sm font-medium text-[#8c5226] transition-colors hover:bg-[#8c5226] hover:text-white"
                >
                  Apply
                </button>
              </div>

              <div className="mt-5 space-y-2 border-t border-blue-100 pt-4 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-[#8c5226]">
                    Add ${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>

              <div className="mt-4 flex justify-between border-t border-blue-100 pt-4 text-base font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#8c5226] py-3 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-amber-900 active:scale-95"
              >
                <Lock size={14} /> Secure Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
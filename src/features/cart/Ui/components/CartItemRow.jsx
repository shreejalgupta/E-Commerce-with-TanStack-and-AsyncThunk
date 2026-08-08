import { Minus, Plus, Sparkles, Trash2 } from "lucide-react";
import { useCart } from "../../hooks/useCart";

const CartItemRow = ({ product }) => {
  
  let {handleRemove, handleQtyChange,getCartItem} = useCart()
    let item = getCartItem.find(elem => elem.id === product.id)
    


    console.log(product)
  return (
    <div className="flex items-center gap-4 border-b border-blue-100 py-5 last:border-0">
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
        <img src={product.images[0]} alt="" />
        <Sparkles size={26} className="text-blue-200" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#E8792E]">
          {product.brand}
        </p>
        <p className="truncate text-sm font-semibold text-gray-900">
          {product.title}
        </p>
        <p className="mt-1 text-sm font-bold text-[#8c5226]">
          ${product.price?.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-gray-300 px-1 py-1">
        <button
          type="button"
          disabled={item.qty === 1}
          onClick={() => handleQtyChange(product.id, -1)}
          className={`flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 ${item.qty === 1 ? 'cursor-no-drop' : 'cursor-pointer'}`}
        >
          <Minus size={14} />
        </button>
        <span className="w-5 text-center text-sm font-medium">{product.qty}</span>
        <button
          type="button"
            disabled={item.qty === product.stock}
          onClick={() => handleQtyChange(product.id, 1)}
          className={`flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 ${item.qty === product.stock ? 'cursor-no-drop' : 'cursor-pointer'}`}
        >
          <Plus size={14} />
        </button>
      </div>

      <p className="w-16 flex-shrink-0 text-right text-sm font-semibold text-gray-900">
        ${(product.price * product.qty).toFixed(2)}
      </p>

      <button
        type="button"
        onClick={() => handleRemove(product.id)}
        className="flex-shrink-0 rounded-full p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 cursor-pointer"
        aria-label={`Remove ${product.name}`}
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};
export default CartItemRow;

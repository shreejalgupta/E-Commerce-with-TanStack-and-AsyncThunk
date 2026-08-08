import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useCategory } from "../../../features/products/hooks/productHook";

// API se category object aa sakta hai ({ name, slug }) ya plain string — dono handle karo
const getLabel = (cat) =>
  typeof cat === "string" ? cat : (cat?.name ?? cat?.slug ?? "");

const CategoryDropdown = ({  open, setOpen, selected, setSelected, wrapRef, value, onChange, options = [] }) => {
  console.log(value, onChange, options);
  // "All Categories" hamesha pehla option rahega, uske baad API se aayi categories
  const fullOptions = ["All Categories", ...options];
  

  // categories async load hoti hain, isliye value prop change hone par selected sync karo
  useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  // Close on outside click / Escape
  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target))
        setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const handleSelect = (cat) => {
    setSelected(cat);
    
    onChange?.(cat);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} className="relative w-full sm:w-56">
  <button
    type="button"
    onClick={() => setOpen(o => !o)}
    aria-haspopup="listbox"
    aria-expanded={open}
    className={`flex w-full items-center justify-between gap-2 rounded-lg border bg-white px-4 py-3 text-left text-sm text-gray-700 shadow-sm transition-colors sm:py-2.5 ${
      open
        ? "border-[#8c5226] ring-2 ring-[#8c5226]/30"
        : "border-gray-300 hover:bg-gray-50"
    }`}
  >
    <span className="truncate capitalize">{getLabel(selected)}</span>
    <ChevronDown
      size={18}
      className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
        open ? "rotate-180 text-[#8c5226]" : ""
      }`}
    />
  </button>

  <div
    role="listbox"
    className={`absolute left-0 right-0 z-30 mt-2 origin-top rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-200 ease-out ${
      open
        ? "max-h-72 scale-100 opacity-100"
        : "pointer-events-none max-h-0 scale-95 opacity-0"
    }`}
  >
    <ul className="max-h-72 overflow-y-auto py-1">
      {fullOptions.map(cat => {
        const label = getLabel(cat);
        const isActive = label === getLabel(selected); // ✅ compare normalized string
        return (
          <li className="" key={label}>
            <button
              type="button"
              role="option"
              aria-selected={isActive}
              onClick={() => handleSelect(cat)} // ✅ pass original object/string
              className={`flex w-full items-center capitalize justify-between gap-2 px-4 py-2.5 text-left text-sm transition-colors ${
                isActive
                  ? "bg-[#8c5226]/10 font-medium text-[#8c5226]"
                  : "text-gray-700 hover:bg-amber-50"
              }`}
            >
              {label } 
              {isActive && <Check size={16} className="text-[#8c5226]" />}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
</div>

  );
};

export default CategoryDropdown;

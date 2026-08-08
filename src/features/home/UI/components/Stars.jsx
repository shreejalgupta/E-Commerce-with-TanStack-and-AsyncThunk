import React from 'react'

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

export default Stars

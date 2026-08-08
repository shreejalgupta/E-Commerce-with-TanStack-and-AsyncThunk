import React from 'react'

const SPARKLE_D =
  "M50 20 C52 40 60 48 80 50 C60 52 52 60 50 80 C48 60 40 52 20 50 C40 48 48 40 50 20 Z";


const SparkleField = ({ items }) => (
  <>
    {items.map((s, i) => (
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
        <path d={SPARKLE_D} fill={s.color || "#E8792E"} />
      </svg>
    ))}
  </>
);

export default SparkleField

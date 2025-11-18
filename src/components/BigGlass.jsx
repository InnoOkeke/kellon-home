// components/BigGlassCard.jsx
import React from "react"

export default function BigGlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        relative w-full 
        rounded-[40px]
        bg-[#0f0f11]/80
        backdrop-blur-2xl
        border border-white/5
        overflow-hidden
        ${className}
      `}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.18]">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/5"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      {/* Soft glow at the bottom-left */}
      <div className="absolute left-0 bottom-0 w-[280px] h-[280px] bg-accent-500/20 blur-[120px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

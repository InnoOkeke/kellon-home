"use client"

import React from "react"
import { motion } from "framer-motion"
import { Icons } from "./Icons"

const chains = [
  { name: "Stellar", icon: "Stellar", color: "#7D00FF" },
  { name: "Base", icon: "Base", color: "#0052FF" },
  { name: "Celo", icon: "Celo", color: "#FCFF52" },
  { name: "Polygon", icon: "Polygon", color: "#8247E5" },
  { name: "Bnb ", icon: "BNB", color: "#F3BA2F" },
  { name: "Solana", icon: "Solana" },
  {
    name: "Arc",
    logoSrc: "/images/networks/arc-logo.png",
  },
]

const ChainSlider = () => {
  const SCROLL_ITEMS = [...chains, ...chains, ...chains, ...chains]

  return (
    <section
      className="relative w-full overflow-hidden py-4 md:py-6 bg-transparent"
      aria-label="Supported Blockchains"
    >
      <div
        className="flex w-full select-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.ul
          className="flex min-w-full shrink-0 items-center gap-4 md:gap-8 lg:gap-12 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {SCROLL_ITEMS.map((chain, index) => {
            const isDuplicate = index >= chains.length

            return (
              <li
                key={`${chain.name}-${index}`}
                className="mx-7"
                aria-hidden={isDuplicate}
              >
                {chain.icon === "Solana" ? (
                  <SolanaLogo />
                ) : chain.logoSrc ? (
                  <img
                    src={chain.logoSrc}
                    alt={isDuplicate ? "" : `${chain.name} logo`}
                    className="h-9 w-32 object-contain lg:h-10 lg:w-36"
                    loading="lazy"
                  />
                ) : (
                  <NetworkIcon icon={chain.icon} />
                )}
              </li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}

const NetworkIcon = ({ icon }) => {
  const IconComponent = Icons[icon]

  return <IconComponent className="w-32 lg:w-36" />
}

const SolanaLogo = () => (
  <svg
    viewBox="0 0 108 56"
    className="h-9 w-32 lg:h-10 lg:w-36"
    role="img"
    aria-label="Solana logo"
  >
    <defs>
      <linearGradient id="solana-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#9945FF" />
        <stop offset="1" stopColor="#14F195" />
      </linearGradient>
    </defs>
    <path d="M18 2h88L90 18H2L18 2Z" fill="url(#solana-gradient)" />
    <path d="M2 21h88l16 16H18L2 21Z" fill="url(#solana-gradient)" />
    <path d="M18 40h88L90 56H2l16-16Z" fill="url(#solana-gradient)" />
  </svg>
)

export default ChainSlider

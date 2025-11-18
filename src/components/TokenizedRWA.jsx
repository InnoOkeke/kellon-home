"use client"

import React from "react"
import { Banknote, Building, Globe, Box } from "lucide-react"

const assets = [
  { icon: <Building className="w-8 h-8 text-white" />, title: "Real Estate" },
  { icon: <Globe className="w-8 h-8 text-white" />, title: "Global Stocks" },
  { icon: <Banknote className="w-8 h-8 text-white" />, title: "Commodities" },
  { icon: <Box className="w-8 h-8 text-white" />, title: "And more..." },
]

export default function TokenizedRWA() {
  return (
    <section className="relative w-full overflow-hidden ">
      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:h-screen flex flex-col justify-center gap-12">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bungee font-bold leading-snug tracking-wide text-white">
          Invest in <br /> Tokenized <br /> Real-World Assets
        </h2>

        {/* Description */}
        <div className="flex flex-col gap-6 max-w-2xl text-gray-200 text-lg md:text-xl">
          <p>
            Purchase fractional shares of real-world assets such as real estate,
            global stocks, and commodities.
          </p>
          <p>Accessible directly from your non-custodial Kellon wallet.</p>
          <p>Future-ready: expanding asset classes as we grow.</p>
        </div>

        {/* Assets tokens */}
        <div className="flex flex-wrap gap-6 mt-6">
          {assets.map((asset, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-primary-800/20 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-accent-400/50 hover:bg-accent-800/20 hover:shadow-lg hover:shadow-accent-500/20"
            >
              {asset.icon}
              <span className="text-white font-medium">{asset.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

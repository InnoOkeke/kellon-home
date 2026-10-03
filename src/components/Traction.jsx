"use client"
// @ts-ignore
import React from "react"
import { motion } from "framer-motion"
import ChainSlider from "./ChainSlider"

export default function SupportedAssets() {
  // Smooth easing curve
  const smooth = [0.25, 0.1, 0.25, 1]

  return (
    <section
      className="relative w-full py-20 pb-2 bg-primary-900 overflow-hidden"
      aria-label="Supported Network Infrastructure"
    >
      <div className="relative z-10 w-full">
        {/* Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          // @ts-ignore
          transition={{ duration: 1.5, ease: smooth, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full "
        >
          <div className="relative ">
            <ChainSlider />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

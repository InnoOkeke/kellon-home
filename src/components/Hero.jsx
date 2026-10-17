import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Star } from "lucide-react"
import PlayStoreButton, { DirectApkLink, WebAppButton } from "./PlayStoreButton"
import HeroActivity from "./HeroActivity"
import "./Hero.css"

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : delay },
  })

  return (
    <section className="kellon-hero" aria-labelledby="hero-heading">
      <div className="kellon-hero__background" aria-hidden="true">
        <div className="kellon-hero__glow kellon-hero__glow--pink" />
        <div className="kellon-hero__glow kellon-hero__glow--blue" />
        <div className="kellon-hero__grid" />
        <Star className="kellon-hero__star" size={40} fill="currentColor" />
      </div>
      <div className="kellon-hero__layout">
        <motion.div className="kellon-hero__copy" {...entrance()}>
          <h1 id="hero-heading" className="kellon-hero__heading">
            <span>Buy stablecoins.</span>{" "}
            <span className="kellon-hero__accent">Put them to work.</span>
          </h1>

          <p className="kellon-hero__description">
            Buy, deposit, and manage USDC or USDT, invest in tokenized stocks, and
            explore yield opportunities—all from one wallet.
          </p>

          <div className="kellon-hero__actions">
            <div className="kellon-hero__buttons">
              <PlayStoreButton className="kellon-hero__download-button kellon-hero__play-store" />
              <WebAppButton
                label="Open web app"
                className="kellon-hero__download-button kellon-hero__web-app"
              />
            </div>
            <DirectApkLink
              variant="text"
              label="Prefer a direct download? Download APK ↓"
              className="kellon-hero__apk"
            />
          </div>
        </motion.div>
        <HeroActivity />
      </div>
    </section>
  )
}

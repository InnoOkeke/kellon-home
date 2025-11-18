import React, { useRef, useState, useEffect } from "react"
import { useSpring, animated } from "@react-spring/web"
import { ArrowRight, Play } from "lucide-react"

const headlines = [
  "Borderless Payments",
  "Crypto–Native Global Investments",
  "One Non–Custodial Wallet",
]

const images = [
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1763309715/kellon/Kellon1_ywmpbx.jpg",
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1763309713/kellon/Kellon2_wrlszn.jpg",
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1763309710/kellon/Kellon3_afx7vr.jpg",
  "https://res.cloudinary.com/dcxghlgre/image/upload/v1763309708/kellon/Kellon4_ha42ye.jpg",
]

export default function Hero() {
  const containerRef = useRef(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [fade, setFade] = useState(true)

  // Looping headline animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length)
        setFade(true)
      }, 500)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Scroll-driven image change
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return
      // @ts-ignore
      const rect = containerRef.current.getBoundingClientRect()
      const scrollTop = -rect.top
      const sectionHeight = rect.height / images.length
      const index = Math.min(
        Math.floor(scrollTop / sectionHeight),
        images.length - 1
      )
      setCurrentImage(index)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const headlineSpring = useSpring({
    opacity: fade ? 1 : 0,
    transform: fade ? "translateY(0px)" : "translateY(-20px)",
    config: { duration: 500 },
  })

  const scrollToWaitlist = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const emailInput = footer.querySelector('input[type="email"]')
        // @ts-ignore
        if (emailInput) emailInput.focus()
      }, 500)
    }
  }

  return (
    <section ref={containerRef} className="relative 2xl:min-h-[400dvh]">
      {/* Parent-level connection SVG */}
      <svg
        className="absolute w-full h-full top-0 left-0 pointer-events-none z-0"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <circle cx="200" cy="150" r="8" fill="#8b5cf6" opacity="0.2" />
        <circle cx="1000" cy="100" r="8" fill="#f472b6" opacity="0.2" />
        <circle cx="600" cy="700" r="8" fill="#facc15" opacity="0.2" />
        <circle cx="800" cy="400" r="8" fill="#22d3ee" opacity="0.2" />
        <line
          x1="200"
          y1="150"
          x2="800"
          y2="400"
          stroke="#8b5cf6"
          strokeWidth="1"
          opacity="0.1"
        />
        <line
          x1="1000"
          y1="100"
          x2="800"
          y2="400"
          stroke="#f472b6"
          strokeWidth="1"
          opacity="0.1"
        />
        <line
          x1="600"
          y1="700"
          x2="800"
          y2="400"
          stroke="#facc15"
          strokeWidth="1"
          opacity="0.1"
        />
      </svg>

      <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden bg-black z-10">
        {/* 2-column layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center w-full h-full max-w-7xl px-6 gap-12 z-20">
          {/* Left: text + CTA */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left max-w-lg z-10">
            <animated.h1
              style={headlineSpring}
              className="text-4xl sm:text-6xl lg:text-8xl font-extrabold font-bungee leading-tight text-white tracking-tighter"
            >
              {headlines[currentHeadline]}
            </animated.h1>

            <p className="mt-4 text-white/80 text-lg sm:text-xl leading-relaxed">
              Kellon Mobile empowers you with a non-custodial wallet for
              borderless payments, tokenized asset management, and global
              investments - all in one secure, intuitive app
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
              <button
                onClick={scrollToWaitlist}
                className="px-6 py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-accent-400 to-primary-800 rounded-md text-white hover:from-accent-500 hover:to-primary-900 transition-all duration-300"
              >
                Join Waitlist
                {/* <ArrowRight className="w-5 h-5" /> */}
              </button>
              <button className="px-6 py-3 flex items-center justify-center gap-2 border border-white rounded-md text-white hover:ring-2 hover:ring-accent-400 hover:ring-offset-2 hover:ring-offset-gray-900 transition-all duration-300">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right: images (hidden on mobile) */}
          <div className="hidden lg:flex flex-1 justify-center items-center relative w-full h-full">
            {/* Connection vector SVG */}
            <svg
              className="absolute w-full h-full top-0 left-0 pointer-events-none"
              viewBox="0 0 600 600"
              fill="none"
            >
              <circle cx="100" cy="100" r="5" fill="#8b5cf6" opacity="0.6" />
              <circle cx="500" cy="150" r="5" fill="#f472b6" opacity="0.6" />
              <circle cx="300" cy="500" r="5" fill="#facc15" opacity="0.6" />
              <circle cx="400" cy="300" r="5" fill="#22d3ee" opacity="0.6" />
              <line
                x1="100"
                y1="100"
                x2="400"
                y2="300"
                stroke="#8b5cf6"
                strokeWidth="2"
                opacity="0.3"
              />
              <line
                x1="500"
                y1="150"
                x2="400"
                y2="300"
                stroke="#f472b6"
                strokeWidth="2"
                opacity="0.3"
              />
              <line
                x1="300"
                y1="500"
                x2="400"
                y2="300"
                stroke="#facc15"
                strokeWidth="2"
                opacity="0.3"
              />
            </svg>

            {/* Layered background blobs */}
            <div className="absolute w-[60%] h-[60%] bg-gradient-to-br from-accent-400 to-primary-400 rounded-full blur-3xl opacity-30 animate-float"></div>
            <div
              className="absolute w-[50%] h-[50%] top-10 left-10 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute w-[40%] h-[40%] bottom-10 right-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-15 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>

            {images.map((img, i) => (
              <div
                key={i}
                className="absolute w-full h-full flex justify-center items-center"
              >
                <animated.img
                  src={img}
                  alt={`App screenshot ${i + 1}`}
                  className={`w-[45%] lg:w-[50%] rounded-3xl shadow-2xl transition-opacity duration-500 transform ${
                    i === currentImage ? "scale-105" : "scale-100"
                  }`}
                  style={{ opacity: i === currentImage ? 1 : 0 }}
                />

                {/* Opaque overlay */}
                {i === currentImage && (
                  <div className="absolute inset-0 bg-black/30 pointer-events-none "></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

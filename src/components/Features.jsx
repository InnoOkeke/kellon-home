import React, { useRef } from "react"
import { useSpring, animated, config } from "@react-spring/web"
import { useInView } from "react-intersection-observer"
import {
  CreditCard,
  RefreshCcw,
  Send,
  Wallet,
  Home,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Lock,
  ArrowRight,
} from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: "Non-Custodial Wallet",
      description:
        "Your keys, your crypto. Full control with enterprise-grade security.",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/20",
    },
    {
      icon: RefreshCcw,
      title: "Fiat & Crypto Flow",
      description: "Seamless on/off ramps through licensed global partners.",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/20",
    },
    {
      icon: Home,
      title: "Tokenized RWA Access",
      description: "Global real estate, stocks, and commodities in one tap.",
      color: "from-orange-500 to-yellow-500",
      gradient: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20",
      border: "border-orange-500/20",
    },
    {
      icon: CreditCard,
      title: "Borderless Payments",
      description: "Send globally and pay bills from a single interface.",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      border: "border-green-500/20",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Multi-sig wallets, cold storage, and military-grade encryption",
      stat: "99.9%",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Instant settlements with optimized blockchain infrastructure",
      stat: "<2s",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Available in 150+ countries with local payment methods",
      stat: "150+",
    },
    {
      icon: TrendingUp,
      title: "Best Rates",
      description: "Competitive pricing through smart order routing",
      stat: "0.1%",
    },
  ]

  // Parallax container ref
  const containerRef = useRef(null)

  // Header animation
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const headerSpring = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0px)" : "translateY(30px)",
    config: config.molasses,
  })

  // Scroll to waitlist function
  const scrollToWaitlist = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => {
        const emailInput = footer.querySelector('input[type="email"]')
        if (emailInput) {
          emailInput.focus()
        }
      }, 500)
    }
  }

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <animated.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
          }}
        />
        <animated.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Animated Section Header */}
        <animated.div
          ref={headerRef}
          style={headerSpring}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <Lock className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">
              Secure & Compliant
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-bungee">
            Financial Freedom,
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Globally Unified
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            One mobile wallet that bridges traditional finance with the crypto
            economy. Access global markets, make borderless payments, and
            control your wealth.
          </p>
        </animated.div>

        {/* Main Features Grid with Staggered Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const [featureRef, featureInView] = useInView({
              threshold: 0.2,
              triggerOnce: true,
            })

            const featureSpring = useSpring({
              opacity: featureInView ? 1 : 0,
              transform: featureInView ? "translateY(0px)" : "translateY(40px)",
              config: config.gentle,
              delay: index * 100,
            })

            return (
              <animated.div
                key={index}
                ref={featureRef}
                style={featureSpring}
                className={`group relative p-8 rounded-3xl border ${feature.border} ${feature.gradient} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                onClick={() => {
                  // Add click parallax effect
                  console.log(`Clicked ${feature.title}`)
                }}
              >
                {/* Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
              </animated.div>
            )
          })}
        </div>

        {/* Benefits Section with Animation */}
        <div className="relative">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-bungee">
              Built for Performance
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Engineered with cutting-edge technology to deliver the fastest,
              most secure crypto experience available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const [benefitRef, benefitInView] = useInView({
                threshold: 0.2,
                triggerOnce: true,
              })

              const benefitSpring = useSpring({
                opacity: benefitInView ? 1 : 0,
                transform: benefitInView
                  ? "translateY(0px)"
                  : "translateY(30px)",
                config: config.gentle,
                delay: index * 150,
              })

              return (
                <animated.div
                  key={index}
                  ref={benefitRef}
                  style={benefitSpring}
                  className="group text-center p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    // Add click parallax effect
                    console.log(`Clicked ${benefit.title}`)
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {benefit.stat}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </animated.div>
              )
            })}
          </div>

          {/* Animated CTA Bottom */}
          <animated.div
            className="text-center mt-16 pt-8 border-t border-white/10"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0px)" : "translateY(20px)",
              transition: "all 0.6s ease-out",
              transitionDelay: "600ms",
            }}
          >
            <p className="text-gray-400 mb-6">
              Ready to experience the future of finance?
            </p>
            <button
              onClick={scrollToWaitlist}
              className="px-8 py-4 bg-gradient-to-r from-accent-400 to-primary-800 rounded-xl text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              Join Waitlist - Get Early Access
              <ArrowRight className="w-5 h-5" />
            </button>
          </animated.div>
        </div>
      </div>
    </section>
  )
}

export default Features

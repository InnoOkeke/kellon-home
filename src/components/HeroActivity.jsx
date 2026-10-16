import React, { useRef } from "react"
import { useInView, useReducedMotion } from "framer-motion"
import { ArrowDownLeft, ArrowUpRight, Check, Layers, TrendingUp } from "lucide-react"

const activities = [
  {
    id: "received",
    label: "USDC received",
    detail: "In your wallet",
    icon: ArrowDownLeft,
    delay: "0s",
  },
  {
    id: "sent",
    label: "USDT sent",
    detail: "Transfer complete",
    icon: ArrowUpRight,
    delay: "-13.5s",
  },
  {
    id: "stocks",
    label: "Tokenized stocks",
    detail: "Explore global assets",
    icon: Layers,
    delay: "-9s",
  },
  {
    id: "yield",
    label: "Explore yield",
    detail: "Put stablecoins to work",
    icon: TrendingUp,
    delay: "-4.5s",
  },
]

export default function HeroActivity() {
  const activityRef = useRef(null)
  const inView = useInView(activityRef, { amount: 0.2 })
  const reduceMotion = useReducedMotion()

  return (
    <div
      ref={activityRef}
      className="kellon-hero__activity"
      data-active={inView && !reduceMotion}
      data-reduced-motion={Boolean(reduceMotion)}
      aria-hidden="true"
    >
      {activities.map(({ id, label, detail, icon: Icon, delay }) => (
        <div
          key={id}
          className={`kellon-hero__event kellon-hero__event--${id}`}
          style={{ "--activity-delay": delay }}
        >
          <span className="kellon-hero__event-symbol">
            <Icon size={20} strokeWidth={1.6} />
          </span>
          <div className="kellon-hero__event-copy">
            <span className="kellon-hero__event-label">{label}</span>
            <span className="kellon-hero__event-detail">
              {(id === "received" || id === "sent") && <Check size={10} />}
              {detail}
            </span>
            <span className="kellon-hero__event-progress">
              <span />
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

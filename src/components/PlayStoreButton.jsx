import React from "react"
import { Download, ExternalLink } from "lucide-react"

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.kellonapp"

export const WEB_APP_URL = "https://app.kellon.xyz/"

export const APK_DOWNLOAD_URL =
  "https://github.com/KELLON-RWA/kellon-app/releases/download/1.3.9/app-release.apk"

export const GooglePlayLogo = ({ className = "h-6 w-6" }) => (
  <svg
    viewBox="0 0 512 512"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="#00D1FF"
      d="M96 52.8c-10.4 6.1-16 17.4-16 31.9v342.6c0 14.5 5.6 25.8 16 31.9l189.4-203.2L96 52.8Z"
    />
    <path
      fill="#00F076"
      d="m285.4 256 58.9-63.2L121.9 64.3c-9.6-5.6-18.5-9.6-25.9-11.5L285.4 256Z"
    />
    <path
      fill="#FFD500"
      d="m285.4 256-189.4 203.2c7.4-1.9 16.3-5.9 25.9-11.5l222.4-128.5L285.4 256Z"
    />
    <path
      fill="#FF3D71"
      d="m344.3 192.8-58.9 63.2 58.9 63.2 67.2-38.8c27.3-15.8 27.3-33 0-48.8l-67.2-38.8Z"
    />
  </svg>
)

const PlayStoreButton = ({
  className = "",
  compact = false,
  label = "Get it on Google Play",
  sublabel = "Early access",
  onClick,
}) => (
  <a
    href={PLAY_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-5 py-3 text-primary-950 shadow-[0_0_40px_rgba(255,255,255,0.16)] transition-all hover:-translate-y-0.5 hover:bg-accent-50 hover:shadow-[0_0_55px_rgba(217,70,239,0.28)] focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-500 ${className}`}
    aria-label="Get Kellon on Google Play"
  >
    <GooglePlayLogo className={compact ? "h-5 w-5" : "h-7 w-7"} />
    <span className="flex flex-col items-start leading-none">
      {!compact && (
        <span className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary-950/60">
          {sublabel}
        </span>
      )}
      <span className="text-sm font-extrabold text-primary-950 sm:text-base">
        {label}
      </span>
    </span>
  </a>
)

export const WebAppButton = ({
  className = "",
  compact = false,
  label = "Open Web App",
  onClick,
}) => (
  <a
    href={WEB_APP_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-accent-500 px-5 py-3 text-sm font-extrabold text-white shadow-[0_0_40px_rgba(217,70,239,0.24)] transition-all hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-[0_0_55px_rgba(217,70,239,0.38)] focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-300 ${className}`}
    aria-label="Open Kellon web app"
  >
    <span>{label}</span>
    <ExternalLink size={compact ? 16 : 18} aria-hidden="true" />
  </a>
)

export const DirectApkLink = ({ className = "", onClick }) => (
  <a
    href={APK_DOWNLOAD_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`inline-flex min-h-[64px] items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-accent-400/70 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${className}`}
  >
    <Download size={16} aria-hidden="true" />
    <span>Download APK</span>
  </a>
)

export default PlayStoreButton

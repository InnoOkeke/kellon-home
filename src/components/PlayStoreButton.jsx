import React from "react"
import { Download } from "lucide-react"

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.kellonapp"

export const APK_DOWNLOAD_URL =
  "https://release-assets.githubusercontent.com/github-production-release-asset/1123643196/f9aa0203-afca-436c-8c75-aa0f0dac73e1?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-09-18T15%3A17%3A52Z&rscd=attachment%3B+filename%3Dapp-release.apk&rsct=application%2Fvnd.android.package-archive&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-09-18T14%3A17%3A18Z&ske=2026-09-18T15%3A17%3A52Z&sks=b&skv=2018-11-09&sig=JarvgByi0bjCAec6vGNTzlGDb5DYsGEjfRJdt1YIHQ8%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4OTc0MjgzOSwibmJmIjoxNzg5NzQxMDM5LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.-Ox7ReRMdGRStnolzyI5-ebQmPLS58KTytwxT1yKI-o&response-content-disposition=attachment%3B%20filename%3Dapp-release.apk&response-content-type=application%2Fvnd.android.package-archive"

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

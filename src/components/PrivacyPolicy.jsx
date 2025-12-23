import React, { useEffect } from "react"
import {
  Shield,
  AlertTriangle,
  FileText,
  Lock,
  Globe,
  Zap,
  Eye,
  Database,
  Share2,
  Key,
  ShieldCheck,
  Clock,
  UserCheck,
  Link,
  Mail,
  ArrowLeft,
  ArrowDown,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const PrivacyPolicy = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const privacySections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Introduction & Acceptance",
      content: (
        <>
          <p className="mb-4">
            Welcome to Kellon ("we," "our," "us"). Kellon is a cross-border
            payment and digital asset platform designed to help users send,
            receive, and swap crypto, access fiat payouts, and purchase
            tokenized assets globally — while maintaining full ownership of
            their private keys.
          </p>
          <p className="mb-4">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our website,
            mobile app, and related services (collectively, the "Services").
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-blue-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-primary-300 relative z-10">
              By using Kellon, you agree to this Privacy Policy.
            </p>
          </div>
        </>
      ),
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: (
        <>
          <p className="mb-4">
            We collect limited data to deliver and improve our services.
            Depending on how you use Kellon, we may collect:
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-white mb-2">
              a. Information You Provide
            </h4>
            <ul className="space-y-2 mb-4">
              {[
                "Contact details (e.g., name, email, phone number) when you sign up or contact support",
                "KYC information (if required by fiat on/off-ramp partners for compliance)",
                "Transaction details (amount, time, blockchain addresses) related to your use of Kellon",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-white mb-2">
              b. Automatically Collected Information
            </h4>
            <ul className="space-y-2 mb-4">
              {[
                "Device and usage data, such as IP address, browser type, OS, and interaction logs for analytics and security",
                "Cookies and similar technologies to improve performance and user experience on our website",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">
              c. Third-Party Information
            </h4>
            <ul className="space-y-2">
              {[
                "When using integrated services (e.g., Ramp, Transak, MoonPay), those providers may share verification or transaction status with us as needed for functionality and compliance",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ),
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Non-Custodial Wallet & User Control",
      content: (
        <>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-blue-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-primary-300 relative z-10">
              <strong>Kellon is a non-custodial wallet</strong> — meaning you,
              and only you, control your private keys and assets.
            </p>
          </div>
          <p className="mb-4">
            We never store or access your private keys, seed phrases, or wallet
            balances. All transactions occur directly on-chain.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              <strong>Important:</strong> Kellon will never ask for your private
              keys or recovery phrase. Protect them securely at all times.
            </p>
          </div>
        </>
      ),
      gradient: "from-amber-500/10 to-orange-500/10",
      border: "border-amber-500/20",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We use the limited data we collect to:</p>
          <ul className="space-y-3 mb-4">
            {[
              "Operate and improve Kellon's services and user experience",
              "Facilitate crypto-to-fiat and fiat-to-crypto transactions",
              "Verify identity (via third-party KYC providers when required)",
              "Detect and prevent fraud, abuse, or unauthorized activity",
              "Comply with legal obligations (AML, CFT, data protection)",
              "Provide customer support and respond to inquiries",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-accent-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </>
      ),
      gradient: "from-indigo-500/10 to-blue-500/10",
      border: "border-indigo-500/20",
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Sharing of Information",
      content: (
        <>
          <div className="relative overflow-hidden bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-r-lg p-4 mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-accent-300 relative z-10">
              We do not sell or rent your personal data.
            </p>
          </div>
          <p className="mb-4">We may share limited information with:</p>
          <ul className="space-y-3 mb-4">
            {[
              "Regulated financial partners (e.g., on/off-ramp providers) for transaction processing",
              "Compliance providers for KYC/AML verification",
              "Analytics and infrastructure providers (e.g., hosting, security, error tracking) under strict confidentiality",
              "Regulators or law enforcement when legally required",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400">
            All third parties are bound by confidentiality and data protection
            obligations.
          </p>
        </>
      ),
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Data Security",
      content: (
        <>
          <p className="mb-4">
            We employ industry-standard security measures, including encryption,
            secure servers, and limited data access.
          </p>
          <p className="mb-4">
            However, since blockchain transactions are public, information tied
            to your wallet address may be visible on-chain.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              <strong>Important:</strong> Kellon will never ask for your private
              keys or recovery phrase. Protect them securely at all times.
            </p>
          </div>
        </>
      ),
      gradient: "from-red-500/10 to-pink-500/10",
      border: "border-red-500/20",
      iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Data Retention",
      content: (
        <>
          <p className="mb-4">
            We retain personal data only as long as necessary to fulfill the
            purposes stated in this Policy or as required by law.
          </p>
          <p className="mb-4">
            Blockchain transaction data is immutable and permanently stored on
            the blockchain.
          </p>
        </>
      ),
      gradient: "from-gray-500/10 to-slate-500/10",
      border: "border-gray-500/20",
      iconBg: "bg-gradient-to-br from-gray-500 to-slate-500",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: (
        <>
          <p className="mb-4">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Access, correct, or delete your personal information",
              "Withdraw consent where applicable",
              "Request data portability",
              "Lodge a complaint with a data protection authority",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-accent-300">
            You can contact us to exercise these rights — see contact
            information in the footer below.
          </p>
        </>
      ),
      gradient: "from-cyan-500/10 to-blue-500/10",
      border: "border-cyan-500/20",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Transfers",
      content: (
        <>
          <p className="mb-4">
            As a global platform, your data may be processed in multiple
            jurisdictions.
          </p>
          <p className="mb-4">
            We ensure all transfers comply with applicable data protection laws
            and use appropriate safeguards.
          </p>
        </>
      ),
      gradient: "from-violet-500/10 to-purple-500/10",
      border: "border-violet-500/20",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Third-Party Links",
      content: (
        <>
          <p className="mb-4">
            Our website and app may link to external services (e.g., payment
            partners, exchanges).
          </p>
          <p className="mb-4">
            We are not responsible for their privacy practices. Review their
            policies before sharing personal data.
          </p>
        </>
      ),
      gradient: "from-orange-500/10 to-amber-500/10",
      border: "border-orange-500/20",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Updates to This Policy",
      content: (
        <>
          <p className="mb-4">
            We may update this Privacy Policy periodically to reflect legal,
            technical, or business changes.
          </p>
          <p className="mb-4">
            Updates will be posted here with a revised "Last updated" date.
          </p>
        </>
      ),
      gradient: "from-blue-500/10 to-indigo-500/10",
      border: "border-blue-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Responsive Background Grid */}
      <div className="absolute inset-0">
        {/* Main grid with responsive sizing */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>

        {/* Gradient orbs with responsive sizing */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-accent-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-primary-500/5 rounded-full blur-2xl sm:blur-3xl"></div>

        {/* Center glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] bg-gradient-to-r from-accent-500/3 to-primary-500/3 rounded-full blur-2xl sm:blur-3xl"></div>

        {/* Mobile-optimized floating particles */}
        <div className="sm:hidden">
          <div className="absolute top-20 left-10 w-1 h-1 bg-accent-400/30 rounded-full"></div>
          <div className="absolute top-40 right-16 w-1 h-1 bg-primary-400/30 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-1 h-1 bg-accent-400/30 rounded-full"></div>
        </div>
      </div>

      <Header />

      {/* Back Button */}
      <div className="relative z-10 pt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-primary-400 hover:text-primary-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </button>
        </div>
      </div>

      <div className="relative py-16 pb-12 sm:py-16 lg:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 mb-4 sm:mb-6 backdrop-blur-sm">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-accent-400" />
              <span className="text-xs sm:text-sm font-medium text-accent-300">
                Privacy Policy
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4">
              Your Privacy
              <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                & Data Protection
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              How we collect, use, and protect your information when using
              Kellon's services.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-primary-500/10 border border-primary-500/20 mt-4 sm:mt-6 backdrop-blur-sm">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
              <span className="text-xs sm:text-sm font-medium text-primary-300">
                Last updated: 03/10/2025
              </span>
            </div>
          </div>

          {/* Privacy Cards */}
          <div className="space-y-6 sm:space-y-8">
            {privacySections.map((section, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${section.gradient} backdrop-blur-sm border ${section.border} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300 group overflow-hidden`}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3 sm:mb-4 relative z-10">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${section.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    <div className="text-white">{section.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="text-gray-200 leading-relaxed text-sm sm:text-base relative z-10">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Final Note Card */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:rotate-12 transition-transform duration-500">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Protecting Your Privacy
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto">
                  Your privacy is fundamental to Kellon's non-custodial
                  approach. We are committed to transparency and protecting your
                  personal information.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-accent-300 text-sm font-medium">
                    Questions about privacy?
                  </span>
                  <button
                    onClick={() => {
                      document
                        .querySelector("footer")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-400 hover:text-primary-300 text-sm font-medium underline hover:no-underline transition-colors flex items-center gap-1"
                  >
                    Contact support
                    <ArrowDown className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy

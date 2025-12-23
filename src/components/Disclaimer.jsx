import React, { useEffect } from "react"
import { Shield, AlertTriangle, FileText, Lock, Globe, Zap, ArrowDown } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Disclaimer = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const disclaimerSections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "General Information",
      content: (
        <>
          <p className="mb-4">
            Kellon is a non-custodial, blockchain-based payment and digital
            asset platform developed by Kellon Digital Asset Management Limited.
            Our app enables users to send, receive, and swap cryptocurrencies,
            convert between crypto and fiat using regulated partners, and trade
            tokenized assets across supported markets.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-accent-300 relative z-10">
              Kellon is not a bank, exchange, or financial institution. We do
              not hold user funds, custody assets, or provide financial advice
              of any kind.
            </p>
          </div>
        </>
      ),
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "border-blue-500/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "No Financial or Investment Advice",
      content: (
        <>
          <p className="mb-4">
            All content on the Kellon website, app, and communications is for
            informational purposes only.
          </p>
          <p className="mb-4">
            Nothing provided by Kellon should be interpreted as:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Financial or investment advice",
              "Legal or tax guidance",
              "A guarantee of returns or asset stability",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-purple-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-primary-300 relative z-10">
              You are solely responsible for evaluating and managing the risks
              associated with your use of cryptocurrencies and digital assets.
            </p>
          </div>
        </>
      ),
      gradient: "from-yellow-500/10 to-orange-500/10",
      border: "border-yellow-500/20",
      iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Non-Custodial Responsibility",
      content: (
        <>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500/10 to-blue-500/10 border-l-4 border-primary-500 rounded-r-lg p-4 mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-primary-300 relative z-10">
              <strong>Kellon is non-custodial</strong> — meaning you fully
              control your wallet, private keys, and recovery phrases.
            </p>
          </div>
          <p className="mb-4">
            We never store, access, or recover your keys or funds.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              If you lose your private key or seed phrase, we cannot help you
              recover access to your wallet or assets.
            </p>
          </div>
          <p className="font-medium text-accent-300 mb-4">
            You are responsible for keeping your credentials secure and backing
            up your recovery phrase safely.
          </p>
        </>
      ),
      gradient: "from-red-500/10 to-pink-500/10",
      border: "border-red-500/20",
      iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Market and Transaction Risks",
      content: (
        <>
          <p className="mb-4">
            Cryptocurrency and tokenized assets involve high volatility and
            potential loss of value.
          </p>
          <p className="mb-4">
            Transactions on blockchain networks are irreversible and may be
            affected by:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Network congestion or errors",
              "Smart contract vulnerabilities",
              "Third-party service downtime",
              "Exchange rate fluctuations",
              "Regulatory or compliance actions",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 group/item">
                <div className="w-2 h-2 rounded-full bg-accent-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                <span className="group-hover/item:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-500/10 to-pink-500/10 border-l-4 border-red-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-red-300 relative z-10">
              By using Kellon, you accept full responsibility for any risk or
              loss resulting from blockchain or market activity.
            </p>
          </div>
        </>
      ),
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-500/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Regulatory Compliance",
      content: (
        <>
          <p className="mb-4">
            Kellon operates globally but is not available in all jurisdictions.
          </p>
          <p className="mb-4">
            Users are responsible for ensuring their activities comply with
            local laws and regulations, including tax reporting and cross-border
            transfer restrictions.
          </p>
          <div className="relative overflow-hidden bg-gradient-to-r from-accent-500/10 to-primary-500/10 border-l-4 border-accent-500 rounded-r-lg p-4 my-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/0 via-accent-500/5 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="font-medium text-accent-300 relative z-10">
              We may restrict access to certain regions where crypto
              transactions or fiat conversions are prohibited or limited by law.
            </p>
          </div>
        </>
      ),
      gradient: "from-green-500/10 to-emerald-500/10",
      border: "border-green-500/20",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
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
      <div className="relative py-32 pb-12 sm:py-16 lg:py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 mb-4 sm:mb-6 backdrop-blur-sm">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-accent-400" />
              <span className="text-xs sm:text-sm font-medium text-accent-300">
                Legal Disclaimer
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4">
              Important
              <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                Legal Information
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Please read this disclaimer carefully before using Kellon's
              services. Your use of our platform constitutes acceptance of these
              terms.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-red-500/10 border border-red-500/20 mt-4 sm:mt-6 backdrop-blur-sm">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <span className="text-xs sm:text-sm font-medium text-red-300">
                Last updated: 03/10/2025
              </span>
            </div>
          </div>

          {/* Disclaimer Cards */}
          <div className="space-y-6 sm:space-y-8">
            {disclaimerSections.map((section, index) => (
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
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Important Notice
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-md mx-auto">
                By using Kellon's services, you acknowledge and accept all terms
                outlined in this disclaimer. Always conduct your own research
                and consult with financial professionals when needed.
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-accent-300 text-sm font-medium">
                  Questions about disclaimer?
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
      <Footer />
    </div>
  )
}

export default Disclaimer

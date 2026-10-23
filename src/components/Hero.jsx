import React from 'react'
import { motion } from 'motion/react'
import helmetBg from '../../assets/images/helmet.webp'

export default function Hero({ onBeginClick, onDiscoverClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#080808] pt-20 pb-16 lg:py-0"
    >
      {/* Full-width dark hero background with helmet on the right */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={helmetBg || '/images/helmet.webp'}
          alt="Spartan helmet in Roman Colosseum arena"
          className="w-full h-full object-cover object-[75%_center] lg:object-[82%_center] scale-100 filter brightness-95 contrast-105"
          loading="eager"
        />

        {/* Dark gradient on the left for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 via-35% md:via-[#080808]/80 to-transparent" />

        {/* Top navbar dark gradient blend */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080808] via-[#080808]/60 to-transparent" />

        {/* Bottom edge shadow blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080808] to-transparent" />

        {/* Ambient atmospheric red ember glow on helmet */}
        <div
          className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-[#D10A20]/15 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content: Strict 3-line monumental headline, small caps quote, tagline and CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          
          {/* Small red line + label: THE ARENA AWAITS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-3.5 mb-6"
          >
            <span className="w-8 h-[2px] bg-[#D10A20]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#D10A20] font-mono">
              THE ARENA AWAITS
            </span>
          </motion.div>

          {/* Huge white serif heading on 3 lines: ENTER / THE / ARENA. */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[7.75rem] font-bold text-white uppercase leading-[0.88] tracking-tight mb-8"
          >
            ENTER<br />
            THE<br />
            ARENA.
          </motion.h1>

          {/* Quote in small caps: "Strength is not given. It is conquered." */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-cinzel text-base sm:text-lg md:text-xl text-white font-medium tracking-wider mb-4"
          >
            &ldquo;STRENGTH IS NOT GIVEN. IT IS CONQUERED.&rdquo;
          </motion.p>

          {/* Tagline in spaced capitals: FORGED THROUGH RAGE • BUILT FOR WAR. TRAINED FOR LIFE. */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xs sm:text-sm text-[#A6A6A6] font-mono uppercase tracking-[0.22em] sm:tracking-[0.28em] font-normal leading-relaxed mb-10 max-w-xl"
          >
            FORGED THROUGH RAGE &bull; BUILT FOR WAR. TRAINED FOR LIFE.
          </motion.p>

          {/* CTAs: Red filled button "BEGIN YOUR ODYSSEY →" and outlined button "EXPLORE THE ARENA" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onBeginClick}
              className="group bg-[#D10A20] hover:bg-[#FF1E35] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-[0_0_25px_rgba(209,10,32,0.4)] flex items-center justify-center gap-3 cursor-pointer active:scale-95"
            >
              <span>BEGIN YOUR ODYSSEY</span>
              <span className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </button>

            <button
              onClick={onDiscoverClick}
              className="border border-[#262626] hover:border-[#D10A20] text-white bg-transparent hover:bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95"
            >
              <span>EXPLORE THE ARENA</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

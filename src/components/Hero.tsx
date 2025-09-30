'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'
import { price, pitch } from '@/data/essentials'
import { ArrowRight, Zap, Star } from 'lucide-react'

export function Hero() {
  const href = 'https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463'

  const metrics = [
    { value: "10K+", label: "Active Members" },
    { value: "24/7", label: "Available Care" },
    { value: "4.9", label: "Member Rating" }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-[95vh] flex items-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle circles */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-cyan-300 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        {/* Centered Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700">
                Rated 4.9/5 from over 600 reviews
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.05]"
            >
              Healthcare made
              <br />
              <span className="text-blue-600">incredibly simple</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              {pitch.sub}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button
                href={href}
                onClick={enrollClick}
                className="text-lg px-10 py-5 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-blue-600 hover:bg-blue-700"
              >
                <Zap className="w-5 h-5 mr-2" />
                Enroll Today — {price.monthly}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center justify-center gap-8 pt-8"
            >
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 1.0 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-black text-slate-900">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              {/* Center Phone */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 mx-auto w-72 aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-900"
              >
                <img
                  src="https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="MPB Health App"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Left Phone */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-0 top-12 z-10 w-64 aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-slate-900 opacity-60"
              >
                <img
                  src="https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="MPB Health App"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right Phone */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-0 top-12 z-10 w-64 aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-slate-900 opacity-60"
              >
                <img
                  src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="MPB Health App"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border-4 border-blue-300 rounded-full opacity-30"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-cyan-300 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
                
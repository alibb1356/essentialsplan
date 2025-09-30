'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'
import { price, pitch } from '@/data/essentials'
import { ArrowRight, Shield, Users } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const href = 'https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463'

  const trustLogos = [
    { name: 'Company 1' },
    { name: 'Company 2' },
    { name: 'Company 3' },
    { name: 'Company 4' },
    { name: 'Company 5' },
  ]

  return (
    <section className="relative overflow-hidden bg-white min-h-[100vh] flex items-center">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -90, 0],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-teal-400 rounded-full blur-3xl"
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-2xl opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-cyan-200 to-transparent rounded-full blur-2xl opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-100"
            >
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">
                Trusted by 14,000+ members
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
            >
              Your personal assistant to{' '}
              <span className="relative inline-block">
                <span className="relative z-10">improve healthcare</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute bottom-2 left-0 h-3 bg-blue-200 -z-0"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Our solutions are designed to simplify healthcare workflows and enhance your wellbeing with comprehensive coverage.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                href={href}
                onClick={enrollClick}
                className="text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 bg-blue-600 hover:bg-blue-700 rounded-full"
              >
                Create Free Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Only {price.monthly}/month</span>
              </div>
            </motion.div>

            {/* Trust Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-8"
            >
              <p className="text-sm text-slate-500 mb-4 font-medium">Trusted by leading organizations</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-60">
                {trustLogos.map((logo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 1.0 }}
                    className="w-20 h-8 bg-slate-200 rounded flex items-center justify-center text-xs font-bold text-slate-600"
                  >
                    LOGO
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main Phone */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20"
              >
                <div className="relative drop-shadow-2xl">
                  <Image
                    src="/Cell Phone(1).png"
                    alt="MPB Health App Dashboard"
                    width={600}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 z-30 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Active Coverage</div>
                    <div className="text-sm font-bold text-slate-900">24/7 Protection</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-30 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Members</div>
                    <div className="text-sm font-bold text-slate-900">14,000+</div>
                  </div>
                </div>
              </motion.div>

              {/* Background Decorative Shapes */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -right-12 w-32 h-32 border-4 border-blue-200 rounded-full opacity-40 -z-10"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -left-12 w-24 h-24 bg-teal-300 rounded-full blur-xl opacity-40 -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
                
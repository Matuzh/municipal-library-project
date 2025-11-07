'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatCardProps {
  number: string | number
  label: string
  icon: string
  delay?: number
  className?: string
}

export function StatCard({ number, label, icon, delay = 0, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: -1 }}
      className={cn(
        "relative group",
        className
      )}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-accent-warm to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 border-4 border-primary-500 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full -mr-16 -mt-16" />
        <div className="relative z-10">
          <div className="text-6xl mb-3 font-black gradient-text drop-shadow-lg">
            {number}
          </div>
          <div className="flex items-center gap-2 text-primary-700 font-bold uppercase tracking-wide text-sm">
            <span className="text-2xl" aria-hidden="true">{icon}</span>
            <span>{label}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FeatureBoxProps {
  icon: string
  title: string
  description: string
  delay?: number
  className?: string
}

export function FeatureBox({ icon, title, description, delay = 0, className }: FeatureBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.05 }}
      className={cn("relative group", className)}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-accent opacity-75 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur" />
      <div className="relative bg-gradient-to-br from-primary-50 to-white border-4 border-primary-200 rounded-2xl p-8 text-center overflow-hidden group-hover:border-primary-500 transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-7xl mb-4 filter drop-shadow-lg"
          aria-hidden="true"
        >
          {icon}
        </motion.div>
        
        <h3 className="text-2xl font-bold text-primary-700 mb-3">
          {title}
        </h3>
        
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

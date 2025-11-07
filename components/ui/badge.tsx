import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-md before:content-['●'] before:animate-pulse-glow",
  {
    variants: {
      variant: {
        default:
          "border-primary-500 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 before:text-primary-600",
        secondary:
          "border-secondary bg-gradient-to-r from-primary-400 to-primary-500 text-white before:text-primary-100",
        destructive:
          "border-destructive bg-gradient-to-r from-red-100 to-red-200 text-red-700 before:text-red-600",
        outline: "border-primary-500 text-primary-700 before:text-primary-600",
        success: "border-primary-600 bg-gradient-to-r from-primary-500 to-accent text-white before:text-primary-100 shadow-lg shadow-primary-500/30",
        warning: "border-accent-orange bg-gradient-to-r from-accent-warm to-accent-orange text-primary-700 before:text-accent-orange shadow-lg shadow-accent-warm/30",
        urgent: "border-red-500 bg-gradient-to-r from-red-500 to-orange-500 text-white before:text-white animate-pulse-glow shadow-lg shadow-red-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

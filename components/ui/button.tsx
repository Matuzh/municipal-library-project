import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold uppercase tracking-wide ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-warm focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px] min-w-[44px]",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary-600 to-primary-900 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 relative overflow-hidden before:absolute before:inset-0 before:bg-white/30 before:rounded-full before:scale-0 before:transition-transform before:duration-500 hover:before:scale-[3]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-3 border-primary-600 bg-background text-primary-600 hover:bg-primary-600 hover:text-white shadow-md hover:shadow-lg",
        secondary:
          "bg-gradient-to-r from-primary-500 to-accent text-secondary-foreground shadow-lg hover:shadow-xl hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary-600 underline-offset-4 hover:underline font-semibold",
        warning: "bg-gradient-to-r from-accent-warm to-accent-orange text-primary-700 shadow-lg hover:shadow-xl hover:scale-105",
      },
      size: {
        default: "h-11 px-8 py-3",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-10 py-4 text-base",
        xl: "h-16 px-12 py-5 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

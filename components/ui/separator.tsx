import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    decorative?: boolean
  }
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <div className="relative flex items-center justify-center my-12">
      {decorative && (
        <>
          <div className="absolute left-0 text-accent-warm text-xl">◆</div>
          <div className="absolute right-0 text-accent-warm text-xl">◆</div>
        </>
      )}
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-gradient-to-r from-transparent via-accent-warm to-transparent",
          orientation === "horizontal" ? "h-1 w-full rounded-full" : "h-full w-1",
          className
        )}
        {...props}
      />
    </div>
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

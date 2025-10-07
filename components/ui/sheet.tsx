"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Sheet: React.FC<SheetProps> = ({ open, onOpenChange, children }) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={() => onOpenChange?.(false)}
        />
      )}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === SheetContent) {
          return React.cloneElement(child as React.ReactElement<any>, {
            open,
            onOpenChange,
          })
        }
        return child
      })}
    </>
  )
}

interface SheetContentProps {
  className?: string
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, open, onOpenChange, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
        "inset-y-0 right-0 h-full w-3/4 border-l",
        "duration-300",
        open ? "translate-x-0" : "translate-x-full",
        className
      )}
      {...props}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Menu</div>
          <button
            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            onClick={() => onOpenChange?.(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
)
SheetContent.displayName = "SheetContent"

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10",
      className
    )}
    {...props}
  />
))
SheetTrigger.displayName = "SheetTrigger"

export { Sheet, SheetContent, SheetTrigger }
"use client"
import { useState, useEffect, useRef } from "react"
import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FloatingChatButtonProps {
  onClick: () => void
}

export function FloatingChatButton({ onClick }: FloatingChatButtonProps) {
  const [isVisible, setIsVisible] = useState(true)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (buttonRef.current && typeof window !== "undefined" && window.gsap) {
      // Initial animation
      window.gsap.fromTo(
        buttonRef.current,
        { scale: 0, rotate: -180 },
        { scale: 1, rotate: 0, duration: 0.6, ease: "elastic.out(1, 0.5)", delay: 1 },
      )

      // Floating animation
      window.gsap.to(buttonRef.current, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Pulse animation
      window.gsap.to(buttonRef.current, {
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.7), 0 0 30px rgba(139, 92, 246, 0.4)",
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })
    }
  }, [])

  const handleClick = () => {
    if (buttonRef.current && typeof window !== "undefined" && window.gsap) {
      window.gsap.to(buttonRef.current, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      })
    }
    onClick()
  }

  if (!isVisible) return null

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full gradient-button shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
    >
      <div className="relative">
        <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400 animate-pulse" />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20"></div>
    </Button>
  )
}

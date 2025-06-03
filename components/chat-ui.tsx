"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { Send, Bot, User, Sparkles, X, Zap, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatUIProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatUI({ isOpen, onClose }: ChatUIProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm your AI career assistant. I can help you with your job applications, provide career advice, or answer any questions you have. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      if (chatRef.current && typeof window !== "undefined" && window.gsap) {
        window.gsap.fromTo(
          chatRef.current,
          { scale: 0.8, opacity: 0, y: 50 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" },
        )
      }

      // Focus the input field when chat opens
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response with typing effect
    setTimeout(() => {
      const botResponses = [
        "That's a great question! Based on your application history, I'd recommend focusing on companies in the tech sector where you have a 60% higher success rate.",
        "I can see you've been quite active with applications. Would you like me to analyze your success patterns and suggest improvements?",
        "Your application to TechCorp Inc. shows promise! The average response time for similar positions is 5-7 days. Stay positive!",
        "I notice you haven't applied to any remote positions lately. The remote job market has grown by 40% this quarter. Should we explore some options?",
        "Based on your profile, I'd suggest highlighting your project management skills more prominently in your applications.",
        "Great progress on your job search! You're performing 25% better than the average applicant in your field.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  const suggestedQuestions = [
    "How can I improve my resume?",
    "What are the trending skills in my field?",
    "How to prepare for my upcoming interview?",
    "Should I negotiate my salary offer?",
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card
        ref={chatRef}
        className="w-full max-w-2xl h-[600px] glass-effect-strong border-gray-700/50 flex flex-col neon-glow"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-500">
                <AvatarFallback>
                  <Bot className="h-5 w-5 text-white" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
            </div>
            <div>
              <CardTitle className="text-gray-100 flex items-center gap-2">
                Career AI Assistant
                <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              </CardTitle>
              <p className="text-sm text-gray-400">Powered by advanced AI</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide custom-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "bot" && (
                  <Avatar className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500">
                    <AvatarFallback>
                      <Bot className="h-4 w-4 text-white" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`chat-bubble ${message.sender} ${message.sender === "bot" ? "neon-border-purple" : ""}`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 bg-gradient-to-r from-green-500 to-blue-500">
                    <AvatarFallback>
                      <User className="h-4 w-4 text-white" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-end gap-2 justify-start">
                <Avatar className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500">
                  <AvatarFallback>
                    <Bot className="h-4 w-4 text-white" />
                  </AvatarFallback>
                </Avatar>
                <div className="chat-bubble bot neon-border-purple">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="mt-6">
                <div className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-400" />
                  <span>Try asking:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="text-sm text-left justify-start border-gray-700 hover:bg-gray-800/50 hover:text-blue-300"
                      onClick={() => {
                        setInputValue(question)
                        setTimeout(() => {
                          handleSendMessage()
                        }, 100)
                      }}
                    >
                      <Zap className="h-3 w-3 mr-2 text-blue-400" />
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-700/50">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your job search..."
                className="flex-1 bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-400 focus:border-blue-500/50"
              />
              <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping} className="gradient-button">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI can make mistakes. Verify important information.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

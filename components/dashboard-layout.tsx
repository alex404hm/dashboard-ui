"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import { usePathname } from "next/navigation"
import {
  BarChart3,
  Bell,
  FileText,
  Home,
  LogOut,
  Search,
  Settings,
  User,
  Users,
  Building,
  Sparkles,
  X,
  MessageCircle,
  Zap,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ChatUI } from "@/components/chat-ui"
import { FloatingChatButton } from "@/components/floating-chat-button"
import { CompanySearch } from "@/components/company-search"

// Sample user data
const user = {
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  avatar: "/placeholder.svg?height=40&width=40",
  role: "Product Manager",
}

// Navigation items
const navigationItems = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "Applications", icon: FileText, url: "/applications" },
  { title: "Analytics", icon: BarChart3, url: "/analytics" },
  { title: "Companies", icon: Building, url: "/companies" },
  { title: "Settings", icon: Settings, url: "/settings" },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const layoutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (layoutRef.current && typeof window !== "undefined" && window.gsap) {
      // Animate the layout on mount
      window.gsap.fromTo(layoutRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" })
    }
  }, [])

  return (
    <div ref={layoutRef} className="min-h-screen bg-mesh">
      <SidebarProvider>
        <AppSidebar pathname={pathname} />
        <SidebarInset>
          <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-gray-800/50 glass-effect-strong px-4">
            <SidebarTrigger className="-ml-1 text-gray-100 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110" />
            <div className="flex flex-1 items-center gap-2">
              <div className="flex-1">
                <h1 className="text-xl font-bold gradient-text">
                  {pathname === "/" && "Dashboard"}
                  {pathname === "/applications" && "Applications"}
                  {pathname === "/analytics" && "Analytics"}
                  {pathname === "/companies" && "Companies"}
                  {pathname === "/settings" && "Settings"}
                </h1>
                <p className="text-sm text-gray-400">
                  Welcome back, Sarah! <Sparkles className="inline h-3 w-3 text-yellow-400" />
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-100 hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
                >
                  <Search className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-100 hover:bg-gray-800/50 relative group transition-all duration-300 hover:scale-110"
                >
                  <Bell className="h-4 w-4 group-hover:animate-bounce" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                          SJ
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900"></div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 glass-effect-strong border-gray-700/50" align="end">
                    <DropdownMenuLabel className="flex flex-col gap-1">
                      <span className="font-medium text-gray-100">{user.name}</span>
                      <span className="text-xs text-gray-400">{user.email}</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-700/50" />
                    <DropdownMenuItem className="text-gray-100 hover:bg-gray-800/50 focus:bg-gray-800/50 transition-colors">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-100 hover:bg-gray-800/50 focus:bg-gray-800/50 transition-colors">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-700/50" />
                    <DropdownMenuItem className="text-red-400 hover:bg-red-500/20 focus:bg-red-500/20 transition-colors">
                      <LogOut className="h-4 w-4 mr-2" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>
        </SidebarInset>
      </SidebarProvider>

      {/* Chat Components */}
      <FloatingChatButton onClick={() => setIsChatOpen(true)} />
      <ChatUI isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Company Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl glass-effect-strong border-gray-700/50 rounded-xl p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold gradient-text flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Companies
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-gray-100 hover:bg-gray-800/50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CompanySearch onClose={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

function AppSidebar({ pathname }: { pathname: string }) {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sidebarRef.current && typeof window !== "undefined" && window.gsap) {
      const menuItems = sidebarRef.current.querySelectorAll(".menu-item")

      window.gsap.fromTo(
        menuItems,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.2,
        },
      )
    }
  }, [])

  return (
    <Sidebar ref={sidebarRef} className="glass-effect-strong border-gray-800/50">
      <SidebarHeader>
        <div className="flex items-center justify-center p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">JobTrack</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="menu-item hover:bg-gray-800/50 data-[active=true]:bg-gradient-to-r data-[active=true]:from-blue-600/30 data-[active=true]:to-purple-600/30 transition-all duration-300 hover:scale-105 group"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4 group-hover:animate-bounce" />
                      <span className="text-gray-100 group-hover:text-blue-300 transition-colors">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="bg-gray-700/50" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="menu-item hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group">
                  <MessageCircle className="h-4 w-4 text-blue-400 group-hover:animate-pulse" />
                  <span className="text-gray-100 group-hover:text-blue-300 transition-colors">Chat with AI</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="menu-item hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 group">
                  <Users className="h-4 w-4 text-purple-400 group-hover:animate-bounce" />
                  <span className="text-gray-100 group-hover:text-purple-300 transition-colors">Contact Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">
          <div className="rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-3 border border-gray-700/50">
            <div className="flex items-center gap-3 mb-2">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  SJ
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-100">{user.name}</p>
                <p className="text-xs text-gray-400">{user.role}</p>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              <div className="flex items-center gap-1 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Premium Account</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>25 Applications Tracked</span>
              </div>
            </div>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

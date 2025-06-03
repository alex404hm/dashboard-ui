import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import DashboardLayout from "@/components/dashboard-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ultra Modern Dashboard",
  description: "A cutting-edge user dashboard with dark theme and AI chat",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark bg-gray-950 antialiased`}>
        <DashboardLayout>{children}</DashboardLayout>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      </body>
    </html>
  )
}

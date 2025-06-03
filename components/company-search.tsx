"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import { Search, Building, MapPin, Briefcase, ExternalLink, Star, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Company {
  id: string
  name: string
  logo: string
  industry: string
  location: string
  size: string
  rating: number
  openPositions: number
  description: string
}

interface CompanySearchProps {
  onClose: () => void
}

export function CompanySearch({ onClose }: CompanySearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [companies, setCompanies] = useState<Company[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock companies data
  const mockCompanies: Company[] = [
    {
      id: "1",
      name: "TechCorp Inc.",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Technology",
      location: "San Francisco, CA",
      size: "1000-5000 employees",
      rating: 4.5,
      openPositions: 12,
      description: "Leading technology company specializing in cloud solutions and AI development.",
    },
    {
      id: "2",
      name: "StartupXYZ",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Software",
      location: "New York, NY",
      size: "50-200 employees",
      rating: 4.2,
      openPositions: 5,
      description: "Innovative startup focused on revolutionizing the fintech industry.",
    },
    {
      id: "3",
      name: "Design Studio",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Design",
      location: "Austin, TX",
      size: "10-50 employees",
      rating: 4.8,
      openPositions: 3,
      description: "Creative design agency working with top brands worldwide.",
    },
    {
      id: "4",
      name: "DataTech",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Data Science",
      location: "Seattle, WA",
      size: "500-1000 employees",
      rating: 4.0,
      openPositions: 8,
      description: "Data analytics company providing insights for Fortune 500 companies.",
    },
    {
      id: "5",
      name: "WebSolutions",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Web Development",
      location: "Remote",
      size: "200-500 employees",
      rating: 4.3,
      openPositions: 6,
      description: "Full-stack web development agency with a global client base.",
    },
  ]

  useEffect(() => {
    if (searchRef.current && typeof window !== "undefined" && window.gsap) {
      window.gsap.fromTo(
        searchRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
      )
    }

    // Focus the input field
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }, [])

  const handleSearch = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (searchTerm.trim() === "") {
        setCompanies(mockCompanies)
      } else {
        const filtered = mockCompanies.filter(
          (company) =>
            company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.location.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        setCompanies(filtered)
      }
      setIsLoading(false)
    }, 800)
  }

  useEffect(() => {
    // Initial search to show all companies
    handleSearch()
  }, [])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div ref={searchRef} className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 transform -translate-y-1/2" />
          <Input
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search by company name, industry, or location..."
            className="pl-10 bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-400 focus:border-blue-500/50"
          />
        </div>
        <Button onClick={handleSearch} disabled={isLoading} className="gradient-button">
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
        {companies.length === 0 ? (
          <div className="text-center py-8">
            <Building className="h-12 w-12 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-400">No companies found. Try a different search term.</p>
          </div>
        ) : (
          companies.map((company) => (
            <div key={company.id} className="glass-card rounded-lg p-4 hover:neon-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-lg bg-gray-800/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-100">{company.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-300">{company.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline" className="text-xs bg-blue-500/10 border-blue-500/30 text-blue-300">
                      <Building className="h-3 w-3 mr-1" />
                      {company.industry}
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-purple-500/10 border-purple-500/30 text-purple-300">
                      <MapPin className="h-3 w-3 mr-1" />
                      {company.location}
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/30 text-green-300">
                      <Briefcase className="h-3 w-3 mr-1" />
                      {company.openPositions} open positions
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{company.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-500">{company.size}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-8 border-gray-700 hover:bg-gray-800/50">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="h-8 gradient-button">
                        <Plus className="h-3 w-3 mr-1" />
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

import {
  Search,
  Building,
  MapPin,
  Briefcase,
  Star,
  Plus,
  Filter,
  TrendingUp,
  Users,
  Calendar,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
  website: string
  founded: string
  trending?: boolean
}

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [companies, setCompanies] = useState<Company[]>([])
  const [filter, setFilter] = useState("All Industries")
  const containerRef = useRef<HTMLDivElement>(null)

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
      website: "https://techcorp.example.com",
      founded: "2005",
      trending: true,
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
      website: "https://startupxyz.example.com",
      founded: "2018",
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
      website: "https://designstudio.example.com",
      founded: "2015",
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
      website: "https://datatech.example.com",
      founded: "2010",
      trending: true,
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
      website: "https://websolutions.example.com",
      founded: "2012",
    },
    {
      id: "6",
      name: "FinanceHub",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Finance",
      location: "Chicago, IL",
      size: "1000-5000 employees",
      rating: 4.1,
      openPositions: 9,
      description: "Leading financial services provider with innovative digital solutions.",
      website: "https://financehub.example.com",
      founded: "2000",
    },
    {
      id: "7",
      name: "HealthTech",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Healthcare",
      location: "Boston, MA",
      size: "500-1000 employees",
      rating: 4.4,
      openPositions: 7,
      description: "Healthcare technology company improving patient outcomes through innovation.",
      website: "https://healthtech.example.com",
      founded: "2008",
      trending: true,
    },
    {
      id: "8",
      name: "EduLearn",
      logo: "/placeholder.svg?height=60&width=60",
      industry: "Education",
      location: "Portland, OR",
      size: "100-500 employees",
      rating: 4.6,
      openPositions: 4,
      description: "EdTech company revolutionizing online learning experiences.",
      website: "https://edulearn.example.com",
      founded: "2016",
    },
  ]

  useEffect(() => {
    // Initial search to show all companies
    setCompanies(mockCompanies)

    if (containerRef.current && typeof window !== "undefined" && window.gsap) {
      const header = containerRef.current.querySelector(".companies-header")
      const filters = containerRef.current.querySelector(".companies-filters")
      const companyCards = containerRef.current.querySelectorAll(".company-card")

      window.gsap.fromTo(header, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })

      window.gsap.fromTo(
        filters,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.2 },
      )

      window.gsap.fromTo(
        companyCards,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.4,
        },
      )
    }
  }, [])

  const handleSearch = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      let filtered = mockCompanies

      if (searchTerm.trim() !== "") {
        filtered = filtered.filter(
          (company) =>
            company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.description.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      }

      if (filter !== "All Industries") {
        filtered = filtered.filter((company) => company.industry === filter)
      }

      setCompanies(filtered)
      setIsLoading(false)
    }, 800)
  }

  useEffect(() => {
    handleSearch()
  }, [filter])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const industries = [
    "All Industries",
    "Technology",
    "Software",
    "Design",
    "Data Science",
    "Web Development",
    "Finance",
    "Healthcare",
    "Education",
  ]

  return (
    <div className="p-6">
      <div ref={containerRef} className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="companies-header">
          <h1 className="text-3xl font-bold gradient-text">Company Directory</h1>
          <p className="text-gray-400 mt-1">Discover and explore companies in your field</p>
        </div>

        {/* Search and Filters */}
        <Card className="companies-filters glass-card border-gray-700/50">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 transform -translate-y-1/2" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Search by company name, industry, or location..."
                  className="pl-10 bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-400 focus:border-blue-500/50"
                />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800/50">
                      <Filter className="h-4 w-4 mr-2" />
                      {filter}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-900/95 border-gray-700/50 backdrop-blur-xl">
                    {industries.map((industry) => (
                      <DropdownMenuItem
                        key={industry}
                        className="text-gray-300 hover:bg-gray-800/50 focus:bg-gray-800/50"
                        onClick={() => setFilter(industry)}
                      >
                        {industry}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button onClick={handleSearch} disabled={isLoading} className="gradient-button">
                  {isLoading ? "Searching..." : "Search"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trending Companies */}
        <Card className="glass-card border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-gray-100 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-400" />
              Trending Companies
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
            </CardTitle>
            <CardDescription className="text-gray-400">
              Companies with high application activity this week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {companies
                .filter((company) => company.trending)
                .map((company) => (
                  <div
                    key={company.id}
                    className="glass-effect rounded-lg p-4 hover:neon-glow transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-gray-800/50 flex items-center justify-center overflow-hidden">
                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-100 group-hover:text-blue-300 transition-colors">
                          {company.name}
                        </h3>
                        <p className="text-sm text-gray-400">{company.industry}</p>
                      </div>
                      <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Hot
                      </Badge>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Companies Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <Building className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No companies found</p>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            companies.map((company) => (
              <Card
                key={company.id}
                className="company-card glass-card border-gray-700/50 hover:neon-glow transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-14 w-14 rounded-lg bg-gray-800/50 flex items-center justify-center overflow-hidden">
                        <img
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-100 group-hover:text-blue-300 transition-colors">
                          {company.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm text-gray-300">{company.rating}</span>
                        </div>
                      </div>
                    </div>
                    {company.trending && (
                      <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
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
                      {company.openPositions} open
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-400 line-clamp-2">{company.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {company.size}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Founded {company.founded}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 border-gray-700 hover:bg-gray-800/50">
                      <Globe className="h-3 w-3 mr-1" />
                      Visit
                    </Button>
                    <Button size="sm" className="flex-1 gradient-button">
                      <Plus className="h-3 w-3 mr-1" />
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Load More */}
        {companies.length > 0 && (
          <div className="flex justify-center pt-6">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800/50">
              Load More Companies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

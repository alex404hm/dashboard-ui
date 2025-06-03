"use client"
import { useEffect, useRef } from "react"
import {
  FileText,
  Plus,
  Filter,
  Download,
  Search,
  Calendar,
  Building,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const applications = [
  {
    id: "APP-001",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    status: "pending",
    appliedDate: "2024-01-15",
    responseDate: "2024-01-20",
    salary: "$120k - $150k",
    location: "San Francisco, CA",
    type: "Full-time",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "APP-002",
    title: "Product Manager",
    company: "StartupXYZ",
    status: "approved",
    appliedDate: "2024-01-12",
    responseDate: "2024-01-18",
    salary: "$140k - $180k",
    location: "Remote",
    type: "Full-time",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "APP-003",
    title: "UX Designer",
    company: "Design Studio",
    status: "rejected",
    appliedDate: "2024-01-10",
    responseDate: "2024-01-16",
    salary: "$95k - $120k",
    location: "New York, NY",
    type: "Contract",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "APP-004",
    title: "Full Stack Developer",
    company: "WebSolutions",
    status: "pending",
    appliedDate: "2024-01-08",
    responseDate: null,
    salary: "$110k - $140k",
    location: "Austin, TX",
    type: "Full-time",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "APP-005",
    title: "Data Scientist",
    company: "DataTech",
    status: "interview",
    appliedDate: "2024-01-05",
    responseDate: "2024-01-12",
    salary: "$130k - $160k",
    location: "Seattle, WA",
    type: "Full-time",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "approved":
      return (
        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
          <CheckCircle className="w-3 h-3 mr-1" />
          Approved
        </Badge>
      )
    case "rejected":
      return (
        <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
          <XCircle className="w-3 h-3 mr-1" />
          Rejected
        </Badge>
      )
    case "pending":
      return (
        <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </Badge>
      )
    case "interview":
      return (
        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
          <Calendar className="w-3 h-3 mr-1" />
          Interview
        </Badge>
      )
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function ApplicationsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && typeof window !== "undefined" && window.gsap) {
      const cards = containerRef.current.querySelectorAll(".application-card")

      window.gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 p-6">
      <div ref={containerRef} className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 application-card">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Applications</h1>
            <p className="text-gray-400 mt-1">Manage and track all your job applications</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              New Application
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="glass-effect border-gray-700/50 application-card">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 transform -translate-y-1/2" />
                <Input
                  placeholder="Search applications..."
                  className="pl-10 bg-gray-800/50 border-gray-700/50 text-gray-100"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-gray-700">
                  <DropdownMenuItem className="text-gray-300">All Status</DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300">Pending</DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300">Approved</DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300">Rejected</DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300">Interview</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* Applications Table */}
        <Card className="glass-effect border-gray-700/50 application-card">
          <CardHeader>
            <CardTitle className="text-gray-100 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              All Applications ({applications.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-800/50">
                    <TableHead className="text-gray-300">Position</TableHead>
                    <TableHead className="text-gray-300">Company</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Salary</TableHead>
                    <TableHead className="text-gray-300">Location</TableHead>
                    <TableHead className="text-gray-300">Applied</TableHead>
                    <TableHead className="text-right text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id} className="border-gray-800/50 hover:bg-gray-800/30 transition-colors group">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={app.logo || "/placeholder.svg"}
                            alt={app.company}
                            className="w-10 h-10 rounded-lg border border-gray-700/50"
                          />
                          <div>
                            <div className="font-medium text-gray-100 group-hover:text-blue-300 transition-colors">
                              {app.title}
                            </div>
                            <div className="text-sm text-gray-400">{app.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-300">{app.company}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(app.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300 font-medium">{app.salary}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-300">{app.location}</TableCell>
                      <TableCell className="text-gray-300">{app.appliedDate}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-blue-400 hover:bg-blue-500/10"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-green-400 hover:bg-green-500/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

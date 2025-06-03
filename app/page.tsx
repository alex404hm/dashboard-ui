"use client"
import { useEffect, useRef } from "react"
import {
  BarChart3,
  CheckCircle,
  Clock,
  FileText,
  MoreHorizontal,
  Plus,
  TrendingUp,
  XCircle,
  Target,
  Award,
  Activity,
  Sparkles,
  Rocket,
  Star,
  Zap,
  ArrowRight,
  Calendar,
  Building,
  DollarSign,
  Users,
} from "lucide-react"
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data
const stats = {
  total: 25,
  pending: 8,
  approved: 12,
  rejected: 5,
}

const chartData = [
  { name: "Jan", applications: 4, approved: 2, interviews: 1 },
  { name: "Feb", applications: 6, approved: 3, interviews: 2 },
  { name: "Mar", applications: 8, approved: 4, interviews: 3 },
  { name: "Apr", applications: 5, approved: 3, interviews: 2 },
  { name: "May", applications: 7, approved: 5, interviews: 4 },
  { name: "Jun", applications: 9, approved: 6, interviews: 5 },
]

const pieData = [
  { name: "Approved", value: stats.approved, color: "#10b981" },
  { name: "Pending", value: stats.pending, color: "#f59e0b" },
  { name: "Rejected", value: stats.rejected, color: "#ef4444" },
]

const activityData = [
  { time: "9:00", activity: 2 },
  { time: "10:00", activity: 5 },
  { time: "11:00", activity: 3 },
  { time: "12:00", activity: 8 },
  { time: "13:00", activity: 6 },
  { time: "14:00", activity: 4 },
  { time: "15:00", activity: 7 },
]

const applications = [
  {
    id: "APP-001",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    status: "pending",
    appliedDate: "2024-01-15",
    responseDate: "2024-01-20",
    logo: "/placeholder.svg?height=32&width=32",
    salary: "$120k",
  },
  {
    id: "APP-002",
    title: "Product Manager",
    company: "StartupXYZ",
    status: "approved",
    appliedDate: "2024-01-12",
    responseDate: "2024-01-18",
    logo: "/placeholder.svg?height=32&width=32",
    salary: "$140k",
  },
  {
    id: "APP-003",
    title: "UX Designer",
    company: "Design Studio",
    status: "rejected",
    appliedDate: "2024-01-10",
    responseDate: "2024-01-16",
    logo: "/placeholder.svg?height=32&width=32",
    salary: "$95k",
  },
  {
    id: "APP-004",
    title: "Full Stack Developer",
    company: "WebSolutions",
    status: "pending",
    appliedDate: "2024-01-08",
    responseDate: null,
    logo: "/placeholder.svg?height=32&width=32",
    salary: "$110k",
  },
  {
    id: "APP-005",
    title: "Data Scientist",
    company: "DataTech",
    status: "approved",
    appliedDate: "2024-01-05",
    responseDate: "2024-01-12",
    logo: "/placeholder.svg?height=32&width=32",
    salary: "$130k",
  },
]

function getStatusBadge(status: string) {
  switch (status) {
    case "approved":
      return (
        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30 transition-all duration-300 animate-pulse">
          <CheckCircle className="w-3 h-3 mr-1" />
          Approved
        </Badge>
      )
    case "rejected":
      return (
        <Badge className="bg-red-500/20 text-red-300 border-red-500/30 hover:bg-red-500/30 transition-all duration-300">
          <XCircle className="w-3 h-3 mr-1" />
          Rejected
        </Badge>
      )
    case "pending":
      return (
        <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30 transition-all duration-300 animate-bounce">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </Badge>
      )
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "approved":
      return <CheckCircle className="h-4 w-4 text-emerald-400 animate-pulse" />
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-400" />
    case "pending":
      return <Clock className="h-4 w-4 text-amber-400 animate-spin" />
    default:
      return <Clock className="h-4 w-4 text-gray-400" />
  }
}

export default function Dashboard() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && typeof window !== "undefined" && window.gsap) {
      // Animate stats cards
      const statsCards = containerRef.current.querySelectorAll(".stats-card")
      window.gsap.fromTo(
        statsCards,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
      )

      // Animate chart cards
      const chartCards = containerRef.current.querySelectorAll(".chart-card")
      window.gsap.fromTo(
        chartCards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        },
      )

      // Animate table rows
      const tableRows = containerRef.current.querySelectorAll(".table-row")
      window.gsap.fromTo(
        tableRows,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.8,
        },
      )

      // Animate upcoming events
      const eventCards = containerRef.current.querySelectorAll(".event-card")
      window.gsap.fromTo(
        eventCards,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          delay: 1,
        },
      )
    }
  }, [])

  return (
    <div ref={containerRef} className="flex flex-1 flex-col gap-6 p-6">
      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="stats-card group relative overflow-hidden glass-card border-blue-500/20 hover:scale-105 hover:neon-glow transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-gray-100">Total Applications</CardTitle>
            <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all duration-300 group-hover:animate-pulse">
              <FileText className="h-4 w-4 text-blue-400" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold text-gray-100 group-hover:text-blue-300 transition-colors">
              {stats.total}
            </div>
            <div className="flex items-center gap-1 text-xs text-emerald-400">
              <TrendingUp className="w-3 h-3 animate-bounce" />
              +2 from last month
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card group relative overflow-hidden glass-card border-amber-500/20 hover:scale-105 hover:neon-glow-purple transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-gray-100">Pending</CardTitle>
            <div className="p-2 bg-amber-500/20 rounded-lg group-hover:bg-amber-500/30 transition-all duration-300 group-hover:animate-spin">
              <Clock className="h-4 w-4 text-amber-400" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold text-gray-100 group-hover:text-amber-300 transition-colors">
              {stats.pending}
            </div>
            <div className="flex items-center gap-1 text-xs text-amber-400">
              <Activity className="w-3 h-3 animate-pulse" />
              Awaiting response
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card group relative overflow-hidden glass-card border-emerald-500/20 hover:scale-105 hover:neon-glow-cyan transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-gray-100">Approved</CardTitle>
            <div className="p-2 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-all duration-300 group-hover:animate-bounce">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold text-gray-100 group-hover:text-emerald-300 transition-colors">
              {stats.approved}
            </div>
            <div className="flex items-center gap-1 text-xs text-emerald-400">
              <Award className="w-3 h-3 animate-pulse" />
              48% success rate
            </div>
          </CardContent>
        </Card>

        <Card className="stats-card group relative overflow-hidden glass-card border-red-500/20 hover:scale-105 hover:neon-glow-pink transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-gray-100">Rejected</CardTitle>
            <div className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-all duration-300">
              <XCircle className="h-4 w-4 text-red-400" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold text-gray-100 group-hover:text-red-300 transition-colors">
              {stats.rejected}
            </div>
            <div className="flex items-center gap-1 text-xs text-red-400">
              <Target className="w-3 h-3" />
              20% rejection rate
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="chart-card lg:col-span-2 glass-card hover:bg-gray-900/60 transition-all duration-500 group hover:neon-glow">
          <CardHeader>
            <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
              <BarChart3 className="w-5 h-5 text-blue-400 group-hover:animate-bounce" />
              Application Trends
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </CardTitle>
            <CardDescription className="text-gray-400">Monthly application and approval rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.95)",
                    border: "1px solid rgba(75, 85, 99, 0.3)",
                    borderRadius: "12px",
                    color: "#f3f4f6",
                    backdropFilter: "blur(16px)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="applications"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorApplications)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="approved"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorApproved)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="chart-card glass-card hover:bg-gray-900/60 transition-all duration-500 group hover:neon-glow-purple">
          <CardHeader>
            <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
              <Activity className="w-5 h-5 text-purple-400 group-hover:animate-pulse" />
              Status Distribution
            </CardTitle>
            <CardDescription className="text-gray-400">Current application status breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.95)",
                    border: "1px solid rgba(75, 85, 99, 0.3)",
                    borderRadius: "12px",
                    color: "#f3f4f6",
                    backdropFilter: "blur(16px)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {pieData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2 group/item hover:scale-110 transition-transform">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: entry.color }}></div>
                  <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                    {entry.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Chart */}
      <Card className="chart-card glass-card hover:bg-gray-900/60 transition-all duration-500 group hover:neon-glow-cyan">
        <CardHeader>
          <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
            <Zap className="w-5 h-5 text-cyan-400 group-hover:animate-bounce" />
            Daily Activity
            <Rocket className="w-4 h-4 text-orange-400 animate-pulse" />
          </CardTitle>
          <CardDescription className="text-gray-400">Your application activity throughout the day</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={activityData}>
              <XAxis dataKey="time" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(17, 24, 39, 0.95)",
                  border: "1px solid rgba(75, 85, 99, 0.3)",
                  borderRadius: "12px",
                  color: "#f3f4f6",
                  backdropFilter: "blur(16px)",
                }}
              />
              <Line
                type="monotone"
                dataKey="activity"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={{ fill: "#06b6d4", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Applications */}
        <Card className="chart-card lg:col-span-2 glass-card hover:bg-gray-900/60 transition-all duration-500 group hover:neon-glow">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
                <FileText className="w-5 h-5 text-blue-400 group-hover:animate-bounce" />
                Recent Applications
                <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
              </CardTitle>
              <CardDescription className="text-gray-400">Your latest job applications and their status</CardDescription>
            </div>
            <Button className="gradient-button">
              <Plus className="h-4 w-4 mr-2 group-hover:animate-spin" />
              New Application
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                    <TableHead className="text-gray-300">Application</TableHead>
                    <TableHead className="text-gray-300">Company</TableHead>
                    <TableHead className="text-gray-300">Status</TableHead>
                    <TableHead className="text-gray-300">Salary</TableHead>
                    <TableHead className="text-gray-300">Applied Date</TableHead>
                    <TableHead className="text-right text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app, index) => (
                    <TableRow
                      key={app.id}
                      className="table-row border-gray-800/50 hover:bg-gray-800/30 transition-all duration-300 group/row"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          {getStatusIcon(app.status)}
                          <div className="relative group/avatar">
                            <img
                              src={app.logo || "/placeholder.svg"}
                              alt={app.company}
                              className="w-10 h-10 rounded-xl border border-gray-700/50 group-hover/avatar:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover/avatar:opacity-100 transition-opacity"></div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-100 group-hover/row:text-blue-300 transition-colors">
                              {app.title}
                            </div>
                            <div className="text-sm text-gray-400">{app.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-300 group-hover/row:text-gray-100 transition-colors">
                        {app.company}
                      </TableCell>
                      <TableCell>{getStatusBadge(app.status)}</TableCell>
                      <TableCell className="text-gray-300 font-medium group-hover/row:text-emerald-400 transition-colors">
                        {app.salary}
                      </TableCell>
                      <TableCell className="text-gray-300">{app.appliedDate}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-gray-300 hover:bg-gray-800/50 hover:text-gray-100 transition-all duration-300 hover:scale-110"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="bg-gray-900/95 border-gray-700/50 backdrop-blur-xl"
                          >
                            <DropdownMenuItem className="text-gray-100 hover:bg-gray-800/50 focus:bg-gray-800/50 transition-colors">
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-gray-100 hover:bg-gray-800/50 focus:bg-gray-800/50 transition-colors">
                              Edit Application
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-700/50" />
                            <DropdownMenuItem className="text-red-400 hover:bg-red-500/20 focus:bg-red-500/20 transition-colors">
                              Delete Application
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-blue-300"
            >
              View All Applications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Upcoming Events */}
        <Card className="glass-card hover:bg-gray-900/60 transition-all duration-500 group hover:neon-glow-purple">
          <CardHeader>
            <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
              <Calendar className="w-5 h-5 text-purple-400 group-hover:animate-pulse" />
              Upcoming Events
            </CardTitle>
            <CardDescription className="text-gray-400">Your scheduled interviews and deadlines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="event-card glass-effect rounded-lg p-3 hover:neon-border-purple transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-100">Technical Interview</p>
                  <p className="text-xs text-gray-400">TechCorp Inc. • Tomorrow, 10:00 AM</p>
                </div>
              </div>
            </div>

            <div className="event-card glass-effect rounded-lg p-3 hover:neon-border-purple transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Building className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-100">Application Deadline</p>
                  <p className="text-xs text-gray-400">StartupXYZ • Friday, 11:59 PM</p>
                </div>
              </div>
            </div>

            <div className="event-card glass-effect rounded-lg p-3 hover:neon-border-purple transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-100">Salary Negotiation</p>
                  <p className="text-xs text-gray-400">DataTech • Next Monday, 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="event-card glass-effect rounded-lg p-3 hover:neon-border-purple transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-100">Team Interview</p>
                  <p className="text-xs text-gray-400">Design Studio • Next Wednesday, 11:00 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-purple-300"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

"use client"
import { useEffect, useRef } from "react"
import { BarChart3, TrendingUp, Target, Calendar, Award, Activity, Zap, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const monthlyData = [
  { month: "Jan", applications: 4, interviews: 1, offers: 0, rejections: 2 },
  { month: "Feb", applications: 6, interviews: 2, offers: 1, rejections: 2 },
  { month: "Mar", applications: 8, interviews: 3, offers: 1, rejections: 3 },
  { month: "Apr", applications: 5, interviews: 2, offers: 2, rejections: 1 },
  { month: "May", applications: 7, interviews: 4, offers: 2, rejections: 2 },
  { month: "Jun", applications: 9, interviews: 5, offers: 3, rejections: 2 },
]

const skillsData = [
  { skill: "React", score: 90 },
  { skill: "TypeScript", score: 85 },
  { skill: "Node.js", score: 80 },
  { skill: "Python", score: 75 },
  { skill: "AWS", score: 70 },
  { skill: "Docker", score: 65 },
]

const industryData = [
  { name: "Tech", value: 45, color: "#3b82f6" },
  { name: "Finance", value: 25, color: "#10b981" },
  { name: "Healthcare", value: 20, color: "#f59e0b" },
  { name: "Education", value: 10, color: "#ef4444" },
]

const responseTimeData = [
  { company: "TechCorp", days: 3 },
  { company: "StartupXYZ", days: 7 },
  { company: "BigTech", days: 14 },
  { company: "FinanceInc", days: 5 },
  { company: "HealthCare", days: 10 },
]

export default function AnalyticsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && typeof window !== "undefined" && window.gsap) {
      const cards = containerRef.current.querySelectorAll(".analytics-card")

      window.gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 p-6">
      <div ref={containerRef} className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="analytics-card">
          <h1 className="text-3xl font-bold gradient-text">Analytics Dashboard</h1>
          <p className="text-gray-400 mt-1">Deep insights into your job search performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="glass-effect border-blue-500/20 analytics-card group hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-100">Success Rate</CardTitle>
              <div className="p-2 bg-blue-500/20 rounded-lg group-hover:animate-pulse">
                <Target className="h-4 w-4 text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-300">48%</div>
              <div className="flex items-center gap-1 text-xs text-emerald-400">
                <TrendingUp className="w-3 h-3" />
                +12% from last month
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-emerald-500/20 analytics-card group hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-100">Avg Response Time</CardTitle>
              <div className="p-2 bg-emerald-500/20 rounded-lg group-hover:animate-bounce">
                <Calendar className="h-4 w-4 text-emerald-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-300">7.2 days</div>
              <div className="flex items-center gap-1 text-xs text-emerald-400">
                <Activity className="w-3 h-3" />2 days faster
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-purple-500/20 analytics-card group hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-100">Interview Rate</CardTitle>
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:animate-spin">
                <Users className="h-4 w-4 text-purple-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-300">32%</div>
              <div className="flex items-center gap-1 text-xs text-purple-400">
                <Award className="w-3 h-3" />
                Above average
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-amber-500/20 analytics-card group hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-100">Market Score</CardTitle>
              <div className="p-2 bg-amber-500/20 rounded-lg group-hover:animate-pulse">
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-300">8.4/10</div>
              <div className="flex items-center gap-1 text-xs text-amber-400">
                <TrendingUp className="w-3 h-3" />
                Excellent profile
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Application Trends */}
          <Card className="glass-effect border-gray-700/50 analytics-card group">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                Application Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="applications" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="interviews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "1px solid rgba(75, 85, 99, 0.3)",
                      borderRadius: "12px",
                      color: "#f3f4f6",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="applications"
                    stroke="#3b82f6"
                    fill="url(#applications)"
                    strokeWidth={2}
                  />
                  <Area type="monotone" dataKey="interviews" stroke="#10b981" fill="url(#interviews)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Skills Radar */}
          <Card className="glass-effect border-gray-700/50 analytics-card group">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                <Activity className="w-5 h-5 text-purple-400" />
                Skills Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={skillsData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: "#9ca3af", fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#9ca3af", fontSize: 10 }} />
                  <Radar
                    name="Skills"
                    dataKey="score"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Industry Distribution */}
          <Card className="glass-effect border-gray-700/50 analytics-card group">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-emerald-300 transition-colors">
                <Target className="w-5 h-5 text-emerald-400" />
                Industry Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={industryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "1px solid rgba(75, 85, 99, 0.3)",
                      borderRadius: "12px",
                      color: "#f3f4f6",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4 flex-wrap">
                {industryData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                    <span className="text-sm text-gray-300">{entry.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Response Times */}
          <Card className="glass-effect border-gray-700/50 analytics-card group">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Response Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={responseTimeData} layout="horizontal">
                  <XAxis type="number" stroke="#6b7280" />
                  <YAxis dataKey="company" type="category" stroke="#6b7280" width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "1px solid rgba(75, 85, 99, 0.3)",
                      borderRadius: "12px",
                      color: "#f3f4f6",
                    }}
                  />
                  <Bar dataKey="days" fill="#06b6d4" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

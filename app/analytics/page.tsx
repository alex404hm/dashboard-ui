"use client"
import { useEffect, useRef } from "react"
import {
  BarChart3,
  TrendingUp,
  Target,
  Calendar,
  Award,
  Activity,
  Zap,
  Users,
  Sparkles,
  ArrowRight,
  Lightbulb,
  Briefcase,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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

const salaryTrendsData = [
  { role: "Frontend", junior: 70, mid: 95, senior: 130 },
  { role: "Backend", junior: 75, mid: 100, senior: 140 },
  { role: "Full Stack", junior: 80, mid: 110, senior: 150 },
  { role: "DevOps", junior: 85, mid: 115, senior: 155 },
  { role: "Data Science", junior: 90, mid: 120, senior: 160 },
]

export default function AnalyticsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && typeof window !== "undefined" && window.gsap) {
      const cards = containerRef.current.querySelectorAll(".analytics-card")

      window.gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
      )

      // Animate insights
      const insights = containerRef.current.querySelectorAll(".insight-item")
      window.gsap.fromTo(
        insights,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.8,
        },
      )
    }
  }, [])

  return (
    <div className="p-6">
      <div ref={containerRef} className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="analytics-card">
          <h1 className="text-3xl font-bold gradient-text">Analytics Dashboard</h1>
          <p className="text-gray-400 mt-1">Deep insights into your job search performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="glass-card border-blue-500/20 analytics-card group hover:scale-105 hover:neon-glow transition-all duration-300">
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

          <Card className="glass-card border-emerald-500/20 analytics-card group hover:scale-105 hover:neon-glow-cyan transition-all duration-300">
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

          <Card className="glass-card border-purple-500/20 analytics-card group hover:scale-105 hover:neon-glow-purple transition-all duration-300">
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

          <Card className="glass-card border-amber-500/20 analytics-card group hover:scale-105 hover:neon-glow-pink transition-all duration-300">
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
          <Card className="glass-card border-gray-700/50 analytics-card group hover:neon-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-blue-300 transition-colors">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                Application Trends
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              </CardTitle>
              <CardDescription className="text-gray-400">Monthly application and outcome metrics</CardDescription>
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
                    <linearGradient id="offers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1} />
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
                  <Area type="monotone" dataKey="offers" stroke="#8b5cf6" fill="url(#offers)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Skills Radar */}
          <Card className="glass-card border-gray-700/50 analytics-card group hover:neon-glow-purple transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                <Activity className="w-5 h-5 text-purple-400" />
                Skills Assessment
              </CardTitle>
              <CardDescription className="text-gray-400">Your skills compared to market demand</CardDescription>
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
          <Card className="glass-card border-gray-700/50 analytics-card group hover:neon-glow-cyan transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-emerald-300 transition-colors">
                <Target className="w-5 h-5 text-emerald-400" />
                Industry Focus
              </CardTitle>
              <CardDescription className="text-gray-400">Distribution of your applications by industry</CardDescription>
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
          <Card className="glass-card border-gray-700/50 analytics-card group hover:neon-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Response Times
              </CardTitle>
              <CardDescription className="text-gray-400">Average response time by company (in days)</CardDescription>
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

        {/* Salary Trends */}
        <Card className="glass-card border-gray-700/50 analytics-card group hover:neon-glow-purple transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-purple-300 transition-colors">
              <Briefcase className="w-5 h-5 text-purple-400" />
              Salary Trends
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </CardTitle>
            <CardDescription className="text-gray-400">
              Average salary ranges by role and experience level (in $K)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salaryTrendsData} layout="vertical">
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="role" type="category" stroke="#6b7280" width={80} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.95)",
                    border: "1px solid rgba(75, 85, 99, 0.3)",
                    borderRadius: "12px",
                    color: "#f3f4f6",
                  }}
                />
                <Bar dataKey="junior" name="Junior" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
                <Bar dataKey="mid" name="Mid-level" stackId="a" fill="#8b5cf6" radius={[0, 0, 0, 0]} />
                <Bar dataKey="senior" name="Senior" stackId="a" fill="#ec4899" radius={[0, 0, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-300">Junior</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm text-gray-300">Mid-level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <span className="text-sm text-gray-300">Senior</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="glass-card border-gray-700/50 analytics-card group hover:neon-glow-cyan transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-gray-100 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              AI-Powered Insights
            </CardTitle>
            <CardDescription className="text-gray-400">Personalized recommendations based on your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="insight-item glass-effect rounded-lg p-3 border-l-4 border-blue-500">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-100">Application Strategy</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Your success rate is 48% higher when applying to mid-sized tech companies. Consider focusing more
                      applications in this sector.
                    </p>
                  </div>
                </div>
              </div>

              <div className="insight-item glass-effect rounded-lg p-3 border-l-4 border-purple-500">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-100">Skills Gap</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Adding cloud infrastructure skills could increase your interview rate by 35% based on current
                      market demand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="insight-item glass-effect rounded-lg p-3 border-l-4 border-emerald-500">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-100">Salary Optimization</p>
                    <p className="text-sm text-gray-400 mt-1">
                      You're currently targeting positions with salaries 15% below market rate for your skill level.
                      Consider adjusting your expectations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="insight-item glass-effect rounded-lg p-3 border-l-4 border-amber-500">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-100">Response Time</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Companies typically respond faster to applications submitted early in the week. Try applying on
                      Mondays or Tuesdays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full gradient-button">
              Get Personalized AI Recommendations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

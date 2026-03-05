 'use client'

import { useState } from 'react'
import {
  LayoutDashboard,
  FolderOpen,
  Gift,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Home,
  Search,
  Plus,
  Briefcase,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  MoreVertical,
  Filter,
  ArrowRight,
} from 'lucide-react'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table'



function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  const navItems = [
    { icon: <LayoutDashboard className="w-4 h-4" />, label: 'Dashboard' },
    { icon: <FolderOpen className="w-4 h-4" />, label: 'My Projects' },
    { icon: <Gift className="w-4 h-4" />, label: 'Grants' },
    { icon: <Users className="w-4 h-4" />, label: 'Team' },
    { icon: <BarChart3 className="w-4 h-4" />, label: 'Reports' },
  ]

  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col h-screen">
      <div className="p-5 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
            <Home className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-sm text-slate-900">
              ASTU CRMP
            </h1>
            <p className="text-xs text-slate-500">
              Research Portal
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveItem(item.label.toLowerCase())}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
              activeItem === item.label.toLowerCase()
                ? 'bg-blue-100 text-blue-600'
                : 'text-slate-600 hover:bg-slate-100'
            )}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="border-t border-slate-200 p-4 space-y-2">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100 w-full">
          <Settings className="w-4 h-4" />
          Settings
        </button>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100 w-full">
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </div>
    </aside>
  )
}



function Header() {
  return (
    <header className="px-8 py-5 border-b border-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Welcome back, Dr. Abebe
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Here is what is happening with your research today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-9 pr-3 h-9 bg-white border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4 text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Proposal
          </Button>
        </div>
      </div>
    </header>
  )
}

/* =========================
   Metric Cards
========================= */

function MetricCards() {
  const metrics = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: 'Active Projects',
      value: '8',
      badge: '+1',
      color: 'blue',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Pending Approvals',
      value: '3',
      badge: 'Urgent',
      color: 'orange',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: 'Total Grant (ETB)',
      value: '2.5M',
      badge: '75% Utilized',
      color: 'green',
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      label: 'Deadlines This Week',
      value: '2',
      color: 'red',
    },
  ]

  const colors = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    red: { bg: 'bg-red-100', text: 'text-red-600' },
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, idx) => {
        const color = colors[metric.color as keyof typeof colors]

        return (
          <Card
            key={idx}
            className="bg-white border border-slate-200 rounded-xl shadow-sm"
          >
            <div className="p-4 relative">
              {metric.badge && (
                <span className="absolute top-4 right-4 text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {metric.badge}
                </span>
              )}

              <div
                className={`${color.bg} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}
              >
                <div className={color.text}>{metric.icon}</div>
              </div>

              <p className="text-xs text-slate-500 font-medium">
                {metric.label}
              </p>

              <p className="text-2xl font-semibold text-slate-900 mt-1">
                {metric.value}
              </p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

function BudgetChart() {
  const spentPercentage = ((5.4 / 8.2) * 100).toFixed(1);

  return (
    <Card className="bg-white border border-slate-200 p-6 mb-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Budget Utilization</h2>
          <p className="text-slate-600 text-xs mt-1">Quarterly breakdown</p>
        </div>
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">FY 2024</span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase">Spent</p>
            <p className="text-xl font-bold text-slate-900">5.4M ETB</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 font-medium uppercase">Total</p>
            <p className="text-xl font-bold text-slate-900">8.2M ETB</p>
          </div>
        </div>
        
        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden mt-3 mb-3">
          <div className="bg-blue-600 h-full rounded-full transition-all duration-300" style={{ width: `${spentPercentage}%` }}></div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-600">{spentPercentage}% consumed</p>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <p className="text-xs text-green-600 font-medium">Within Threshold</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

function ResearchTable() {
  const projects = Array.from({ length: 5 }, (_, i) => ({
    code: `ASTU-24-00${i + 1}`,
    title: 'Sustainable Geothermal Energy in Rift Valley',
    team: [
      { name: 'Dr. A', avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i*2}` },
      { name: 'Dr. B', avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i*2+1}` },
    ],
    budget: '1,250,000',
    status: 'Active',
  }));

  return (
    <Card className="bg-white border border-slate-200 p-6 mb-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Research Portfolio</h2>
          <p className="text-slate-600 text-xs mt-1">Management of your active and pending proposals</p>
        </div>
<button className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-lg transition-colors">
  <Filter className="w-4 h-4 text-slate-600" />
  <p>Filter</p>
</button>

<button className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded-lg transition-colors">
  <Filter className="w-4 h-4 text-slate-600" />
  <p>Filter</p>
</button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Code</TableHead>
              <TableHead>Project Title</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Budget (ETB)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((p, i) => (
              <TableRow key={i}>
                <TableCell>{p.code}</TableCell>
                <TableCell>{p.title}</TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {p.team.map((m, idx) => (
                      <img key={idx} src={m.avatar} alt={m.name} className="w-6 h-6 rounded-full border-2 border-white" />
                    ))}
                  </div>
                </TableCell>
                <TableCell>{p.budget}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                    {p.status}
                  </span>
                </TableCell>
                <TableCell>
                  <button className="p-1 hover:bg-slate-200 rounded transition-colors">
                    <MoreVertical className="w-4 h-4 text-slate-400" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}

function HighValueEscalation() {
  return (
    <Card className="bg-white border border-red-200 p-6 rounded-xl shadow-sm">
      <div className="flex items-start gap-4">
        <div className="bg-red-100 rounded-lg p-3 flex-shrink-0 mt-1">
          <div className="w-5 h-5 text-red-600">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-slate-900">High-Value</h3>
            <h3 className="font-bold text-red-600">Escalation</h3>
          </div>
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded inline-block mb-3">URGENT</span>
          <p className="text-sm text-slate-600">
            A procurement request for 750,000 ETB in Project ASTU-R-04 exceeds the standard threshold.
          </p>
          <div className="flex gap-2 mt-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white text-xs h-8 px-3 font-semibold">REVIEW NOW</Button>
            <Button variant="outline" className="text-red-600 border-red-200 text-xs h-8 px-3 font-semibold hover:bg-red-50">DISMISS</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function QuarterlyReportDue() {
  return (
    <Card className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
      <div className="flex items-start gap-4">
        <div className="bg-slate-100 rounded-lg p-3 flex-shrink-0 mt-1">
          <div className="w-5 h-5 text-slate-600 text-lg">📋</div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 mb-1">Quarterly Report</h3>
          <h3 className="font-bold text-slate-900 mb-2">Due</h3>
          <p className="text-sm text-slate-600">
            The Q3 progress report for "Smart Grid Optimization" is due in 3 days.
          </p>
        </div>
      </div>
    </Card>
  );
}

function ActiveCollaborations() {
  return (
    <Card className="bg-blue-600 border-0 text-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Active Collaborations</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-3">
          {['collab1','collab2','collab3','collab4'].map((c, idx) => (
            <img key={idx} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${c}`} alt="collaborator" className="w-8 h-8 rounded-full border-2 border-blue-700" />
          ))}
        </div>
        <span className="text-sm font-medium">+18 More</span>
      </div>
      <button className="w-full mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-all">
        Open Team Workspace
      </button>
    </Card>
  );
}

// Main Dashboard Page
export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <MetricCards />
            <BudgetChart />
            
            {/* Two Column Layout: Table on Left, Alerts on Right */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Left Column: Research Table (takes 2 columns) */}
              <div className="col-span-2">
                <ResearchTable />
              </div>
              
              {/* Right Column: Alerts Stack (1 column) */}
              <div className="space-y-6">
                <HighValueEscalation />
                <QuarterlyReportDue />
                <ActiveCollaborations />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

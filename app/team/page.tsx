// app/proposals/new/team-selection/TeamSelectionClient.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Plus, 
  Info, 
  Lock, 
  Trash2, 
  Bell, 
  ChevronDown,
  User,
  Users
} from 'lucide-react'

// Types
interface TeamMember {
  id: string
  name: string
  role: string
  department: string
  email: string
  imageUrl?: string
  isPrincipalInvestigator?: boolean
}

// Mock data - in real app, fetch from API
const mockCurrentTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Abebe Kebede',
    role: 'Principal Investigator',
    department: 'Dept. of Electrical Engineering',
    email: 'abebe.kebede@astu.edu.et',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB57aC02WCWaKrVAjh9K8aXJ2Sbt-mUbSP5waYrUIMdT00dHepeFwE8v1FykpXhVs9EAsUJPwZz6MhkGOsCal0YwucvwW5JUUsemFiRxhy0S9DB7AkaBusiHUyp3YJclNj_5bhw544gb0V5BBHMMbg4KdOjFq2NNA3OzZC0knNqA7SeydNbYhpneYiEaR6xNZoGl9ODs5ofUjRypmhat6wJBtwIjmyde2vqeEnso0eLUla5k8p9tig7L6_VZCewQkhhZXaAeO7p9Rg',
    isPrincipalInvestigator: true,
  },
  {
    id: '2',
    name: 'Sara Tadesse',
    role: 'Co-PI',
    department: 'Dept. of Computer Science',
    email: 'sara.tadesse@astu.edu.et',
  },
  {
    id: '3',
    name: 'Tigist Haile',
    role: 'Research Assistant',
    department: 'School of Applied Sciences',
    email: 'tigist.h@astu.edu.et',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtqyiAJ8rXxEJL6JNDHzN7hz19pSPUJd7KVTa4g9wIDP21Sx5RW4UviOYIBTmfhRwjvVpvi7-QyaR3LZ5NB3ag5fTpDnvQdjjm7BV4cLfmzmI82oOG3N5LI66xbNoCsZ81zNv2h6Lg-6qGNKNc1cNbxqaz5ebzl5zYYIZi_d6n4AubRaFbCkxkFVoalk9-q1f-Xh5Ch3H1uiurDyUrkCOxHD_rGyb0HT-dspDdjpv4Slx5HqGcSasPfwhJk-58TtWxm1SgvJyA7RA',
  },
]

const availableRoles = [
  'Co-Investigator',
  'Co-PI',
  'Research Assistant',
  'Advisor',
]

export default function TeamSelectionClient() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(mockCurrentTeam)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRole, setSelectedRole] = useState(availableRoles[0])

  const handleRemoveMember = (memberId: string) => {
    setTeamMembers(prev => prev.filter(member => member.id !== memberId))
  }

  const handleAddMember = () => {
    // In real app, this would search and add actual users
    console.log('Add member:', { searchQuery, selectedRole })
    // Reset search after adding
    setSearchQuery('')
  }

  const getRoleBadgeStyles = (role: string) => {
    if (role === 'Principal Investigator') {
      return 'bg-primary/10 text-primary border border-primary/20'
    }
    if (role === 'Co-PI') {
      return 'bg-secondary-green/10 text-secondary-green border border-secondary-green/20'
    }
    return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
  }

  return (
    <main className="flex-grow flex justify-center py-8 px-4 sm:px-8 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-[1024px] flex flex-col gap-8">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-2 text-sm" aria-label="Breadcrumb">
          <Link 
            href="/" 
            className="text-text-sub hover:text-primary transition-colors"
          >
            Home
          </Link>
          <span className="text-text-sub" aria-hidden="true">/</span>
          <Link 
            href="/proposals" 
            className="text-text-sub hover:text-primary transition-colors"
          >
            My Proposals
          </Link>
          <span className="text-text-sub" aria-hidden="true">/</span>
          <span className="text-text-main font-medium dark:text-white">
            New Proposal
          </span>
        </nav>

        {/* Progress Bar */}
        <div className="flex flex-col gap-3">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">Team Selection</h1>
              <p className="text-text-sub text-sm mt-1">
                Proposal Submission Wizard: Step 2 of 5
              </p>
            </div>
            <span className="text-primary font-bold">40%</span>
          </div>
          <div className="h-2 w-full bg-border-color rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out" 
              style={{ width: '40%' }}
              role="progressbar"
              aria-valuenow={40}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-border-color dark:border-gray-800 overflow-hidden">
          {/* Page Heading */}
          <div className="p-6 md:p-8 border-b border-border-color dark:border-gray-800">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-black tracking-tight text-text-main dark:text-white">
                Build Your Research Team
              </h2>
              <p className="text-text-sub text-base max-w-2xl">
                Search for registered ASTU faculty members or students to add them to your proposal. 
                Ensure you have at least one Co-PI if required by the grant guidelines.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Search & Add Section */}
            <div className="flex-1 p-6 md:p-8 flex flex-col gap-8 border-b lg:border-b-0 lg:border-r border-border-color dark:border-gray-800">
              {/* Search Form */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-text-main dark:text-white flex items-center gap-2">
                  <Users className="text-primary" size={24} />
                  Add New Member
                </h3>

                <div className="grid gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label 
                      htmlFor="search-user" 
                      className="text-sm font-medium text-text-main dark:text-gray-300"
                    >
                      Search User
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="text-text-sub" size={20} />
                      </div>
                      <input
                        id="search-user"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-background-light dark:bg-gray-800 border border-border-color dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main dark:text-white placeholder-text-sub/70"
                        placeholder="Name, email, or ASTU ID..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label 
                        htmlFor="assign-role" 
                        className="text-sm font-medium text-text-main dark:text-gray-300"
                      >
                        Assign Role
                      </label>
                      <div className="relative">
                        <select
                          id="assign-role"
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.target.value)}
                          className="w-full pl-3 pr-10 py-2.5 appearance-none bg-background-light dark:bg-gray-800 border border-border-color dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-main dark:text-white"
                        >
                          {availableRoles.map((role) => (
                            <option key={role}>{role}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-text-sub">
                          <ChevronDown size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end">
                      <button
                        onClick={handleAddMember}
                        className="w-full h-[42px] bg-primary bg-[#137FEC] text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                      >
                        <Plus size={20} />
                        Add to Team
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex gap-3">
                  <Info className="text-primary shrink-0 mt-0.5" size={20} />
                  <div className="text-sm text-text-main dark:text-blue-100">
                    <p className="font-medium">Can't find a user?</p>
                    <p className="text-text-sub dark:text-blue-200 mt-1">
                      If the researcher is not registered in the ASTU system, you can{' '}
                      <Link 
                        href="#" 
                        className="text-primary hover:underline font-medium"
                      >
                        invite an external member
                      </Link>{' '}
                      via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team List Section */}
            <div className="flex-1 p-6 md:p-8 bg-slate-50/50 dark:bg-gray-900/30 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-text-main dark:text-white">
                  Current Team{' '}
                  <span className="text-text-sub font-normal ml-1">
                    ({teamMembers.length})
                  </span>
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-card-dark border shadow-sm group ${
                      member.isPrincipalInvestigator
                        ? 'border-primary/30 relative overflow-hidden'
                        : 'border-border-color dark:border-gray-700'
                    }`}
                  >
                    {member.isPrincipalInvestigator && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                    )}
                    
                    {/* Avatar */}
                    <div className="relative size-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 border border-gray-100">
                    // Replace the Image component with a regular img tag
{member.imageUrl ? (
  <img
    src={member.imageUrl}
    alt={member.name}
    className="w-full h-full object-cover"
  />
) : (
  <User size={28} />
)}
                    </div>

                    {/* Member Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-bold text-text-main dark:text-white truncate">
                          {member.name}
                        </h4>
                        <span 
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getRoleBadgeStyles(member.role)}`}
                        >
                          {member.role}
                        </span>
                      </div>
                      <p className="text-sm text-text-sub truncate">{member.department}</p>
                      <p className="text-xs text-text-sub/70 mt-1">{member.email}</p>
                    </div>

                    {/* Actions */}
                    {member.isPrincipalInvestigator ? (
                      <div className="text-text-sub" title="Cannot remove PI">
                        <Lock size={20} className="opacity-40 cursor-not-allowed" />
                      </div>
                    ) : (
                      <button
                        onClick={() => handleRemoveMember(member.id)}
                        className="text-text-sub hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-full transition-colors"
                        title="Remove Member"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 md:px-8 md:py-6 bg-background-light dark:bg-card-dark border-t border-border-color dark:border-gray-800 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <Link
              href="/proposals/new/general-info"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-border-color dark:border-gray-600 text-text-main dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <ChevronLeft size={18} />
              Back to General Info
            </Link>

            <Link
              href="/proposals/new/budget"
              className="w-full sm:w-auto px-8 py-2.5 rounded-lg bg-[#137FEC] text-white font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Next: Project Budget
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
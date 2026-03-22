'use client'

import Link from 'next/link';
import { Pencil } from 'lucide-react';
import { AppSidebar } from '@/components/app-sidebar';

export default function ReviewPage() {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-5">

          {/* Page Title */}
          <h1 className="text-2xl font-semibold">Review Your Proposal</h1>
          <p className="text-sm text-gray-500 mt-1 mb-6">
            Please review all details below to ensure accuracy. You can edit specific sections if needed before final submission.
          </p>

          <div className="w-full bg-white dark:bg-[#1a2632] rounded-lg shadow-sm border overflow-hidden mb-6">
            <div className="flex w-full overflow-x-auto">
              {[
                { number: 1, label: 'Draft', href: '/draft', active: false },
                { number: 2, label: 'Team', href: '/team', active: false },
                { number: 3, label: 'Budget', href: '/budget', active: false },
                { number: 4, label: 'Review', href: '/review', active: true },
              ].map((step) => (
                <Link
                  key={step.number}
                  href={step.href}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 min-w-[100px] cursor-pointer transition-all ${
                    step.active
                      ? 'border-b-3 border-primary bg-primary/5'
                      : 'border-b-3 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <span
                    className={`flex items-center justify-center size-5 rounded-full text-xs font-bold ${
                      step.active ? 'bg-primary text-white' : 'bg-[#cfdbe7] text-[#4c739a]'
                    }`}
                  >
                    {step.number}
                  </span>
                  <p
                    className={`text-xs font-semibold tracking-[0.015em] ${
                      step.active ? 'text-primary' : 'text-[#4c739a]'
                    }`}
                  >
                    {step.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <ProjectDetailsCard />

          {/* Research Team */}
          <ResearchTeamCard />

        </div>
      </main>
    </div>
  )
}

// Component: Project Details Card
function ProjectDetailsCard() {
  return (
    <div className="bg-white border rounded-xl mb-6">
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-base font-semibold">Project Details</h2>
        <button className="flex items-center text-sm text-teal-600">
          <Pencil size={16} className="mr-1" /> Edit
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-14 gap-y-6 px-6 py-5 text-sm">
        <div>
          <Label>PROJECT TITLE</Label>
          <p>AI-Driven Crop Disease Detection for Sustainable Agriculture</p>
        </div>
        <div>
          <Label>RESEARCH THEME</Label>
          <p>Agriculture & Food Security</p>
        </div>
        <div className="col-span-2">
          <Label>ABSTRACT</Label>
          <p className="text-gray-600 leading-relaxed">
            This research aims to develop a robust artificial intelligence
            model capable of identifying early-stage crop diseases using
            drone imagery...
          </p>
        </div>
        <div>
          <Label>PROJECT DURATION</Label>
          <p>24 Months</p>
        </div>
        <div>
          <Label>PROPOSED START DATE</Label>
          <p>September 1, 2024</p>
        </div>
      </div>
    </div>
  )
}

// Component: Research Team Card
function ResearchTeamCard() {
  return (
    <div className="bg-white border rounded-xl">
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-base font-semibold">Research Team</h2>
        <button className="flex items-center text-sm text-teal-600">
          <Pencil size={16} className="mr-1" /> Edit
        </button>
      </div>
      <table className="w-full text-sm">
        <thead className="text-gray-400 text-xs border-b bg-gray-50">
          <tr className="text-left">
            <th className="py-3 px-6">NAME</th>
            <th>ROLE</th>
            <th>DEPARTMENT</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          <TeamRow initials="DA" name="Dr. Dawit Abebe" role="Principal Investigator" dept="Computing" email="dawit.a@astu.edu.et" />
          <TeamRow initials="ST" name="Sarah Tadesse" role="Co-Investigator" dept="Agriculture" email="sarah.t@astu.edu.et" />
          <TeamRow initials="MK" name="Dr. Michael Kebede" role="Co-Investigator" dept="Economics" email="m.kebede@astu.edu.et" />
        </tbody>
      </table>
    </div>
  )
}

function TeamRow({ initials, name, role, dept, email }: any) {
  return (
    <tr className="border-b">
      <td className="py-4 px-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">{initials}</div>
        {name}
      </td>
      <td><span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">{role}</span></td>
      <td>{dept}</td>
      <td className="text-teal-600">{email}</td>
    </tr>
  )
}

function Label({ children }: any) {
  return <p className="text-xs font-semibold tracking-wide text-teal-600 mb-1">{children}</p>
}
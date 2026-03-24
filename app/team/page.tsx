"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Plus,
  Info,
  Lock,
  Trash2,
  ChevronDown,
  User,
  Users,
} from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  imageUrl?: string;
  isPrincipalInvestigator?: boolean;
}

const mockCurrentTeam: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Abebe Kebede",
    role: "Principal Investigator",
    department: "Dept. of Electrical Engineering",
    email: "abebe.kebede@astu.edu.et",
    isPrincipalInvestigator: true,
  },
  {
    id: "2",
    name: "Sara Tadesse",
    role: "Co-PI",
    department: "Dept. of Computer Science",
    email: "sara.tadesse@astu.edu.et",
  },
  {
    id: "3",
    name: "Tigist Haile",
    role: "Research Assistant",
    department: "School of Applied Sciences",
    email: "tigist.h@astu.edu.et",
  },
];

const availableRoles = [
  "Co-Investigator",
  "Co-PI",
  "Research Assistant",
  "Advisor",
];

export default function TeamSelectionClient() {
  const router = useRouter();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(mockCurrentTeam);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState(availableRoles[0]);

  const handleRemoveMember = (memberId: string) =>
    setTeamMembers((prev) => prev.filter((m) => m.id !== memberId));
  const handleAddMember = () => {
    console.log({ searchQuery, selectedRole });
    setSearchQuery("");
  };

  const goToBudgetPage = () => router.push("/budget");

  const getRoleBadgeStyles = (role: string) => {
    if (role === "Principal Investigator")
      return "bg-primary/10 text-primary border border-primary/20";
    if (role === "Co-PI")
      return "bg-secondary-green/10 text-secondary-green border border-secondary-green/20";
    return "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600";
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-5xl mx-auto flex flex-col gap-5">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap items-center gap-1.5 text-xs">
              <Link
                href="/"
                className="text-text-sub hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/proposals"
                className="text-text-sub hover:text-primary transition-colors"
              >
                My Proposals
              </Link>
              <span>/</span>
              <span className="text-text-main font-medium dark:text-white">
                New Proposal
              </span>
            </nav>

            {/* Stepper */}
            <div className="w-full bg-white dark:bg-[#1a2632] rounded-lg shadow-sm border border-[#cfdbe7] dark:border-gray-700 overflow-hidden flex">
              {[
                { number: 1, label: "Draft" },
                { number: 2, label: "Team" },
                { number: 3, label: "Budget" },
                { number: 4, label: "Review" },
              ].map((step) => {
                const active = step.label === "Team";
                return (
                  <div
                    key={step.number}
                    onClick={() => {
                      if (step.label === "Draft") router.push("/draft");
                      if (step.label === "Team") router.push("/team");
                      if (step.label === "Budget") router.push("/budget");
                      if (step.label === "Review") router.push("/revieww");
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-3 min-w-[100px] cursor-pointer ${
                      active
                        ? "border-b-3 border-primary bg-primary/5"
                        : "border-b-3 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${active ? "bg-primary text-white" : "bg-[#cfdbe7] text-[#4c739a]"}`}
                    >
                      {step.number}
                    </span>
                    <p
                      className={`text-xs font-semibold ${active ? "text-primary" : "text-[#4c739a]"}`}
                    >
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-sm border border-border-color dark:border-gray-800 overflow-hidden flex flex-col lg:flex-row">
              <div className="flex-1 p-5 flex flex-col gap-5 border-b lg:border-b-0 lg:border-r border-border-color dark:border-gray-800">
                <h3 className="text-sm font-bold text-text-main dark:text-white flex items-center gap-1.5">
                  <Users className="text-primary" size={18} />
                  Add New Member
                </h3>
                <div className="grid gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-text-main dark:text-gray-300">
                      Search User
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                        <Search className="text-text-sub" size={16} />
                      </div>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Name, email, or ASTU ID..."
                        className="w-full pl-8 pr-3 py-2 text-sm bg-background-light dark:bg-gray-800 border border-border-color dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-text-main dark:text-gray-300">
                        Assign Role
                      </label>
                      <div className="relative">
                        <select
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.target.value)}
                          className="w-full pl-2.5 pr-7 py-2 text-sm bg-background-light dark:bg-gray-800 border border-border-color dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary/50"
                        >
                          {availableRoles.map((role) => (
                            <option key={role}>{role}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-1.5 pointer-events-none text-text-sub">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={handleAddMember}
                        className="w-full h-9 bg-[#137FEC] text-white text-sm font-medium rounded-md flex items-center justify-center gap-1.5"
                      >
                        <Plus size={16} /> Add
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-1 bg-blue-50 dark:bg-blue-900/20 rounded-md p-3 flex gap-2">
                  <Info className="text-primary shrink-0 mt-0.5" size={16} />
                  <div className="text-xs">
                    <p className="font-medium text-text-main dark:text-blue-100">
                      Can&apos;t find a user?
                    </p>
                    <p className="text-text-sub dark:text-blue-200 mt-0.5">
                      If the researcher is not registered, you can{" "}
                      <Link
                        href="#"
                        className="text-primary hover:underline font-medium"
                      >
                        invite an external member
                      </Link>{" "}
                      via email.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Team List */}
              <div className="flex-1 p-5 bg-slate-50/50 dark:bg-gray-900/30 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-text-main dark:text-white">
                    Current Team{" "}
                    <span className="text-text-sub font-normal ml-1 text-xs">
                      ({teamMembers.length})
                    </span>
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className={`flex items-start gap-3 p-3 rounded-md bg-white dark:bg-card-dark border ${member.isPrincipalInvestigator ? "border-primary/30 relative overflow-hidden" : "border-border-color dark:border-gray-700"}`}
                    >
                      {member.isPrincipalInvestigator && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                      )}
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 border border-gray-200 dark:border-gray-600">
                        {member.imageUrl ? (
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User size={18} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                          <h4 className="font-medium text-text-main dark:text-white text-sm truncate">
                            {member.name}
                          </h4>
                          <span
                            className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${getRoleBadgeStyles(member.role)}`}
                          >
                            {member.role === "Principal Investigator"
                              ? "PI"
                              : member.role}
                          </span>
                        </div>
                        <p className="text-xs text-text-sub truncate">
                          {member.department}
                        </p>
                        <p className="text-[10px] text-text-sub/70 truncate mt-0.5">
                          {member.email}
                        </p>
                      </div>
                      {member.isPrincipalInvestigator ? (
                        <div className="text-text-sub" title="Cannot remove PI">
                          <Lock
                            size={16}
                            className="opacity-40 cursor-not-allowed"
                          />
                        </div>
                      ) : (
                        <button
                          onClick={() => handleRemoveMember(member.id)}
                          className="text-text-sub hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-1.5 rounded transition-colors"
                          title="Remove Member"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-background-light dark:bg-card-dark border-t border-border-color dark:border-gray-800 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
              <Link
                href="/proposals/new/general-info"
                className="w-full sm:w-auto px-5 py-2 rounded-md border border-border-color dark:border-gray-600 text-text-main dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center gap-1.5"
              >
                <ChevronLeft size={16} /> Back to General Info
              </Link>
              <button
                onClick={goToBudgetPage}
                className="w-full sm:w-auto px-6 py-2 rounded-md bg-[#137FEC] text-white text-sm font-medium shadow-sm hover:shadow flex items-center justify-center gap-1.5"
              >
                Next: Project Budget <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

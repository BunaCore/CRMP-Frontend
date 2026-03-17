import {
  Bell,
  LayoutDashboard,
  Folder,
  Settings,
  PlusCircle,
  Pencil
} from "lucide-react"
import Image from "next/image"
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex min-h-screen bg-[#f6f8fa] text-gray-800">

      {/* SIDEBAR */}
      <aside className="w-[250px] bg-white border-r flex flex-col">

        <div className="px-6 py-5 border-b flex items-center gap-3">
          <div className="w-9 h-9 rounded-full  text-white flex items-center justify-center font-semibold">
            <Image src="/logo.jpg" alt="Logo" width={32} height={24} />
          </div>

          <div>
            <p className="font-semibold text-sm">CRMP  ASTU</p>
          </div>
        </div>

        

        <nav className="px-4 text-sm space-y-2">

          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" />

          <SidebarItem
            icon={<PlusCircle size={18} />}
            label="New Proposal"
            active
          />

          <SidebarItem icon={<Folder size={18} />} label="My Projects" />

          <SidebarItem icon={<Bell size={18} />} label="Notifications" />

          <SidebarItem icon={<Settings size={18} />} label="Settings" />

        </nav>

        <div className="mt-auto p-5 text-sm text-gray-500 border-t">
          <p>Need Help?</p>
          <p className="text-teal-600 cursor-pointer">Contact Support</p>
        </div>

      </aside>



      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="h-[64px] bg-white border-b flex items-center justify-between px-10">

          <div className="flex gap-10 text-sm">
            <span className="text-gray-500">Dashboard</span>
            <span className="text-teal-600 font-medium">My Proposals</span>
            <span className="text-gray-500">Grants</span>
            <span className="text-gray-500">Reports</span>
          </div>

          <div className="flex items-center gap-6">
            <Bell size={20} className="text-gray-500" />

            <div className="w-9 h-9 rounded-full border flex items-center justify-center">
              👤
            </div>
          </div>

        </header>



        {/* PAGE CONTENT */}
        <main className="flex-1 px-10 py-8 mx-auto w-full max-w-[1100px]">

          {/* TITLE */}
          <h1 className="text-2xl font-semibold">
            Review Your Proposal
          </h1>

          <p className="text-sm text-gray-500 mt-1 mb-6">
            Please review all details below to ensure accuracy. You can edit
            specific sections if needed before final submission.
          </p>



          {/* STEPPER */}
                <div className="w-full bg-white dark:bg-[#1a2632] rounded-lg shadow-sm border border-[#cfdbe7] dark:border-gray-700 overflow-hidden">
  <div className="flex w-full overflow-x-auto">
    {[
      { number: 1, label: 'Draft', href: '/draft', active: false },
      { number: 2, label: 'Team', href: '/team', active: false },
      { number: 3, label: 'Budget', href: '/budget', active: false },
      { number: 4, label: 'Review', href: 'review', active: true },
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
            step.active
              ? 'bg-primary text-white'
              : 'bg-[#cfdbe7] text-[#4c739a]'
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



          {/* PROJECT DETAILS CARD */}
          <div className="bg-white border rounded-xl mb-6 mt-6">

            <div className="flex justify-between items-center px-6 py-4 border-b">

              <h2 className="text-base font-semibold">
                Project Details
              </h2>

              <button className="flex items-center text-sm text-teal-600">
                <Pencil size={16} className="mr-1" />
                Edit
              </button>

            </div>


            <div className="grid grid-cols-2 gap-x-14 gap-y-6 px-6 py-5 text-sm">

              <div>
                <Label>PROJECT TITLE</Label>

                <p>
                  AI-Driven Crop Disease Detection for Sustainable Agriculture
                </p>
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
                  drone imagery. The project focuses on key Ethiopian staple
                  crops including Teff and Maize. By leveraging deep learning
                  algorithms, we anticipate a 20% reduction in crop loss for
                  smallholder farmers in the Adama region.
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



          {/* RESEARCH TEAM CARD */}
          <div className="bg-white border rounded-xl">

            <div className="flex justify-between items-center px-6 py-4 border-b">

              <h2 className="text-base font-semibold">
                Research Team
              </h2>

              <button className="flex items-center text-sm text-teal-600">
                <Pencil size={16} className="mr-1" />
                Edit
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

                <TeamRow
                  initials="DA"
                  name="Dr. Dawit Abebe"
                  role="Principal Investigator"
                  dept="Computing"
                  email="dawit.a@astu.edu.et"
                />

                <TeamRow
                  initials="ST"
                  name="Sarah Tadesse"
                  role="Co-Investigator"
                  dept="Agriculture"
                  email="sarah.t@astu.edu.et"
                />

                <TeamRow
                  initials="MK"
                  name="Dr. Michael Kebede"
                  role="Co-Investigator"
                  dept="Economics"
                  email="m.kebede@astu.edu.et"
                />

              </tbody>

            </table>

          </div>

        </main>
      </div>
    </div>
  )
}



function SidebarItem({ icon, label, active }: any) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
      ${active ? "bg-teal-50 text-teal-600 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
    >
      {icon}
      {label}
    </div>
  )
}



function Step({ number, label, active }: any) {
  return (
    <div className="flex items-center gap-8 text-sm">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
        ${active ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-600"}`}
      >
        {number}
      </div>

      <span className={active ? "text-teal-500 font-medium" : "text-gray-500"}>
        {label}
      </span>
    </div>
  )
}



function Label({ children }: any) {
  return (
    <p className="text-xs font-semibold tracking-wide text-teal-600 mb-1">
      {children}
    </p>
  )
}



function TeamRow({ initials, name, role, dept, email }: any) {
  return (
    <tr className="border-b">

      <td className="py-4 px-6 flex items-center gap-3">

        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
          {initials}
        </div>

        {name}

      </td>

      <td>
        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md">
          {role}
        </span>
      </td>

      <td>{dept}</td>

      <td className="text-teal-600">{email}</td>

    </tr>
  )
}
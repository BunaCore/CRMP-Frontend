export default function Sidebar() {
  return (
    <aside className="w-[250px] bg-white border-r px-6 py-6 flex flex-col">

      <div className="mb-8">
        <h2 className="font-semibold text-[16px]">
          CRMP | ASTU
        </h2>

        <p className="text-xs text-gray-400">
          ASTU Research Management Platform
        </p>
      </div>

      <nav className="space-y-3 text-[14px]">

        <div className="text-gray-600 cursor-pointer">
          Dashboard
        </div>

        <div className="bg-cyan-50 text-cyan-600 px-3 py-2 rounded-md font-medium cursor-pointer">
          New Proposal
        </div>

        <div className="text-gray-600 cursor-pointer">
          My Projects
        </div>

        <div className="text-gray-600 cursor-pointer">
          Notifications
        </div>

        <div className="text-gray-600 cursor-pointer">
          Settings
        </div>

      </nav>

      <div className="mt-auto text-xs text-gray-400">
        Need Help?
        <p className="text-cyan-600 mt-1 cursor-pointer">
          Contact Support
        </p>
      </div>

    </aside>
  )
}
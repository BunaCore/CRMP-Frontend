"use client"

import React from "react"
import { Filter, MoreVertical } from "lucide-react"

const TABLE_DATA = [
  {
    id: 1,
    code: "ASTU-24-001",
    title: "Sustainable Geothermal Energy in Rift V",
    budget: "1,250,000",
    status: "Active",
  },
  {
    id: 2,
    code: "ASTU-24-001",
    title: "Sustainable Geothermal Energy in Rift V",
    budget: "1,250,000",
    status: "Active",
  },
  {
    id: 3,
    code: "ASTU-24-001",
    title: "Sustainable Geothermal Energy in Rift V",
    budget: "1,250,000",
    status: "Active",
  },
  {
    id: 4,
    code: "ASTU-24-001",
    title: "Sustainable Geothermal Energy in Rift V",
    budget: "1,250,000",
    status: "Active",
  },
  {
    id: 5,
    code: "ASTU-24-001",
    title: "Sustainable Geothermal Energy in Rift V",
    budget: "1,250,000",
    status: "Active",
  },
]

export function ResearchPortfolioTable() {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm p-6 overflow-hidden">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-1 leading-tight">Research Portfolio</h2>
          <p className="text-[14px] text-gray-500">Managment of your active and pendings proposals</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Export CSV
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 pr-4 font-normal text-[13px] text-gray-400">
                <div className="flex flex-col">
                  <span>Project</span>
                  <span>code</span>
                </div>
              </th>
              <th className="py-4 px-4 font-normal text-[13px] text-gray-400">Project Title</th>
              <th className="py-4 px-4 font-normal text-[13px] text-gray-400">Team</th>
              <th className="py-4 px-4 font-normal text-[13px] text-gray-400">
                <div className="flex flex-col">
                  <span>Budget</span>
                  <span>(ETB)</span>
                </div>
              </th>
              <th className="py-4 px-4 font-normal text-[13px] text-gray-400">Status</th>
              <th className="py-4 pl-4 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {TABLE_DATA.map((row) => (
              <tr key={row.id} className="group hover:bg-gray-50/50 transition-colors">
                <td className="py-4 pr-4 text-[13px] text-gray-500">{row.code}</td>
                <td className="py-4 px-4 text-[13px] text-gray-600">{row.title}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center -space-x-2">
                    <img className="w-7 h-7 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=f6d365" alt="Avatar" />
                    <img className="w-7 h-7 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&backgroundColor=b6e3f4" alt="Avatar" />
                    <img className="w-7 h-7 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=ffdfbf" alt="Avatar" />
                  </div>
                </td>
                <td className="py-4 px-4 font-bold text-[13px] text-gray-900">{row.budget}</td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-[#2563EB] text-white">
                    {row.status}
                  </span>
                </td>
                <td className="py-4 pl-4 text-right">
                  <button className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

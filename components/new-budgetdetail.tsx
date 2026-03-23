"use client";

import dynamic from "next/dynamic";
import NavBudget from "./nav-budget";
import NavDetail from "./nav-budgetdetail";
import SidebarDetail from "./sidebarbudgetdetail";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

export default function Newbudgetdetail() {

  const BudgetChart = dynamic(() => import("./ringchart"), { ssr: false });
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col lg:flex-row overflow-x-hidden">
      <SidebarDetail />

      <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-14">
        {/* Header */}
        <div className="pt-36">
          <h1 className="text-3xl font-bold">Budget Details</h1>
          <p className="text-gray-600 mt-2">
            Detail project resource allocation and financial requirements.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 pt-10 w-full">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* Table Card – 75% width */}
            <Card className="w-full lg:w-3/4 border border-gray-200">
              <CardHeader className="px-4">
                <CardTitle>Pending Requests</CardTitle>
              </CardHeader>

              <CardContent className="px-4">
                <div className="overflow-x-auto border border-gray-200 rounded-lg">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 font-medium">Title</th>
                        <th className="py-3 px-4 font-medium">Applicant</th>
                        <th className="py-3 px-4 font-medium">Department</th>
                        <th className="py-3 px-4 font-medium">Date</th>
                        <th className="py-3 px-4 font-medium">Status</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4">AI Research</td>
                        <td className="py-3 px-4">Dr. Bekele</td>
                        <td className="py-3 px-4">CS</td>
                        <td className="py-3 px-4">Mar 20</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        </td>
                      </tr>
                      {/* Add more rows here */}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Chart Card – 25% width */}
           
              <BudgetChart className="w-full lg:w-1/4 border border-gray-200 px-4" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
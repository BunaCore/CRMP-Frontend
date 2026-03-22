import NavBudget from "./nav-budget";
import NavDetail from "./nav-budgetdetail";
import SidebarDetail from "./sidebarbudgetdetail";
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";

export default function Newbudgetdetail() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col lg:flex-row overflow-x-hidden">
      <SidebarDetail />

      <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="pt-36">
          <h1 className="text-3xl font-bold">Budget Details</h1>
          <p className="text-gray-600 mt-2">
            Detail project resource allocation and financial requirements.
          </p>
        </div>

         <div className="flex flex-col lg:flex-row gap-6 pt-10 w-full">
  {/* Table – takes most of the space */}
  <div className="w-full lg:w-[70%] xl:w-[72%] flex flex-col">
    <div className="text-lg font-semibold mb-3">Pending Requests</div>
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
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Card – takes ~1/3 width on lg+ */}
          <div className="w-full lg:w-[30%] xl:w-[28%]">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Quick Summary</CardTitle>
                <CardDescription>
                  Overview of current budget status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Total Pending</p>
                  <p className="text-2xl font-bold">8 requests</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Awaiting Approval</p>
                  <p className="text-2xl font-bold text-amber-600">₦12.4M</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Updated</p>
                  <p className="text-base">March 22, 2026</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
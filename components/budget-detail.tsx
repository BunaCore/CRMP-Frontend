
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription,CardHeader } from "@/components/ui/card";

export default function BudgetDetail() {
  return (
    <div className="grid grid-cols-12 gap-6">

      <div className="sm:col-span-7">
        {/* Header */}
        <div className="pt-36">
          <h1 className="text-3xl font-bold">Budget Details</h1>
          <p className="text-gray-600 mt-2">
            Detail project resource allocation and financial requirements.
          </p>
        </div>

        <Card className="border border-gray-200">
          <CardHeader className="flex justify-between items-center px-0">
            <CardTitle>Pending Requests</CardTitle>

            <button className="bg-amber-300 text-black px-4 py-2 rounded-md hover:bg-amber-400 transition">
              Add Line Item
            </button>
          </CardHeader>

          <CardContent className="px-0">
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4">Title</th>
                    <th className="py-3 px-4">Applicant</th>
                    <th className="py-3 px-4">Department</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Categories</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">AI Research</td>
                    <td className="py-3 px-4">Dr. Bekele</td>
                    <td className="py-3 px-4">CS</td>
                    <td className="py-3 px-4">Mar 20</td>
                    <td className="py-3 px-4">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                        Pending
                      </span>
                    </td>
                    <td className="py-3 px-4">Travel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="sm:col-span-5 pt-36 ">
        <p>hdddddddddddddds</p>
      </div>

    </div>
  );
}
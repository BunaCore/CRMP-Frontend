import { Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card";

export default function Pending() {
  return (
  <div className="flex gap-5 w-full pt-10">
  
  {/* Table */}
  <div className="flex flex-col ">
    <div className="text-lg font-semibold mb-2">Pending</div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-3">Title</th>
              <th className="py-2 px-3">Applicant</th>
              <th className="py-2 px-3">Department</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-3">AI Research</td>
              <td className="py-2 px-3">Dr. Bekele</td>
              <td className="py-2 px-3">CS</td>
              <td className="py-2 px-3">Mar 20</td>
              <td className="py-2 px-3">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    </div>
  );
}
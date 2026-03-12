"use client";

import useTeamStore from "@/store/teamStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TeamReview() {
  const team = useTeamStore((state) => state.team);

  return (
    <Card className="w-full border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Team Members</CardTitle>
      </CardHeader>

      <CardContent className="overflow-x-auto p-0">
        <table className="w-full table-auto text-left border-collapse">
          <tbody>
            {team.length > 0 ? (
              team.map((member, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{member.name}</td>
                  <td className="py-3 px-4">{member.role}</td>
                  <td className="py-3 px-4">{member.department}</td>
                  <td className="py-3 px-4">{member.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-500">
                  No team members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
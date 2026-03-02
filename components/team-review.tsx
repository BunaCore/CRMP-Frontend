"use client";

export default function TeamReview({ team }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
      <h3 className="text-lg font-bold mb-4">Team Members</h3>

      <table className="w-full table-auto text-left">
        <tbody>
          {team?.length > 0 ? (
            team.map((member, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">{member.name}</td>
                <td className="py-2 px-3">{member.role}</td>
                <td className="py-2 px-3">{member.department}</td>
                <td className="py-2 px-3">{member.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="py-2 px-3 text-center">
                Loading team members...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
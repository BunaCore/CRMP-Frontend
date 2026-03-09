"use client";

import { useState } from "react";
import useProjectStore from "@/store/projectStore";
import useTeamStore from "@/store/teamStore";

export default function ZustandTestPage() {

  const { project, setProject, resetProject } = useProjectStore();
  const { team, addMember, resetTeam } = useTeamStore();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleAddProject = () => {
    setProject({
      title: "AI Research",
      theme: "Machine Learning",
      abstract: "Research on AI models",
      duration: "12 months",
      startDate: "2026-01-01",
    });
  };

  const handleAddMember = () => {
    addMember({
      name,
      role,
      department: "Engineering",
      email: `${name}@mail.com`,
    });

    setName("");
    setRole("");
  };

  return (
    <div className="p-10 space-y-8">

      <h1 className="text-3xl font-bold">Zustand Test Page</h1>

      {/* Project Section */}
      <div className="border p-5 rounded space-y-3">
        <h2 className="text-xl font-semibold">Project Store</h2>

        <button
          onClick={handleAddProject}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>

        <button
          onClick={resetProject}
          className="bg-gray-400 text-white px-4 py-2 rounded ml-3"
        >
          Reset Project
        </button>

        <div className="mt-3">
          <p><b>Title:</b> {project.title}</p>
          <p><b>Theme:</b> {project.theme}</p>
          <p><b>Duration:</b> {project.duration}</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="border p-5 rounded space-y-3">
        <h2 className="text-xl font-semibold">Team Store</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />

        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 mr-2"
        />

        <button
          onClick={handleAddMember}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Member
        </button>

        <button
          onClick={resetTeam}
          className="bg-gray-400 text-white px-4 py-2 rounded ml-3"
        >
          Reset Team
        </button>

        <div className="mt-4">
          {team.map((member, index) => (
            <div key={index} className="border p-2 mb-2">
              <p><b>Name:</b> {member.name}</p>
              <p><b>Role:</b> {member.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
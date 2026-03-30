"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useProjectStore from "@/store/projectStore";
import useTeamStore from "@/store/teamStore";
import useDocumentStore from "@/store/documentStore";

export default function CreateProjectPage() {
  const { setProject } = useProjectStore();
  const { setTeam } = useTeamStore();
  const { setDocuments } = useDocumentStore();

  const [projectData, setProjectData] = useState({
    title: "",
    theme: "",
    abstract: "",
    duration: "",
    startDate: "",
  });

  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: "", email: "", department: "", role: "" });
  const [documentsFiles, setDocumentsFiles] = useState<File[]>([]);

  // Handle project input
  const handleProjectChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  // Add team member
  const addTeamMember = () => {
    if (!newMember.name) return;
    setTeamMembers([...teamMembers, newMember]);
    setNewMember({ name: "", email: "", department: "", role: "" });
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    const docs = files.map((file) => ({
      fileName: file.name,
      fileIcon: file.type.includes("image") ? "/image-file-icon.png" : "/file-icon.png",
      size: `${(file.size / 1024).toFixed(2)} KB`,
      verified: false,
    }));

    setDocumentsFiles([...documentsFiles, ...files]); // optional local preview
    setDocuments(docs); // save to Zustand store
  };

  // Save all to stores
  const handleSave = () => {
    setProject(projectData);
    setTeam(teamMembers);
    // Documents already set in store from handleFileChange
    alert("Project saved! Go to review page to see it.");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 space-y-6">
      {/* Project Details */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-bold text-lg">Project Details</h2>
        <Input placeholder="Title" name="title" value={projectData.title} onChange={handleProjectChange} />
        <Input placeholder="Theme" name="theme" value={projectData.theme} onChange={handleProjectChange} />
        <Input placeholder="Abstract" name="abstract" value={projectData.abstract} onChange={handleProjectChange} />
        <Input placeholder="Duration" name="duration" value={projectData.duration} onChange={handleProjectChange} />
        <Input type="date" name="startDate" value={projectData.startDate} onChange={handleProjectChange} />
      </div>

      {/* Team Members */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-bold text-lg">Team Members</h2>
        <div className="flex gap-2">
          <Input placeholder="Name" value={newMember.name} onChange={e => setNewMember({ ...newMember, name: e.target.value })} />
          <Input placeholder="Email" value={newMember.email} onChange={e => setNewMember({ ...newMember, email: e.target.value })} />
        </div>
        <div className="flex gap-2 mt-2">
          <Input placeholder="Department" value={newMember.department} onChange={e => setNewMember({ ...newMember, department: e.target.value })} />
          <Input placeholder="Role" value={newMember.role} onChange={e => setNewMember({ ...newMember, role: e.target.value })} />
        </div>
        <Button onClick={addTeamMember} className="mt-2">Add Team Member</Button>
        {teamMembers.length > 0 && (
          <ul className="list-disc list-inside mt-4">
            {teamMembers.map((m, idx) => <li key={idx}>{m.name} - {m.role}</li>)}
          </ul>
        )}
      </div>

      {/* Documents */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="font-bold text-lg">Upload Documents</h2>
        <input type="file" multiple onChange={handleFileChange} />
        {documentsFiles.length > 0 && (
          <ul className="list-disc list-inside mt-2">
            {documentsFiles.map((file, idx) => <li key={idx}>{file.name}</li>)}
          </ul>
        )}
      </div>

      <Button className="bg-[#13DAEC]" onClick={handleSave}>Save & Go to Review</Button>
    </div>
  );
}
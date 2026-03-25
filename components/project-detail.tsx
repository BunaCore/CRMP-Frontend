"use client";

import Image from "next/image";
import useProjectStore from "@/store/projectStore"

interface ProjectDetailsCardProps {
  onEdit: () => void;
}

export default function ProjectDetailsCard({ onEdit }: ProjectDetailsCardProps) {
  const project = useProjectStore((state) => state.project);

  return (
    <div className="bg-white rounded-lg w-full px-5 py-5 border border-gray-200">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 w-full h-20 px-4 border border-gray-200 rounded-lg">
        <h1 className="font-bold">Project Details</h1>

        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={onEdit}
        >
          <Image src="/pencil.svg" alt="edit" width={20} height={20} />
          <p className="text-[#13DAEC] font-bold">Edit</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-6">

        <div className="flex gap-20">
          <div>
            <h1 className="font-semibold">Project Title</h1>
            <p>{project.title}</p>
          </div>

          <div>
            <h1 className="font-semibold">Research Theme</h1>
            <p>{project.theme}</p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold">Abstract</h1>
          <p>{project.abstract}</p>
        </div>

        <div className="flex gap-20">
          <div>
            <h1 className="font-semibold">Project Duration</h1>
            <p>{project.duration}</p>
          </div>

          <div>
            <h1 className="font-semibold">Proposed Start Date</h1>
            <p>{project.startDate}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
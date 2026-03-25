"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import useDocumentStore from "@/store/documentStore";
import useUserStore from '@/store/userStore'

interface TableReviewProps {
  onEdit: () => void;
}

export default function TableReview({ onEdit }: TableReviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { documents } = useDocumentStore(); 
  const { loading } = useUserStore()

  return (
    <div className="w-full flex flex-col gap-2">

      {/* Header */}
      <div
        className="bg-white border border-gray-200 w-full h-25 flex justify-between items-center rounded-2xl px-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Image src="/banknote.svg" alt="banknote" width={30} height={30} />
          <h1 className="lg:text-2xl md:text-xl text-base font-bold">Budget & Timeline</h1>
        </div>

        <div className="flex items-center gap-2">
          <span className="lg:text-base sm:text-sm">Click to {isOpen ? "collapse" : "expand"}</span>
          {isOpen ? (
            <ChevronUp size={20} className="text-gray-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-600" />
          )}
        </div>
      </div>

      {isOpen && (
        <>
          <div className="w-full h-25 border border-gray-200 rounded-t-md py-10 px-12 bg-white flex justify-between items-center">
            <h1 className="lg:text-2xl text-xl font-bold">Uploaded Documents</h1>

            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={onEdit}
            >
              <Image src="/pencil.svg" alt="edit" width={20} height={20} />
              <p className="text-[#13DAEC] font-bold">Edit</p>
            </div>
          </div>

          {loading ? (
            <p className="px-12 py-4 text-gray-500 text-center">Loading documents...</p>
          ) : documents.length === 0 ? (
            <div className="border rounded-md  border-gray-200 ">
              <p className="px-12 py-4 text-center">No documents uploaded yet.</p>
            </div>
          ) : (
            <div className="bg-white rounded-b-md border border-gray-200 w-full flex flex-col py-5 px-12 gap-4 -mt-6">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="border border-gray-200 w-full h-30 rounded-lg p-4 flex justify-between"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Image src={doc.fileIcon} alt="file" width={40} height={40} />
                      <p>{doc.fileName}</p>
                    </div>
                    <p className="text-gray-400 text-sm">{doc.size} uploaded just now</p>
                  </div>

                  {doc.verified && (
                    <div className="flex items-center gap-2">
                      <Image src="/check.svg" alt="check" width={30} height={30} />
                      <p className="text-[#24e916]">verified</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
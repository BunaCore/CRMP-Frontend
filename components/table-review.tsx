"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import useDocumentStore from "@/store/documentStore";
import useUserStore from "@/store/userStore";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TableReviewProps {
  onEdit: () => void;
}

export default function TableReview({ onEdit }: TableReviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { documents } = useDocumentStore(); 
  const { loading } = useUserStore();

  return (
    <Card className="w-full border border-gray-200">
      {/* Header */}
      <CardHeader
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Image src="/banknote.svg" alt="banknote" width={30} height={30} />
          <CardTitle className="lg:text-2xl text-xl font-bold">Budget & Timeline</CardTitle>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <span>Click to {isOpen ? "collapse" : "expand"}</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </CardHeader>

      {isOpen && (
        <CardContent className="flex flex-col gap-4">
          {/* Documents Header */}
          <div className="flex justify-between items-center border-b pb-4">
            <CardTitle className="lg:text-2xl text-xl font-bold">Uploaded Documents</CardTitle>
            <Button variant="link" onClick={onEdit} className="flex items-center gap-1 text-[#13DAEC] font-bold">
              <Image src="/pencil.svg" alt="edit" width={20} height={20} />
              Edit
            </Button>
          </div>

          {/* Document List */}
          {loading ? (
            <p className="text-gray-500">Loading documents...</p>
          ) : documents.length === 0 ? (
            <p className="text-gray-500">No documents uploaded yet.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {documents.map((doc, index) => (
                <Card key={index} className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Image src={doc.fileIcon} alt="file" width={40} height={40} />
                    <div className="flex flex-col">
                      <p>{doc.fileName}</p>
                      <p className="text-gray-400 text-sm">{doc.size} uploaded just now</p>
                    </div>
                  </div>
                  {doc.verified && (
                    <div className="flex items-center gap-2 text-[#24e916]">
                      <Image src="/check.svg" alt="check" width={30} height={30} />
                      <p>Verified</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
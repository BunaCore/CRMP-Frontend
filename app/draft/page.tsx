"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Edit,
  Bell,
  ArrowRight,
  Upload,
  FileText,
  Trash2,
  Download,
  HelpCircle,
  Home,
} from "lucide-react";
import RichTextEditor from "@/components/editor/rich-text-editor";
import { AppSidebar } from "@/components/app-sidebar";

// Types
interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadProgress?: number;
}

export default function DraftProposalClient() {
  const pathname = usePathname();

  const [projectTitle, setProjectTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const plainText = abstract.replace(/<[^>]*>/g, "");
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;

 
  const steps = [
    { label: "Draft", path: "/draft" },
    { label: "Team", path: "/team" },
    { label: "Budget", path: "/budget" },
    { label: "Review", path: "/review" },
  ];


  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(Array.from(e.dataTransfer.files));
  };
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleFiles(Array.from(e.target.files));
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 15 * 1024 * 1024;

      if (!validTypes.includes(file.type)) {
        alert(`File "${file.name}" is not PDF/DOCX`);
        return false;
      }
      if (file.size > maxSize) {
        alert(`File "${file.name}" exceeds 15MB`);
        return false;
      }
      return true;
    });

    const newFiles: UploadedFile[] = validFiles.map((file) => ({
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadProgress: 100,
    }));

    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const handleRemoveFile = (id: string) =>
    setUploadedFiles(uploadedFiles.filter((f) => f.id !== id));

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024,
      s = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(2) + " " + s[i];
  };


  const handleSaveDraft = () =>
    console.log({ projectTitle, abstract, uploadedFiles });

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">

      <AppSidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 flex items-center justify-between px-4 md:px-6 border-b bg-white dark:bg-[#1a2632] dark:border-gray-700 shrink-0">
          <div className="flex items-center gap-2 md:gap-3">
            <Edit className="text-primary" size={18} />
            <h2 className="text-base font-semibold leading-tight">
              Proposal Wizard
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-1.5 text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 rounded-full relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-[960px] mx-auto flex flex-col gap-4 pb-12">

            <nav className="flex flex-wrap items-center gap-2 text-xs">
              <Link href="/" className="text-[#4c739a] flex items-center gap-1">
                <Home size={14} /> Home
              </Link>
              <span>{">"}</span>
              <span className="font-medium">New Submission</span>
            </nav>

            {/* Heading */}
            <div>
              <h1 className="text-2xl font-bold">New Proposal Submission</h1>
              <p className="text-sm text-[#4c739a]">
                Step 1 of 4: Provide basic project details.
              </p>
            </div>

            <div className="flex overflow-x-auto gap-2 bg-white dark:bg-[#1a2632] rounded-lg shadow-sm border border-[#cfdbe7] dark:border-gray-700">
              {steps.map((step, idx) => {
                const active = pathname === step.path;

                return (
                  <Link
                    key={idx}
                    href={step.path}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-3 min-w-[100px] ${
                      active
                        ? "border-b-3 border-primary bg-primary/5"
                        : "border-b-3 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold ${
                        active
                          ? "bg-primary text-white"
                          : "bg-[#cfdbe7] text-[#4c739a]"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <p
                      className={`text-xs font-semibold ${
                        active ? "text-primary" : "text-[#4c739a]"
                      }`}
                    >
                      {step.label}
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* FORM */}
            <div className="bg-white p-6 rounded-lg border flex flex-col gap-5">
              
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Project Title"
                className="border p-2 rounded"
              />

              <RichTextEditor value={abstract} onChange={setAbstract} />

              {/* Next Button */}
              <div className="flex justify-end">
                <Link
                  href="/proposal/team"
                  className="px-5 py-2 bg-blue-600 text-white rounded flex items-center gap-2"
                >
                  Next Step <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
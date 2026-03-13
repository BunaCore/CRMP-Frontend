"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import TeamReview from "@/components/team-review";
import TableReview from "@/components/table-review";
import ProjectDetail from "@/components/project-detail";
import Stepper from "@/components/stepper";
import { useParams } from "next/navigation";
import useProjectStore from "@/store/projectStore";
import useUserStore from "@/store/userStore";
import useTeamStore from "@/store/teamStore";
import useDocumentStore from "@/store/documentStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewReview() {
  const { currentUser, loading, error, setLoading } = useUserStore();
  const { setProject } = useProjectStore();
  const { setTeam } = useTeamStore();
  const { documents, setDocuments } = useDocumentStore();

  const { id } = useParams();

  // fetch project
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) fetchProject();
  }, [id]);

  // fetch team
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`/api/projects/${id}/team`);
        if (!res.ok) throw new Error("Failed to fetch team");
        const data = await res.json();
        setTeam(data);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) fetchTeam();
  }, [id, setTeam]);

  // fetch documents
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/projects/${id}/documents`);
        if (!res.ok) throw new Error("Failed to fetch documents");
        const data = await res.json();
        setDocuments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchDocuments();
  }, [id, setDocuments, setLoading]);

  // submit proposal
  const handleSubmitProposal = async () => {
    try {
      const res = await fetch(`/api/projects/${id}/submit`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Submission failed");
      console.log("Proposal submitted");
    } catch (err) {
      console.error(err);
    }
  };

  // save draft
  const handleSaveDraft = async () => {
    try {
      const res = await fetch(`/api/projects/${id}/draft`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Failed to save draft");
      console.log("Draft saved");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col lg:flex-row pt-14 sm:pt-16 overflow-x-hidden">

      {/* Sidebar */}
      <div className="hidden lg:flex bg-white w-64 shrink-0 shadow-lg p-6 flex-col gap-4">
        <h2 className="text-2xl font-bold">
          ASTU Research{" "}
          <span className="text-gray-400 text-base">
            Management Platform
          </span>
        </h2>

        <nav className="flex flex-col gap-1">
          <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#13DAEC] cursor-pointer">
            <Image src="/dashboardreview.svg" alt="" width={30} height={30} />
            <p>Dashboard</p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#13DAEC] cursor-pointer">
            <Image src="/circlereview.svg" alt="" width={30} height={30} />
            <p>New Proposal</p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#13DAEC] cursor-pointer">
            <Image src="/folderreview.svg" alt="" width={30} height={30} />
            <p>My Projects</p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#13DAEC] cursor-pointer">
            <Image src="/settingsreview.svg" alt="" width={30} height={30} />
            <p>Settings</p>
          </div>
        </nav>

        {/* Help box */}
        <div className="mt-auto bg-white border border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-gray-700 text-sm">Need help?</p>
          <p className="text-[#13DAEC] text-sm font-bold py-1 cursor-pointer">
            Contact Support
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-10 sm:pt-12 flex flex-col gap-6">

        {/* Heading */}
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Review Your Proposal
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base">
            Please review all details to ensure accuracy. You can edit
            specific sections if needed before final submission.
          </p>
        </div>

        {/* Stepper */}
        <Stepper activeStep="Review" />

        {/* Project Details */}
        <ProjectDetail onEdit={() => console.log("edit project")} />

        {/* Team */}
        <TeamReview />

        {/* Budget */}
        <TableReview onEdit={() => console.log("edit clicked")} />

        {/* Submit Section */}
        <div className="w-full mt-5 rounded-md bg-white p-4 sm:p-6 md:p-8 border border-gray-200 mb-5">

          <div className="flex items-start gap-3">
            <Input
              type="checkbox"
              className="mt-1 w-4 h-4 cursor-pointer"
            />
            <h1 className="font-semibold">
              I certify that the information provided is accurate.
            </h1>
          </div>

          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            By checking this box, I confirm that this proposal adheres
            to all ASTU research guidelines and ethical standards.
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-5">

            <span className="flex items-center gap-2 cursor-pointer">
              <ArrowLeft size={20} />
              <p className="text-gray-700 text-sm sm:text-base">
                Back to documents
              </p>
            </span>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
              <Button
                onClick={handleSaveDraft}
                className="bg-gray-200 px-4 py-3 rounded w-full sm:w-auto"
              >
                Save as draft
              </Button>

              <Button
                onClick={handleSubmitProposal}
                className="bg-[#13DAEC] px-4 py-3 rounded w-full sm:w-auto"
              >
                Submit proposal
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
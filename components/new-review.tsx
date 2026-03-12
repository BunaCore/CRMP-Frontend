"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ArrowLeft, ChevronUp } from "lucide-react";
import TeamReview from "@/components/team-review";
import TableReview from "@/components/table-review";
import ProjectDetail from "@/components/project-detail";
import Stepper from "@/components/stepper";
import { useParams } from "next/navigation";
import useProjectStore from "@/store/projectStore";
import useUserStore from "@/store/userStore";
import useTeamStore from "@/store/teamStore";
import useDocumentStore from "@/store/documentStore";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function NewReview() {
  const { currentUser, loading, error, setLoading } = useUserStore();
  const { setProject } = useProjectStore();
  const { setTeam } = useTeamStore();
  const { documents, setDocuments } = useDocumentStore();
  const { id } = useParams();

  // Fetch project
  useEffect(() => {
    if (!id) return;
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
    fetchProject();
  }, [id, setProject]);

  // Fetch team
  useEffect(() => {
    if (!id) return;
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
    fetchTeam();
  }, [id, setTeam]);

  // Fetch documents
  useEffect(() => {
    if (!id) return;
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
    fetchDocuments();
  }, [id, setDocuments, setLoading]);

  const handleSubmitProposal = async () => {
    try {
      const res = await fetch(`/api/projects/${id}/submit`, { method: "POST" });
      if (!res.ok) throw new Error("Submission failed");
      console.log("Proposal submitted");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveDraft = async () => {
    try {
      const res = await fetch(`/api/projects/${id}/draft`, { method: "POST" });
      if (!res.ok) throw new Error("Failed to save draft");
      console.log("Draft saved");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">

      {/* Sidebar - hidden on small/medium screens */}
      <Card className="hidden lg:flex w-full lg:w-64 shadow-lg px-4 lg:px-6 pt-8 lg:pt-20 flex-col gap-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">ASTU Research</CardTitle>
          <CardDescription className="text-gray-400 text-sm">
            Management Platform
          </CardDescription>
        </CardHeader>

        <nav className="flex flex-col gap-1">
          {[
            { icon: "/dashboardreview.svg", label: "Dashboard" },
            { icon: "/circlereview.svg", label: "New Proposal" },
            { icon: "/folderreview.svg", label: "My Projects" },
            { icon: "/settingsreview.svg", label: "Settings" },
          ].map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="justify-start gap-2 px-3 py-2 hover:bg-[#13DAEC]"
            >
              <Image src={item.icon} alt="" width={30} height={30} />
              {item.label}
            </Button>
          ))}
        </nav>

        <CardContent className="mt-auto border border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-gray-700 text-sm">Need help?</p>
          <p className="text-[#13DAEC] text-sm font-bold py-1 cursor-pointer">
            Contact Support
          </p>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6 p-4 sm:p-6 md:p-8 lg:pt-10 md:pt-27">

        {/* Page Heading */}
        <div className="mb-4 sm:mb-6 lg:pt-20">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
            Review Your Proposal
          </h1>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
            Please review all details to ensure accuracy. You can edit specific sections if needed before final submission.
          </p>
        </div>

        {/* Stepper */}
        <Stepper activeStep="Review" />

        {/* Project Detail */}
        <ProjectDetail onEdit={() => console.log("edit project")} />

        {/* Team Review */}
        <TeamReview />

        {/* Budget / Table */}
        <TableReview onEdit={() => console.log("edit clicked")} />

        {/* Submission Card */}
        <Card className="rounded-md p-4 sm:p-6 mt-4 sm:mt-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Checkbox id="certify" />
            <label htmlFor="certify" className="font-semibold text-sm sm:text-base">
              I certify that the information provided is accurate.
            </label>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3">
            By checking this box, I confirm that this proposal adheres to all ASTU research guidelines and ethical standards.
          </p>

          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mt-4 sm:mt-5">
            <Button variant="link" className="flex items-center gap-2 text-sm sm:text-base">
              <ArrowLeft size={18} />
              Back to documents
            </Button>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto" onClick={handleSaveDraft}>
                Save as draft
              </Button>
              <Button
                className="bg-[#13DAEC] w-full sm:w-auto text-white hover:bg-[#0fb5d6]"
                onClick={handleSubmitProposal}
              >
                Submit proposal
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}
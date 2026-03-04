"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { ChevronUp } from "lucide-react";
import TeamReview from "@/components/team-review";
import TableReview from "@/components/table-review";
import ProjectDetail from "@/components/project-detail";
import Stepper from "@/components/stepper";
import { useParams } from "next/navigation";


interface Project {
  title: string;
  theme: string;
  abstract: string;
  duration: string;
  startDate: string;
}

export default function NewReview() {

      const [project, setProject] = useState<Project | null>(null);
      const [team, setTeam] = useState([]);
      const [isOpen, setIsOpen] = useState(false); 
      const [documents, setDocuments] = useState([]);
      const [loading, setLoading] = useState(false);

      const { id } = useParams();

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
        }, [id]);

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
    }, [id]);

       {/*submit*/}
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
        };  {/*save draft*/}
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

   return(
        <div className="min-h-screen w-full bg-gray-50 flex flex-col lg:flex-row pt-17">
            
        {/* Sidebar */}
            <div className="bg-white w-full lg:w-64 shadow-lg p-6 flex flex-col gap-4">

                <h2 className="text-2xl font-bold">ASTU Research <span className="text-gray-400 text-base">Management Platform</span></h2>


                <nav className="flex flex-col gap-1">
                <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#13DAEC] cursor-pointer">
                    <Image src="/dashboardreview.svg" alt=""  width={30} height={30}/>
                    <p>Dashboard</p>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#13DAEC] cursor-pointer">
                    <Image src="/circlereview.svg" alt=""  width={30} height={30}/>
                    <p>New Proposal</p>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#13DAEC] cursor-pointer">
                    <Image src="/folderreview.svg" alt=""  width={30}
                height={30}/>
                    <p>My Projects</p>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#13DAEC] cursor-pointer">
                    <Image src="/settingsreview.svg" alt=""  width={30} height={30}/>
                    <p>Settings</p>
                </div>
                </nav>

                {/* Bottom help box */}
                <div className="mt-auto py-8 bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-700 text-sm">Need help?</p>
                <p className=" text-[#13DAEC] text-sm font-bold py-1">
                    Contact Support
                </p>
                </div>

            </div>

             {/* Main content */}
            <div className="flex-1 p-6 flex flex-col gap-6 md:px-20 pt-14">
                <div className="lg:col-span-2">
                    <h1 className="lg:text-4xl text-xl font-bold mb-3">Review Your Proposal</h1>
                    <p className="text-muted-foreground lg:text-base text-sm ">
                        Please review all details to ensure accuracy. You can edit specific sections if needed before final submission.
                    </p>
            </div>

            <Stepper activeStep="Review" />
            

            {/*project detail*/}
            <ProjectDetail
                project={project}
                onEdit={() => console.log("edit project")}
                />

             
             {/*table*/}
                <TeamReview team={team} />
            

            {/*budget part*/}
               <TableReview
                    documents={documents}
                    loading={loading}
                    onEdit={() => console.log("edit clicked")}
                    />
                

                {/*submit*/}
                <div className="items-center w-full mt-5 h-45 rounded-md bg-white py-10 px-12 border border-gray-200 mb-5">
                    {/* checkbox + heading */}
                    <div className="flex items-start gap-3">
                        <input
                        type="checkbox"
                        className="mt-1 w-4 h-4 cursor-pointer"
                        />
                        <h1 className="font-semibold">
                        I certify that the information provided is accurate.
                        </h1>
                    </div>

                    <p className=" text-gray-400 mt-2">
                        By checking this box, I confirm that this proposal adheres to all ASTU research guidelines and ethical standards.
                    </p>
                   <div className="flex justify-between py-5">

                         <span className="flex items-center gap-2">
                            <ArrowLeft size={20} />
                            <p className="text-gray-700">Back to documents</p>
                        </span>

                        <div className="flex gap-4 ">
                            <button  onClick={handleSaveDraft} className="bg-gray-200 px-4 py-3 rounded cursor-pointer">Save as draft</button>
                            <button  onClick={handleSubmitProposal} className="bg-[#13DAEC] px-4 py-3 rounded cursor-pointer">Submit proposal</button>
                        </div>
                    </div>
                </div>
        </div>
        </div>

        )}
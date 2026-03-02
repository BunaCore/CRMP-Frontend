"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { ChevronUp } from "lucide-react";


export default function NewReview() {

      const [project, setProject] = useState(null);
      const [team, setTeam] = useState([]);
      const [isOpen, setIsOpen] = useState(false); 

        useEffect(() => {
            const fetchProject = async () => {
            const res = await fetch("/api/");
            const data = await res.json();
            setProject(data);
            };

            fetchProject();
        }, []);

        useEffect(() => {
        const fetchTeam = async () => {
            const res = await fetch("/api/team"); // your endpoint
            const data = await res.json();
            setTeam(data);
        };

        fetchTeam();
        }, []);

   return(
        <div className="min-h-screen w-full bg-gray-50 flex flex-col lg:flex-row pt-15">
        {/* Sidebar */}
        <div className="bg-white w-full lg:w-64 shadow-lg p-6 flex flex-col gap-6">

            <h2 className="text-2xl font-bold">ASTU Research Management</h2>

            <nav className="flex flex-col gap-3">
            <button className="text-left px-3 py-2 rounded hover:bg-gray-100">Dashboard</button>
            <button className="text-left px-3 py-2 rounded hover:bg-gray-100">New Proposal</button>
            <button className="text-left px-3 py-2 rounded hover:bg-gray-100">My Projects</button>
            <button className="text-left px-3 py-2 rounded hover:bg-gray-100">Settings</button>
            </nav>

            {/* Bottom help box */}
            <div className="mt-auto bg-gray-50 border rounded-lg p-4">
            <p className="font-semibold text-sm">Need help?</p>
            <p className="text-sm text-gray-600 mb-3">
                Contact support.
            </p>
            <button className="w-full bg-[#13DAEC] rounded py-2 text-sm font-medium">
                Contact Support
            </button>
            </div>

        </div>

        {/* Main content */}
        <div className="flex-1 p-6 flex flex-col gap-6 md:px-20">
            <div className="lg:col-span-2">
                <h1 className="lg:text-4xl text-xl font-bold mb-2">Budget Module</h1>
                <p className="text-muted-foreground lg:text-xl text-base">
                    Manage project funds, track utilization, and submit new budget requests
                    for <span className="text-sky-400">"AI for Agriculture in Rift Valley"</span>
                </p>
            </div>


            <div className="w-full h-16 border border-gray-400 bg-white rounded-2xl flex items-center">
                <ul className="flex justify-evenly w-full text-text-gray-700">
                    {["Draft", "Team", "Budget", "Review"].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-5 h-5 bg-gray-300 text-gray-700 text-xs rounded-full">
                        {index + 1}
                        </span>
                        <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                    ))}
                </ul>
            </div>

            {/*project detail*/}
                <div className="bg-white rounded-lg w-full px-5 py-5 border border-gray-200">
      
                    <div className="flex justify-between items-center bg-gray-100 w-full h-20 px-4 border border-gray-200 rounded-lg">
                        <h1 className="font-bold">Project Details</h1>

                        <div className="flex items-center gap-1 cursor-pointer">
                        <Image src="/pencil.svg" alt="file" width={20} height={20}/>
                        <p className="text-[#13DAEC] font-bold">Edit</p>
                        </div>
                    </div>

                   <div className="mt-6 space-y-6">

                    <div className="flex gap-20">
                    <div>
                        <h1 className="font-semibold">Project Title</h1>
                        <p>{project?.title}</p>
                    </div>

                    <div>
                        <h1 className="font-semibold">Research Theme</h1>
                        <p>{project?.theme}</p>
                    </div>
                    </div>

                    <div>
                    <h1 className="font-semibold">Abstract</h1>
                    <p>{project?.abstract}</p>
                    </div>

                    <div className="flex gap-20">
                    <div>
                        <h1 className="font-semibold">Project Duration</h1>
                        <p>{project?.duration}</p>
                    </div>

                    <div>
                        <h1 className="font-semibold">Proposed Start Date</h1>
                        <p>{project?.startDate}</p>
                    </div>
                    </div>

                </div>
                </div>

             
             {/*table*/}
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

               {/*budget part*/}
                <div className="w-full flex flex-col gap-2">

      {/* Header */}
      <div
        className="bg-sky-200 w-full h-25 flex justify-between items-center rounded-2xl px-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Image src="/banknote.svg" alt="banknote" width={30} height={30} />
          <h1 className="lg:text-2xl text-xl font-bold">Budget & Timeline</h1>
        </div>

        <div className="flex items-center gap-2">
          <span>Click to {isOpen ? "collapse" : "expand"}</span>
          {isOpen ? (
            <ChevronUp size={20} className="text-gray-600" />
          ) : (
            <ChevronDown size={20} className="text-gray-600" />
          )}
        </div>
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <>
          {/* Upload Part */}
          <div className="w-full h-25 border border-gray-700 rounded-t-md border-b-0 py-10 px-12 bg-gray-100 flex justify-between items-center">
            <h1 className="lg:text-2xl text-xl font-bold">Uploaded Documents</h1>
            <div className="flex items-center gap-1">
              <Image src="/pencil.svg" alt="file" width={20} height={20}/>
              <p className="text-[#13DAEC] font-bold">Edit</p>
            </div>
          </div>

          <div className="bg-white rounded-b-md border border-gray-700 w-full flex flex-col py-5 px-12 gap-4 -mt-6">
            {/* Example document rows */}
            <div className="border border-gray-700 w-full h-30 rounded-lg p-4 flex justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Image src="/file.svg" alt="file" width={40} height={40} />
                  <p>Final_Proposal.pdf</p>
                </div>
                <p className="text-gray-400 text-sm">2.4 MB uploaded just now</p>
              </div>

              <div className="flex items-center gap-2">
                <Image src="/check.svg" alt="check" width={30} height={30} />
                <p className="text-[#24e916]">verified</p>
              </div>
            </div>

            {/* Repeat other rows */}
          </div>
        </>
      )}
    </div>

                {/*submit*/}
                <div className="w-full mt-5 h-60 rounded-md bg-sky-100 py-10 px-12">
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

                    <p className="text-sm text-gray-400 mt-2">
                        By checking this box, I confirm that this proposal adheres to all ASTU research guidelines and ethical standards.
                    </p>
                   <div className="flex justify-between py-5">

                         <span className="flex items-center gap-2">
                            <ArrowLeft size={20} />
                            <p>Back to documents</p>
                        </span>

                        <div className="flex gap-4">
                            <button className="bg-[#13DAEC] px-4 py-3 rounded">Save as draft</button>
                            <button className="bg-[#13DAEC] px-4 py-3 rounded">Submit proposal</button>
                        </div>
                    </div>
                    </div>
        </div>
        </div>

        )}
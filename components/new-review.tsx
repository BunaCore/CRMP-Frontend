
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ArrowLeft } from "lucide-react";


export default function NewReview() {

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

            <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
            <h3 className="text-lg font-bold mb-4">Team Members</h3>
            <table className="w-full table-auto text-left">
                <thead className="bg-gray-200">
                <tr>
                     <th className="py-2 px-3">Name</th>
                    <th className="py-2 px-3">Role</th>
                    <th className="py-2 px-3">Department</th>
                    <th className="py-2 px-3">Email</th>
                    
                </tr>
                </thead>
                <tbody>
                    <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-3">Ayele</td>  
                    <td className="py-2 px-3">Project Manager</td>
                    <td className="py-2 px-3">Operations</td>
                    <td className="py-2 px-3">manager@example.com</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-3">germa</td>
                    <td className="py-2 px-3">Project Manager</td>
                    <td className="py-2 px-3">Operations</td>
                    <td className="py-2 px-3">manager@example.com</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-3">abel</td>
                    <td className="py-2 px-3">Developer</td>
                    <td className="py-2 px-3">Engineering</td>
                    <td className="py-2 px-3">dev@example.com</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                    <td className="py-2 px-3">dawit</td>
                    <td className="py-2 px-3">Designer</td>
                    <td className="py-2 px-3">Creative</td>
                    <td className="py-2 px-3">designer@example.com</td>
                </tr>
                </tbody>
            </table>
            </div>

            <div className="bg-sky-200 w-full h-25 flex justify-between items-center rounded-2xl px-4">
            <div className="flex items-center gap-2">
                <Image src="/banknote.svg" alt="banknote" width={30} height={30} />
                <h1 className="lg:text-2xl text-xl font-bold">Budget & Timeline</h1>
            </div>

             <div className="flex items-center gap-2">
                <span>Click to expand</span>
                <ChevronDown size={20} className="text-gray-600" />
                </div>
            </div>

                   {/*upload part*/}
             <div className="w-full h-25 border border-gray-700 rounded-t-md border-b-0 py-10 px-12 bg-gray-100 flex justify-between items-center">
                <h1 className="lg:text-2xl text-xl font-bold">Uploaded Documents</h1>
                 <div className="flex items-center gap-1">
                       <Image src="/pencil.svg" alt="file" width={20} height={20}/>
                       <p className="text-[#13DAEC] font-bold">Edit</p>
                </div>
            </div>
           
           <div className="bg-white rounded-b-md border border-gray-700 w-full h-100 flex flex-col py-5 px-12 gap-4 -mt-6">

                <div className="border border-gray-700 w-full h-30 rounded-lg p-4 flex justify-between">
                    <div className="flex flex-col gap-1"> {/* vertical stack */}
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

                <div className="border border-gray-700 w-full h-30 rounded-lg p-4 flex justify-between">
                    <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <Image src="/table.svg" alt="table" width={40} height={40} />
                        <p>Budget_Breakdown_Final.xlsx</p>
                    </div>
                    <p className="text-gray-400 text-sm">3.1 MB uploaded just now</p>
                    </div>

                    <div className="flex items-center gap-2">
                    <Image src="/check.svg" alt="check" width={30} height={30} />
                    <p className="text-[#24e916]">verified</p>
                    </div>
                </div>

                <div className="border border-gray-700 w-full h-30 rounded-lg p-4 flex justify-between">
                    <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <Image src="/shield.svg" alt="shield" width={40} height={40} />
                        <p>Ethical_Clearance_Letter.pdf</p>
                    </div>
                    <p className="text-gray-400 text-sm">1.2 MB uploaded just now</p>
                    </div>

                    <div className="flex items-center gap-2">
                    <Image src="/check.svg" alt="check" width={30} height={30} />
                    <p className="text-[#24e916]">verified</p>
                    </div>
                </div>

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
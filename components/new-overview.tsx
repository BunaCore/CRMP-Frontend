import Image from "next/image";
import { Input } from "@/components/ui/input";
import { BellIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription,CardHeader } from "@/components/ui/card";


export default function NewOverview(){

    return(

     <div className="min-h-screen w-full bg-gray-50 flex flex-col lg:flex-row overflow-x-hidden">

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

        <div className="mt-auto bg-white border border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-gray-700 text-sm">Need help?</p>
          <p className="text-[#13DAEC] text-sm font-bold py-1 cursor-pointer">
            Contact Support
          </p>
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col gap-6">
        
         <div className="bg-white border border-gray-200 h-16 flex justify-between items-center px-4">
            <h1 className="font-bold text-lg">Dashboard</h1>

            <Input type="submit" value="Search" className="w-48" />

            <div className="flex items-center gap-5">
                <BookOpenIcon className="h-6 w-6" />
                <BellIcon className="h-6 w-6 "/>
            </div>
        </div>

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Card className="border border-gray-200">
            <CardHeader className="">
                <p className="text-2xl font-bold">Project Title</p>
                <p className="text-lg font-semibold">142</p>
                <p className="text-sm text-gray-500">12% from last sem</p>
            </CardHeader>
            </Card>

            <Card className="border border-gray-200">
             <CardHeader className="">
                <p className="text-2xl font-bold">Project Title</p>
                <p className="text-lg font-semibold">142</p>
                <p className="text-sm text-gray-500">12% from last sem</p>
            </CardHeader>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="">
                <p className="text-2xl font-bold">Project Title</p>
                <p className="text-lg font-semibold">142</p>
                <p className="text-sm text-gray-500">12% from last sem</p>
            </CardHeader>
            </Card>

            <Card className="border border-gray-200">
             <CardHeader className="">
                <p className="text-2xl font-bold">Project Title</p>
                <p className="text-lg font-semibold">142</p>
                <p className="text-sm text-gray-500">12% from last sem</p>
            </CardHeader>
            </Card>

        </div>
        </div>


      </div>

       
    </div>
 )}     
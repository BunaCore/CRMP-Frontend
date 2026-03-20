
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription,CardHeader } from "@/components/ui/card";


export default function NewOverview(){
     
            const cards = [
              { id: 1, title: "Projects", count: 142, change: "12% from last sem", type: "image" },
              { id: 2, title: "Tasks", count: 87, change: "5% from last sem", type: "simple" },
              { id: 3, title: "Completed", count: 45, change: "8% from last sem", type: "simple" },
              { id: 4, title: "Pending", count: 12, change: "2% from last sem", type: "simple" },
            ];
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

       {/*main*/}
      <div className="flex-1 w-full flex flex-col gap-6">
        
         <div className="px-8 bg-white border border-gray-200 h-16 flex justify-between items-center px-4">
            <h1 className="font-bold text-lg">Dashboard</h1>

            <Input type="submit" value="Search" className="w-48" />

            <div className="flex items-center gap-5">
                <BookOpenIcon className="h-6 w-6" />
                <BellIcon className="h-6 w-6 "/>
            </div>
        </div>

        <div className="px-4 sm:px-6 md:px-10 lg:px-16">
            <h1 className="lg:text-4xl md:3xl sm:2xl font-bold">Research Overview</h1>
            <div className="flex justify-between items-center ">
              <div className="flex flex-col gap-3">
                <p className="lg:text-lg md:base sm:base text-gray-700">Welcome back, Dr.Solomon.Here is the latest on the university research activities.</p>
              </div>
              <div className="flex flex-row gap-4 p-6">
                <Button className="w-20 h-16 bg-white border border-gray-200">Export Report</Button>
                <Button className="w-20 h-16 text-white bg-blue-600">New Grant</Button>
              </div>
            </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card) => (
                  <Card
                    key={card.id}
                    className="space-y-3 relative border border-gray-200 px-8 flex justify-between bg-white "
                  >
                    <CardDescription>
                      <p className="text-lg">{card.title}</p>
                      <p className="text-3xl font-semibold">{card.count}</p>
                      <p className="text-sm text-gray-500">{card.change}</p>
                    </CardDescription>

                    <Image
                      src="/folderreview.svg"
                      alt="folder"
                      width={50}
                      height={60}
                      className="absolute top-1 right-4"
                    />
                  </Card>
                ))}
              </div>

            <div className="flex flex-row gap-6 mt-5">
                {/* Smaller card: 37.5% */}
                <Card className="w-[50.5%] h-[200px] p-4 border border-gray-200 ">
                  <p className="text-lg font-semibold">Project Status Breakdown</p>
                  <div className="flex flex-col items-center">
                    <p className="text-center text-3xl font-bold">142</p>
                    <p className="text-sm text-gray-700">Total</p>
                  </div>
                  <div className="flex flex-row justify-between mt-4 text-gray-700">
                    <div className="flex flex-col items-center ">
                      <p>Active</p>
                      <p>(55%)</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p>Pending</p>
                      <p>(35%)</p>
                    </div>
                    <div className="flex flex-col items-center">
                       <p>Rejected</p>
                      <p>(15%)</p>
                    </div>
                  </div>
                </Card>

                {/* Larger card: rest of the space */}
                <Card className="flex-1 h-[200px] p-4 border border-gray-200">
                  <p className="text-lg font-semibold">Budget Breakdown</p>
                </Card>
              </div>


        </div>


      </div>

       
    </div>
 )}     
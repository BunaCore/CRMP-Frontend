
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription,CardHeader } from "@/components/ui/card";
import {ChartBarLabelCustom} from "@/components/barchart"
import Pending from "@/components/pending"
import Sidebar from "./sidebar";
import OverviewNav from "./overviewnav";
import Title from "./overviewcard";


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
      <Sidebar/>

       {/*main*/}
      <div className="flex-1 w-full flex flex-col gap-6">
        
         
        <OverviewNav/>


        <div className="px-4 sm:px-6 md:px-10 lg:px-16">
            
            <Title/>
            <div className="flex flex-row gap-6 mt-5">
                <div className="w-1/3 p-4 border border-gray-200 ">
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
                </div>

                {/* Larger card: rest of the space 
                <div className="  p-4 border border-gray-200">
                  <p className="text-lg font-semibold">Budget Breakdown</p>
                  <ChartBarLabelCustom/>
                </div>*/}
            </div>

          
            
          </div>


      </div>

       
    </div>
 )}     
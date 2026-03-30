"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription,CardHeader } from "@/components/ui/card";
import {ChartBarLabelCustom} from "@/components/barchart";
import { Link } from "lucide-react";
export default function SidebarDetail(){

    return(
         
        <div className="min-h-screen w-full bg-gray-50 grid gap-6 sm:grid-cols-12">
       
       <div className="sm:col-span-2">
        <div className="bg-white shadow-lg p-6 gap-4 h-full">
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
      </div>
    
    </div>
    );
}

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription,CardHeader } from "@/components/ui/card";
import {ChartBarLabelCustom} from "@/components/barchart";

export default function OverviewNav() {

 return(

     <div className="px-8 bg-white border border-gray-200 h-16 flex justify-between items-center px-4">
            <h1 className="font-bold text-lg">Dashboard</h1>

            <Input type="text" placeholder="Search" className="w-56 border border-gray-200 text-gray-200" />

            <div className="flex items-center gap-5">
                <BookOpenIcon className="h-6 w-6" />
                <BellIcon className="h-6 w-6 "/>
            </div>
        </div>
 )

}

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription,CardHeader } from "@/components/ui/card";

export default function Title(){

     const cards = [
    { id: 1, title: "Projects", count: 142, change: "12% from last sem" },
    { id: 2, title: "Tasks", count: 87, change: "5% from last sem" },
    { id: 3, title: "Completed", count: 45, change: "8% from last sem" },
    { id: 4, title: "Pending", count: 12, change: "2% from last sem" },
  ];
  return( 
      <div className="">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold -mb-7">
            Research Overview
            </h1>
            <div className="flex justify-between items-center -mt-6">
            <p className="lg:text-lg md:text-base sm:text-base text-gray-700 ">
                Welcome back, Dr.Solomon. Here is the latest on the university research activities.
            </p>

            <div className="flex flex-row gap-4 p-3">
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
    </div>
    )
 }

import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Bell } from "lucide-react";

export default function NavBudget() {


  return(

       <nav className="fixed flex items-center justify-between py-3 lg:px-20 md:px-10 top-0 w-full h-16 bg-white shadow-md">

            <li className="flex items-center gap-1">
                  <BookOpenIcon className="h-6 w-6 text-gray-700" />
                  <span className="text-black font-bold text-base">CRMP-ASTU</span>
            </li>

            <div className="flex items-center gap-8">

              {/* Always visible */}
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />

              {/* Always visible */}
              <div className="group relative">
                <Image
                  src="/ASTU.jpg"
                  alt="Astu"
                  width={30}
                  height={30}
                  className="rounded-full object-cover"
                />

                <div className="group-hover:block hidden absolute right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-gray-300 cursor-pointer text-gray-500 rounded">
                    <p className="text-black">settings</p>
                    <p className="text-black">Logout</p>
                  </div>
                </div>
              </div>
            </div>
             
            

       

       </nav>
)}
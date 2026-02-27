
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";


export default function NavSubmission() {


  return(

       <nav className="fixed flex items-center justify-between py-3 px-8 top-0 w-full h-16 bg-white shadow-md">

        
            <ul className="sm:flex gap-5 text-sm text-gray-700 cursor-pointer">

               <li className="flex items-center gap-1">
                <BookOpenIcon className="h-6 w-6 text-gray-700" />
                <span className="text-black font-bold text-base">CRMP-ASTU</span>
              </li>
              <li className="text-gray-600 text-base">Dashboard</li>
              <li className="text-gray-600 text-base">Projects</li>
              <li className="text-gray-600 text-base">Budget</li>
              <li className="text-gray-600 text-base">Report</li>

            </ul>

            <div className='flex items-center gap-6'>
            
             <div className="relative w-64">
                {/* Search icon */}
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />

                {/* Input field */}
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full h-10 pl-10 pr-3 border rounded-lg border-[#F8FBFC]  bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </div>
                <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
              

              <div className='group relative'>
                  <Image src="/ASTU.jpg" alt="Astu" width={30} height={30} className="rounded-full object-cover"/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-sky-400 cursor-pointer text-gray-500 rounded'>
                      <p className='cursor-pointer hover:text-black'>settings</p>
                      <p className='cursor-pointer hover:text-black'>Logout</p>
                  </div>

                </div>
              </div>
            </div>
             
            

       

       </nav>
)}
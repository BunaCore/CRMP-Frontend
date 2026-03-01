"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  name: string;
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
  universityId: string;
  department: string;
  role:string;

}

export default function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    universityId: "",
    department: "",
    role:"",
    
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password) {
      return setError("Name, email and password are required");
    }

    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }
    if (!formData.email.includes("@")) {
      return setError("Enter a valid email");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    console.log("User registered:", formData);
    setSuccess("Registration successful!");

    setFormData({
      name: "",
      firstName: "",
      email: "",
      password: "",
      confirmPassword: "",
      universityId: "",
      department: "",
      role:"",
     
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="sm:w-[400px] md:w-[500px] lg:w-[1000px] h-auto lg:h-[600px] border border-black bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">

        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/group.png"
            alt="SignUp Image"
            fill
            className="object-cover"
            
          />
           <div className="absolute bottom-8 left-6 text-white">
              
              <p className="mt-2 text-gray-500">Join the Adama Science and Technology University
                    research community Collaborate. innovate , and manage your projects efficiently</p>
            </div>

             <div className="absolute bottom-35 left-6 text-white">
              <p className="text-2xl font-bold   ">Advancing Science and Technolgy through collaboration</p>
            </div>

           <div className="absolute top-5 left-6 flex items-center gap-3 text-white">
              <Image
                src="/ASTU.jpg"
                alt="Astu"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <p className="text-base">CRMP ASTU</p>
            </div>
           </div>

        {/*form*/}

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6 lg:p-8">
          <div className="mb-4 text-center lg:text-left w-full">
            <h1 className="text-2xl font-bold mb-2">Join the Research Community</h1>
            
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md"
          >
            {/* Full Name */}
            <label className="flex flex-col w-full">
              <span className="text-gray-700 text-sm mb-1 font-bold">Full Name </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
              />
            </label>

            {/* Optional fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <label className="flex flex-col w-full">
                <span className="text-gray-700 text-sm mb-1 font-bold">Department</span>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full border p-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </label>
              <label className="flex flex-col w-full">
                <span className="text-gray-700 text-sm mb-1 font-bold">University ID</span>
                <input
                  type="text"
                  name="universityId"
                  value={formData.universityId}
                  onChange={handleChange}
                  className="w-full border p-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"/>
              </label>
            </div>

            {/* Email */}
            <label className="flex flex-col w-full">
              <span className="text-gray-700 text-sm mb-1 font-bold">Email </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
            </label>

            {/* Passwords */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col w-full">
                <span className="text-gray-700 text-sm mb-1 font-bold">Password </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border p-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </label>
              <label className="flex flex-col w-full">
                <span className="text-gray-700 text-sm mb-1 font-bold">Confirm Password </span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border p-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </label>
            </div>

            <label className="flex flex-col w-full">
              <span className="text-gray-700 text-sm mb-1 font-bold">Role</span>

             <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border h-10 p-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            >
               <option value="" disabled>
                Select role
              </option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="principal">Principal Investigator</option>
            </select>
            </label>


            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <button
              type="submit"
              className="w-full bg-[#13DAEC] p-2 rounded hover:opacity-75 mt-2"
            >
              Create Account
            </button>

            <div className="text-center text-base ">
              Already have an account?{" "}
              <Link href="/login" className="text-[#13DAEC] font-bold">
                Login
              </Link>
              <p  className="mt-2 text-gray-600 text-xs">By creating an account you agree to our terms & conditions and privacy policy</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
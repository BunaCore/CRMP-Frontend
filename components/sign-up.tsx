"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useUserStore from '@/store/userStore'


interface FormData {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  universityId: string;
  department: string;
  role:string;

}

export default function SignUpForm() {

  const { currentUser, loading, error, signInStart, signInSuccess, signInFailure } = useUserStore()
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    universityId: "",
    department: "",
    role:"",
    
  });

  const [formerror, setFormError] = useState<string>("");

 const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  // Clear previous errors
  setFormError("")

  // --- Local validation ---
  if (!formData.fullname || !formData.email || !formData.password) {
    return setFormError("Name, email and password are required")
  }

  if (formData.password.length < 6) {
    return setFormError("Password must be at least 6 characters")
  }

  if (!formData.email.includes("@")) {
    return setFormError("Enter a valid email")
  }

  if (formData.password !== formData.confirmPassword) {
    return setFormError("Passwords do not match")
  }

  // --- Global store: start loading ---
  signInStart()

  try {
    
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    const data = await res.json()

    if (!res.ok) {
      // Store API error in global state
      signInFailure(data.message || "Signup failed")
    } else {
      // Store user in global state
      signInSuccess(data.user)

      // Optionally reset the form
      setFormData({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        universityId: "",
        department: "",
        role: "",
      })

      // Optional: local success message
      setFormError("") // clear any previous form errors
      alert("Registration successful!")
    }
  } catch (err: any) {
    signInFailure(err.message || "Network error")
  }
}

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
                value={formData.fullname}
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
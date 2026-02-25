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
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    universityId: "",
    department: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-[1000px] h-auto lg:h-[600px] border border-black bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">

        
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/group.png"
            alt="SignUp Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6 lg:p-8">
          <div className="mb-6 text-center lg:text-left w-full">
            <h1 className="text-2xl font-bold mb-2">Join the research community</h1>
            <p className="text-gray-600 text-base">Create your account for the ASTU CRMP</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full max-w-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg shadow bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13DAEC]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <input
                type="text"
                name="department"
                placeholder="Department (optional)"
                value={formData.department}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg shadow bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13DAEC]"
              />
              <input
                type="text"
                name="universityId"
                placeholder="University ID (optional)"
                value={formData.universityId}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg shadow bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13DAEC]"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg shadow bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13DAEC]"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg shadow bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13DAEC]"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg shadow bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#13DAEC]"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <button
              type="submit"
              className="w-full bg-[#13DAEC] p-3 rounded hover:opacity-75 mt-2"
            >
              Create Account
            </button>

            <div className="text-center text-base mt-3">
              Already have an account?{" "}
              <Link href="/login" className="text-[#13DAEC]">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
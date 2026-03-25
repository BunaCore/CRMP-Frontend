"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useUserStore from "@/store/userStore";

interface FormData {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  universityId: string;
  department: string;
  role: string;
}

export default function SignUpForm() {
  const { error, signInStart, signInSuccess, signInFailure } = useUserStore();

  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    universityId: "",
    department: "",
    role: "",
  });

  const [formError, setFormError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormError("");

    if (!formData.fullname || !formData.email || !formData.password) {
      return setFormError("Name, email and password are required");
    }

    if (formData.password.length < 6) {
      return setFormError("Password must be at least 6 characters");
    }

    if (!formData.email.includes("@")) {
      return setFormError("Enter a valid email");
    }

    if (formData.password !== formData.confirmPassword) {
      return setFormError("Passwords do not match");
    }

    signInStart();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        signInFailure(data.message || "Signup failed");
      } else {
        signInSuccess(data.user);

        setFormData({
          fullname: "",
          email: "",
          password: "",
          confirmPassword: "",
          universityId: "",
          department: "",
          role: "",
        });

        setFormError("");
        alert("Registration successful!");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error";
      signInFailure(message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="sm:w-[400px] md:w-[500px] lg:w-[1000px] border border-black bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
        
        {/* Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/group.png"
            alt="SignUp Image"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-8 left-6 text-white">
            <p className="mt-2 text-gray-200">
              Join the ASTU research community. Collaborate and innovate.
            </p>
          </div>

          <div className="absolute bottom-32 left-6 text-white">
            <p className="text-2xl font-bold">
              Advancing Science through collaboration
            </p>
          </div>

          <div className="absolute top-5 left-6 flex items-center gap-3 text-white">
            <Image
              src="/ASTU.jpg"
              alt="Astu"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <p>CRMP ASTU</p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-8">
          <h1 className="text-2xl font-bold mb-4">
            Join the Research Community
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              type="text"
              name="universityId"
              placeholder="University ID"
              value={formData.universityId}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="">Select role</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="principal">Principal Investigator</option>
            </select>

            {(formError || error) && (
              <p className="text-red-500 text-sm">
                {formError || error}
              </p>
            )}

            <button
              type="submit"
              className="bg-[#13DAEC] p-2 rounded"
            >
              Create Account
            </button>

            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-[#13DAEC] font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
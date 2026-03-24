"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useUserStore from "@/store/userStore";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

  const [formerror, setFormError] = useState("");

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

        alert("Registration successful!");
      }
    } catch (err: any) {
      signInFailure(err.message || "Network error");
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <Card className="md:w-[740px] w-full overflow-hidden grid md:grid-cols-2 py-0">

        {/* Left Image */}
      <div className="hidden md:block relative h-full bg-muted">
            <img
              src="/group.png"
              alt="signup"
              className="absolute h-full w-full object-cover"
            />
      <div className="absolute top-0 left-0 p-6 text-white flex items-center gap-3">
            <Image
              src="/ASTU.jpg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <h1 className="font-semibold text-lg">CRMP ASTU</h1>
          </div>

          {/* Bottom text */}
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-lg font-semibold">
              Advancing Science and Technology Through Collaboration
            </h1>

            <p className="text-sm text-gray-400 mt-2">
              Join the Adama Science and Technology University research community.
              Collaborate, innovate, and manage your projects efficiently.
            </p>
          </div>
      </div>

        {/* Form */}
        <div className="flex flex-col p-6 lg:p-8 pr-8 lg:pr-12">
          
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
              <CardContent className="space-y-4 p-0">
               <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold">Join the Research Community</CardTitle>
              </CardHeader>

             
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </div>

              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Department</Label>
                  <Input
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>University ID</Label>
                  <Input
                    name="universityId"
                    value={formData.universityId}
                    onChange={handleChange}
                    className="border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  />
                </div>
              </div>

            
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </div>

              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Role</Label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] h-10 px-3"
                >
                  <option value="">Select role</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="principal">Principal Investigator</option>
                </select>
              </div>

              {(formerror || error) && (
                <p className="text-red-500 text-sm">{formerror || error}</p>
              )}

            </CardContent>

            <CardFooter className="flex flex-col gap-2 pt-4">
              <Button type="submit" className="bg-[#13DAEC] w-full">
                Create Account
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-[#13DAEC] font-medium">
                  Login
                </Link>
              </p>
            </CardFooter>
          </form>
        </div>
      </Card>
    </div>
  );
}
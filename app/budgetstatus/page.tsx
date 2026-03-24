"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  Download,
  ChevronDown,
  Upload,
  Send,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Landmark,
  PiggyBank,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function BudgetModule() {
  // 1. State for Filtering
  const [activeTab, setActiveTab] = useState("All Transactions");

  // 2. Transaction Data
  const transactions = [
    {
      date: "Oct 24, 2023",
      desc: "Field Research Equipment",
      cat: "Equipment",
      amt: "45,000.00",
      status: "Approved",
    },
    {
      date: "Oct 20, 2023",
      desc: "Survey Team Transport",
      cat: "Travel",
      amt: "12,500.00",
      status: "Pending",
    },
    {
      date: "Oct 15, 2023",
      desc: "Lab Consumables",
      cat: "Supplies",
      amt: "8,200.00",
      status: "Approved",
    },
    {
      date: "Oct 12, 2023",
      desc: "Data Analysis Software",
      cat: "Software",
      amt: "25,000.00",
      status: "Rejected",
    },
    {
      date: "Oct 10, 2023",
      desc: "Cloud Storage Subscription",
      cat: "Software",
      amt: "1,200.00",
      status: "Approved",
    },
    {
      date: "Oct 05, 2023",
      desc: "Local Guide Stipend",
      cat: "Personnel",
      amt: "5,000.00",
      status: "Pending",
    },
  ];

  // 3. Filter Logic
  const filteredTransactions = transactions.filter((item) => {
    if (activeTab === "All Transactions") return true;
    if (activeTab === "Pending Approval") return item.status === "Pending";
    if (activeTab === "Rejected") return item.status === "Rejected";
    return true;
  });

  const kpis: {
    label: string;
    val: string;
    sub: string;
    icon: LucideIcon;
    color: "blue" | "orange" | "emerald";
    isTrend?: boolean;
    isProgress?: boolean;
  }[] = [
    {
      label: "Total Grant Allocated",
      val: "ETB 500,000",
      sub: "Fiscal Year 2023-2024",
      icon: Landmark,
      color: "blue",
    },
    {
      label: "Total Funds Spent",
      val: "ETB 320,000",
      sub: "+15% from last month",
      icon: ShoppingCart,
      color: "orange",
      isTrend: true,
    },
    {
      label: "Remaining Balance",
      val: "ETB 180,000",
      sub: "36% Remaining",
      icon: PiggyBank,
      color: "emerald",
      isProgress: true,
    },
  ];

  const kpiColorClass: Record<"blue" | "orange" | "emerald", string> = {
    blue: "bg-blue-50 text-blue-500",
    orange: "bg-orange-50 text-orange-500",
    emerald: "bg-emerald-50 text-emerald-500",
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] antialiased font-sans">
      <nav className="flex items-center justify-between px-6 py-2 bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="ASTU CRMP Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded"
            />
            <span className="text-[17px] font-bold tracking-tight text-[#0F172A]">
              CRMP - ASTU
            </span>
          </div>
          <div className="flex gap-8 text-[13px] font-medium text-slate-500">
            <span className="cursor-pointer hover:text-blue-600">
              Dashboard
            </span>
            <span className="cursor-pointer hover:text-blue-600">Projects</span>
            <span className="text-[#007AFF] font-bold relative after:content-[''] after:absolute after:-bottom-[14px] after:left-0 after:w-full after:h-[2.5px] after:bg-[#007AFF]">
              Budget
            </span>
            <span className="cursor-pointer hover:text-blue-600">Reports</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search..."
              className="bg-[#F1F5F9] border-none rounded-lg py-1.5 pl-10 pr-4 text-xs w-[220px] focus-visible:ring-1 focus-visible:ring-blue-500 transition-all outline-none h-8"
            />
          </div>
          <div className="relative cursor-pointer">
            <Bell className="w-5 h-5 text-slate-400" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#007AFF] rounded-full border-2 border-white" />
          </div>
          <div className="w-8 h-8 rounded-full bg-[#FFD1B9] border border-white shadow-sm ring-1 ring-slate-100" />
        </div>
      </nav>

      <main className="max-w-[1360px] mx-auto px-10 py-8">
        {/* Header Section */}
        <div className="flex items-end justify-between mb-8">
          <div className="space-y-1">
            <h1 className="text-[32px] font-extrabold tracking-tight text-[#0F172A]">
              Budget Module
            </h1>
            <p className="text-[14px] text-slate-500 font-medium">
              Manage project funds, track utilization, and submit new budget
              requests for
              <span className="ml-1 font-bold text-[#007AFF] cursor-pointer">
                AI for Agriculture in Rift Valley
              </span>
              .
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="h-10 px-4 font-bold text-slate-700 bg-white border-slate-200 rounded-xl shadow-sm"
            >
              Active Project A{" "}
              <ChevronDown className="ml-10 h-4 w-4 text-slate-400" />
            </Button>
            <Button
              variant="outline"
              className="h-10 px-4 font-bold text-slate-700 bg-white border-slate-200 rounded-xl shadow-sm"
            >
              <Download className="mr-2 h-4 w-4" /> Export Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;

            return (
              <Card
                key={idx}
                className="border-none shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] bg-white overflow-hidden rounded-2xl"
              >
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg ${kpiColorClass[kpi.color]}`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      {kpi.label}
                    </span>
                  </div>
                  <div className="text-[26px] font-black text-[#0F172A] mb-1">
                    {kpi.val}
                  </div>

                  {kpi.isProgress ? (
                    <div className="mt-4">
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[36%]" />
                      </div>
                      <p className="mt-2 text-[10px] font-bold text-right text-slate-400 uppercase">
                        {kpi.sub}
                      </p>
                    </div>
                  ) : (
                    <p
                      className={`text-[11px] font-bold ${kpi.isTrend ? "text-emerald-500" : "text-slate-400"}`}
                    >
                      {kpi.sub}
                    </p>
                  )}
                  <div className="absolute -right-2 -bottom-2 opacity-[0.03] text-slate-900 pointer-events-none">
                    <Icon className="w-20 h-20 rotate-12" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[18px] font-bold text-[#0F172A]">
                Expense History
              </h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-[11px] font-bold text-slate-500 border-slate-200"
                >
                  Filter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-[11px] font-bold text-slate-500 border-slate-200"
                >
                  Sort
                </Button>
              </div>
            </div>

            <Card className="border-none shadow-[0_2px_10px_-3px_rgba(0,0,0,0.04)] bg-white rounded-2xl overflow-hidden">
              {/* Functional Tabs */}
              <div className="flex border-b border-slate-50 px-4 bg-white">
                {["All Transactions", "Pending Approval", "Rejected"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-4 text-[13px] font-bold transition-all ${
                        activeTab === tab
                          ? "text-[#007AFF] border-b-2 border-[#007AFF]"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {tab}
                    </button>
                  ),
                )}
              </div>

              <Table>
                <TableHeader className="bg-[#FBFCFD]">
                  <TableRow className="border-b border-slate-100/50">
                    <TableHead className="text-[10px] font-bold uppercase text-slate-400 px-6 tracking-widest h-10">
                      Date
                    </TableHead>
                    <TableHead className="text-[10px] font-bold uppercase text-slate-400 tracking-widest h-10">
                      Description
                    </TableHead>
                    <TableHead className="text-[10px] font-bold uppercase text-slate-400 tracking-widest h-10">
                      Category
                    </TableHead>
                    <TableHead className="text-[10px] font-bold uppercase text-slate-400 tracking-widest h-10">
                      Amount (ETB)
                    </TableHead>
                    <TableHead className="text-[10px] font-bold uppercase text-slate-400 text-center tracking-widest h-10">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((row, i) => (
                    <TableRow
                      key={i}
                      className="border-b border-slate-50/50 hover:bg-slate-50/30 transition-colors"
                    >
                      <TableCell className="px-6 py-4 text-[13px] font-medium text-slate-400">
                        {row.date}
                      </TableCell>
                      <TableCell className="text-[13px] font-bold text-[#1E293B]">
                        {row.desc}
                      </TableCell>
                      <TableCell className="text-[13px] font-semibold text-[#007AFF]">
                        {row.cat}
                      </TableCell>
                      <TableCell className="text-[13px] font-black text-[#1E293B]">
                        {row.amt}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          className={`rounded-full px-3 py-1 text-[10px] font-bold border-none shadow-none inline-flex items-center gap-1.5 ${
                            row.status === "Approved"
                              ? "bg-[#E6F9F1] text-[#10B981]"
                              : row.status === "Pending"
                                ? "bg-[#FFF9E6] text-[#F59E0B]"
                                : "bg-[#FFF0F0] text-[#EF4444]"
                          }`}
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredTransactions.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center py-10 text-slate-400 italic"
                      >
                        No transactions found for this category.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              <div className="flex items-center justify-between px-6 py-4 border-t border-slate-50">
                <span className="text-[12px] text-slate-400 italic font-medium">
                  Showing {filteredTransactions.length} of {transactions.length}{" "}
                  transactions
                </span>
                <div className="flex gap-1.5">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 rounded-md border-slate-200"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-400" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 rounded-md border-slate-200"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* New Budget Request */}
          <div className="col-span-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[18px] font-bold text-[#0F172A]">
                New Budget Request
              </h2>
              <Badge className="bg-[#FFF9E6] text-[#F59E0B] text-[10px] px-2 py-0 border-none font-bold rounded">
                Draft
              </Badge>
            </div>
            <Card className="border-none shadow-[0_4px_15px_-3px_rgba(0,0,0,0.06)] bg-white rounded-2xl">
              <CardContent className="p-6 space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-700">
                    Request Title
                  </label>
                  <Input
                    placeholder="e.g. Conference Travel - Addis Ababa"
                    className="h-11 bg-[#F8FAFC] border-slate-100 text-[13px] placeholder:text-slate-300 rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-700">
                    Total Amount (ETB)
                  </label>
                  <Input
                    placeholder="0.00"
                    className="h-11 bg-[#F8FAFC] border-slate-100 text-[13px] font-bold rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-700">
                    Justification
                  </label>
                  <textarea
                    className="w-full min-h-[100px] bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 text-[13px] focus:outline-none placeholder:text-slate-300 shadow-inner"
                    placeholder="Explain why this expense is necessary..."
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-slate-700">
                    Attachments
                  </label>
                  <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed rounded-xl border-slate-100 bg-[#F8FAFC] group hover:bg-blue-50/50 transition-colors">
                    <Upload className="w-5 h-5 mb-2 text-[#007AFF]" />
                    <span className="text-[11px] text-slate-400 font-bold px-4 text-center">
                      Click to upload or drag and drop
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 h-11 text-slate-700 font-bold border-slate-200 rounded-xl"
                  >
                    Save Draft
                  </Button>
                  <Button className="flex-1 h-11 bg-[#007AFF] hover:bg-blue-600 font-bold gap-2 rounded-xl">
                    Submit <Send className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

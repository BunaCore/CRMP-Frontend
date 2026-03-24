"use client";

import { useState } from "react";
import { Trash2, Plus } from "lucide-react";
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";

interface BudgetItem {
  id: string;
  description: string;
  category: string;
  unitCost: number;
  qty: number;
}

export default function BudgetPage() {
  const [items, setItems] = useState<BudgetItem[]>([
    {
      id: "1",
      description: "Principal Investigator",
      category: "Personnel",
      unitCost: 5000,
      qty: 1,
    },
    {
      id: "2",
      description: "NVIDIA A100 GPU Workstation",
      category: "Equipment",
      unitCost: 12000,
      qty: 2,
    },
    {
      id: "3",
      description: "Field survey and international conference",
      category: "Travel",
      unitCost: 4500,
      qty: 3,
    },
  ]);

  const calculateTotal = (unitCost: number, qty: number) =>
    (unitCost * qty).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const calculateProjectBudget = () =>
    items
      .reduce((sum, item) => sum + item.unitCost * item.qty, 0)
      .toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

  const handleAddRow = () => {
    setItems([
      ...items,
      {
        id: Date.now().toString(),
        description: "",
        category: "Category",
        unitCost: 0,
        qty: 0,
      },
    ]);
  };

  const handleDeleteRow = (id: string) =>
    setItems(items.filter((item) => item.id !== id));

  const handleItemChange = (
    id: string,
    field: keyof BudgetItem,
    value: string | number,
  ) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Personnel":
        return "bg-cyan-50 text-cyan-600";
      case "Equipment":
        return "bg-slate-100 text-slate-600";
      case "Travel":
        return "bg-green-50 text-green-600";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  const steps = [
    { number: 1, label: "Draft", href: "/draft", active: false },
    { number: 2, label: "Team", href: "/team", active: false },
    { number: 3, label: "Budget", href: "/budget", active: true },
    { number: 4, label: "Review", href: "/revieww", active: false },
  ];

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-5xl mx-auto flex flex-col gap-5">
            {/* Stepper */}
            <div className="w-full bg-white rounded-lg shadow-sm border overflow-x-auto mb-8">
              <div className="flex min-w-max">
                {steps.map((step) => (
                  <Link
                    href={step.href}
                    key={step.number}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-3 min-w-[100px] border-b-3 ${
                      step.active
                        ? "border-primary bg-primary/5"
                        : "border-transparent hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${
                        step.active
                          ? "bg-primary text-white"
                          : "bg-[#cfdbe7] text-[#4c739a]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <p
                      className={`text-xs font-semibold tracking-[0.015em] ${step.active ? "text-primary" : "text-[#4c739a]"}`}
                    >
                      {step.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Title & Budget Summary */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-6 gap-4 lg:gap-0">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 leading-none">
                  Financial Planning
                </h1>
                <p className="text-sm sm:text-base text-slate-500">
                  Detail your resource requirements and justify institutional
                  funding.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-5 w-full sm:w-[260px]">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  TOTAL PROJECT BUDGET
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                    ${calculateProjectBudget()}
                  </span>
                  <span className="text-[13px] font-bold text-emerald-500">
                    ~USD
                  </span>
                </div>
              </div>
            </div>

            {/* Budget Table */}
            <div className="overflow-x-auto bg-white rounded-t-xl rounded-b-md border border-gray-200 mb-6">
              <table className="w-full text-[14px] text-left min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-4 sm:px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      Description
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      Category
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      Unit Cost ($)
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      Qty
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      Total ($)
                    </th>
                    <th className="px-2 sm:px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 group">
                      <td className="px-4 sm:px-6 py-2">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) =>
                            handleItemChange(
                              item.id,
                              "description",
                              e.target.value,
                            )
                          }
                          className="w-full text-slate-700 bg-transparent border-none outline-none focus:ring-0 p-0 font-medium"
                          placeholder="Enter description..."
                        />
                      </td>
                      <td className="px-4 sm:px-6 py-2">
                        <select
                          value={item.category}
                          onChange={(e) =>
                            handleItemChange(
                              item.id,
                              "category",
                              e.target.value,
                            )
                          }
                          className={`appearance-none text-[12px] font-bold py-1.5 pl-2 pr-6 rounded-md border-none outline-none cursor-pointer focus:ring-0 ${getCategoryColor(item.category)}`}
                        >
                          <option value="Personnel">Personnel</option>
                          <option value="Equipment">Equipment</option>
                          <option value="Travel">Travel</option>
                          <option value="Other">Other</option>
                        </select>
                      </td>
                      <td className="px-4 sm:px-6 py-2">
                        <input
                          type="number"
                          value={item.unitCost || ""}
                          onChange={(e) =>
                            handleItemChange(
                              item.id,
                              "unitCost",
                              parseFloat(e.target.value) || 0,
                            )
                          }
                          className="w-full text-slate-600 font-medium bg-transparent border-none outline-none focus:ring-0 p-0"
                        />
                      </td>
                      <td className="px-4 sm:px-6 py-2">
                        <input
                          type="number"
                          value={item.qty || ""}
                          onChange={(e) =>
                            handleItemChange(
                              item.id,
                              "qty",
                              parseInt(e.target.value) || 0,
                            )
                          }
                          className="w-full text-slate-600 font-medium bg-transparent border-none outline-none focus:ring-0 p-0"
                        />
                      </td>
                      <td className="px-4 sm:px-6 py-2 font-bold text-slate-900">
                        {calculateTotal(item.unitCost, item.qty)}
                      </td>
                      <td className="px-2 sm:px-4 py-2 text-center">
                        <button
                          onClick={() => handleDeleteRow(item.id)}
                          className="text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2
                            className="w-4 sm:w-5 h-4 sm:h-5"
                            strokeWidth={2}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-10">
              <button
                onClick={handleAddRow}
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors text-[15px] font-semibold"
              >
                <Plus className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={2.5} />
                Add Row
              </button>

              <div className="flex items-center gap-4 sm:gap-6">
                <button className="text-slate-500 font-bold hover:text-slate-700 transition-colors text-[15px]">
                  Save Draft
                </button>
                <Link href="/review">
                  <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold text-[15px] shadow-sm h-[46px] px-6 sm:px-8 rounded-xl transition-colors">
                    Save & Continue →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

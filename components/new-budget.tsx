"use client";

import { useState } from "react";
import Image from "next/image";
import Stepper from "@/components/stepper";
import Table from "@/components/table-budget";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewBudget() {
  const [rows, setRows] = useState([
    { description: "", category: "", unitCost: 0, qty: 0, total: 0 },
  ]);

  const [grandTotal, setGrandTotal] = useState(0);

  const addRow = () => {
    setRows([
      ...rows,
      { description: "", category: "", unitCost: 0, qty: 0, total: 0 },
    ]);
  };

  const handleSave = async (status: "draft" | "submitted") => {
    try {
      const res = await fetch("/api/budget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rows, status }),
      });

      if (!res.ok) throw new Error("Failed to save budget");
      const data = await res.json();
      console.log("Saved:", data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-10 lg:px-16 pt-24 pb-10 overflow-x-hidden">

      {/* Stepper */}
      <div className="w-full mb-6">
        <Stepper activeStep="Budget" />
      </div>

      {/* Financial Planning + Budget Card */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Financial Planning
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Detail your resource requirement and justify institutional funding.
          </p>
        </div>

        <div className="flex-shrink-0 flex flex-col items-center justify-center py-4 px-4 w-full sm:w-72 bg-white rounded-md border border-[#13DAEC]">
          <p className="text-gray-500 text-sm sm:text-base">Total Project Budget</p>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1">
            {grandTotal.toFixed(2)} ETB
          </h1>
        </div>

      </div>

      {/* Table */}
      <div className="flex flex-col gap-6 mt-4 w-full">

        <Table rows={rows} setRows={setRows} onTotalChange={setGrandTotal} />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">

          <Button
            onClick={addRow}
            className="flex items-center justify-center h-10 gap-2 bg-gray-200 px-4 py-2 rounded-md w-full sm:w-auto"
          >
            <Plus size={18} />
            Add Row
          </Button>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

            <Button
              onClick={() => handleSave("draft")}
              className="bg-gray-200 px-4 py-2 rounded-md w-full h-10 sm:w-auto"
            >
              Save Draft
            </Button>

            <Button
              onClick={() => handleSave("submitted")}
              className="bg-[#13DAEC] px-4 py-2 rounded-md w-full h-10 sm:w-auto"
            >
              Save & Continue
            </Button>

          </div>

        </div>
      </div>

      {/* Bottom Guidelines */}
      <div className="bg-sky-100 rounded-2xl p-4 sm:p-6 lg:p-10 mt-6">

        <div className="flex items-center gap-3 mb-2">
          <Image src="/alert.svg" alt="alert" width={28} height={28} />
          <h1 className="text-base sm:text-lg text-[#026CCF]">Budget Guidelines</h1>
        </div>

        <p className="text-gray-700 text-sm sm:text-base">
          Total institutional funding can't exceed 50,000 ETB for standard
          research grants. For equipment over 10,000 ETB, please ensure a
          separate justification document is uploaded in step 4.
        </p>

      </div>
    </div>
  );
}
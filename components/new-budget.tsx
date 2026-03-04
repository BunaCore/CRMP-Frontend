"use client";

import { useState } from "react";
import Image from "next/image";
import Stepper from "@/components/stepper";
import Table from "@/components/table-budget";
import { Plus } from "lucide-react";

export default function NewBudget() {
  const [rows, setRows] = useState([
    { description: "", category: "", unitCost: 0, qty: 0, total: 0 },
  ]);

  const [grandTotal, setGrandTotal] = useState(0);

  const addRow = () => {
    setRows([...rows, { description: "", category: "", unitCost: 0, qty: 0, total: 0 }]);
  };

   const handleSave = async (status: "draft" | "submitted") => {
   try {
    const res = await fetch("/api/budget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rows,
        status,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to save budget");
    }

    const data = await res.json();
    console.log("Saved:", data);

  } catch (err) {
    console.error(err);
  }
};
  const handleSubmit = async () => {
  try {
    const res = await fetch("/api/budget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rows }),
    });

    if (!res.ok) {
      throw new Error("Submission failed");
    }

    const data = await res.json();
    console.log("Success:", data);

  } catch (err) {
    console.error(err);
  }
};
 


  return (
    <div className="flex flex-col gap-6 px-6 pt-30 pb-10">
      <div className="px-20 mb-8">
        <Stepper activeStep="Budget" />
      </div>

      {/* Financial Planning + Budget Card */}
      <div className="px-20 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="lg:text-4xl text-2xl font-bold mb-3">Financial Planning</h1>
          <p className="text-gray-500 lg:text-base text-sm">
            Detail your resource requirement and justify institutional funding.
          </p>
        </div>

        <div className="flex flex-col items-center py-3 px-1 w-60 h-25 bg-white rounded-md border border-[#13DAEC]">
          <p className="text-gray-500 text-base">Total Project Budget</p>
          <h1 className="text-3xl font-bold">{grandTotal.toFixed(2)} ETB</h1>
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col gap-6 px-20 mt-5">
        <Table rows={rows} setRows={setRows} onTotalChange={setGrandTotal} />

        <div className="flex justify-between mt-8">
          <button
            onClick={addRow}
            className="flex items-center w-32 h-15 gap-2 bg-gray-200 px-4 py-2 rounded-md cursor-pointer"
          >
            <Plus size={20} />
            Add Row
          </button>

          <div className="flex gap-4">
            <button onClick={() => handleSave("draft")} className="w-32 h-15 bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
              Save Draft
            </button>
            <button onClick={() => handleSave("submitted")} className="w-32 h-15 bg-[#13DAEC] px-4 py-2 rounded-md cursor-pointer">
              Save & Continue
            </button>
          </div>
        </div>
      </div>

      {/* Bottom div */}
      <div className="mx-20 bg-sky-100 rounded-2xl px-20 py-6 my-5">
        <div className="flex items-center gap-3 mb-2">
          <Image src="/alert.svg" alt="alert" width={30} height={30} />
          <h1 className="text-lg text-[#026CCF]">Budget Guidelines</h1>
        </div>

        <p className="text-gray-700">
          Total institutional funding can't exceed 50,000 ETB for standard research grants.
          For equipment over 10,000 ETB, please ensure a separate justification document is uploaded in step 4.
        </p>
      </div>
    </div>
  );
}
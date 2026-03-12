"use client";

import { useState } from "react";
import Image from "next/image";
import Stepper from "@/components/stepper";
import Table from "@/components/table-budget";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-12 lg:px-20 lg:pb-10">
      
      {/* Stepper */}
      <div className="mb-6 md:pt-30">
        <Stepper activeStep="Budget" />
      </div>

      {/* Financial Planning + Budget Card */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col">
          <h1 className="lg:text-5xl md:text-4xl sm:text-2xl font-bold mb-2 sm:mb-3">
            Financial Planning
          </h1>
          <p className="text-gray-500 lg:text-lg md:text-base sm:text-sm">
            Detail your resource requirement and justify institutional funding.
          </p>
        </div>

        <Card className="flex flex-col items-center py-3 px-4 w-full md:w-60 h-25 border-[#13DAEC]">
          <CardContent className="text-center">
            <p className="text-gray-500 text-base">Total Project Budget</p>
            <h1 className="text-3xl font-bold">{grandTotal.toFixed(2)} ETB</h1>
          </CardContent>
        </Card>
      </div>

      {/* Table and Actions */}
      <div className="flex flex-col gap-6 mt-5">
        <Table rows={rows} setRows={setRows} onTotalChange={setGrandTotal} />

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 w-full sm:w-auto"
            onClick={addRow}
          >
            <Plus size={20} />
            Add Row
          </Button>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => handleSave("draft")}>
              Save Draft
            </Button>
            <Button
              size="lg"
              className="bg-[#13DAEC] text-white hover:bg-[#0fb5d6] w-full sm:w-auto"
              onClick={() => handleSave("submitted")}
            >
              Save & Continue
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Guidelines */}
      <Card className="bg-sky-100 rounded-2xl px-4 sm:px-6 md:px-8">
        <CardHeader className="flex items-center gap-3">
          <Image src="/alert.svg" alt="alert" width={30} height={30} />
          <CardTitle className="text-lg text-[#026CCF]">Budget Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 text-sm sm:text-base">
            Total institutional funding can't exceed 50,000 ETB for standard research grants.
            For equipment over 10,000 ETB, please ensure a separate justification document is uploaded in step 4.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
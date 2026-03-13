"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Row {
  description: string;
  category: string;
  unitCost: number;
  qty: number;
  total: number;
}

interface TableProps {
  rows: Row[];
  setRows: React.Dispatch<React.SetStateAction<Row[]>>;
  onTotalChange?: (total: number) => void; // new prop for total
}

export default function Table({ rows, setRows, onTotalChange }: TableProps) {
  const handleChange = (index: number, field: keyof Row, value: string | number) => {
    const updatedRows = [...rows];
    if (field === "unitCost" || field === "qty") {
      updatedRows[index][field] = Number(value);
    } else {
      updatedRows[index][field] = value as string;
    }
    updatedRows[index].total = updatedRows[index].unitCost * updatedRows[index].qty;
    setRows(updatedRows);

    // calculate grand total and send it out
    const grandTotal = updatedRows.reduce((sum, row) => sum + row.total, 0);
    if (onTotalChange) onTotalChange(grandTotal);
  };

  const deleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);

    const grandTotal = updatedRows.reduce((sum, row) => sum + row.total, 0);
    if (onTotalChange) onTotalChange(grandTotal);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto border border-gray-200 ">
      <table className="w-full table-fixed border-collapse">
       <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-3 px-4 text-center hidden sm:table-cell">Description</th>
            <th className="py-3 px-4 text-center">Category</th>
            <th className="py-3 px-4 text-center">Unit Cost</th>
            <th className="py-3 px-4 text-center hidden sm:table-cell">Qty</th>
            <th className="py-3 px-4 text-center">Total</th>
            <th className="py-3 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4 hidden sm:table-cell">
                <Input
                  type="text"
                  value={row.description}
                  onChange={(e) => handleChange(index, "description", e.target.value)}
                  className="w-full border border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] px-2 py-1"
                />
              </td>
              <td className="py-3 px-4">
                <select
                  value={row.category}
                  onChange={(e) => handleChange(index, "category", e.target.value)}
                  className="w-full border px-2 py-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                >
                  <option value="">Select</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Consumable">Consumable</option>
                  <option value="Software">Software</option>
                  <option value="Other">Other</option>
                </select>
              </td>
              <td className="py-3 px-4">
                <Input
                  type="number"
                  value={row.unitCost}
                  onChange={(e) => handleChange(index, "unitCost", e.target.value)}
                  className="w-full border px-2 py-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  min={0}
                />
              </td>
              <td className="py-3 px-4 hidden sm:table-cell">
                <Input
                  type="number"
                  value={row.qty}
                  onChange={(e) => handleChange(index, "qty", e.target.value)}
                  className="w-full  border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] px-2 py-1"
                  min={0}
                />
              </td>
              <td className="py-2 px-4 text-center font-medium">{row.total.toFixed(2)}</td>
              <td className="py-2 px-4 text-center">
                <Button
                  onClick={() => deleteRow(index)}
                  className="bg-[#13DAEC]  px-2 py-1 rounded"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
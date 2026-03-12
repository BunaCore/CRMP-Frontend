import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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
  onTotalChange?: (total: number) => void;
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
    <div className="bg-white rounded-lg shadow overflow-x-auto border border-gray-200">
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
                  value={row.description}
                  onChange={(e) => handleChange(index, "description", e.target.value)}
                  className="w-full border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                  placeholder="Description"
                />
              </td>
              <td className="py-3 px-4">
                <Select
                  value={row.category}
                  onValueChange={(val) => handleChange(index, "category", val)}
                >
                  <SelectTrigger className="w-full border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    side="bottom"
                    className="bg-gray-100"
                  >
                    <SelectItem value="Equipment">Equipment</SelectItem>
                    <SelectItem value="Consumable">Consumable</SelectItem>
                    <SelectItem value="Software">Software</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </td>
              <td className="py-3 px-4">
                <Input
                  type="number"
                  value={row.unitCost}
                  onChange={(e) => handleChange(index, "unitCost", e.target.value)}
                  min={0}
                  className="w-full border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </td>
              <td className="py-3 px-4 hidden sm:table-cell">
                <Input
                  type="number"
                  value={row.qty}
                  onChange={(e) => handleChange(index, "qty", e.target.value)}
                  min={0}
                  className="w-full border-[#F8FBFC] rounded-lg shadow-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </td>
              <td className="py-2 px-4 text-center font-medium">{row.total.toFixed(2)}</td>
              <td className="py-2 px-4 text-center">
                <Button
                  className="bg-[#13DAEC] text-white hover:bg-[#0fb5d6]"
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteRow(index)}
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
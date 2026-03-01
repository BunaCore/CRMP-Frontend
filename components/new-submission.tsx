"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewSubmission() {
  const [activeTab, setActiveTab] = useState("all");
  const [sortField, setSortField] = useState("");
  const [fileName, setFileName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const exampleData = [
    { date: "2026-02-20", description: "Lab materials", category: "Supplies", amount: 2500, status: "Approved" },
    { date: "2026-02-21", description: "Travel reimbursement", category: "Transport", amount: 1500, status: "Pending" },
    { date: "2026-02-22", description: "Software license", category: "Software", amount: 3000, status: "Approved" },
    { date: "2026-02-23", description: "Conference registration", category: "Events", amount: 2000, status: "Rejected" },
    { date: "2026-02-24", description: "Office supplies", category: "Supplies", amount: 800, status: "Pending" },
    { date: "2026-02-25", description: "Workshop materials", category: "Supplies", amount: 1200, status: "Approved" },
    { date: "2026-02-26", description: "Online course", category: "Education", amount: 500, status: "Pending" },
  ];

  const handleFile = (file) => {
    if (!file) return;
    setFileName(file.name);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const filteredData = exampleData.filter((row) => {
    if (activeTab === "all") return true;
    if (activeTab === "pending") return row.status.toLowerCase() === "pending";
    if (activeTab === "approved") return row.status.toLowerCase() === "approved";
    return true;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    if (sortField === "amount") return b.amount - a.amount;
    if (sortField === "date") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  const totalRows = sortedData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="min-h-screen w-full bg-sky-50 px-4 sm:px-8 pt-30">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h1 className="lg:text-4xl text-xl font-bold mb-2">Budget Module</h1>
          <p className="text-muted-foreground lg:text-xl text-base">
            Manage project funds, track utilization, and submit new budget requests
            for <span className="text-sky-400">"AI for Agriculture in Rift Valley"</span>
          </p>
        </div>

        <div className="hidden lg:block"></div>

        <div className="lg:col-span-3 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-10 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/banknote.svg" alt="banknote" width={30} height={30} />
                <p className="text-muted-foreground">Total Grant Allocated</p>
              </div>
              <h2 className="lg:text-2xl text-xl font-bold mt-3 mb-3">ETB 500,000</h2>
              <p className="text-gray-600">Financial Year 2025-2024</p>
            </div>
            <div>
              <Image src="/landmark.svg" alt="landmark" width={100} height={100} />
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg shadow-lg p-10 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/cart.svg" alt="cart" width={30} height={30} />
                <p className="text-gray-600">Total Funds Spent</p>
              </div>
              <h2 className="lg:text-2xl text-xl font-bold mt-3 mb-3">ETB 200,000</h2>
              <p className="text-gray-600"><span className="text-green-500 font-bold">+15%</span> from last month</p>
            </div>
            <div>
              <Image src="/up.svg" alt="up" width={100} height={100} />
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg shadow-lg p-10 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/wallet.svg" alt="wallet" width={30} height={30} />
                <p className="text-gray-600">Remaining Balance</p>
              </div>
              <h2 className="lg:text-2xl text-xl font-bold mt-3 mb-3">ETB 180,000</h2>
              <p className="text-gray-600">Some summary or visualization here.</p>
            </div>
            <div>
              <Image src="/bank.svg" alt="bank" width={100} height={100} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Expense History</h2>
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              <option value="">No Sort</option>
              <option value="date">Sort by Date</option>
              <option value="amount">Sort by Amount</option>
            </select>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex gap-2 border-b border-muted-foreground bg-gray-50 px-4 pt-3">
              {["all", "pending", "approved"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                  className={`px-4 py-2 rounded-t-lg text-base font-semibold ${
                    activeTab === tab
                      ? "bg-white border border-b-white border-gray-200"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab === "all" ? "All Transactions" : tab === "pending" ? "Pending" : "Approved"}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full table-auto text-left">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="py-2 px-3 hidden md:table-cell">Date</th>
                    <th className="py-2 px-3 w-[30%] hidden md:table-cell">Description</th>
                    <th className="py-2 px-3">Category</th>
                    <th className="py-2 px-3">Amount (ETB)</th>
                    <th className="py-2 px-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((row, i) => (
                    <tr key={i} className="border-b border-muted-foreground hover:bg-gray-50">
                      <td className="py-2 px-3 whitespace-nowrap hidden md:table-cell">{row.date}</td>
                      <td className="py-2 px-3 break-words hidden md:table-cell">{row.description}</td>
                      <td className="py-2 px-3">{row.category}</td>
                      <td className="py-2 px-3">{row.amount.toLocaleString()}</td>
                      <td className="py-2 px-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          row.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : row.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                  {paginatedData.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center py-6 text-gray-500">No data found</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="flex justify-between items-center px-4 py-3 border-t text-sm">
                <p className="text-gray-600">
                  Showing {Math.min(rowsPerPage, totalRows - startIndex)} of {totalRows} transactions
                </p>
                <div className="flex gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-40 hover:bg-gray-100"
                  >{"<"}</button>
                  <button
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage(p => p + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-40 hover:bg-gray-100"
                  >{">"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-lg font-bold">New Budget Request</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col">
                <span className="font-semibold">Title</span>
                <input placeholder="Conference Travel" className="border p-2 mt-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
              </label>
              <label className="flex flex-col">
                <span className="font-semibold">Total Amount (ETB)</span>
                <input type="number" placeholder="0.00" className="border p-2 mt-1 border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
              </label>
              <label className="flex flex-col">
                <span className="font-semibold">Description</span>
                <textarea placeholder="Explain why the expense is necessary.." className="border p-2 mt-1 min-h-[100px] border-[#F8FBFC] rounded-lg bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
              </label>
              <div className="flex flex-col">
                <span className="font-semibold mb-2">Attachment</span>
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
                >
                  <input
                    type="file"
                    id="fileUpload"
                    accept=".pdf,.doc,.docx,.png,.jpg"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <label htmlFor="fileUpload" className="cursor-pointer">
                    <p className="text-gray-600">Drag & drop your file here</p>
                    <p className="text-sm text-blue-600 mt-1">or click to upload</p>
                    {fileName && <p className="mt-3 text-green-600 font-medium">{fileName}</p>}
                  </label>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <button type="button" className="bg-gray-300 px-4 py-2 rounded">Save Draft</button>
                <button type="submit" className="bg-[#13DAEC] text-white px-4 py-2 rounded">Submit Budget</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
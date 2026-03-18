'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Edit, Bell, Save, ArrowRight, Upload, FileText, Trash2, Download, Cloud, HelpCircle, Home } from 'lucide-react'
import RichTextEditor from '@/components/editor/rich-text-editor'
import { AppSidebar } from '@/components/app-sidebar'

// Types
interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  uploadProgress?: number
}

export default function DraftProposalClient() {
  const [projectTitle, setProjectTitle] = useState('')
  const [abstract, setAbstract] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const plainText = abstract.replace(/<[^>]*>/g, '')
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length

  // File handlers
  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true) }
  const handleDragLeave = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false) }
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); handleFiles(Array.from(e.dataTransfer.files)) }
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files) handleFiles(Array.from(e.target.files)) }
  
  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(file => {
      const validTypes = ['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      const maxSize = 15 * 1024 * 1024
      if (!validTypes.includes(file.type)) { alert(`File "${file.name}" is not PDF/DOCX`); return false }
      if (file.size > maxSize) { alert(`File "${file.name}" exceeds 15MB`); return false }
      return true
    })
    const newFiles: UploadedFile[] = validFiles.map(file => ({
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadProgress: 100
    }))
    setUploadedFiles([...uploadedFiles, ...newFiles])
  }

  const handleRemoveFile = (id: string) => setUploadedFiles(uploadedFiles.filter(f => f.id !== id))
  const formatFileSize = (bytes: number) => { if(bytes===0) return '0 Bytes'; const k=1024,s=['Bytes','KB','MB']; const i=Math.floor(Math.log(bytes)/Math.log(k)); return (bytes/Math.pow(k,i)).toFixed(2)+' '+s[i] }

  // Actions
  const handleSaveDraft = () => console.log({ projectTitle, abstract, uploadedFiles })
  const handleNextStep = () => console.log('Next step')

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-4 md:px-6 border-b bg-white dark:bg-[#1a2632] dark:border-gray-700 shrink-0">
          <div className="flex items-center gap-2 md:gap-3">
            <Edit className="text-primary" size={18} />
            <h2 className="text-base font-semibold leading-tight">Proposal Wizard</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-1.5 text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 rounded-full relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-[960px] mx-auto flex flex-col gap-4 pb-12">
            
            {/* Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-2 text-xs">
              <Link href="/" className="text-[#4c739a] hover:text-primary flex items-center gap-1"><Home size={14}/> Home</Link>
              <span>{'>'}</span>
              <span className="text-[#0d141b] dark:text-white font-medium">New Submission</span>
            </nav>

            {/* Heading */}
            <div className="flex flex-col gap-0.5">
              <h1 className="text-2xl font-bold text-[#0d141b] dark:text-white">New Proposal Submission</h1>
              <p className="text-sm text-[#4c739a]">Step 1 of 4: Provide basic project details to initialize the draft.</p>
            </div>

            {/* Stepper */}
            <div className="flex overflow-x-auto gap-2 bg-white dark:bg-[#1a2632] rounded-lg shadow-sm border border-[#cfdbe7] dark:border-gray-700">
              {['Draft','Team','Budget','Review'].map((label, idx) => {
                const active = idx===0
                return (
                  <Link key={idx} href="#" className={`flex-1 flex items-center justify-center gap-1.5 py-3 min-w-[100px] cursor-pointer ${active?'border-b-3 border-primary bg-primary/5':'border-b-3 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                    <span className={`w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold ${active?'bg-primary text-white':'bg-[#cfdbe7] text-[#4c739a]'}`}>{idx+1}</span>
                    <p className={`text-xs font-semibold ${active?'text-primary':'text-[#4c739a]'}`}>{label}</p>
                  </Link>
                )
              })}
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-[#1a2632] rounded-lg shadow-sm border border-[#cfdbe7] dark:border-gray-700 p-4 md:p-6 flex flex-col gap-5">
              {/* Project Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#0d141b] dark:text-white">Project Title <span className="text-red-500">*</span></label>
                <input type="text" value={projectTitle} onChange={e=>setProjectTitle(e.target.value)}
                  placeholder="Enter project title" className="w-full border rounded px-3 py-2 text-sm dark:bg-[#101922] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary"/>
              </div>

              {/* Abstract */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-[#0d141b] dark:text-white flex items-center gap-1.5">
                    Abstract <span className="text-red-500">*</span>
                    <HelpCircle size={14}/>
                  </label>
                  <span className="text-xs text-[#4c739a]">{wordCount} / 500 words</span>
                </div>
                <RichTextEditor onChange={setAbstract}/>
              </div>

              {/* File Upload */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-[#0d141b] dark:text-white flex items-center gap-1.5">
                  Supporting Documents <span className="text-red-500">*</span>
                  <HelpCircle size={14}/>
                </label>
                <div className={`relative border-2 border-dashed rounded-md p-4 transition-colors ${isDragging?'border-primary bg-primary/5':'border-[#cfdbe7] dark:border-gray-600 hover:border-primary/50'}`}
                     onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                  <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" multiple onChange={handleFileSelect}
                         accept=".pdf,.doc,.docx"/>
                  <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <div className="p-2 bg-primary/10 rounded-full"><Upload className="text-primary" size={18}/></div>
                    <p className="text-sm text-[#0d141b] dark:text-white">Drag & drop files or <span className="text-primary">browse</span></p>
                    <p className="text-xs text-[#4c739a] mt-0.5">Supported formats: PDF, DOCX (Max 15MB each)</p>
                  </div>
                </div>

                {/* Uploaded Files */}
                {uploadedFiles.map(f => (
                  <div key={f.id} className="flex items-center justify-between p-2.5 bg-[#f6f7f8] dark:bg-[#253341] rounded-md border border-[#cfdbe7] dark:border-gray-600">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="p-1.5 bg-white dark:bg-[#101922] rounded"><FileText className="text-primary" size={16}/></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-[#0d141b] dark:text-white truncate">{f.name}</p>
                        <p className="text-xs text-[#4c739a]">{formatFileSize(f.size)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button><Download size={14}/></button>
                      <button onClick={()=>handleRemoveFile(f.id)}><Trash2 size={14}/></button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#f0f4f8] dark:border-gray-700">
                <Link href="#" className="px-4 py-2 rounded text-sm text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 w-full sm:w-auto text-center">Cancel</Link>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button onClick={handleSaveDraft} className="px-4 py-2 border rounded text-sm border-astu-green text-astu-green w-full sm:w-auto">Save Draft</button>
                  <Link href="#" onClick={handleNextStep} className="px-5 py-2 rounded text-sm text-white bg-[#137FEC] w-full sm:w-auto flex items-center justify-center gap-1.5">Next Step <ArrowRight size={16}/></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
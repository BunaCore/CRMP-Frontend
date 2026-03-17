'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Menu,
  Edit,
  Bell,
  Home,
  Save,
  ArrowRight,
  X,
  Search,
  ChevronDown,
  HelpCircle,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link as LinkIcon,
  LayoutDashboard,
  CheckCircle,
  Clock,
  BarChart,
  Settings,
  Cloud,
  ChevronRight,
  Upload,
  FileText,
  Trash2,
  Download
} from 'lucide-react'

import RichTextEditor from '@/components/editor/rich-text-editor'

// Types
interface Keyword {
  id: string
  text: string
}

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  uploadProgress?: number
}

export default function DraftProposalClient() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [keywords, setKeywords] = useState<Keyword[]>([
    { id: '1', text: 'Artificial Intelligence' },
    { id: '2', text: 'Agriculture' }
  ])
  const [keywordInput, setKeywordInput] = useState('')
  const [projectTitle, setProjectTitle] = useState('')
  const [abstract, setAbstract] = useState('')
  const [piSearch, setPiSearch] = useState('Dr. Abebe Kebede (Me)')
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  
const plainText = abstract.replace(/<[^>]*>/g, '')
const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length
  const handleAddKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keywordInput.trim()) {
      e.preventDefault()
      setKeywords([
        ...keywords,
        { id: Date.now().toString(), text: keywordInput.trim() }
      ])
      setKeywordInput('')
    }
  }

  const handleRemoveKeyword = (id: string) => {
    setKeywords(keywords.filter(k => k.id !== id))
  }

  const handleSaveDraft = () => {
    console.log('Saving draft:', { projectTitle, abstract, keywords, piSearch, uploadedFiles })
    
  }

  const handleNextStep = () => {
    console.log('Proceeding to next step')
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      handleFiles(files)
    }
  }

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(file => {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      const maxSize = 15 * 1024 * 1024 
      
      if (!validTypes.includes(file.type)) {
        alert(`File "${file.name}" is not in PDF or DOCX format`)
        return false
      }
      
      if (file.size > maxSize) {
        alert(`File "${file.name}" exceeds 15MB limit`)
        return false
      }
      
      return true
    })

    const newFiles: UploadedFile[] = validFiles.map(file => ({
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadProgress: 100 // Simulating immediate upload
    }))

    setUploadedFiles([...uploadedFiles, ...newFiles])
  }

  const handleRemoveFile = (id: string) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#0d141b] dark:text-white overflow-hidden">


     
   

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Top Header */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-[#cfdbe7] bg-white dark:bg-[#1a2632] dark:border-gray-700 shrink-0">
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden text-[#4c739a]"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2 text-[#0d141b] dark:text-white">
              <Edit className="text-primary" size={18} />
              <h2 className="text-base font-semibold leading-tight tracking-[-0.015em]">Proposal Wizard</h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-1.5 text-[#4c739a] hover:bg-[#e7edf3] rounded-full transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 size-1.5 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            <div className="flex items-center gap-2 pl-3 border-l border-[#cfdbe7] dark:border-gray-600">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-[#0d141b] dark:text-white">Dr. Abebe Kebede</p>
                <p className="text-xs text-[#4c739a]">Dept. of Computer Science</p>
              </div>
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 border border-[#cfdbe7] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-primary font-bold text-xs">
                AK
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6">
          <div className="max-w-[960px] mx-auto w-full flex flex-col gap-4 pb-12">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap items-center gap-2 text-xs">
              <Link href="/" className="text-[#4c739a] hover:text-primary font-medium transition-colors flex items-center gap-1">
                <Home size={14} />
                Home
              </Link>
              <ChevronRight size={14} className="text-[#4c739a]" />
              <Link href="/proposals" className="text-[#4c739a] hover:text-primary font-medium transition-colors">
                Proposals
              </Link>
              <ChevronRight size={14} className="text-[#4c739a]" />
              <span className="text-[#0d141b] dark:text-white font-medium">New Submission</span>
            </nav>

            {/* Page Heading */}
            <div className="flex flex-col gap-0.5">
              <h1 className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight tracking-[-0.033em]">
                New Proposal Submission
              </h1>
              <p className="text-[#4c739a] text-sm font-normal">
                Step 1 of 4: Provide basic project details to initialize the draft.
              </p>
            </div>

            {/* Stepper Tabs */}
            <div className="w-full bg-white dark:bg-[#1a2632] rounded-lg shadow-sm border border-[#cfdbe7] dark:border-gray-700 overflow-hidden">
  <div className="flex w-full overflow-x-auto">
    {[
      { number: 1, label: 'Draft', href: '/draft', active: true },
      { number: 2, label: 'Team', href: '/team', active: false },
      { number: 3, label: 'Budget', href: '/budget', active: false },
      { number: 4, label: 'Review', href: 'review', active: false },
    ].map((step) => (
      <Link
        key={step.number}
        href={step.href}
        className={`flex-1 flex items-center justify-center gap-1.5 py-3 min-w-[100px] cursor-pointer transition-all ${
          step.active
            ? 'border-b-3 border-primary bg-primary/5'
            : 'border-b-3 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
        }`}
      >
        <span
          className={`flex items-center justify-center size-5 rounded-full text-xs font-bold ${
            step.active
              ? 'bg-primary text-white'
              : 'bg-[#cfdbe7] text-[#4c739a]'
          }`}
        >
          {step.number}
        </span>
        <p
          className={`text-xs font-semibold tracking-[0.015em] ${
            step.active ? 'text-primary' : 'text-[#4c739a]'
          }`}
        >
          {step.label}
        </p>
      </Link>
    ))}
  </div>
</div>
            {/* Form Card */}
            <div className="bg-white dark:bg-[#1a2632] rounded-lg shadow-sm border border-[#cfdbe7] dark:border-gray-700 p-6 flex flex-col gap-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#f0f4f8] dark:border-gray-700">
                <h3 className="text-lg font-semibold text-[#0d141b] dark:text-white">Project Information</h3>
                <div className="flex items-center gap-1.5 text-[#4c739a] text-xs">
                  <Cloud size={16} />
                  <span>Autosaved at 10:42 AM</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-4">
                {/* Project Title */}
                <div className="flex flex-col gap-1.5">
                  <label 
                    htmlFor="project-title" 
                    className="text-[#0d141b] dark:text-white text-sm font-medium"
                  >
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="project-title"
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="w-full rounded-md border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-[#101922] px-3 py-2 text-sm text-[#0d141b] dark:text-white placeholder-[#93adc8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                    placeholder="Enter the full title of your research..."
                  />
                </div>

                {/* Abstract */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label 
                      htmlFor="abstract" 
                      className="text-[#0d141b] dark:text-white text-sm font-medium flex items-center gap-1.5"
                    >
                      Abstract <span className="text-red-500">*</span>
                      <span 
                        className="text-[#93adc8] cursor-help"
                        title="Max 500 words summary"
                      >
                        <HelpCircle size={14} />
                      </span>
                    </label>
                    <span className="text-xs text-[#4c739a]">{wordCount} / 500 words</span>
                  </div>

                  <RichTextEditor onChange={setAbstract} />
                </div>

                {/* File Upload Section - New Section Added */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="text-[#0d141b] dark:text-white text-sm font-medium flex items-center gap-1.5">
                      Supporting Documents <span className="text-red-500">*</span>
                      <span 
                        className="text-[#93adc8] cursor-help"
                        title="Upload PDF or DOCX files, max 15MB each"
                      >
                        <HelpCircle size={14} />
                      </span>
                    </label>
                    <span className="text-xs text-[#4c739a]">
                      {uploadedFiles.length} file(s) uploaded
                    </span>
                  </div>

                  {/* Drop Zone */}
                  <div
                    className={`relative border-2 border-dashed rounded-md p-4 transition-colors ${
                      isDragging
                        ? 'border-primary bg-primary/5'
                        : 'border-[#cfdbe7] dark:border-gray-600 hover:border-primary/50'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      id="file-upload"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileSelect}
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      multiple
                    />
                    
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Upload className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-[#0d141b] dark:text-white text-sm font-medium">
                          Drag & drop files or <span className="text-primary">browse</span>
                        </p>
                        <p className="text-xs text-[#4c739a] mt-0.5">
                          Supported formats: PDF, DOCX (Max 15MB each)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-medium text-[#0d141b] dark:text-white">
                        Uploaded Files:
                      </p>
                      <div className="space-y-1.5">
                        {uploadedFiles.map((file) => (
                          <div
                            key={file.id}
                            className="flex items-center justify-between p-2.5 bg-[#f6f7f8] dark:bg-[#253341] rounded-md border border-[#cfdbe7] dark:border-gray-600"
                          >
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                              <div className="p-1.5 bg-white dark:bg-[#101922] rounded">
                                <FileText className="text-primary" size={16} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-[#0d141b] dark:text-white truncate">
                                  {file.name}
                                </p>
                                <p className="text-xs text-[#4c739a]">
                                  {formatFileSize(file.size)}
                                </p>
                              </div>
                              {file.uploadProgress && file.uploadProgress < 100 && (
                                <div className="w-16">
                                  <div className="h-0.5 bg-[#cfdbe7] rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-primary transition-all duration-300"
                                      style={{ width: `${file.uploadProgress}%` }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-0.5">
                              <button
                                className="p-1.5 hover:bg-white dark:hover:bg-[#101922] rounded text-[#4c739a] hover:text-primary transition-colors"
                                onClick={() => {/* Handle download */}}
                              >
                                <Download size={14} />
                              </button>
                              <button
                                className="p-1.5 hover:bg-white dark:hover:bg-[#101922] rounded text-[#4c739a] hover:text-red-500 transition-colors"
                                onClick={() => handleRemoveFile(file.id)}
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* File Requirements Note */}
                  <p className="text-xs text-[#4c739a] flex items-center gap-1">
                    <HelpCircle size={12} />
                    Please attach all necessary supporting documents for your research proposal. Ensure files are in PDF or DOCX format and do not exceed 15MB each.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  

                 
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 mt-3 border-t border-[#f0f4f8] dark:border-gray-700">
                <Link
                  href="/proposals"
                  className="px-4 py-2 rounded-md text-sm text-[#4c739a] font-medium hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors w-full sm:w-auto text-center"
                >
                  Cancel
                </Link>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleSaveDraft}
                    className="px-4 py-2 rounded-md border text-sm border-astu-green text-astu-green font-medium hover:bg-astu-green/10 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Save size={16} />
                    Save as Draft
                  </button>
                  <Link
                    href="/proposals/new/team"
                    onClick={handleNextStep}
                    className="px-5 py-2 rounded-md text-sm text-white font-medium shadow-sm bg-[#137FEC] hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    Next Step
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

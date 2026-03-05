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
  
  const wordCount = abstract.trim().split(/\s+/).filter(Boolean).length

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
    // Navigate to team selection
  }

  // File upload handlers
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
      const maxSize = 15 * 1024 * 1024 // 15MB in bytes
      
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

  const sidebarLinks = [
    { href: '#', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '#', icon: CheckCircle, label: 'Active Grants' },
    { href: '#', icon: Clock, label: 'Proposal History', active: true },
    { href: '#', icon: BarChart, label: 'Reports' },
  ]

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark font-display text-[#0d141b] dark:text-white overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[#cfdbe7] bg-white dark:bg-[#1a2632] dark:border-gray-700">
        {/* Logo Area */}
        <div className="p-4 flex items-center gap-3 border-b border-[#cfdbe7] dark:border-gray-700 h-16">
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-primary font-bold text-xl">
            CRMP
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#0d141b] dark:text-white text-base font-bold leading-none">CRMP</h1>
            <p className="text-[#4c739a] text-xs font-normal mt-1">ASTU Research Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group ${
                link.active 
                  ? 'bg-[#e7edf3] dark:bg-gray-700 text-[#0d141b] dark:text-white' 
                  : 'text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700'
              }`}
            >
              <link.icon 
                size={20} 
                className={link.active ? 'text-primary' : 'group-hover:text-primary'} 
              />
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Settings Link */}
        <div className="p-4 border-t border-[#cfdbe7] dark:border-gray-700">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors group"
          >
            <Settings size={20} className="group-hover:text-primary" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed md:hidden flex flex-col w-64 h-full border-r border-[#cfdbe7] bg-white dark:bg-[#1a2632] dark:border-gray-700 transition-transform duration-300 z-50 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4 flex items-center gap-3 border-b border-[#cfdbe7] dark:border-gray-700 h-16">
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-primary font-bold text-xl">
            CRMP
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#0d141b] dark:text-white text-base font-bold leading-none">CRMP</h1>
            <p className="text-[#4c739a] text-xs font-normal mt-1">ASTU Research Portal</p>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group ${
                link.active 
                  ? 'bg-[#e7edf3] dark:bg-gray-700 text-[#0d141b] dark:text-white' 
                  : 'text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700'
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <link.icon size={20} className={link.active ? 'text-primary' : ''} />
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[#cfdbe7] dark:border-gray-700">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors group"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Settings size={20} />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-[#cfdbe7] bg-white dark:bg-[#1a2632] dark:border-gray-700 shrink-0">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-[#4c739a]"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2 text-[#0d141b] dark:text-white">
              <Edit className="text-primary" size={24} />
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Proposal Wizard</h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#4c739a] hover:bg-[#e7edf3] rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            <div className="flex items-center gap-2 pl-4 border-l border-[#cfdbe7] dark:border-gray-600">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-[#0d141b] dark:text-white">Dr. Abebe Kebede</p>
                <p className="text-xs text-[#4c739a]">Dept. of Computer Science</p>
              </div>
              <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-[#cfdbe7] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-primary font-bold">
                AK
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6">
          <div className="max-w-[960px] mx-auto w-full flex flex-col gap-6 pb-12">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap items-center gap-2 text-sm">
              <Link href="/" className="text-[#4c739a] hover:text-primary font-medium transition-colors flex items-center gap-1">
                <Home size={16} />
                Home
              </Link>
              <ChevronRight size={16} className="text-[#4c739a]" />
              <Link href="/proposals" className="text-[#4c739a] hover:text-primary font-medium transition-colors">
                Proposals
              </Link>
              <ChevronRight size={16} className="text-[#4c739a]" />
              <span className="text-[#0d141b] dark:text-white font-medium">New Submission</span>
            </nav>

            {/* Page Heading */}
            <div className="flex flex-col gap-1">
              <h1 className="text-[#0d141b] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
                New Proposal Submission
              </h1>
              <p className="text-[#4c739a] text-base font-normal">
                Step 1 of 4: Provide basic project details to initialize the draft.
              </p>
            </div>

            {/* Stepper Tabs */}
            <div className="w-full bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#cfdbe7] dark:border-gray-700 overflow-hidden">
              <div className="flex w-full overflow-x-auto">
                {[
                  { number: 1, label: 'Draft', active: true },
                  { number: 2, label: 'Team', active: false },
                  { number: 3, label: 'Budget', active: false },
                  { number: 4, label: 'Review', active: false },
                ].map((step) => (
                  <div
                    key={step.number}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 min-w-[120px] ${
                      step.active
                        ? 'border-b-4 border-primary bg-primary/5'
                        : 'border-b-4 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center size-6 rounded-full text-xs font-bold ${
                        step.active
                          ? 'bg-primary text-white'
                          : 'bg-[#cfdbe7] text-[#4c739a]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <p
                      className={`text-sm font-bold tracking-[0.015em] ${
                        step.active ? 'text-primary' : 'text-[#4c739a]'
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#cfdbe7] dark:border-gray-700 p-8 flex flex-col gap-8">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#f0f4f8] dark:border-gray-700">
                <h3 className="text-xl font-bold text-[#0d141b] dark:text-white">Project Information</h3>
                <div className="flex items-center gap-2 text-[#4c739a] text-sm">
                  <Cloud size={20} />
                  <span>Autosaved at 10:42 AM</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-6">
                {/* Project Title */}
                <div className="flex flex-col gap-2">
                  <label 
                    htmlFor="project-title" 
                    className="text-[#0d141b] dark:text-white text-sm font-bold"
                  >
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="project-title"
                    type="text"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    className="w-full rounded-lg border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-[#101922] px-4 py-3 text-base text-[#0d141b] dark:text-white placeholder-[#93adc8] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow"
                    placeholder="Enter the full title of your research..."
                  />
                </div>

                {/* Abstract */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label 
                      htmlFor="abstract" 
                      className="text-[#0d141b] dark:text-white text-sm font-bold flex items-center gap-2"
                    >
                      Abstract <span className="text-red-500">*</span>
                      <span 
                        className="text-[#93adc8] cursor-help"
                        title="Max 500 words summary"
                      >
                        <HelpCircle size={16} />
                      </span>
                    </label>
                    <span className="text-xs text-[#4c739a]">{wordCount} / 500 words</span>
                  </div>

                  {/* Rich Text Editor Simulation */}
                  <div className="w-full rounded-lg border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-[#101922] overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-shadow">
                    {/* Toolbar */}
                    <div className="flex items-center gap-1 p-2 bg-[#f6f7f8] dark:bg-[#253341] border-b border-[#cfdbe7] dark:border-gray-600">
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-[#4c739a] transition-colors">
                        <Bold size={18} />
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-[#4c739a] transition-colors">
                        <Italic size={18} />
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-[#4c739a] transition-colors">
                        <Underline size={18} />
                      </button>
                      <div className="w-px h-4 bg-[#cfdbe7] dark:bg-gray-600 mx-1"></div>
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-[#4c739a] transition-colors">
                        <List size={18} />
                      </button>
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-[#4c739a] transition-colors">
                        <ListOrdered size={18} />
                      </button>
                      <div className="w-px h-4 bg-[#cfdbe7] dark:bg-gray-600 mx-1"></div>
                      <button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-[#4c739a] transition-colors">
                        <LinkIcon size={18} />
                      </button>
                    </div>
                    <textarea
                      id="abstract"
                      rows={6}
                      value={abstract}
                      onChange={(e) => setAbstract(e.target.value)}
                      className="w-full p-4 bg-transparent border-none outline-none text-[#0d141b] dark:text-white placeholder-[#93adc8] resize-y"
                      placeholder="Provide a summary of the proposed research..."
                    />
                  </div>
                </div>

                {/* File Upload Section - New Section Added */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[#0d141b] dark:text-white text-sm font-bold flex items-center gap-2">
                      Supporting Documents <span className="text-red-500">*</span>
                      <span 
                        className="text-[#93adc8] cursor-help"
                        title="Upload PDF or DOCX files, max 15MB each"
                      >
                        <HelpCircle size={16} />
                      </span>
                    </label>
                    <span className="text-xs text-[#4c739a]">
                      {uploadedFiles.length} file(s) uploaded
                    </span>
                  </div>

                  {/* Drop Zone */}
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
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
                    
                    <div className="flex flex-col items-center justify-center gap-3 text-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Upload className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-[#0d141b] dark:text-white font-medium">
                          Drag & drop files or <span className="text-primary">browse</span>
                        </p>
                        <p className="text-sm text-[#4c739a] mt-1">
                          Supported formats: PDF, DOCX (Max 15MB each)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="flex flex-col gap-2 mt-2">
                      <p className="text-sm font-medium text-[#0d141b] dark:text-white">
                        Uploaded Files:
                      </p>
                      <div className="space-y-2">
                        {uploadedFiles.map((file) => (
                          <div
                            key={file.id}
                            className="flex items-center justify-between p-3 bg-[#f6f7f8] dark:bg-[#253341] rounded-lg border border-[#cfdbe7] dark:border-gray-600"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="p-2 bg-white dark:bg-[#101922] rounded">
                                <FileText className="text-primary" size={20} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-[#0d141b] dark:text-white truncate">
                                  {file.name}
                                </p>
                                <p className="text-xs text-[#4c739a]">
                                  {formatFileSize(file.size)}
                                </p>
                              </div>
                              {file.uploadProgress && file.uploadProgress < 100 && (
                                <div className="w-20">
                                  <div className="h-1 bg-[#cfdbe7] rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-primary transition-all duration-300"
                                      style={{ width: `${file.uploadProgress}%` }}
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <button
                                className="p-2 hover:bg-white dark:hover:bg-[#101922] rounded-lg text-[#4c739a] hover:text-primary transition-colors"
                                onClick={() => {/* Handle download */}}
                              >
                                <Download size={18} />
                              </button>
                              <button
                                className="p-2 hover:bg-white dark:hover:bg-[#101922] rounded-lg text-[#4c739a] hover:text-red-500 transition-colors"
                                onClick={() => handleRemoveFile(file.id)}
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* File Requirements Note */}
                  <p className="text-xs text-[#4c739a] flex items-center gap-1 mt-1">
                    <HelpCircle size={14} />
                    Please attach all necessary supporting documents for your research proposal. Ensure files are in PDF or DOCX format and do not exceed 15MB each.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  

                 
                </div>
              </div>

              {/* Action Bar */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 mt-4 border-t border-[#f0f4f8] dark:border-gray-700">
                <Link
                  href="/proposals"
                  className="px-6 py-2.5 rounded-lg text-[#4c739a] font-bold hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors w-full sm:w-auto text-center"
                >
                  Cancel
                </Link>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleSaveDraft}
                    className="px-6 py-2.5 rounded-lg border border-astu-green text-astu-green font-bold hover:bg-astu-green/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Save size={18} />
                    Save as Draft
                  </button>
                  <Link
                    href="/proposals/new/team"
                    onClick={handleNextStep}
                    className="px-8 py-2.5 rounded-lg  text-white font-bold shadow-md bg-[#137FEC] hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Next Step
                    <ArrowRight size={18} />
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
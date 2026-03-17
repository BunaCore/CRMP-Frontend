import { 
  LayoutDashboard, Folder, CheckCircle, Calendar, CloudUpload, Settings,
  FileText, History, Share2, Edit2, ZoomIn, ZoomOut, Printer, Download,
  MoreHorizontal, Paperclip, Smile, Mic, Send
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex h-screen bg-[#F8F9FB] font-sans overflow-hidden text-[#1E293B]">
      
      {/* LEFT SIDEBAR */}
      <div className="w-[84px] md:w-[240px] bg-white border-r border-gray-100 flex flex-col pt-6 pb-6 shadow-[2px_0_8px_rgba(0,0,0,0.02)] z-10 transition-all duration-300 rounded-tr-[30px] rounded-br-[30px] h-[98vh] mt-auto mb-auto mr-[-20px]">
         <div className="px-6 mb-8 hidden md:block">
           <h2 className="text-xs font-bold text-gray-400 tracking-widest pl-2">WORKSPACE</h2>
         </div>
         <nav className="flex-1 px-4 space-y-2">
           <a href="#" className="flex items-center px-4 py-3 text-gray-500 rounded-xl hover:bg-gray-50 transition-colors group">
             <LayoutDashboard className="w-[22px] h-[22px] min-w-[22px] mr-4 text-gray-400 group-hover:text-gray-600" />
             <span className="font-semibold text-[15px] hidden md:block">Overview</span>
           </a>
           
           <a href="#" className="flex items-center px-4 py-3 bg-[#EAF2FF] text-[#1E6BFF] rounded-xl transition-colors">
             <Folder className="w-[22px] h-[22px] min-w-[22px] mr-4 fill-blue-50/50" />
             <span className="font-bold text-[15px] hidden md:block">Files</span>
           </a>
           
           <a href="#" className="flex items-center justify-between px-4 py-3 text-gray-500 rounded-xl hover:bg-gray-50 transition-colors group">
             <div className="flex items-center">
               <CheckCircle className="w-[22px] h-[22px] min-w-[22px] mr-4 text-gray-400 group-hover:text-gray-600" />
               <span className="font-semibold text-[15px] hidden md:block">Tasks</span>
             </div>
             <span className="bg-gray-100 text-gray-600 text-xs font-bold py-1 px-2.5 rounded-full hidden md:block">3</span>
           </a>
           
           <a href="#" className="flex items-center px-4 py-3 text-gray-500 rounded-xl hover:bg-gray-50 transition-colors group">
             <Calendar className="w-[22px] h-[22px] min-w-[22px] mr-4 text-gray-400 group-hover:text-gray-600" />
             <span className="font-semibold text-[15px] hidden md:block">Calendar</span>
           </a>
         </nav>
         
         <div className="px-5 mt-auto space-y-5 relative z-20">
           <button className="flex items-center justify-center w-full bg-[#1E6BFF] text-white py-3.5 rounded-xl font-semibold text-[15px] shadow-[0_4px_12px_rgba(30,107,255,0.25)] hover:bg-blue-600 transition-colors -ml-1 pr-3">
             <CloudUpload className="w-[22px] h-[22px] mr-2" />
             <span className="hidden md:block">Upload New</span>
           </button>
           <a href="#" className="flex items-center px-3 py-2 text-gray-500 hover:text-gray-800 transition-colors">
             <Settings className="w-[22px] h-[22px] mr-4 text-gray-400" />
             <span className="font-semibold text-[15px] hidden md:block">Settings</span>
           </a>
         </div>
      </div>
      
      {/* MAIN CENTER PANEL */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F8F9FB] rounded-l-[30px] z-0 ml-[20px] relative shadow-[-5px_0_15px_rgba(0,0,0,0.01)]">
        
        {/* Header Region */}
        <div className="px-10 pt-10 pb-4 shrink-0 border-b border-gray-100/50 bg-white/40 backdrop-blur-md rounded-tl-[30px]">
          <div className="text-[13px] text-gray-500 font-semibold mb-6 flex items-center tracking-wide">
            Workspace <span className="mx-3 text-gray-300 font-normal">›</span> Renewable Energy Project <span className="mx-3 text-gray-300 font-normal">›</span> <span className="text-gray-900 font-bold">Phase 1 Report</span>
          </div>
          
          <div className="flex items-start justify-between mt-2">
            <div>
              <div className="flex items-center mb-2">
                <div className="w-9 h-9 bg-[#EAF2FF] text-[#1E6BFF] flex items-center justify-center rounded-xl mr-3 shadow-sm border border-blue-100">
                  <FileText className="w-5 h-5 fill-current opacity-20 relative z-0" />
                  <FileText className="w-5 h-5 absolute z-10" />
                </div>
                <h1 className="text-[26px] font-extrabold text-gray-900 tracking-tight">Phase 1 Report.docx</h1>
                <span className="ml-4 bg-[#EAF7ED] text-[#00A155] text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm border border-green-100/50">
                  Saved
                </span>
              </div>
              <p className="text-[14px] text-gray-500 ml-12">
                Last edited 2 hours ago by <span className="font-bold text-gray-700">Dr. Abebe</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-3 mt-1">
              <button className="flex items-center px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-600 hover:bg-gray-50 bg-white shadow-sm transition-all focus:ring-2 ring-gray-100">
                <History className="w-[18px] h-[18px] mr-2.5 text-gray-400" />
                Version 2.3 (Current)
              </button>
              <button className="flex items-center px-4 py-2.5 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-600 hover:bg-gray-50 bg-white shadow-sm transition-all">
                <Share2 className="w-[18px] h-[18px] mr-2 ml-1 text-gray-400" />
                Share
              </button>
              <button className="flex items-center px-5 py-2.5 bg-[#1E6BFF] text-white rounded-xl text-[14px] font-bold shadow-[0_4px_14px_rgba(30,107,255,0.25)] hover:bg-blue-600 transition-all border border-blue-500/50">
                <Edit2 className="w-[18px] h-[18px] mr-2.5" />
                Edit Document
              </button>
            </div>
          </div>
          
          {/* Toolbar */}
          <div className="flex items-center space-x-5 mt-8 ml-11 pb-2">
            <ZoomIn className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-700 transition" />
            <ZoomOut className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-700 transition" />
            <div className="h-5 w-[1px] bg-gray-200/80 mx-1"></div>
            <Printer className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-700 transition" />
            <Download className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-700 transition" />
          </div>
        </div>
        
        {/* Document Area */}
        <div className="flex-1 overflow-auto relative scroll-smooth p-6 pb-20">
          <div className="max-w-[720px] mx-auto relative w-full pt-4">
            
            {/* The A4 Document */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-16 min-h-[900px] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500">
              <h1 className="text-[38px] font-extrabold text-gray-900 leading-[1.15] mb-4 tracking-[-0.02em]">
                Phase 1 Report:<br/>
                Renewable Energy<br/>
                Potential in<br/>
                Oromia
              </h1>
              <p className="text-[14px] text-gray-400 border-b border-gray-100 pb-8 mb-10 uppercase tracking-[0.1em] font-medium flex items-center">
                Prepared by: <span className="text-gray-500 ml-1">Research Team Alpha</span> 
                <span className="mx-3 text-gray-200">|</span> 
                Date: <span className="text-gray-500 ml-1">October 24, 2023</span>
              </p>
              
              <h2 className="text-[#1E6BFF] text-[22px] font-bold mb-5 tracking-tight">1. Executive Summary</h2>
              
              <p className="text-[#334155] text-[16px] leading-[1.8] mb-5 font-medium">
                This report outlines the preliminary findings regarding solar and wind energy potential across the eastern zones of the Oromia region. Using satellite data and ground station measurements from the last 24 months, we have identified three primary locations suitable for large-scale photovoltaic installations.
              </p>
              
              <div className="relative bg-[#FFFBEB] -mx-6 px-6 py-4 rounded-xl my-6 border-l-[3px] border-[#F5C237]">
                <p className="text-[#334155] text-[16px] leading-[1.8] font-medium">
                  Initial feasibility studies suggest a potential output of 450MW within the first phase of deployment. However, grid connectivity remains a significant challenge that requires further infrastructure investment.
                </p>
                <div className="absolute top-1/2 -translate-y-1/2 -right-3.5 w-7 h-7 bg-[#F5C237] rounded-full flex items-center justify-center text-[12px] font-bold text-gray-900 border-[2.5px] border-white shadow-[0_2px_8px_rgba(245,194,55,0.4)] cursor-pointer hover:scale-110 transition-transform">
                  1
                </div>
              </div>
              
              <h2 className="text-[#1E6BFF] text-[22px] font-bold mt-12 mb-5 tracking-tight">2. Methodology</h2>
              <p className="text-[#334155] text-[16px] leading-[1.8] font-medium">
                Data was collected using a combination of remote sensing arrays and localized ground truthing methods across the selected elevation zones. Following initial scans, specific coordinates were chosen...
              </p>
            </div>
            
            {/* Floating Recent Activity - Positioned to the right of doc */}
            <div className="hidden xl:block absolute top-[20px] -right-[270px] w-[240px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-5 z-20 transition-all hover:-translate-y-1">
              <div className="flex items-center font-extrabold text-[#1E293B] mb-6 text-[15px] tracking-tight">
                <History className="w-[18px] h-[18px] text-[#1E6BFF] mr-2.5" />
                Recent Activity
              </div>
              
              <div className="relative border-l-2 border-gray-100/80 ml-2 space-y-7 pb-2">
                {/* Timeline Item 1 */}
                <div className="relative pl-5 w-full">
                  <div className="absolute w-3 h-3 bg-[#1E6BFF] rounded-full -left-[7px] top-[2px] shadow-[0_0_0_4px_rgba(30,107,255,0.15)] ring-2 ring-white"></div>
                  <p className="text-[13px] font-bold text-gray-900 leading-snug">Dr. Abebe edited section 2</p>
                  <p className="text-[11px] text-gray-400 mt-1.5 font-semibold">2 hours ago</p>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="relative pl-5">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] top-[2px] ring-2 ring-white"></div>
                  <p className="text-[13px] font-bold text-gray-600 leading-snug">Sarah M. uploaded new data</p>
                  <p className="text-[11px] text-gray-400 mt-1.5 font-semibold">5 hours ago</p>
                </div>
                
                {/* Timeline Item 3 */}
                <div className="relative pl-5">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] top-[2px] ring-2 ring-white"></div>
                  <p className="text-[13px] font-bold text-gray-600 leading-snug">Kebede commented on file</p>
                  <p className="text-[11px] text-gray-400 mt-1.5 font-semibold">Yesterday at 4:30 PM</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* RIGHT SIDEBAR (Chat) */}
      <div className="w-[380px] shrink-0 bg-white border-l border-gray-100 flex flex-col shadow-[-8px_0_30px_rgba(0,0,0,0.02)] z-10">
        {/* Header */}
        <div className="px-7 pt-7 pb-4 shrink-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] font-extrabold text-gray-900 tracking-tight">Team Members</h2>
            <span className="bg-[#EAF7ED] text-[#00A155] text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green-100/50 shadow-sm">
              4 Online
            </span>
          </div>
          
          <div className="flex -space-x-3 mb-2">
            <div className="relative">
              <img className="w-[42px] h-[42px] rounded-full border-[3px] border-white bg-[#1E293B] object-cover shadow-sm relative z-40" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=282c34&accessories=sunglasses" alt="Dr. Abebe" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full z-50"></div>
            </div>
            <div className="relative">
              <img className="w-[42px] h-[42px] rounded-full border-[3px] border-white bg-[#E2E8F0] object-cover shadow-sm relative z-30" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack&backgroundColor=E2E8F0" alt="Kebede" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full z-50"></div>
            </div>
            <div className="relative">
              <img className="w-[42px] h-[42px] rounded-full border-[3px] border-white bg-[#FDE68A] object-cover shadow-sm relative z-20" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=FDE68A&clothing=blazerAndShirt" alt="Sarah" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-400 border-2 border-white rounded-full z-50"></div>
            </div>
            <div className="w-[42px] h-[42px] rounded-full border-[3px] border-white bg-[#F1F5F9] flex items-center justify-center text-[13px] font-bold text-gray-600 shadow-sm relative z-10 hover:bg-gray-200 cursor-pointer">
              +2
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex px-4 border-b border-gray-100 mb-2 shrink-0">
          <button className="flex-1 pb-4 text-[15px] font-bold text-[#1E6BFF] border-b-[3px] border-[#1E6BFF] tracking-wide relative">
            General Chat
            <div className="absolute bottom-[-3px] left-0 right-0 h-[3px] bg-[#1E6BFF] rounded-t-lg"></div>
          </button>
          <button className="flex-1 pb-4 text-[15px] font-bold text-gray-400 hover:text-gray-600 transition-colors tracking-wide">
            Comments (2)
          </button>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 overflow-auto p-6 flex flex-col space-y-8 bg-white/50">
          <div className="flex justify-center shrink-0">
            <span className="bg-[#F1F5F9] text-[#64748B] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              TODAY
            </span>
          </div>
          
          {/* Incoming Message 1 */}
          <div className="flex items-start">
            <img className="w-[38px] h-[38px] rounded-full mr-4 mt-0.5 bg-[#E2E8F0] border border-gray-100 object-cover shadow-sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack&backgroundColor=E2E8F0" alt="Kebede" />
            <div className="flex-1">
              <div className="flex items-center mb-1.5">
                <span className="font-extrabold text-[15px] text-gray-900 mr-2 tracking-tight">Dr. Kebede</span>
              </div>
              <div className="bg-[#F8F9FB] text-[#334155] p-3.5 px-4 rounded-[20px] rounded-tl-sm text-[14.5px] leading-[1.6] shadow-sm font-medium border border-gray-50/50">
                I have updated the methodology section based on the new sensor data. Please review.
              </div>
              <div className="text-[11.5px] text-gray-400 font-bold mt-2 ml-1">10:30 AM</div>
            </div>
          </div>
          
          {/* Outgoing Message */}
          <div className="flex items-start flex-row-reverse">
            <img className="w-[38px] h-[38px] rounded-full ml-4 mt-0.5 bg-[#FDE68A] border border-gray-100 object-cover shadow-sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Me&backgroundColor=FDE68A" alt="Me" />
            <div className="flex-1 flex flex-col items-end">
              <div className="bg-[#1E6BFF] text-white p-3.5 px-4 rounded-[20px] rounded-tr-sm text-[14.5px] leading-[1.6] max-w-[95%] shadow-[0_4px_15px_rgba(30,107,255,0.2)] font-medium">
                Thanks, Kebede! I'm checking it now. The executive summary looks solid.
              </div>
              <div className="text-[11.5px] text-gray-400 font-bold mt-2 mr-1">10:32 AM</div>
            </div>
          </div>
          
          {/* In-chat Activity Widget */}
          <div className="ml-[54px] mr-[10px] bg-white rounded-[18px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 p-5 relative z-0 mt-4">
            <div className="flex items-center font-extrabold text-[#1E293B] mb-5 text-[14px] tracking-tight">
              <History className="w-[16px] h-[16px] text-[#1E6BFF] mr-2.5" />
              Recent Activity
            </div>
            
            <div className="relative border-l-[2px] border-gray-100/80 ml-1.5 space-y-5 pb-1 w-full">
              {/* Timeline Item 1 */}
              <div className="relative pl-5">
                <div className="absolute w-2.5 h-2.5 bg-[#1E6BFF] rounded-full -left-[6px] top-[4px] ring-2 ring-white"></div>
                <p className="text-[13px] font-bold text-gray-900 leading-snug">Dr. Abebe edited section 2</p>
                <p className="text-[11px] text-gray-400 mt-1 font-semibold">2 hours ago</p>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="relative pl-5">
                <div className="absolute w-2.5 h-2.5 bg-gray-200 rounded-full -left-[6px] top-[4px] ring-2 ring-white"></div>
                <p className="text-[13px] font-bold text-gray-600 leading-snug">Sarah M. uploaded new data</p>
                <p className="text-[11px] text-gray-400 mt-1 font-semibold">5 hours ago</p>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="relative pl-5">
                <div className="absolute w-2.5 h-2.5 bg-gray-200 rounded-full -left-[6px] top-[4px] ring-2 ring-white"></div>
                <p className="text-[13px] font-bold text-gray-600 leading-snug">Kebede commented on file</p>
                <p className="text-[11px] text-gray-400 mt-1 font-semibold">Yesterday at 4:30 PM</p>
              </div>
            </div>
          </div>
          
          {/* Incoming Message 2 (Typing) */}
          <div className="flex items-start">
            <img className="w-[38px] h-[38px] rounded-full mr-4 mt-0.5 bg-[#FDE68A] object-cover shadow-sm border border-gray-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=FDE68A&clothing=blazerAndShirt" alt="Sarah" />
            <div className="flex-1">
              <div className="flex items-center mb-1.5">
                <span className="font-extrabold text-[15px] text-gray-900 mr-2 tracking-tight">Sarah M.</span>
              </div>
              <div className="h-[42px] flex items-center bg-[#F8F9FB] self-start inline-flex px-4 rounded-[20px] rounded-tl-sm border border-gray-50/50 shadow-sm">
                <div className="flex space-x-1.5 px-1 py-2">
                  <div className="w-[5px] h-[5px] bg-[#94A3B8] rounded-full animate-bounce"></div>
                  <div className="w-[5px] h-[5px] bg-[#94A3B8] rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></div>
                  <div className="w-[5px] h-[5px] bg-[#94A3B8] rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat Input */}
        <div className="p-5 border-t border-gray-100 bg-white shrink-0 mt-auto">
          <div className="flex items-center bg-[#F8F9FB] rounded-[24px] border border-gray-200/80 p-1.5 pl-5 pr-2 shadow-inner shadow-gray-100/50 transition-all focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 bg-transparent border-none focus:outline-none text-[14px] font-medium text-gray-700 placeholder-gray-400 min-w-0"
            />
            <div className="flex items-center space-x-0.5 ml-2">
              <button className="p-2.5 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-200/50">
                <Paperclip className="w-[18px] h-[18px]" />
              </button>
              <button className="p-2.5 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-200/50 hidden sm:block">
                <Smile className="w-[18px] h-[18px]" />
              </button>
              <button className="p-2.5 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-200/50 hidden sm:block">
                <Mic className="w-[18px] h-[18px]" />
              </button>
              <button className="w-9 h-9 ml-1 rounded-full bg-[#1E6BFF] text-white flex items-center justify-center hover:bg-blue-600 transition-all shadow-[0_2px_8px_rgba(30,107,255,0.3)] hover:shadow-[0_4px_12px_rgba(30,107,255,0.4)] hover:-translate-y-0.5">
                <Send className="w-[15px] h-[15px] -ml-[2px] mt-[1px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

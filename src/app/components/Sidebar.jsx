import React from 'react';
import { 
  User, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  MessageSquare, 
  FileCheck,
  Bell
} from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-l border-gray-200 min-h-[calc(100vh-73px)]">
      <nav className="p-4 space-y-2">
        <SidebarItem icon={<User />} label="معلومات الطالب" />
        <SidebarItem icon={<FileText />} label="صحيفة الطالب" />
        <SidebarItem icon={<MessageSquare />} label="Chatbot Assistant" />
        <SidebarItem icon={<FileCheck />} label="الارشاد الاكاديمي" active />
        <SidebarItem icon={<Bell />} label="تسجيل الخروج" />
      </nav>
    </aside>
  );
}

function SidebarItem({ 
  icon, 
  label, 
  active = false 
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
        active
          ? 'bg-blue-50 text-blue-600 font-medium border border-blue-200'
          : 'text-gray-700 hover:bg-gray-50'
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

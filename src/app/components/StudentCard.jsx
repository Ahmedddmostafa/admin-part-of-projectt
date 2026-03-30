import React from 'react';
import { User, GraduationCap, FileText, BookOpen, CreditCard, FileCheck, Bell } from 'lucide-react';


export function StudentCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Student Profile Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white relative">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-3">
            <User className="w-12 h-12 text-blue-900" />
          </div>
          <h3 className="font-bold text-lg mb-1">أحمد مصطفى كمال حسين</h3>
          <p className="text-blue-100 text-sm mb-1">الفصل الدراسي الأول</p>
          <p className="text-blue-100 text-sm mb-3">26128920...</p>
          <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
            <div className="text-xs text-blue-100 mb-1">المعدل</div>
            <div className="text-xl font-bold">4.0 / 100</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-3">إجراءات سريعة</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-3 flex flex-col items-center gap-1 transition-colors">
            <FileText className="w-5 h-5" />
            <span className="text-xs">التحليل المالي</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 flex flex-col items-center gap-1 transition-colors">
            <CreditCard className="w-5 h-5" />
            <span className="text-xs">تسديد المبلغ</span>
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white rounded-lg p-3 flex flex-col items-center gap-1 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="text-xs">اتصل بالدعم</span>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-3 flex flex-col items-center gap-1 transition-colors">
            <FileCheck className="w-5 h-5" />
            <span className="text-xs">نموذج الطالب</span>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          <p className="text-xs text-gray-500 mb-2">التنقل</p>
          <NavItem icon={<BookOpen />} label="المواد المسجلة" active />
          <NavItem icon={<FileCheck />} label="تسجيل المواد" />
          <NavItem icon={<GraduationCap />} label="السجل الأكاديمي" />
          <NavItem icon={<User />} label="معلومات الطالب" />
          <NavItem icon={<FileText />} label="المدفوعات" />
          <NavItem icon={<Bell />} label="الإشعارات" />
          <NavItem icon={<User />} label="المساعد الذكي" />
          <NavItem icon={<Bell />} label="المساعدة" />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
        active
          ? 'bg-blue-600 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

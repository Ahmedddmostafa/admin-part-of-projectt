import React, { useState } from 'react';
import Header from './components/Header';
import NavigationDrawer from './components/NavigationDrawer';
import { FileUploadSection } from './components/FileUploadSection';
import StudentDBPage from './components/StudentDBPage';
import AdminDBPage from './components/AdminDBPage';

export default function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('academic-advising');

  const handleFileUpload = (files) => {
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header onMenuToggle={() => setIsDrawerOpen(true)} />
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Page Content */}
      {currentPage === 'academic-advising' && (
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            <FileUploadSection
              uploadedFiles={uploadedFiles}
              onFileUpload={handleFileUpload}
              onRemoveFile={handleRemoveFile}
            />
          </div>
        </main>
      )}

      {currentPage === 'student-db' && <StudentDBPage />}
      {currentPage === 'admin-db' && <AdminDBPage />}
    </div>
  );
}

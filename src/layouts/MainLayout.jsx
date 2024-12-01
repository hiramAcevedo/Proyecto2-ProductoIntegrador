import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`min-h-[calc(100vh-3.5rem)] pt-8 transition-all duration-300 md:flex md:items-center md:justify-center ${
          isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
        }`}>
          <div className="h-[100%] w-[100%] max-w-10xl p-4 sm:p-6 lg:p-8 xl:p-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

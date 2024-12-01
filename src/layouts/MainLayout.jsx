import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className={`min-h-[calc(100vh-3.5rem)] pt-8 transition-all duration-300 flex items-center justify-center ${
        isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
      }`}>
        <div className="h-[100%] w-[100%] max-w-10xl p-4 sm:p-6 lg:p-8 xl:p-12">
          <Home />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;

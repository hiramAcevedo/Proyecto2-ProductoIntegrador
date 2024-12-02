import { MoonIcon, SunIcon, Bars3Icon, ArrowDownTrayIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import ImageModal from './ImageModal';

const Navbar = ({ toggleSidebar }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 h-14 bg-primary-700 dark:bg-primary-900 shadow-md z-50">
        <div className="flex items-center justify-between h-full px-4">
          <button 
            onClick={toggleSidebar}
            className="flex items-center bg-transparent text-white hover:bg-white/10 transition-all duration-200"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          
          <h1 className="text-xl font-bold text-white">
            Proyecto II
          </h1>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="flex items-center space-x-2 bg-transparent text-white hover:text-blue-200 transition-all duration-200 px-3 py-1.5 rounded-md"
              title="Ver Gestor de Proyectos"
            >
              <PhotoIcon className="h-5 w-5" />
              <span className="hidden sm:inline">Gestor de Proyectos</span>
            </button>

            <a
              href="/downloads/ReporteModificaciones.pdf"
              download
              className="flex items-center space-x-2 bg-transparent text-white hover:text-blue-200 transition-all duration-200 px-3 py-1.5 rounded-md"
              title="Descargar Reporte de Modificaciones"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span className="hidden sm:inline">Reporte de Modificaciones</span>
            </a>

            <button
              onClick={toggleDarkMode}
              className="flex items-center bg-transparent text-white hover:text-blue-200 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc="/img/GestorDeProyectosRitmonetSemestre2.jpeg"
      />
    </>
  );
};

export default Navbar;

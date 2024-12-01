import { MoonIcon, SunIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ toggleSidebar }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
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
        
        <button
          onClick={toggleDarkMode}
          className="flex items-center bg-transparent text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import { 
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  FolderIcon,
  BookOpenIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const MenuItem = ({ icon: Icon, text, isOpen }) => (
  <button className="w-full flex items-center px-4 py-2.5 text-sm bg-transparent text-white hover:bg-white/10 transition-all duration-200 whitespace-nowrap">
    <Icon className="h-5 w-5 min-w-[1.25rem]" />
    {isOpen && <span className="ml-3 truncate">{text}</span>}
  </button>
);

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: ClipboardDocumentListIcon, text: 'Actividades realizadas' },
    { icon: FolderIcon, text: 'Proyectos' },
    { icon: BookOpenIcon, text: 'Documentación' },
    { icon: CodeBracketIcon, text: 'Github' }
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-primary-700 dark:bg-primary-900 shadow-lg transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      } pt-14 overflow-hidden`}
    >
      <div className="flex flex-col h-full">
        {/* Menu Items */}
        <div className="flex-1 py-2">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              text={item.text}
              isOpen={isOpen}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-center">
            <AcademicCapIcon className="h-6 w-6 text-white" />
          </div>
          {isOpen && (
            <div className="mt-2 text-center text-xs text-white whitespace-nowrap">
              <p className="whitespace-nowrap">Licenciatura en desarrollo</p>
              <p className="whitespace-nowrap">de sistemas web</p>
              <p className="mt-2 whitespace-nowrap"> 2024 Producto Integrador.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

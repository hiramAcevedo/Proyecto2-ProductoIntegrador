import { 
  ClipboardDocumentListIcon,
  FolderIcon,
  BookOpenIcon,
  CodeBracketIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowDownTrayIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const MenuItem = ({ icon: Icon, text, isOpen, hasSubmenu, isSubmenuOpen, onClick, children }) => {
  const showText = isOpen || isSubmenuOpen;
  
  return (
    <div className="w-full">
      <button 
        onClick={onClick}
        className={`w-full flex items-center px-4 py-2.5 text-sm bg-transparent hover:bg-white/10 transition-all duration-200 whitespace-nowrap ${
          isSubmenuOpen ? 'text-blue-400' : 'text-white'
        }`}
      >
        <Icon className="h-5 w-5 min-w-[1.25rem]" />
        {showText && (
          <>
            <span className="ml-3 truncate flex-1 text-left">{text}</span>
            {hasSubmenu && isOpen && (
              <div className="ml-auto">
                {isSubmenuOpen ? (
                  <ChevronDownIcon className="h-4 w-4" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4" />
                )}
              </div>
            )}
          </>
        )}
      </button>
      {hasSubmenu && isSubmenuOpen && (
        <div className={`transition-all duration-300 ${
          isOpen ? 'ml-4 pl-4 border-l border-blue-400/30' : 'pl-0'
        }`}>
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen }) => {
  const [openMenus, setOpenMenus] = useState({
    actividades: false,
    proyectos: false,
    documentacion: false,
    github: false,
    unidad1: false,
    unidad2: false,
    unidad3: false,
    unidad4: false
  });

  const toggleMenu = (menuKey) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  const unidades = [
    {
      full: "Unidad 1",
      short: "U1",
      submenu: [
        { 
          name: 'Actividad 2',
          filename: 'U1Act2.pdf',
          isDownload: true
        },
        { 
          name: 'Actividad Integradora',
          filename: 'U1ActInt.pdf',
          isDownload: true
        }
      ]
    },
    {
      full: "Unidad 2",
      short: "U2",
      submenu: [
        { 
          name: 'Actividad 1',
          filename: 'U2Act1.pdf',
          isDownload: true
        },
        { 
          name: 'Actividad 2',
          filename: 'U2Act2.pdf',
          isDownload: true
        },
        { 
          name: 'Actividad Integradora',
          filename: 'U2ActInt.pdf',
          isDownload: true
        }
      ]
    },
    {
      full: "Unidad 3",
      short: "U3",
      submenu: [
        { 
          name: 'Actividad 1',
          filename: 'U3Act1.pdf',
          isDownload: true
        },
        { 
          name: 'Actividad 2',
          filename: 'U3Act2.pdf',
          isDownload: true
        },
        { 
          name: 'Actividad 3',
          filename: 'U3Act3.pdf',
          isDownload: true
        },
        { 
          name: 'Actividad Integradora',
          filename: 'U3ActInt.pdf',
          isDownload: true
        }
      ]
    },
    {
      full: "Unidad 4",
      short: "U4",
      submenu: [
        { 
          name: 'Actividad 1',
          filename: 'U4Act1.pdf',
          isDownload: true
        },
        { 
          name: 'Actividad 2',
          filename: 'U4Act2.pdf',
          isDownload: true
        }
      ]
    }
  ];

  const proyectos = [
    { name: "Ritmonet", submenu: ["Código fuente"] },
    { name: "Natare", submenu: ["Código fuente"] }
  ];

  const documentacion = [
    { full: "Trello", short: "TR" },
    { full: "Jira", short: "JR" },
    { full: "Reporte de modificaciones", short: "RM" }
  ];

  const github = [
    { full: "Ritmonet", short: "RT" },
    { full: "Natare", short: "NT" }
  ];

  const renderSubmenuButton = (item, index) => {
    if (item.isDownload) {
      return (
        <a
          key={index}
          href={`/downloads/${item.filename}`}
          download
          className={`w-full text-left px-3 py-2 text-sm text-blue-300/70 hover:text-blue-200 hover:bg-blue-500/10 rounded transition-colors flex items-center ${
            !isOpen ? 'justify-center' : ''
          }`}
        >
          <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
          {item.name}
        </a>
      );
    }

    return (
      <button
        key={index}
        className={`w-full text-left px-3 py-2 text-sm text-blue-300/70 hover:text-blue-200 hover:bg-blue-500/10 rounded transition-colors ${
          !isOpen ? 'flex justify-center' : ''
        }`}
      >
        {isOpen ? item.full || item : item.short || item.substring(0, 2)}
      </button>
    );
  };

  const renderProyectoSubmenu = (proyecto, index) => (
    <div key={index} className="space-y-1">
      <button
        className={`w-full text-left px-3 py-2 text-sm text-blue-300 hover:text-blue-200 hover:bg-blue-500/10 rounded transition-colors ${
          !isOpen ? 'flex justify-center' : ''
        }`}
      >
        {isOpen ? proyecto.name : proyecto.name.substring(0, 2)}
      </button>
      {isOpen && openMenus.proyectos && (
        <div className="ml-4">
          {proyecto.submenu.map((subitem, subIndex) => (
            <button
              key={`${index}-${subIndex}`}
              className="w-full text-left px-3 py-1.5 text-sm text-blue-300/70 hover:text-blue-200 hover:bg-blue-500/10 rounded transition-colors"
            >
              {subitem}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const renderUnidadButton = (unidad, index) => (
    <div key={index} className="space-y-1">
      <button
        onClick={() => toggleMenu(`unidad${index + 1}`)}
        className={`w-full text-left px-3 py-2 text-sm text-blue-300 hover:text-blue-200 hover:bg-blue-500/10 rounded transition-colors flex items-center ${
          !isOpen ? 'justify-center' : ''
        }`}
      >
        {isOpen ? (
          <>
            {unidad.full}
            <ChevronDownIcon
              className={`w-4 h-4 ml-auto transform transition-transform ${
                openMenus[`unidad${index + 1}`] ? 'rotate-180' : ''
              }`}
            />
          </>
        ) : (
          unidad.short
        )}
      </button>
      {isOpen && openMenus[`unidad${index + 1}`] && unidad.submenu && (
        <div className="ml-4 space-y-1">
          {unidad.submenu.map((subitem, subIndex) => 
            renderSubmenuButton(subitem, `${index}-${subIndex}`)
          )}
        </div>
      )}
    </div>
  );

  return (
    <aside className={`fixed top-0 left-0 h-screen bg-gray-800 dark:bg-gray-950 transition-all duration-300 pt-14 flex flex-col ${
      isOpen ? 'w-64' : 'w-16'
    }`}>
      <nav className="flex-1 flex flex-col gap-1 p-2 overflow-y-auto">
        <MenuItem 
          icon={ClipboardDocumentListIcon} 
          text="Actividades realizadas" 
          isOpen={isOpen}
          hasSubmenu={true}
          isSubmenuOpen={openMenus.actividades}
          onClick={() => toggleMenu('actividades')}
        >
          {isOpen && openMenus.actividades && (
            <div className="space-y-1">
              {unidades.map((unidad, index) => 
                renderUnidadButton(unidad, index)
              )}
            </div>
          )}
        </MenuItem>

        <MenuItem 
          icon={FolderIcon} 
          text="Proyectos" 
          isOpen={isOpen}
          hasSubmenu={true}
          isSubmenuOpen={openMenus.proyectos}
          onClick={() => toggleMenu('proyectos')}
        >
          {proyectos.map((proyecto, index) => 
            renderProyectoSubmenu(proyecto, index)
          )}
        </MenuItem>

        <MenuItem 
          icon={BookOpenIcon} 
          text="Documentación" 
          isOpen={isOpen}
          hasSubmenu={true}
          isSubmenuOpen={openMenus.documentacion}
          onClick={() => toggleMenu('documentacion')}
        >
          {documentacion.map((doc, index) => 
            renderSubmenuButton(doc, index)
          )}
        </MenuItem>

        <MenuItem 
          icon={CodeBracketIcon} 
          text="Github" 
          isOpen={isOpen}
          hasSubmenu={true}
          isSubmenuOpen={openMenus.github}
          onClick={() => toggleMenu('github')}
        >
          {github.map((repo, index) => 
            renderSubmenuButton(repo, index)
          )}
        </MenuItem>
      </nav>
      
      <div className={`p-4 border-t border-white/5 ${isOpen ? 'text-center' : ''}`}>
        <div className="flex items-center justify-center gap-2 text-white/80">
          <AcademicCapIcon className="h-5 w-5" />
          {isOpen && (
            <div className="text-xs">
              Licenciatura en Desarrollo de Sistemas Web
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import { 
  ClipboardDocumentListIcon,
  FolderIcon,
  BookOpenIcon,
  CodeBracketIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowDownTrayIcon,
  AcademicCapIcon,
  HomeIcon,
  LinkIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MenuItem = ({ icon: Icon, text, isOpen, hasSubmenu, isSubmenuOpen, onClick, to, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === to;

  return (
    <div className="space-y-1">
      <div
        className={`w-full flex items-center rounded transition-colors ${
          !isOpen ? 'justify-center' : ''
        } ${
          isActive
            ? 'bg-blue-500/10 text-blue-400'
            : 'text-gray-300 hover:bg-gray-800 hover:text-gray-200'
        }`}
      >
        <div 
          onClick={() => to && navigate(to)}
          className={`flex items-center flex-grow px-3 py-2 ${to ? 'cursor-pointer' : ''}`}
        >
          <Icon className={`w-6 h-6 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
          {isOpen && (
            <span className={`ml-3 text-xs sm:text-sm md:text-base ${isActive ? 'text-blue-400' : 'text-gray-300'}`}>
              {text}
            </span>
          )}
        </div>
        {hasSubmenu && isOpen && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="pr-3 cursor-pointer"
          >
            <ChevronDownIcon
              className={`w-4 h-4 transform transition-transform text-gray-400 ${
                isSubmenuOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        )}
      </div>
      {hasSubmenu && isOpen && isSubmenuOpen && (
        <div className="pl-6 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen }) => {
  const [openMenus, setOpenMenus] = useState({
    proyectos: false,
    actividades: false,
    documentacion: false,
    github: false,
    unidad1: false,
    unidad2: false,
    unidad3: false,
    unidad4: false,
    ritmonet: false,
    natare: false
  });

  const toggleMenu = (menuName) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const unidades = [
    {
      id: 'unidad1',
      nombre: 'Unidad 1',
      ruta: '/actividades-realizadas/unidad1',
      actividades: [
        { nombre: 'Actividad 2', archivo: 'U1Act2.pdf' },
        { nombre: 'Actividad Integradora', archivo: 'U1ActInt.pdf' }
      ]
    },
    {
      id: 'unidad2',
      nombre: 'Unidad 2',
      ruta: '/actividades-realizadas/unidad2',
      actividades: [
        { nombre: 'Actividad 1', archivo: 'U2Act1.pdf' },
        { nombre: 'Actividad 2', archivo: 'U2Act2.pdf' },
        { nombre: 'Actividad Integradora', archivo: 'U2ActInt.pdf' }
      ]
    },
    {
      id: 'unidad3',
      nombre: 'Unidad 3',
      ruta: '/actividades-realizadas/unidad3',
      actividades: [
        { nombre: 'Actividad Preliminar', archivo: 'U3ActPreliminar.pdf' },
        { nombre: 'Actividad 1', archivo: 'U3Act1.pdf' },
        { nombre: 'Actividad 2', archivo: 'U3Act2.pdf' },
        { nombre: 'Actividad 3', archivo: 'U3Act3.pdf' },
        { nombre: 'Actividad Integradora', archivo: 'U3ActInt.pdf' }
      ]
    },
    {
      id: 'unidad4',
      nombre: 'Unidad 4',
      ruta: '/actividades-realizadas/unidad4',
      actividades: [
        { nombre: 'Actividad 1', archivo: 'U4Act1.pdf' },
        { nombre: 'Actividad 2', archivo: 'U4Act2.pdf' }
      ]
    }
  ];

  const renderUnidadSubmenu = (unidad) => (
    <div key={unidad.id} className="space-y-1">
      <button
        onClick={() => toggleMenu(unidad.id)}
        className="w-full flex items-center px-3 py-2 text-sm text-gray-300 hover:text-gray-200 hover:bg-gray-800 rounded transition-colors"
      >
        {unidad.nombre}
        <ChevronDownIcon
          className={`w-4 h-4 ml-auto transform transition-transform ${
            openMenus[unidad.id] ? 'rotate-180' : ''
          }`}
        />
      </button>
      {openMenus[unidad.id] && (
        <div className="pl-4 space-y-1">
          {unidad.actividades.map((actividad, index) => (
            <a
              key={index}
              href={`/downloads/${actividad.archivo}`}
              download
              className="block py-1 px-3 text-xs sm:text-sm md:text-base text-blue-300/70 hover:text-blue-200 hover:bg-blue-500/10 rounded transition-colors flex items-center"
            >
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
              {actividad.nombre}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  const proyectos = [
    {
      id: 'ritmonet',
      nombre: 'Ritmonet',
      ruta: '/proyectos/ritmonet',
      submenu: [
        { 
          nombre: 'Descargar código', 
          archivo: 'ritmonetdeploy-main.zip'
        }
      ]
    },
    {
      id: 'natare',
      nombre: 'Natare',
      ruta: '/proyectos/natare',
      submenu: [
        { 
          nombre: 'Descargar código', 
          archivo: 'natare-main.zip'
        }
      ]
    }
  ];

  const renderProyectoSubmenu = (proyecto) => (
    <div key={proyecto.id} className="space-y-1">
      <Link
        to={proyecto.ruta}
        className="w-full flex items-center px-3 py-2 text-sm text-gray-300 hover:text-gray-200 hover:bg-gray-800 rounded transition-colors group"
      >
        <span>{proyecto.nombre}</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu(proyecto.id);
          }}
          className="ml-auto p-1 hover:bg-gray-700 rounded"
        >
          <ChevronDownIcon
            className={`w-4 h-4 transform transition-transform ${
              openMenus[proyecto.id] ? 'rotate-180' : ''
            }`}
          />
        </button>
      </Link>
      {openMenus[proyecto.id] && (
        <div className="pl-6 space-y-1">
          {proyecto.submenu.map((item, index) => (
            <div key={index}>
              <a
                href={`/downloads/${item.archivo}`}
                download
                className="block py-1 px-3 text-xs sm:text-sm md:text-base text-blue-300/70 hover:text-gray-200 hover:bg-gray-800 rounded transition-colors flex items-center"
              >
                <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                {item.nombre}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const documentacion = [
    { nombre: 'Trello', link: 'https://trello.com/b/gOAVAeon/ritmonet-historias-de-usuario-x-funci%C3%B3n-priorizaci%C3%B3n-u2' },
    { nombre: 'Jira', link: 'https://hiramwoki1996.atlassian.net/jira/core/projects/S2R/board' },
    { nombre: 'Reporte de modificaciones', archivo: 'ReporteModificaciones.pdf' }
  ];

  const github = [
    {
      link: 'https://github.com/hiramAcevedo/ritmonetdeploy',
      nombre: 'Ritmonet'
    },
    {
      link: 'https://github.com/LuisM-code-star/natare',
      nombre: 'Natare'
    }
  ];

  return (
    <aside className={`fixed top-0 left-0 h-screen bg-gray-800 dark:bg-gray-950 transition-all duration-300 pt-14 flex flex-col 
      ${isOpen ? 'w-64' : 'w-16'}
      ${window.innerWidth < 768 && !isOpen ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
    `}>
      <nav className="flex-1 space-y-1 px-2 overflow-y-auto">
        <MenuItem 
          icon={HomeIcon}
          text="Inicio"
          isOpen={isOpen}
          to="/"
        />

        <MenuItem 
          icon={ClipboardDocumentListIcon} 
          text="Actividades realizadas" 
          isOpen={isOpen}
          to="/actividades-realizadas"
          hasSubmenu={true}
          isSubmenuOpen={openMenus.actividades}
          onClick={() => {
            toggleMenu('actividades');
          }}
        >
          {openMenus.actividades && (
            <div className="pl-6 space-y-1">
              {unidades.map(unidad => renderUnidadSubmenu(unidad))}
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
          {openMenus.proyectos && (
            <div className="pl-6 space-y-1">
              {proyectos.map(proyecto => renderProyectoSubmenu(proyecto))}
            </div>
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
          {openMenus.documentacion && (
            <div className="pl-6 space-y-1">
              {documentacion.map((item, index) => 
                item.archivo ? (
                  <a
                    key={index}
                    href={`/downloads/${item.archivo}`}
                    download
                    className="block py-2 text-xs sm:text-sm md:text-base text-blue-300/70 hover:text-gray-200 hover:bg-gray-800 rounded transition-colors flex items-center"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                    {item.nombre}
                  </a>
                ) : (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-xs sm:text-sm md:text-base text-gray-300 hover:text-gray-200 hover:bg-gray-800 rounded text-sm"
                  >
                    {item.nombre}
                  </a>
                )
              )}
            </div>
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
          {openMenus.github && (
            <div className="pl-6 space-y-1">
              {github.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-xs sm:text-sm md:text-base text-blue-300/70 hover:text-gray-200 hover:bg-gray-800 rounded transition-colors flex items-center"
                >
                  <LinkIcon className="w-4 h-4 mr-2" />
                  {item.nombre}
                </a>
              ))}
            </div>
          )}
        </MenuItem>
      </nav>
      <footer className="p-4 border-t border-gray-700">
        <div className={`flex items-center ${!isOpen ? 'justify-center' : ''}`}>
          <AcademicCapIcon className="w-8 h-8 text-gray-400" />
          {isOpen && (
            <div className="ml-3">
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300">Desarrollo de Sistemas Web</p>
              <p className="text-xs text-gray-500">Agosto - Diciembre 2024</p>
            </div>
          )}
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;

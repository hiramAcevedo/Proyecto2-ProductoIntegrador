import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const unidades = [
  {
    full: "Unidad 1",
    short: "U1",
    description: "Introducción al Desarrollo Web",
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
    description: "Frameworks y Tecnologías Web",
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
    description: "Desarrollo Frontend Avanzado",
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
    description: "Integración y Despliegue",
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

const Actividades = () => {
  const [openUnits, setOpenUnits] = useState({});

  const toggleUnit = (index) => {
    setOpenUnits(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Actividades Realizadas
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {unidades.map((unidad, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div 
              className="p-4 cursor-pointer bg-gray-50 dark:bg-gray-700 flex justify-between items-center"
              onClick={() => toggleUnit(index)}
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {unidad.full}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {unidad.description}
                </p>
              </div>
              <ChevronDownIcon 
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openUnits[index] ? 'rotate-180' : ''
                }`}
              />
            </div>
            {openUnits[index] && (
              <div className="p-4 space-y-2">
                {unidad.submenu.map((item, subIndex) => (
                  <a
                    key={subIndex}
                    href={`/downloads/${item.filename}`}
                    download
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    <svg 
                      className="w-5 h-5 text-blue-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actividades;

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const unidades = [
  {
    titulo: "Unidad 1: El primer sprint con SCRUM",
    actividades: [
      {
        nombre: "Actividad 2",
        archivo: "U1Act2.pdf"
      },
      {
        nombre: "Actividad Integradora",
        archivo: "U1ActInt.pdf"
      }
    ]
  },
  {
    titulo: "Unidad 2: Propuesta de sprint Backlog",
    actividades: [
      {
        nombre: "Actividad 1",
        archivo: "U2Act1.pdf"
      },
      {
        nombre: "Actividad 2",
        archivo: "U2Act2.pdf"
      },
      {
        nombre: "Actividad Integradora",
        archivo: "U2ActInt.pdf"
      }
    ]
  },
  {
    titulo: "Unidad 3: Sprint: desarrollo, revisión y ajuste",
    actividades: [
      {
        nombre: "Actividad Preliminar",
        archivo: "U3ActPreliminar.pdf"
      },
      {
        nombre: "Actividad 1",
        archivo: "U3Act1.pdf"
      },
      {
        nombre: "Actividad 2",
        archivo: "U3Act2.pdf"
      },
      {
        nombre: "Actividad 3",
        archivo: "U3Act3.pdf"
      },
      {
        nombre: "Actividad 4",
        archivo: "U3ActInt.pdf"
      }
    ]
  },
  {
    titulo: "Unidad 4: Organización final",
    actividades: [
      {
        nombre: "Actividad 1",
        archivo: "U4Act1.pdf"
      },
      {
        nombre: "Actividad 2",
        archivo: "U4Act2.pdf"
      }
    ]
  }
];

const Actividades = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-700 dark:text-primary-400">Actividades Realizadas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {unidades.map((unidad, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {unidad.titulo}
            </h2>
            <div className="space-y-3">
              {unidad.actividades.map((actividad, actIndex) => (
                <div key={actIndex} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className="text-gray-700 dark:text-gray-300">
                    {actividad.nombre}
                  </span>
                  <a
                    href={`/downloads/${actividad.archivo}`}
                    download
                    className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                    <span>Descargar</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actividades;

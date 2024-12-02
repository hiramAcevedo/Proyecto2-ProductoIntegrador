import { XMarkIcon } from '@heroicons/react/24/outline';

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative w-[90vw] h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="w-full h-full overflow-y-auto">
          <img
            src={imageSrc}
            alt="Gestor de Proyectos"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

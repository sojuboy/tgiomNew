interface ErrorDialogProps {
  message: string;
  onClose: () => void;
}

export default function ErrorDialog({ message, onClose }: ErrorDialogProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 w-96 shadow-lg">
        {/* Title bar */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 px-2 py-1 flex justify-between items-center">
          <span className="text-white text-sm font-mono">Error</span>
        </div>

        {/* Content */}
        <div className="bg-gray-400 p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⚠️</div>
            <p className="text-sm font-mono flex-1">{message}</p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="px-8 py-2 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 text-black font-mono hover:bg-gray-300 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

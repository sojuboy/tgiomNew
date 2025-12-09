import { RotateCcw, Info, Award, BookOpen } from 'lucide-react';

interface StartMenuProps {
  onRestart: () => void;
  onCredits: () => void;
  onInfo: () => void;
  onSources: () => void;
  onClose: () => void;
}

export default function StartMenu({ onRestart, onCredits, onInfo, onSources, onClose }: StartMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />
      
      {/* Menu */}
      <div className="absolute bottom-10 left-0 w-56 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 shadow-lg z-50">
        <div className="p-1">
          <button
            onClick={() => {
              onRestart();
              onClose();
            }}
            className="w-full px-3 py-2 hover:bg-blue-600 hover:text-white text-left flex items-center gap-2 font-mono text-sm"
          >
            <RotateCcw size={16} />
            <span>Restart Game</span>
          </button>
          <div className="border-t border-gray-600 my-1" />
          <button
            onClick={() => {
              onCredits();
              onClose();
            }}
            className="w-full px-3 py-2 hover:bg-blue-600 hover:text-white text-left flex items-center gap-2 font-mono text-sm"
          >
            <Award size={16} />
            <span>Credits</span>
          </button>
          <button
            onClick={() => {
              onInfo();
              onClose();
            }}
            className="w-full px-3 py-2 hover:bg-blue-600 hover:text-white text-left flex items-center gap-2 font-mono text-sm"
          >
            <Info size={16} />
            <span>Information</span>
          </button>
          <button
            onClick={() => {
              onSources();
              onClose();
            }}
            className="w-full px-3 py-2 hover:bg-blue-600 hover:text-white text-left flex items-center gap-2 font-mono text-sm"
          >
            <BookOpen size={16} />
            <span>Sources and Citations</span>
          </button>
        </div>
      </div>
    </>
  );
}
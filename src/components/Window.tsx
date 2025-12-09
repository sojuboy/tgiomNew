import { useState, useRef, useEffect } from 'react';
import { X, Minimize, Maximize } from 'lucide-react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  onClose: () => void;
  onFocus?: () => void;
  zIndex?: number;
  isMinimized?: boolean;
  onMinimize?: () => void;
}

export default function Window({
  title,
  children,
  initialPosition = { x: 50, y: 50 },
  onClose,
  onFocus,
  zIndex = 10,
  isMinimized = false,
  onMinimize,
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (onFocus) onFocus();
    if (windowRef.current && !isMaximized) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const handleWindowClick = () => {
    if (onFocus) onFocus();
  };

  const handleMinimize = () => {
    if (onMinimize) onMinimize();
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={windowRef}
      className={`absolute bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 shadow-lg transition-all ${
        isMinimized ? 'hidden' : ''
      } ${isMaximized ? 'inset-4 !left-4 !top-4 !right-4 !bottom-14' : ''}`}
      style={
        isMaximized
          ? { zIndex: zIndex, width: 'calc(100vw - 2rem)', height: 'calc(100vh - 6rem)' }
          : {
              left: `${position.x}px`,
              top: `${position.y}px`,
              minWidth: '300px',
              zIndex: zIndex,
            }
      }
      onClick={handleWindowClick}
    >
      {/* Title bar */}
      <div
        className="bg-gradient-to-r from-blue-900 to-blue-600 px-2 py-1 flex justify-between items-center cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <span className="text-white text-sm font-mono">{title}</span>
        <div className="flex gap-1">
          <button
            className="w-5 h-5 bg-gray-400 border border-t-white border-l-white border-r-gray-800 border-b-gray-800 flex items-center justify-center hover:bg-gray-300"
            onClick={handleMinimize}
          >
            <Minimize size={12} />
          </button>
          <button
            className="w-5 h-5 bg-gray-400 border border-t-white border-l-white border-r-gray-800 border-b-gray-800 flex items-center justify-center hover:bg-gray-300"
            onClick={handleMaximize}
          >
            <Maximize size={12} />
          </button>
          <button
            onClick={onClose}
            className="w-5 h-5 bg-gray-400 border border-t-white border-l-white border-r-gray-800 border-b-gray-800 flex items-center justify-center hover:bg-gray-300"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={`bg-gray-400 p-2 ${isMaximized ? 'h-full overflow-auto' : ''}`}>{children}</div>
    </div>
  );
}
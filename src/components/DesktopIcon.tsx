interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  isDragTarget?: boolean;
}

export default function DesktopIcon({ 
  icon, 
  label, 
  onClick, 
  draggable = false,
  onDragStart,
  onDragOver,
  onDrop,
  isDragTarget = false,
}: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={`flex flex-col items-center gap-2 p-3 hover:bg-blue-600 hover:bg-opacity-30 rounded group ${
        isDragTarget ? 'bg-red-600 bg-opacity-50 ring-2 ring-red-400' : ''
      }`}
    >
      <div className="text-white">{icon}</div>
      <span className="text-white text-sm font-mono text-center">{label}</span>
    </button>
  );
}
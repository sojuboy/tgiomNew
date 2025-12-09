import { X, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

export default function Notification({ message, onClose }: NotificationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slide in animation
    setTimeout(() => setVisible(true), 10);

    // Auto close after 5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClick = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed top-4 right-4 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 shadow-lg w-72 transition-all duration-300 z-50 cursor-pointer hover:bg-gray-300 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-96 opacity-0'
      }`}
    >
      {/* Title bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 px-2 py-1 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-white" />
          <span className="text-white text-xs font-mono">New Message</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setVisible(false);
            setTimeout(onClose, 300);
          }}
          className="text-white hover:bg-blue-800 w-4 h-4 flex items-center justify-center"
        >
          <X size={12} />
        </button>
      </div>

      {/* Content */}
      <div className="bg-gray-400 p-3 flex items-center gap-3">
        <div className="text-2xl">📧</div>
        <p className="text-xs font-mono flex-1">{message}</p>
      </div>
    </div>
  );
}
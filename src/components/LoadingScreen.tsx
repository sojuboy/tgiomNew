import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [systemProgress, setSystemProgress] = useState(0);
  const [memoryProgress, setMemoryProgress] = useState(0);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // System loading
    const systemInterval = setInterval(() => {
      setSystemProgress((prev) => {
        if (prev >= 100) {
          clearInterval(systemInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Memory loading (starts after 1 second)
    setTimeout(() => {
      const memoryInterval = setInterval(() => {
        setMemoryProgress((prev) => {
          if (prev >= 100) {
            clearInterval(memoryInterval);
            return 100;
          }
          return prev + 3;
        });
      }, 50);
    }, 1000);

    // Connection loading (starts after 2 seconds)
    setTimeout(() => {
      const connectionInterval = setInterval(() => {
        setConnectionProgress((prev) => {
          if (prev >= 100) {
            clearInterval(connectionInterval);
            return 100;
          }
          return prev + 1.5;
        });
      }, 50);
    }, 2000);

    // Show button after all loaded
    setTimeout(() => {
      setShowButton(true);
    }, 6000);

    return () => {
      clearInterval(systemInterval);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-teal-600">
      <div className="bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 p-1 w-96">
        {/* Title bar */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 px-2 py-1 flex justify-between items-center">
          <span className="text-white text-sm font-mono">System Initialization</span>
        </div>
        
        {/* Content */}
        <div className="bg-gray-400 p-6 space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-mono">Loading system files...</p>
            <div className="bg-white border border-gray-600 h-6 relative overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-100"
                style={{ width: `${systemProgress}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-mono">
                {systemProgress}%
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-mono">Checking memory integrity...</p>
            <div className="bg-white border border-gray-600 h-6 relative overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-100"
                style={{ width: `${memoryProgress}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-mono">
                {memoryProgress}%
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-mono">Establishing connection...</p>
            <div className="bg-white border border-gray-600 h-6 relative overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-100"
                style={{ width: `${connectionProgress}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-mono">
                {connectionProgress}%
              </span>
            </div>
          </div>

          {showButton && (
            <div className="flex justify-center pt-4">
              <button
                onClick={onComplete}
                className="px-6 py-2 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 text-black font-mono hover:bg-gray-300 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white"
              >
                Log On
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

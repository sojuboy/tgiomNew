import { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import Window from './Window';
import PaintApp from './PaintApp';
import FilesApp from './FilesApp';
import MessagesApp from './MessagesApp';
import MediaPlayer from './MediaPlayer';
import BrowserApp from './BrowserApp';
import DesktopIcon from './DesktopIcon';
import StartMenu from './StartMenu';
import ErrorDialog from './ErrorDialog';
import Notification from './Notification';
import SanctuaryVideo from './SanctuaryVideo';
import filesIcon from 'figma:asset/c33ad6c70ec2e424b97cd9751686498b7285ceba.png';
import messagesIcon from 'figma:asset/a991fc5aef38fc79bd868df7b04b5adaf7cdb3bd.png';
import internetIcon from 'figma:asset/7ed0711838ce315784de46ae769e880acf856829.png';
import paintIcon from 'figma:asset/45c27d1c4172b452d413ca4194e477b2f802e459.png';
import musicIcon from 'figma:asset/a96515540b1bed17bfcb2cebf62eba0268a93663.png';
import trashIcon from 'figma:asset/e691a2891327d39e9db1fc5883fef48b2778b80b.png';
import sanctuaryIcon from 'figma:asset/f9d81f1d01900cb56b3c413d109233c57c899779.png';
import angelImage from 'figma:asset/2f4b3e20d63e5ec6256217b77b016b6ac4e447df.png';

interface OpenWindow {
  id: string;
  component: React.ReactNode;
  title: string;
  position: { x: number; y: number };
  zIndex: number;
  isMinimized: boolean;
}

interface DesktopProps {
  onRestart?: () => void;
  onShowCredits?: () => void;
  onShowInfo?: () => void;
}

export default function Desktop({ onRestart, onShowCredits, onShowInfo }: DesktopProps) {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [clickedIcons, setClickedIcons] = useState<Set<string>>(new Set());
  const [showSanctuaryIcon, setShowSanctuaryIcon] = useState(false);
  const [showSanctuaryDialog, setShowSanctuaryDialog] = useState(false);
  const [sanctuaryActive, setSanctuaryActive] = useState(false);
  const [hideNoButton, setHideNoButton] = useState(false);
  const [hideXButton, setHideXButton] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showSources, setShowSources] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [sanctuaryVideoCompleted, setSanctuaryVideoCompleted] = useState(false);
  
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    // Update clock every second
    const updateClock = () => {
      const now = new Date();
      const estTime = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(estTime);
    };
    
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    
    return () => clearInterval(clockInterval);
  }, []);

  useEffect(() => {
    // Check if all icons have been clicked (6 total: files, messages, music, paint, internet, trash)
    const requiredIcons = ['files', 'messages', 'music', 'paint', 'internet', 'trash'];
    const allClicked = requiredIcons.every(icon => clickedIcons.has(icon));
    
    if (allClicked && !showNotification && !hasNewMessage) {
      setTimeout(() => {
        setShowNotification(true);
        setHasNewMessage(true);
      }, 500);
    }
  }, [clickedIcons, showNotification, hasNewMessage]);

  const handleIconClick = (iconName: string) => {
    setClickedIcons((prev) => new Set([...prev, iconName]));
  };

  const handleOpenMediaPlayer = () => {
    handleIconClick('music');
    if (openWindows.find((w) => w.id === 'media-player')) return;
    
    setOpenWindows([
      ...openWindows,
      {
        id: 'media-player',
        title: 'MediaPlayer.exe',
        component: <MediaPlayer />,
        position: { x: 100, y: 100 },
        zIndex: nextZIndex,
        isMinimized: false,
      },
    ]);
    setNextZIndex(nextZIndex + 1);
  };

  const handleOpenPaint = () => {
    handleIconClick('paint');
    if (openWindows.find((w) => w.id === 'paint')) return;
    
    setOpenWindows([
      ...openWindows,
      {
        id: 'paint',
        title: 'Paint.exe',
        component: <PaintApp />,
        position: { x: 150, y: 80 },
        zIndex: nextZIndex,
        isMinimized: false,
      },
    ]);
    setNextZIndex(nextZIndex + 1);
  };

  const handleOpenFiles = () => {
    handleIconClick('files');
    if (openWindows.find((w) => w.id === 'files')) return;
    
    setOpenWindows([
      ...openWindows,
      {
        id: 'files',
        title: 'C:\\System',
        component: <FilesApp sanctuaryActive={sanctuaryActive} />,
        position: { x: 120, y: 120 },
        zIndex: nextZIndex,
        isMinimized: false,
      },
    ]);
    setNextZIndex(nextZIndex + 1);
  };

  const handleSanctuaryClick = () => {
    // If video has been completed, open the angel window instead
    if (sanctuaryVideoCompleted) {
      if (openWindows.find((w) => w.id === 'sanctuary-angel')) return;
      
      setOpenWindows([
        ...openWindows,
        {
          id: 'sanctuary-angel',
          title: 'computer angel',
          component: (
            <div className="w-[450px] bg-white flex flex-col items-center p-6">
              <p className="text-black font-mono mb-4">Warning Virus Detected</p>
              <p className="text-black font-mono text-sm mb-4">Your computer is at risk of being infected by Sanctuary.exe</p>
              <img src={angelImage} alt="Computer Angel" className="w-full h-auto object-contain mb-4" />
              <p className="text-black font-mono text-sm mb-4">To continue browsing safely, perform an anti virus scan.</p>
              <button className="px-6 py-2 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 text-black font-mono hover:bg-gray-300 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white">
                Start Scan
              </button>
            </div>
          ),
          position: { x: 200, y: 100 },
          zIndex: nextZIndex,
          isMinimized: false,
        },
      ]);
      setNextZIndex(nextZIndex + 1);
    } else {
      // Show the security warning dialog
      setShowSanctuaryDialog(true);
    }
  };

  const handleSanctuaryYes = () => {
    setShowSanctuaryDialog(false);
    setHideNoButton(false);
    setHideXButton(false);
    
    // Open the video window
    setOpenWindows([
      ...openWindows,
      {
        id: 'sanctuary-video',
        title: 'SANCTUARY.EXE',
        component: <SanctuaryVideo onComplete={handleSanctuaryComplete} />,
        position: { x: 200, y: 100 },
        zIndex: nextZIndex,
        isMinimized: false,
      },
    ]);
    setNextZIndex(nextZIndex + 1);
  };

  const handleSanctuaryComplete = () => {
    // Close the sanctuary video window
    setOpenWindows((windows) => windows.filter((w) => w.id !== 'sanctuary-video'));
    // Show the sanctuary icon on the desktop
    setShowSanctuaryIcon(true);
    // Activate sanctuary mode
    setSanctuaryActive(true);
    setSanctuaryVideoCompleted(true);
  };

  const handleSanctuaryNo = () => {
    setHideNoButton(true);
  };

  const handleSanctuaryClose = () => {
    setHideXButton(true);
  };

  const handleOpenMessages = () => {
    handleIconClick('messages');
    if (openWindows.find((w) => w.id === 'messages')) return;
    
    setOpenWindows([
      ...openWindows,
      {
        id: 'messages',
        title: 'Messages.exe',
        component: <MessagesApp hasNewMessage={hasNewMessage} onFileClick={handleSanctuaryClick} />,
        position: { x: 180, y: 60 },
        zIndex: nextZIndex,
        isMinimized: false,
      },
    ]);
    setNextZIndex(nextZIndex + 1);
  };

  const handleTrashClick = () => {
    handleIconClick('trash');
    setShowErrorDialog(true);
  };

  const handleOpenBrowser = () => {
    handleIconClick('internet');
    if (openWindows.find((w) => w.id === 'browser')) return;
    
    setOpenWindows([
      ...openWindows,
      {
        id: 'browser',
        title: 'Internet Explorer',
        component: <BrowserApp />,
        position: { x: 80, y: 50 },
        zIndex: nextZIndex,
        isMinimized: false,
      },
    ]);
    setNextZIndex(nextZIndex + 1);
  };

  const handleCloseWindow = (id: string) => {
    // Special handling for sanctuary video window
    if (id === 'sanctuary-video') {
      handleSanctuaryComplete();
      return;
    }
    setOpenWindows(openWindows.filter((w) => w.id !== id));
  };

  const handleFocusWindow = (id: string) => {
    setOpenWindows((windows) =>
      windows.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
      )
    );
    setNextZIndex(nextZIndex + 1);
  };

  const handleMinimizeWindow = (id: string) => {
    setOpenWindows((windows) =>
      windows.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
  };

  const handleNotificationClick = () => {
    setShowNotification(false);
    const messagesWindow = openWindows.find((w) => w.id === 'messages');
    if (messagesWindow) {
      // Update the existing Messages window to show the new message
      setOpenWindows((windows) =>
        windows.map((w) =>
          w.id === 'messages'
            ? {
                ...w,
                component: <MessagesApp hasNewMessage={true} onFileClick={handleSanctuaryClick} />,
                zIndex: nextZIndex,
                isMinimized: false,
              }
            : w
        )
      );
      setNextZIndex(nextZIndex + 1);
    } else {
      // Open messages app if not already open
      handleOpenMessages();
    }
  };

  const handleStartClick = () => {
    setShowStartMenu(!showStartMenu);
  };

  const handleRestartGame = () => {
    if (onRestart) {
      onRestart();
    }
  };

  return (
    <div className="w-full h-full bg-teal-600 relative">
      {/* Desktop Icons */}
      <div className="p-4 flex gap-6">
        {/* First Column */}
        <div className="space-y-6">
          <DesktopIcon 
            icon={<img src={filesIcon} alt="Files" className="w-16 h-16" />} 
            label="Files" 
            onClick={handleOpenFiles} 
          />
          <DesktopIcon 
            icon={<img src={messagesIcon} alt="Messages" className="w-16 h-16" />} 
            label="Messages" 
            onClick={handleOpenMessages} 
          />
          <DesktopIcon icon={<img src={musicIcon} alt="Music" className="w-16 h-16" />} label="Music" onClick={handleOpenMediaPlayer} />
          <DesktopIcon icon={<img src={paintIcon} alt="Paint" className="w-16 h-16" />} label="Paint" onClick={handleOpenPaint} />
        </div>
        {/* Second Column */}
        <div className="space-y-6">
          <DesktopIcon 
            icon={<img src={internetIcon} alt="Internet" className="w-16 h-16" />} 
            label="Internet" 
            onClick={handleOpenBrowser} 
          />
        </div>
      </div>

      {/* Trash Icon (bottom right) */}
      <div className="absolute bottom-14 right-4">
        <DesktopIcon 
          icon={<img src={trashIcon} alt="Trash" className="w-16 h-16" />} 
          label="Trash" 
          onClick={handleTrashClick}
        />
      </div>

      {/* Sanctuary Icon (appears after message) */}
      {showSanctuaryIcon && (
        <div className="absolute bottom-14 right-28">
          <DesktopIcon 
            icon={<img src={sanctuaryIcon} alt="SANCTUARY.EXE" className="w-16 h-16" />} 
            label="SANCTUARY.EXE" 
            onClick={handleSanctuaryClick}
          />
        </div>
      )}

      {/* Sanctuary Warning Dialog */}
      {showSanctuaryDialog && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 p-1 w-96">
            {/* Title bar */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 px-2 py-1 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} className="text-yellow-400" />
                <span className="text-white text-sm font-mono">Security Warning</span>
              </div>
              {!hideXButton && (
                <button
                  onClick={handleSanctuaryClose}
                  className="text-white hover:bg-blue-700 px-2"
                >
                  ×
                </button>
              )}
            </div>
            
            {/* Content */}
            <div className="bg-gray-400 p-6 space-y-4">
              <div className="flex gap-3">
                <AlertTriangle size={48} className="text-yellow-600 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-sm font-mono">
                    This file was downloaded from the Internet.
                  </p>
                  <p className="text-sm font-mono">
                    Are you sure you want to open it?
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <button
                  onClick={handleSanctuaryYes}
                  className="px-6 py-2 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 text-black font-mono hover:bg-gray-300 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white"
                >
                  Yes
                </button>
                {!hideNoButton && (
                  <button
                    onClick={handleSanctuaryNo}
                    className="px-6 py-2 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 text-black font-mono hover:bg-gray-300 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white"
                  >
                    No
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {showNotification && (
        <Notification 
          message="Someone sent you a message" 
          onClose={handleNotificationClick} 
        />
      )}

      {/* Windows */}
      {openWindows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          initialPosition={window.position}
          onClose={() => handleCloseWindow(window.id)}
          zIndex={window.zIndex}
          isMinimized={window.isMinimized}
          onFocus={() => handleFocusWindow(window.id)}
          onMinimize={() => handleMinimizeWindow(window.id)}
        >
          {window.component}
        </Window>
      ))}

      {/* Error Dialog */}
      {showErrorDialog && (
        <ErrorDialog
          message="Oops! Looks like you clicked on something! But don't worry, it's probably fine… probably"
          onClose={() => setShowErrorDialog(false)}
        />
      )}

      {/* Credits Dialog */}
      {showCredits && (
        <Window
          title="Credits"
          initialPosition={{ x: 250, y: 150 }}
          onClose={() => setShowCredits(false)}
        >
          <div className="w-64 p-4 space-y-2 font-mono text-sm">
            <p>THE GODS IN OUR MACHINES</p>
            <p className="pt-2">Created by:</p>
            <p className="pt-2">Zoe Vanessa and Kailey</p>
            <p className="pt-2">Special Thanks:</p>
            <p>You, for playing</p>
          </div>
        </Window>
      )}

      {/* Info Dialog */}
      {showInfo && (
        <Window
          title="Information"
          initialPosition={{ x: 280, y: 180 }}
          onClose={() => setShowInfo(false)}
        >
          <div className="w-80 p-4 font-mono text-sm space-y-2">
            <p>THE GODS IN OUR MACHINES</p>
            <p className="pt-2">Version 1.0</p>
            <p className="pt-2">Created for DNID Capstone</p>
            <p className="pt-4">An exploration into the art of web experimentation, inspired by the work of Chia Amisola and alienmelon. Narrative themes inspired by the subaesthetic titled &quot;Divine Machinery&quot; (even though it&apos;s not implemented yet lolz).</p>
          </div>
        </Window>
      )}

      {/* Sources Dialog */}
      {showSources && (
        <Window
          title="Sources and Citations"
          initialPosition={{ x: 100, y: 50 }}
          onClose={() => setShowSources(false)}
        >
          <div className="w-[600px] h-[400px] overflow-y-auto p-4 font-mono text-xs space-y-3">
            <p className="font-bold">SOURCES AND CITATIONS</p>
            <div className="border-t border-gray-600 pt-2" />
            
            <div>
              <p className="font-bold">React Team. (2024). React (v18.3.1) [JavaScript library]. Meta Platforms, Inc. https://react.dev/</p>
              <p className="pl-4 pt-1">Function: Core UI framework for building interactive components, managing state, and handling user interactions throughout the game.</p>
            </div>

            <div>
              <p className="font-bold">Lucide Contributors. (2024). Lucide React (v0.487.0) [Icon library]. https://lucide.dev/</p>
              <p className="pl-4 pt-1">Function: Provides icons for window controls (close, minimize, maximize), navigation buttons, tool icons in Paint app, file system icons, and UI elements throughout the interface.</p>
            </div>

            <div>
              <p className="font-bold">Tailwind Labs. (2024). Tailwind CSS (v4.0) [CSS framework]. https://tailwindcss.com/</p>
              <p className="pl-4 pt-1">Function: Styling framework for creating the retro OS aesthetic, including borders, colors, layouts, hover effects, and responsive design.</p>
            </div>

            <div>
              <p className="font-bold">WorkOS. (2024). Radix UI Primitives [React component library]. https://www.radix-ui.com/</p>
              <p className="pl-4 pt-1">Function: Accessible UI component primitives available in the component library.</p>
            </div>

            <div>
              <p className="font-bold">Pomerantz, J. (2024). Class Variance Authority (v0.7.1) [Utility library]. https://cva.style/</p>
              <p className="pl-4 pt-1">Function: Utility for managing component style variants in the UI library.</p>
            </div>

            <div>
              <p className="font-bold">Embla Carousel. (2024). Embla Carousel React (v8.6.0) [Carousel library]. https://www.embla-carousel.com/</p>
              <p className="pl-4 pt-1">Function: Carousel component available in the UI library.</p>
            </div>

            <div>
              <p className="font-bold">Recharts Contributors. (2024). Recharts (v2.15.2) [Charting library]. https://recharts.org/</p>
              <p className="pl-4 pt-1">Function: Charting components available in the UI library.</p>
            </div>

            <div>
              <p className="font-bold">Pacocoursey. (2024). cmdk (v1.1.1) [Command menu component]. https://cmdk.paco.me/</p>
              <p className="pl-4 pt-1">Function: Command menu component available in the UI library.</p>
            </div>

            <div>
              <p className="font-bold">Pichler, G. (2024). React Day Picker (v8.10.1) [Date picker component]. https://daypicker.dev/</p>
              <p className="pl-4 pt-1">Function: Date picker component available in the UI library.</p>
            </div>

            <div>
              <p className="font-bold">Schickling, E. (2024). Vaul (v1.1.2) [Drawer component]. https://vaul.emilkowal.ski/</p>
              <p className="pl-4 pt-1">Function: Drawer component available in the UI library.</p>
            </div>

            <div className="border-t border-gray-600 pt-2 mt-4">
              <p className="italic">All libraries are used under their respective open-source licenses.</p>
              <p className="italic pt-2">Game artwork created by Vanessa.</p>
            </div>
          </div>
        </Window>
      )}

      {/* Start Menu */}
      {showStartMenu && (
        <StartMenu
          onRestart={handleRestartGame}
          onCredits={() => {
            setShowCredits(true);
            setShowStartMenu(false);
          }}
          onInfo={() => {
            setShowInfo(true);
            setShowStartMenu(false);
          }}
          onSources={() => {
            setShowSources(true);
            setShowStartMenu(false);
          }}
          onClose={() => setShowStartMenu(false)}
        />
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-400 border-t-2 border-white flex items-center px-2 justify-between">
        <button
          onClick={handleStartClick}
          className="px-3 py-1 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 text-black font-mono flex items-center gap-2 hover:bg-gray-300 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white"
        >
          <div className="w-4 h-4 bg-red-600"></div>
          Start
        </button>
        <div className="text-xs font-mono bg-gray-300 border border-gray-600 px-2 py-1">
          {currentTime}
        </div>
      </div>
    </div>
  );
}
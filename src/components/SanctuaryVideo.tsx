import { useState } from 'react';
import frame1 from 'figma:asset/cab1661c12934fbfa8c2580c0eac47dbcdceb8f3.png';
import frame2 from 'figma:asset/fdfc9cdf874606cc37b248be5bc85595684d1f48.png';
import frame3 from 'figma:asset/3f51fd4950b66fa7ed608f93ead0f01d1f69b823.png';
import frame4 from 'figma:asset/e62edf5f561ba298cef07aa576d39161052248a7.png';
import frame5 from 'figma:asset/cf8df41718f429d2d47ac1fcf44df1eeae7c744f.png';
import frame6 from 'figma:asset/64ae7f426ac9764259f74eb7ed054c15ccc82faf.png';
import frame7 from 'figma:asset/34cb4f48b1c41cd28bf9d2ac9c7d075b756a5d27.png';
import frame8 from 'figma:asset/51ce8e7fea456d6d231126544054176d4b27229d.png';
import frame9 from 'figma:asset/0fc874a6a07253de043e5a5cc81fbff81625157f.png';

interface SanctuaryVideoProps {
  onComplete?: () => void;
}

export default function SanctuaryVideo({ onComplete }: SanctuaryVideoProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame9, frame9];

  const handleClick = () => {
    if (currentFrame === frames.length - 1) {
      // On final frame, close the window and show the icon
      if (onComplete) {
        onComplete();
      }
    } else if (currentFrame < frames.length - 1) {
      // Otherwise, advance to the next frame
      setCurrentFrame((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className="bg-black relative w-[400px] h-[400px] flex items-center justify-center cursor-pointer" 
        onClick={handleClick}
      >
        <img 
          src={frames[currentFrame]} 
          alt="Sanctuary animation frame" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <p className="text-black font-mono text-sm mt-4 border-2 border-black px-4 py-2 bg-white">
        {currentFrame === frames.length - 1 
          ? 'Bye now' 
          : currentFrame === frames.length - 2 
          ? 'the system thanks you for these changes' 
          : currentFrame === frames.length - 3
          ? 'finishing download'
          : currentFrame === 0
          ? 'Click to download to your system'
          : currentFrame === 1
          ? 'Click to download more to your system'
          : currentFrame === 2
          ? 'Click to download even more to your system'
          : currentFrame === 3
          ? 'Click to download even more to your system'
          : currentFrame === 4
          ? 'and more and more and'
          : currentFrame === 5
          ? 'more and more and more'
          : currentFrame === 6
          ? 'and more and more and'
          : currentFrame === 7
          ? 'more and more and more'
          : 'Click to download to your system'}
      </p>
    </div>
  );
}
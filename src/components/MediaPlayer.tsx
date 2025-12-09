import { useState } from 'react';
import svgPaths from '../imports/svg-bv3ynjc9e4';
import albumCover1 from 'figma:asset/dd4e55f25fadadcd94dab1a043fa69373eb739ab.png';
import albumCover2 from 'figma:asset/0df0f6bdd1e408a297fcddd3a8f05793116f6e28.png';
import albumCover3 from 'figma:asset/045dfb79f0192e336a4127c5ed1829225e39f071.png';

export default function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [selectedArtist, setSelectedArtist] = useState('music');
  const [showDropdown, setShowDropdown] = useState(false);

  // Define artists with their corresponding album covers
  const artists = [
    { name: 'music', cover: albumCover1 },
    { name: 'moosic', cover: albumCover2 },
    { name: 'mewzic', cover: albumCover3 }
  ];

  const currentArtist = artists.find(a => a.name === selectedArtist) || artists[0];

  return (
    <div className="w-[348px] bg-[silver] relative">
      {/* Background with retro styling */}
      <div className="p-[7px]">
        {/* Content Area */}
        <div className="flex gap-[8px]">
          {/* Album Cover */}
          <div className="relative shrink-0 size-[100px] bg-black">
            {currentArtist.cover ? (
              <img 
                src={currentArtist.cover} 
                alt="Album cover" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-black" />
            )}
          </div>

          {/* Right Side - Track Info */}
          <div className="flex flex-col gap-[6px] w-[223px]">
            {/* Artist Field - Now a dropdown */}
            <div className="flex items-center gap-0 leading-[0]">
              <p className="font-['Inter'] text-[10px] text-black tracking-[-0.7px] mt-[4px]">Artist:</p>
              <div className="ml-[8px] flex-1 relative">
                <div 
                  className="bg-white border border-black h-[21px] relative cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <div className="absolute inset-0 px-2 flex items-center text-[10px] font-['Inter'] tracking-[-0.7px]">
                    {selectedArtist}
                  </div>
                </div>
                {/* Dropdown button */}
                <div 
                  className="absolute right-0 top-0 h-[21px] w-[18px] bg-[#C0C0C0] border border-black flex items-center justify-center cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <svg className="w-[9px] h-[5px]" viewBox="0 0 18 21" fill="none">
                    <path d={svgPaths.p2d078a70} fill="black" stroke="black"/>
                  </svg>
                </div>
                {/* Dropdown menu */}
                {showDropdown && (
                  <div className="absolute top-[21px] left-0 right-0 bg-white border border-black z-10">
                    {artists.map((artist, index) => (
                      <div key={artist.name}>
                        <div
                          className="px-2 py-2 text-[12px] font-['Inter'] tracking-[-0.7px] cursor-pointer hover:bg-[navy] hover:text-white"
                          onClick={() => {
                            setSelectedArtist(artist.name);
                            setShowDropdown(false);
                          }}
                        >
                          {artist.name}
                        </div>
                        {index < artists.length - 1 && (
                          <div className="border-t border-black" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Track Field */}
            <div className="flex items-center gap-0 leading-[0]">
              <p className="font-['Inter'] text-[10px] text-black tracking-[-0.7px] mt-[4px]">Track:</p>
              <div className="ml-[8px] flex-1 relative">
                <div className="bg-white border border-black h-[21px] relative">
                  <input 
                    type="text" 
                    defaultValue="xxxxx" 
                    readOnly
                    className="absolute inset-0 px-2 text-[10px] font-['Inter'] tracking-[-0.7px] bg-transparent border-none outline-none cursor-default"
                  />
                </div>
              </div>
            </div>

            {/* Album Field */}
            <div className="flex items-center gap-0 leading-[0]">
              <p className="font-['Inter'] text-[10px] text-black tracking-[-0.7px] mt-[4px]">Album:</p>
              <div className="ml-[6px] flex-1 relative">
                <div className="bg-white border border-black h-[21px] relative">
                  <input 
                    type="text" 
                    defaultValue="xxxxxx" 
                    readOnly
                    className="absolute inset-0 px-2 text-[10px] font-['Inter'] tracking-[-0.7px] bg-transparent border-none outline-none cursor-default"
                  />
                </div>
              </div>
            </div>

            {/* Volume Slider */}
            <div 
              className="h-[24px] relative w-full mt-2 cursor-pointer"
              onMouseDown={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const handleDrag = (moveEvent: MouseEvent) => {
                  const x = moveEvent.clientX - rect.left;
                  const width = rect.width - 14; // Subtract handle width
                  const newVolume = Math.max(0, Math.min(100, (x / width) * 100));
                  setVolume(Math.round(newVolume));
                };
                
                handleDrag(e.nativeEvent);
                
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleDrag);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                
                document.addEventListener('mousemove', handleDrag);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              <div className="bg-white border-t border-b border-black h-[2px] absolute top-[11px] left-0 right-[14px] pointer-events-none"></div>
              <div 
                className="absolute top-0 h-[24px] w-[13px] bg-[#C0C0C0] border border-[#3D5555] pointer-events-none"
                style={{
                  left: `calc(${volume}% - 6.5px)`,
                  maxLeft: 'calc(100% - 20px)'
                }}
              ></div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between w-full gap-1">
              {/* Previous Track (double arrow left) */}
              <button className="flex-1 bg-[silver] border-[0.5px] border-[#3d5555] h-[20px] flex items-center justify-center cursor-pointer hover:bg-gray-300 active:shadow-[inset_2px_2px_2px_rgba(0,0,0,0.2)]">
                <svg className="w-[13px] h-[7px]" viewBox="0 0 15 9" fill="none">
                  <path d={svgPaths.p275e2e00} fill="black" stroke="black"/>
                  <path d={svgPaths.p26b0600} fill="black" stroke="black"/>
                </svg>
              </button>

              {/* Play/Pause */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex-1 bg-[silver] border-[0.5px] border-[#3d5555] h-[20px] flex items-center justify-center cursor-pointer hover:bg-gray-300 active:shadow-[inset_2px_2px_2px_rgba(0,0,0,0.2)]"
              >
                {isPlaying ? (
                  <div className="flex gap-[2px]">
                    <div className="w-[2px] h-[8px] bg-black"></div>
                    <div className="w-[2px] h-[8px] bg-black"></div>
                  </div>
                ) : (
                  <svg className="w-[7px] h-[5px] rotate-90" viewBox="0 0 9 7" fill="none">
                    <path d={svgPaths.p2e2a3280} fill="black" stroke="black"/>
                  </svg>
                )}
              </button>

              {/* Stop */}
              <button className="flex-1 bg-[silver] border-[0.5px] border-[#3d5555] h-[20px] flex items-center justify-center cursor-pointer hover:bg-gray-300 active:shadow-[inset_2px_2px_2px_rgba(0,0,0,0.2)]">
                <div className="bg-black size-[9px]"></div>
              </button>

              {/* Next Track (double arrow right) */}
              <button className="flex-1 bg-[silver] border-[0.5px] border-[#3d5555] h-[20px] flex items-center justify-center cursor-pointer hover:bg-gray-300 active:shadow-[inset_2px_2px_2px_rgba(0,0,0,0.2)]">
                <svg className="w-[13px] h-[7px]" viewBox="0 0 15 9" fill="none">
                  <path d={svgPaths.p2bc02f00} fill="black" stroke="black"/>
                  <path d={svgPaths.p2a3dd280} fill="black" stroke="black"/>
                </svg>
              </button>

              {/* Record */}
              <button className="flex-1 bg-[silver] border-[0.5px] border-[#3d5555] h-[20px] flex items-center justify-center cursor-pointer hover:bg-gray-300 active:shadow-[inset_2px_2px_2px_rgba(0,0,0,0.2)]">
                <div className="bg-black rounded-full size-[9px]"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
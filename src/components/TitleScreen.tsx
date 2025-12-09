interface TitleScreenProps {
  onStart: () => void;
}

export default function TitleScreen({ onStart }: TitleScreenProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-teal-600">
      <div className="text-center space-y-8">
        <h1 className="text-white text-5xl font-mono tracking-wider">
          THE GODS IN OUR MACHINES
        </h1>
        
        <button
          onClick={onStart}
          className="px-8 py-3 bg-gray-400 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 text-black font-mono hover:bg-gray-300 active:border-t-gray-800 active:border-l-gray-800 active:border-r-white active:border-b-white"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
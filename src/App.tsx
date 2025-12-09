import { useState } from 'react';
import TitleScreen from './components/TitleScreen';
import LoadingScreen from './components/LoadingScreen';
import Desktop from './components/Desktop';

type Screen = 'title' | 'loading' | 'desktop';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('title');

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {currentScreen === 'title' && (
        <TitleScreen onStart={() => setCurrentScreen('loading')} />
      )}
      {currentScreen === 'loading' && (
        <LoadingScreen onComplete={() => setCurrentScreen('desktop')} />
      )}
      {currentScreen === 'desktop' && <Desktop onRestart={() => setCurrentScreen('title')} />}
    </div>
  );
}
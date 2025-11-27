import React, { useState } from 'react';
import './App.css';
import Scene1Intro from './components/scenes/Scene1Intro';
import Scene2Prisoners from './components/scenes/Scene2Prisoners';
import Scene3Choice from './components/scenes/Scene3Choice';
import Scene4Enlightenment from './components/scenes/Scene4Enlightenment';
import Scene5Outro from './components/scenes/Scene5Outro';

function App() {
  const [currentScene, setCurrentScene] = useState(1);

  const handleNext = () => {
    setCurrentScene(prev => prev + 1);
  };

  const handleRestart = () => {
    setCurrentScene(1);
  };

  const renderScene = () => {
    switch (currentScene) {
      case 1:
        return <Scene1Intro onNext={handleNext} />;
      case 2:
        return <Scene2Prisoners onNext={handleNext} />;
      case 3:
        return <Scene3Choice onNext={handleNext} />;
      case 4:
        return <Scene4Enlightenment onNext={handleNext} />;
      case 5:
        return <Scene5Outro onRestart={handleRestart} />;
      default:
        return <Scene1Intro onNext={handleNext} />;
    }
  };

  return (
    <div className="App">
      {renderScene()}
    </div>
  );
}

export default App;

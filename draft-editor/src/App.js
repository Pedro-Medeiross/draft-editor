import { useState } from 'react';
import './App.css';
import DraftEditor from './components/DraftEditor';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-wrapper ${darkMode ? 'dark-mode' : ''}`}>
      <DraftEditor darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
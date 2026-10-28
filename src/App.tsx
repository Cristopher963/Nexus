import "./App.css";
import { useState } from 'react';
import { Apps } from './Apps';
import { Games } from './Games';


export type ActivePage = 'home' | 'apps' | 'games';

export function App() {
  const [currentPage, setCurrentPage] = useState<ActivePage>('home');
  

  const handleNavigation = (page: ActivePage) => {
    setCurrentPage(page);
  };

  
  return (
    <main className="generalContainer">
      <div className="pageContainer">
        {currentPage === 'apps' && <Apps onNavigate={handleNavigation} />}
        {currentPage === 'games' && <Games onNavigate={handleNavigation} />}
        {currentPage === 'home' && (
          <>
            <h1>Nexus</h1>
              {/* en un futuro insrtar el logo de enxus aquí*/} 
            <div className="imageLogo">
              {/*aquí va la direccion con el img... */}
            </div>
            <p>Bienvenido a Nexus. Que desea hacer?</p>
            <button onClick={() => handleNavigation('apps')}>Apps</button>
            <button onClick={() => handleNavigation('games')}>Games</button>
          </>
        )}
      </div>
    </main>
  );
};

export default App;

import React from 'react';

interface AppsProps {
  onNavigate: (page: 'games' | 'home') => void;
}

export const Apps: React.FC<AppsProps> = ({ onNavigate }) => {
  return (
    <main className="Container-Apps">
        <div className="header">
            <button onClick={() => onNavigate('games')}>
                Ir a Juegos
            </button>
            <button onClick={() => onNavigate('home')}>
                Volver a Inicio
            </button>
        </div>
        <h1>Pantalla de Aplicaciones</h1>
        <p>Bienvenido a la sección de Aplicaciones.</p>
        <div className="optionButtons">
            {/*aquí van a estar los botones de las diferentes plataformas*/}
            {/*Por defecto muestra las apps del escritorio*/}
            <button>En el Escritorio</button>
            {/*casos especiales como rpg maker o apps asi*/}
            <button>Steam</button>
            {/*aquí tu puedes marcar una App como favorita*/}
            <button>Favoritos</button>
        </div>
        <div className="gamesList">
            {/*aquí va a estar la lista de aplicaciones*/}
            <p>Lista de aplicaciones.</p>
        </div>
    </main>
  );
}
import React from 'react';

interface GamesProps {
  onNavigate: (page: 'apps' | 'home') => void;
}

export const Games: React.FC<GamesProps> = ({ onNavigate }) => {
  return (
    <main className="Container-Games">
        <div className="header">
            <button onClick={() => onNavigate('apps')}>
                Ir a Apps
            </button>
            <button onClick={() => onNavigate('home')}>
                Volver a Inicio
            </button>
        </div>
        <h1>Pantalla de Juegos</h1>
        <p>Bienvenido a la sección de Juegos.</p>
        <div className="optionButtons">
            {/*aquí van a estar los botones de las diferentes plataformas*/}
            {/*Por defecto muestra los juegos del escritorio*/}
            <button>En el Escritorio</button>
            <button>Steam</button>
            <button>Epic Games</button>
            {/*aquí tu puedes marcar un juego como favorito*/}
            <button>Favoritos</button>
        </div>
        <div className="gamesList">
            {/*aquí va a estar la lista de juegos*/}
            <p>Lista de juegos.</p>
        </div>
    </main>
  );
}


import React, { useState } from 'react';
import { invoke } from "@tauri-apps/api/core";

interface GamesProps {
  onNavigate: (page: 'apps' | 'home') => void;
}

export const Games: React.FC<GamesProps> = ({ onNavigate }) => {
  const [juegos, setJuegos] = useState<string[]>([]);
  
  async function callGames() {
    const games = await invoke<string[]>("lista_juegos");
    setJuegos(games);
  }

  return (
    <section className="Container-Games">
        <div className="header">
            <button className='Volver-Inicio' onClick={() => onNavigate('home')}>
                ← Volver a Inicio
            </button>
            <button className='Ir-a-Apps' onClick={() => onNavigate('apps')}>
                Ir a Apps →
            </button>
        </div>
        <h1>Pantalla de Juegos</h1>
        <p>Bienvenido a la sección de Juegos.</p>
        <div className="optionButtons">
            {/*aquí van a estar los botones de las diferentes plataformas*/}
            {/*Por defecto muestra los juegos del escritorio*/}
            <button onClick={callGames}>En el Escritorio</button>
            <button>Steam</button>
            <button>Epic Games</button>
            {/*aquí tu puedes marcar un juego como favorito*/}
            <button>Favoritos</button>
        </div>
        <div className="gamesList">
            {/*aquí va a estar la lista de juegos*/}
            <p>Lista de juegos.</p>
        </div>
        <ul>
            {juegos.map((game)=>(
                <li key={game}>{game}</li>
            ))}
        </ul>
    </section>
  );
}


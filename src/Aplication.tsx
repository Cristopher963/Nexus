import React, { useState } from 'react';
import { invoke } from "@tauri-apps/api/core";


interface AppsProps {
  onNavigate: (page: 'games' | 'home') => void;
}

export const Apps: React.FC<AppsProps> = ({ onNavigate }) => {

    const [aplicaciones, setAplicaciones] = useState<string[]>([]);

    //crea la variable respuesta como un array y recupera los datos de obtener_apps
    //luego las inserta en la variable respuesta
    async function callApps() {
        const respuesta = await invoke<string[]>("lista_apps");
        setAplicaciones(respuesta);
    }

    return (
        <section className="Container-Apps">
            <div className="header">
                <button className='Volver-Inicio' onClick={() => onNavigate('home')}>
                    ← Volver a Inicio 
                </button>
                <button className='Ir-a-Juegos' onClick={() => onNavigate('games')}>
                    Ir a Juegos →
                </button>
            </div>
            <h1>Pantalla de Aplicaciones</h1>
            <p>Bienvenido a la sección de Aplicaciones.</p>
            <div className="optionButtons">
                {/*aquí van a estar los botones de las diferentes plataformas*/}
                {/*Por defecto muestra las apps del escritorio*/}
                <button onClick={callApps}>En el Escritorio</button>
                {/*casos especiales como rpg maker o apps asi*/}
                <button>Steam</button>
                {/*aquí tu puedes marcar una App como favorita*/}
                <button>Favoritos</button>
            </div>
            <div className="gamesList">
                {/*aquí va a estar la lista de aplicaciones*/}
                <p>Lista de aplicaciones.</p>
            </div>
            <ul>
                {aplicaciones.map((apps)=>(
                    <li key={apps}>{apps}</li>
                ))}
            </ul>
        </section>
    );
}
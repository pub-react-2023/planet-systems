import { useEffect } from "react";
import { useState } from "react";

const planetSystems = [
  {
    id: "Solar-System", // Tata Surya
    name: "Solar System",
  },
  {
    id: "Alpha-Centauri-System", // Tata Alfa Centauri
    name: "Alpha Centauri System",
  },
];

export default function App() {
  const [currentPlanetSystem, setCurrentPlanetSystem] = useState(0);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/Lazzaro83/${planetSystems[currentPlanetSystem].id}/master/planets.json`
    )
      .then((response) => response.json())
      .then((planets) => setPlanets(planets));
  }, [currentPlanetSystem]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <div>
        {planets.map((planet) => (
          <div key={planet.position}>
            <h3>{planet.name}</h3>
            <p>Kecepatan: {planet.velocity}</p>
            <p>Jarak: {planet.distance}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setCurrentPlanetSystem(1)}>
        Pindah ke Alfa Centauri
      </button>
    </div>
  );
}

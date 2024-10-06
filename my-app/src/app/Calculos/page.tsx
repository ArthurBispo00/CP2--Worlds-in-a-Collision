"use client"; // Garantir que este componente seja renderizado no lado do cliente

import { useState } from "react";
import { useRouter } from 'next/navigation'; // Hook useRouter para redirecionamento
import { FaGlobe, FaVenus, FaRocket } from 'react-icons/fa'; // Ícones de astronomia

export default function CatastrofesPage() {
  const router = useRouter(); // Inicializa o hook useRouter

  // Estados para os cálculos
  const [massa1, setMassa1] = useState(0);
  const [massa2, setMassa2] = useState(0);
  const [distancia, setDistancia] = useState(0);
  const [forcaGravitacional, setForcaGravitacional] = useState<number | null>(null);
  const [forcaMare, setForcaMare] = useState<number | null>(null); 
  const [planetaInfo, setPlanetaInfo] = useState<string | null>(null); 
  const [velikovskyFrase, setVelikovskyFrase] = useState<string | null>(null); 

  const G = 6.674 * Math.pow(10, -11);

  const calcularForcaGravitacional = () => {
    if (massa1 && massa2 && distancia) {
      const forca = (G * massa1 * massa2) / Math.pow(distancia, 2);
      setForcaGravitacional(forca);

      const forcaMar = (2 * G * massa1 * massa2 * 12_742_000) / Math.pow(distancia, 3); 
      setForcaMare(forcaMar);

      if (planetaInfo === "Valores baseados no estudo de Vênus.") {
        setVelikovskyFrase("Velikovsky sugeriu que a proximidade de Vênus com a Terra causou perturbações gravíticas, levando às catástrofes mencionadas em seu livro.");
      } else if (planetaInfo === "Valores baseados no estudo de Júpiter.") {
        setVelikovskyFrase("Segundo Velikovsky, Júpiter ejetou Vênus como um cometa, desencadeando um impacto gravitacional que influenciou eventos cataclísmicos na Terra.");
      } else {
        setVelikovskyFrase(null);
      }
    } else {
      setForcaGravitacional(null);
      setForcaMare(null);
    }
  };

  const preencherValoresPlaneta = (planeta: string) => {
    if (planeta === "Vênus") {
      setMassa1(4.867 * Math.pow(10, 24)); 
      setMassa2(5.972 * Math.pow(10, 24)); 
      setDistancia(4.1 * Math.pow(10, 10)); 
      setPlanetaInfo("Valores baseados no estudo de Vênus.");
    } else if (planeta === "Júpiter") {
      setMassa1(1.898 * Math.pow(10, 27)); 
      setMassa2(5.972 * Math.pow(10, 24)); 
      setDistancia(6.29 * Math.pow(10, 11)); 
      setPlanetaInfo("Valores baseados no estudo de Júpiter.");
    }
  };

  return (
    <main
      className="relative flex flex-col justify-center items-center text-center pt-20 min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/images/tom.jpg')` }} 
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Overlay para melhorar a legibilidade do texto */}

      <div className="relative z-10 max-w-4xl px-6">
        <article>
          <h1 className="mb-4 text-yellow-400 font-bold text-4xl lg:text-5xl leading-tight">
            Cálculos Gravitacionais e a Teoria de Velikovsky
          </h1>
          <section id="introducao">
            <p className="mb-4 text-lg lg:text-xl text-gray-200 leading-relaxed">
              Exploramos cálculos que ajudam a entender como eventos catastróficos propostos por Velikovsky poderiam ter ocorrido:
            </p>
            <ul className="text-lg lg:text-xl text-gray-200 list-disc list-inside leading-relaxed">
              <li><strong>Força Gravitacional:</strong> Como a gravidade de corpos como Vênus e Júpiter influenciou a Terra.</li>
              <li><strong>Força de Maré Gravitacional:</strong> Como a proximidade de corpos massivos gerou forças desiguais sobre a Terra.</li>
            </ul>
          </section>
        </article>

        <section className="mt-8">
          <h2 className="text-2xl lg:text-3xl mb-4 text-yellow-300">Expressões Matemáticas</h2>
          <div className="text-lg lg:text-xl text-gray-300 leading-relaxed">
            <p><strong>Força Gravitacional:</strong></p>
            <div className="text-xl lg:text-2xl mb-4">
              <span>F = ( G * m<sub>1</sub> * m<sub>2</sub> ) / r<sup>2</sup></span>
            </div>

            <p><strong>Força de Maré Gravitacional:</strong></p>
            <div className="text-xl lg:text-2xl mb-4">
              <span>F<sub>maré</sub> = 2 * ( G * m<sub>1</sub> * m<sub>2</sub> * d ) / r<sup>3</sup></span>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl lg:text-3xl mb-4 text-yellow-300">Cálculo de Força Gravitacional e de Maré</h2>

          <div className="mb-4">
            <label className="block mb-2 text-gray-200">Massa 1 (kg):
              <button className="ml-2 text-blue-500">?</button>
            </label>
            <input type="number" value={massa1} onChange={(e) => setMassa1(parseFloat(e.target.value))} className="border rounded p-2 text-black" />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-200">Massa 2 (kg):
              <button className="ml-2 text-blue-500">?</button>
            </label>
            <input type="number" value={massa2} onChange={(e) => setMassa2(parseFloat(e.target.value))} className="border rounded p-2 text-black" />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-200">Distância (m):
              <button className="ml-2 text-blue-500">?</button>
            </label>
            <input type="number" value={distancia} onChange={(e) => setDistancia(parseFloat(e.target.value))} className="border rounded p-2 text-black" />
          </div>

          {/* Centralização e ícones nos botões */}
          <div className="flex justify-center space-x-4 mt-6"> {/* Alinha os botões no centro */}
            <button onClick={() => preencherValoresPlaneta("Vênus")} className="bg-green-500 text-white py-2 px-6 rounded flex items-center space-x-2 hover:bg-green-400">
              <FaVenus /> {/* Ícone de Vênus */}
              <span>Usar valores de Vênus</span>
            </button>
            <button onClick={() => preencherValoresPlaneta("Júpiter")} className="bg-orange-500 text-white py-2 px-6 rounded flex items-center space-x-2 hover:bg-orange-400">
              <FaGlobe /> {/* Ícone genérico representando Júpiter */}
              <span>Usar valores de Júpiter</span>
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <button onClick={calcularForcaGravitacional} className="bg-blue-500 text-white py-2 px-6 rounded flex items-center space-x-2 hover:bg-blue-400">
              <FaRocket /> {/* Ícone de foguete para representar o cálculo */}
              <span>Calcular Força Gravitacional e de Maré</span>
            </button>
          </div>

          {planetaInfo && <p className="mt-4 text-sm text-gray-300">{planetaInfo}</p>}

          {forcaGravitacional !== null && <p className="text-lg lg:text-xl text-white mt-4">Força Gravitacional: {forcaGravitacional.toExponential(2)} N</p>}
          {forcaMare !== null && <p className="text-lg lg:text-xl text-white mt-4">Força de Maré: {forcaMare.toExponential(2)} N</p>}
          {velikovskyFrase && <p className="text-lg lg:text-xl text-white mt-4">{velikovskyFrase}</p>}
        </section>

        <a href="#" className="mt-8 text-lg lg:text-xl font-bold text-blue-500 underline hover:text-blue-400" onClick={(e) => { e.preventDefault(); router.push('/Linhadotempo'); }}>
          Confira na linha do tempo abaixo os eventos que aconteceram relacionados a essas teorias
        </a>
      </div>
    </main>
  );
}

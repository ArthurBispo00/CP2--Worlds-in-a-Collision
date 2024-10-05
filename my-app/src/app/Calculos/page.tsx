"use client"; // Garantir que este componente seja renderizado no lado do cliente

import { useState } from "react";
import { useRouter } from 'next/navigation'; // Hook useRouter para redirecionamento

export default function CatastrofesPage() {
  const router = useRouter(); // Inicializa o hook useRouter

  // Estados para os cálculos
  const [massa1, setMassa1] = useState(0);
  const [massa2, setMassa2] = useState(0);
  const [distancia, setDistancia] = useState(0);
  const [forcaGravitacional, setForcaGravitacional] = useState<number | null>(null);

  // Constante gravitacional
  const G = 6.674 * Math.pow(10, -11);

  // Função para calcular a força gravitacional
  const calcularForcaGravitacional = () => {
    if (massa1 && massa2 && distancia) {
      const forca = (G * massa1 * massa2) / Math.pow(distancia, 2);
      setForcaGravitacional(forca);
    } else {
      setForcaGravitacional(null);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center text-center pt-20">
      <article>
        <h1 className="mb-4" style={{ fontSize: '50px', fontWeight: 'bold' }}>
          Teoria de Velikovsky: Vênus e as Pragas do Egito
        </h1>
        <section id="imagem-descricao">
          <p className="mb-4" style={{ fontSize: '25px' }}>
            Segundo Immanuel Velikovsky, no livro <i>Worlds in Collision</i>, Vênus teria sido originalmente um cometa ejetado de Júpiter, que passou perto de vários corpos celestes do Sistema Solar.
          </p>
          <p className="mb-4" style={{ fontSize: '25px' }}>
            Entre os eventos propostos por Velikovsky, o mais significativo é a associação das Dez Pragas do Egito com essa aproximação de Vênus. Ele argumenta que os gases quentes do cometa foram responsáveis por essas pragas.
          </p>
        </section>
      </article>

      <section className="mt-8">
        <h2 className="text-2xl mb-4">Cálculo de Força Gravitacional</h2>
        <div className="mb-4">
          <label className="block mb-2">Massa 1 (kg):</label>
          <input
            type="number"
            value={massa1}
            onChange={(e) => setMassa1(parseFloat(e.target.value))}
            className="border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Massa 2 (kg):</label>
          <input
            type="number"
            value={massa2}
            onChange={(e) => setMassa2(parseFloat(e.target.value))}
            className="border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Distância (m):</label>
          <input
            type="number"
            value={distancia}
            onChange={(e) => setDistancia(parseFloat(e.target.value))}
            className="border rounded p-2"
          />
        </div>
        <button
          onClick={calcularForcaGravitacional}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Calcular Força Gravitacional
        </button>

        {forcaGravitacional !== null && (
          <div className="mt-4">
            <p className="text-lg">Força Gravitacional: {forcaGravitacional.toExponential(2)} N</p>
          </div>
        )}
      </section>

      <a 
        href="#" 
        className="mt-8 text-lg font-bold text-blue-500 underline" 
        onClick={(e) => {
          e.preventDefault();
          router.push('/Linhadotempo'); // Redireciona para o componente da linha do tempo
        }}
        aria-label="Confira os eventos na linha do tempo"
      >
        Confira na linha do tempo abaixo os eventos que aconteceram relacionados a essas teorias
      </a>
    </main>
  );
}

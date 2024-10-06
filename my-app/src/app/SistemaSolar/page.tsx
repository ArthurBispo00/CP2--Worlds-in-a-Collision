"use client";

import { useEffect, useState } from "react";
import { Roboto } from 'next/font/google'; // Importando a fonte Roboto
import Image from 'next/image'; // Importando o componente Image do Next.js

// Configurando Roboto com os pesos e subset necessários
const roboto = Roboto({
  weight: ['400', '500', '700'], // Variantes de peso da fonte
  subsets: ['latin'], // Subconjunto de caracteres
  display: 'swap', // Para garantir que o texto seja renderizado com fallback enquanto a fonte é carregada
});

interface PlanetData {
  url: string;
  name: string;
  theory: string;
  narrative: string; // Propriedade para armazenar a narrativa expandida
}

export default function SistemaSolar() {
  const [planets, setPlanets] = useState<PlanetData[]>([]);
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState<number | null>(null); // Para armazenar o índice do planeta selecionado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/nasa');
        if (!res.ok) {
          throw new Error('Falha ao buscar as imagens');
        }
        const data = await res.json();

        const planetData: PlanetData[] = [
          { 
            url: data.images[0], 
            name: 'Vênus', 
            theory: 'Velikovsky sugeriu que Vênus foi ejetado de Júpiter e passou próximo à Terra, causando catástrofes.',
            narrative: 'Velikovsky associou a passagem de Vênus à Terra com os eventos bíblicos das Dez Pragas do Egito...'
          },
          { 
            url: data.images[1], 
            name: 'Marte', 
            theory: 'Velikovsky propôs que Marte interagiu com a Terra em eventos cataclísmicos antigos.',
            narrative: 'Meio século após o evento de Vênus, Velikovsky afirmou que Marte foi deslocado...'
          },
          { 
            url: data.images[2], 
            name: 'Júpiter', 
            theory: 'Velikovsky acreditava que Júpiter foi responsável por ejetar Vênus, o que causou uma série de eventos.',
            narrative: 'De acordo com Velikovsky, Júpiter foi o ponto de origem do cometa que se tornou Vênus...'
          },
          { 
            url: data.images[3], 
            name: 'Saturno', 
            theory: 'Teorias de Velikovsky sugerem que Saturno teve uma importância significativa em antigos eventos celestiais.',
            narrative: 'Velikovsky especulou que Saturno teve um papel nas interações gravitacionais...'
          },
          { 
            url: data.images[4], 
            name: 'Mercúrio', 
            theory: 'Velikovsky considerava Mercúrio como envolvido em importantes interações celestes durante a história da Terra.',
            narrative: 'Velikovsky associava Mercúrio às tradições mitológicas sobre mensageiros dos deuses...'
          }
        ];

        setPlanets(planetData);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Erro desconhecido');
        }
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className={`${roboto.className} min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-8`}>
      <main className="flex flex-col justify-center items-center text-center pt-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-yellow-400">
          Planetas Teorizados por Velikovsky
        </h1>
        <section className="flex flex-wrap gap-6 justify-center">
          {/* Exibe cada imagem retornada pela API */}
          {planets.map((planet, index) => (
            <article 
              key={index} 
              className="cursor-pointer flex flex-col items-center space-y-4 w-full max-w-xs"
              onClick={() => setSelectedPlanetIndex(selectedPlanetIndex === index ? null : index)} // Alterna a exibição
            >
              <figure className="w-64 h-64 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                <Image 
                  src={planet.url} 
                  alt={`Imagem de ${planet.name}`} 
                  width={256} // Especifique a largura correta
                  height={256} // Especifique a altura correta
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
              </figure>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold">{planet.name}</h2>
                {/* Exibe a teoria e narrativa apenas se o planeta estiver selecionado */}
                {selectedPlanetIndex === index && (
                  <>
                    <p className="text-lg text-center mt-2 max-w-md text-gray-300">{planet.theory}</p>
                    <p className="text-base text-left mt-2 max-w-md text-gray-400">{planet.narrative}</p>
                  </>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

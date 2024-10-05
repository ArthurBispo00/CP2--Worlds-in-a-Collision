"use client"; // Garantir que este componente seja renderizado no lado do cliente

import { useEffect, useState } from "react";

interface PlanetData {
  url: string;
  name: string;
  theory: string;
  narrative: string; // Nova propriedade para armazenar a narrativa expandida
}

export default function Home() {
  const [planets, setPlanets] = useState<PlanetData[]>([]);
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState<number | null>(null); // Para armazenar o índice do planeta selecionado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Faz uma requisição para a API personalizada
        const res = await fetch('/api/nasa');
        if (!res.ok) {
          throw new Error('Falha ao buscar as imagens');
        }
        const data = await res.json();

        // Planetas e suas teorias expandidas com narrativas bíblicas
        const planetData: PlanetData[] = [
          { 
            url: data.images[0], 
            name: 'Vênus', 
            theory: 'Velikovsky sugeriu que Vênus foi ejetado de Júpiter e passou próximo à Terra, causando catástrofes.',
            narrative: 'Velikovsky associou a passagem de Vênus à Terra com os eventos bíblicos das Dez Pragas do Egito. Ele acreditava que a transformação da água em sangue, as pragas de gafanhotos e a escuridão que envolveu o Egito foram causadas pelos efeitos da passagem do cometa que se tornaria Vênus.'
          },
          { 
            url: data.images[1], 
            name: 'Marte', 
            theory: 'Velikovsky propôs que Marte interagiu com a Terra em eventos cataclísmicos antigos.',
            narrative: 'Meio século após o evento de Vênus, Velikovsky afirmou que Marte foi deslocado pela gravidade de Vênus e passou perto da Terra. Durante esse evento, a Bíblia narra que Josué, durante a conquista de Canaã, pediu que o Sol ficasse parado no céu.'
          },
          { 
            url: data.images[2], 
            name: 'Júpiter', 
            theory: 'Velikovsky acreditava que Júpiter foi responsável por ejetar Vênus, o que causou uma série de eventos.',
            narrative: 'De acordo com Velikovsky, Júpiter foi o ponto de origem do cometa que se tornou Vênus. A ejeção de Vênus de Júpiter iniciou uma série de perturbações no Sistema Solar, que culminaram em catástrofes na Terra.'
          },
          { 
            url: data.images[3], 
            name: 'Saturno', 
            theory: 'Teorias de Velikovsky sugerem que Saturno teve uma importância significativa em antigos eventos celestiais.',
            narrative: 'Velikovsky especulou que Saturno teve um papel nas interações gravitacionais que influenciaram os eventos celestes descritos nas mitologias antigas.'
          },
          { 
            url: data.images[4], 
            name: 'Mercúrio', 
            theory: 'Velikovsky considerava Mercúrio como envolvido em importantes interações celestes durante a história da Terra.',
            narrative: 'Velikovsky associava Mercúrio às tradições mitológicas sobre mensageiros dos deuses.'
          }
        ];

        setPlanets(planetData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || 'Erro desconhecido');
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
    <main className="flex flex-col justify-center items-center text-center pt-20">
      <h1 className="text-4xl font-bold mb-6">Planetas Teorizados por Velikovsky</h1>
      <section className="flex flex-col gap-6">
        {/* Exibe cada imagem retornada pela API */}
        {planets.map((planet, index) => (
          <article 
            key={index} 
            className="cursor-pointer flex flex-col items-center space-y-4" 
            onClick={() => setSelectedPlanetIndex(selectedPlanetIndex === index ? null : index)} // Alterna a exibição
          >
            <figure className="w-64 h-64 rounded-lg shadow-lg overflow-hidden">
              <img 
                src={planet.url} 
                alt={`Imagem de ${planet.name}`} 
                className="w-full h-full object-cover" 
                loading="lazy" 
              />
            </figure>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold">{planet.name}</h2>
              {/* Exibe a teoria e narrativa apenas se o planeta estiver selecionado */}
              {selectedPlanetIndex === index && (
                <>
                  <p className="text-lg text-center mt-2 max-w-md">{planet.theory}</p>
                  <p className="text-base text-left mt-2 max-w-md">{planet.narrative}</p> {/* Exibe a narrativa completa */}
                </>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

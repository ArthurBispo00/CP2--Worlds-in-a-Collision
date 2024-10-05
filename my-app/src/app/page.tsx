"use client"; // Garantir que este componente seja renderizado no lado do cliente

import { useEffect, useState } from "react";

interface TimelineEvent {
  imageUrl: string;
  title: string;
  description: string;
}

interface PlanetData {
  url: string;
  name: string;
  theory: string;
  narrative: string; // Propriedade para armazenar a narrativa expandida
}

export default function Home() {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);
  const [planets, setPlanets] = useState<PlanetData[]>([]);
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState<number | null>(null); // Para armazenar o índice do planeta selecionado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Linha do Tempo de eventos com imagens locais
    const events: TimelineEvent[] = [
      {
        imageUrl: "/images/velikovsky/cometadesprendejupter.jpg", // Caminho local correto
        title: "O Cometa Se Desprende de Júpiter",
        description: "Por volta do século XV a.C., um cometa do tamanho de um planeta se desprendeu de Júpiter e causou catástrofes globais quando se aproximou da Terra."
      },
      {
        imageUrl: "/images/velikovsky/cometapassapelaterraprimeiravez.jpg", // Caminho local correto, sem espaços
        title: "Passagem Próxima à Terra",
        description: "Ao passar perto da Terra, o cometa paralisou momentaneamente a rotação do planeta, desencadeando uma série de eventos devastadores relatados como as pragas do Egito."
      },
      {
        imageUrl: "/images/velikovsky/cometaretornaevaiparamarte.jpg", // Caminho local correto, sem espaços
        title: "Retorno do Cometa e Deslocamento de Marte",
        description: "Cinquenta anos depois, o cometa retornou, paralisando novamente a Terra e deslocando Marte em sua trajetória, um evento relatado como o Sol parado durante a batalha de Josué."
      },
      {
        imageUrl: "/images/velikovsky/transformacaoemvenus.jpg", // Caminho local correto, sem espaços
        title: "Transformação do Cometa em Vênus",
        description: "Após sua jornada, o cometa se estabilizou em uma órbita e se tornou o planeta Vênus, deixando um legado de eventos cataclísmicos."
      }
    ];

    setTimelineEvents(events);

    // Faz uma requisição para a API personalizada para as imagens dos planetas e suas teorias
    const fetchPlanets = async () => {
      try {
        const res = await fetch('/api/nasa');
        if (!res.ok) {
          throw new Error('Falha ao buscar as imagens');
        }
        const data = await res.json();

        if (Array.isArray(data.images)) {
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
        } else {
          throw new Error('Formato de dados inesperado da API');
        }
      } catch (error: any) {
        setError(error.message || 'Erro desconhecido');
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center pt-20">
      <h1 className="text-4xl font-bold mb-10">Linha do Tempo de Velikovsky</h1>

      {/* Linha do Tempo */}
      <div className="relative w-full max-w-4xl">
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-400 transform -translate-x-1/2"></div>

        <div className="space-y-10">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-center">
              <div className={`flex items-center space-x-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <img src={event.imageUrl} alt={event.title} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
                <div className="max-w-lg">
                  <h2 className="text-2xl font-semibold">{event.title}</h2>
                  <p className="text-lg mt-2">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Planetas Teorizados */}
      <h2 className="text-3xl font-bold mt-16 mb-6">Planetas Teorizados por Velikovsky</h2>
      <div className="flex flex-col gap-6">
        {planets.map((planet, index) => (
          <div 
            key={index} 
            className="cursor-pointer flex flex-col items-center space-y-4" 
            onClick={() => setSelectedPlanetIndex(selectedPlanetIndex === index ? null : index)} // Alterna a exibição
          >
            <img src={planet.url} alt={planet.name} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold">{planet.name}</p>
              {/* Exibe a teoria apenas se o planeta estiver selecionado */}
              {selectedPlanetIndex === index && (
                <>
                  <p className="text-lg text-center mt-2 max-w-md">{planet.theory}</p>
                  <p className="text-base text-left mt-2 max-w-md">{planet.narrative}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

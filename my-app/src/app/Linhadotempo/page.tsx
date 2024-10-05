"use client"; // Garantir que este componente seja renderizado no lado do cliente

import { useEffect, useState } from "react";

interface TimelineEvent {
  imageUrl: string;
  title: string;
  description: string;
  time: string; // Campo para o tempo
}

export default function Home() {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);

  useEffect(() => {
    // Linha do Tempo com tempos centralizados e eventos alternados
    const events: TimelineEvent[] = [
      {
        imageUrl: "/images/velikovsky/cometadesprendejupter.jpg", // Caminho local correto
        title: "O Cometa Se Desprende de Júpiter",
        description: "Por volta do século XV a.C., um cometa do tamanho de um planeta se desprendeu de Júpiter e causou catástrofes globais quando se aproximou da Terra.",
        time: "1500 a.C." // Exemplo de tempo
      },
      {
        imageUrl: "/images/velikovsky/cometapassapelaterraprimeiravez.jpg", // Caminho local correto
        title: "Passagem Próxima à Terra",
        description: "Ao passar perto da Terra, o cometa paralisou momentaneamente a rotação do planeta, desencadeando uma série de eventos devastadores relatados como as pragas do Egito.",
        time: "1490 a.C."
      },
      {
        imageUrl: "/images/velikovsky/cometaretornaevaiparamarte.jpg", // Caminho local correto
        title: "Retorno do Cometa e Deslocamento de Marte",
        description: "Cinquenta anos depois, o cometa retornou, paralisando novamente a Terra e deslocando Marte em sua trajetória, um evento relatado como o Sol parado durante a batalha de Josué.",
        time: "1440 a.C."
      },
      {
        imageUrl: "/images/velikovsky/Transformaemvenus.jpg", // Caminho local correto
        title: "Transformação do Cometa em Vênus",
        description: "Após sua jornada, o cometa se estabilizou em uma órbita e se tornou o planeta Vênus, deixando um legado de eventos cataclísmicos.",
        time: "1400 a.C."
      }
    ];

    setTimelineEvents(events);
  }, []);

  return (
    <main className="flex flex-col items-center pt-20">
      <h1 className="text-5xl font-bold mb-10" aria-label="Linha do Tempo de Velikovsky">Linha do Tempo de Velikovsky</h1>

      {/* Linha do Tempo */}
      <section className="w-full max-w-4xl mb-16" aria-labelledby="timeline-heading">
        <div className="relative">
          <div className="absolute top-0 left-1/2 w-1 bg-gray-400 transform -translate-x-1/2 h-full" aria-hidden="true"></div> {/* Linha central */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <article 
                key={index} 
                className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} 
                aria-labelledby={`event-title-${index}`}
              >
                {/* Exibe o tempo centralizado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white text-gray-600 font-bold px-4 py-2 rounded-full shadow" aria-hidden="true">
                  {event.time}
                </div>

                {/* Alterna os lados da linha do tempo */}
                <div className="w-1/2 flex flex-col items-center space-y-4 text-center">
                  <img 
                    src={event.imageUrl} 
                    alt={`Imagem do evento: ${event.title}`} 
                    className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" 
                  />
                  <div className="max-w-md">
                    <h2 className="text-3xl font-semibold" id={`event-title-${index}`}>{event.title}</h2>
                    <p className="text-lg mt-3">{event.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

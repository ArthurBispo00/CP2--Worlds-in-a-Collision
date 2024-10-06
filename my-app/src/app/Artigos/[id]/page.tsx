"use client"; 
import { useParams } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

type ServicosDetalhes = {
  [key: number]: {
    titulo: string;
    descricao: string;
  };
};

export default function ServicosPage() {
  const { id } = useParams(); 

  const servicosDetalhes: ServicosDetalhes = {
    1: {
      titulo: "Mundos em Colisão: A Teoria de Velikovsky",
      descricao:
        "Immanuel Velikovsky propôs que o planeta Vênus foi originalmente um cometa e que eventos astronômicos dramáticos causaram catástrofes na Terra.",
    },
    2: {
      titulo: "Eventos Cataclísmicos de Vênus",
      descricao:
        "Velikovsky associou a passagem de Vênus perto da Terra a uma série de eventos bíblicos e históricos.",
    },
    3: {
      titulo: "Comparação com Mitologias Antigas",
      descricao:
        "Velikovsky utilizou mitologias de diferentes culturas para apoiar suas teorias sobre eventos cósmicos.",
    },
    4: {
      titulo: "Desafios Científicos e Controvérsias",
<<<<<<< HEAD
      descricao:
        "As ideias de Velikovsky foram amplamente criticadas pela comunidade científica, incluindo Carl Sagan.",
    },
    5: {
      titulo: "Argumento sobre Amnésia Coletiva",
      descricao:
        "Velikovsky sugeriu que a humanidade sofreu uma amnésia coletiva, reprimindo memórias de eventos traumáticos.",
    },
    6: {
      titulo: "Reflexão e Discussão",
      descricao:
        "Embora controverso, o trabalho de Velikovsky continua a gerar discussões entre os defensores de teorias alternativas.",
=======
      descricao: "Embora o trabalho de Velikovsky tenha impressionado pela erudição e criatividade na análise comparada de mitologias, ele foi amplamente criticado pela comunidade científica. Carl Sagan, entre outros, refutou suas ideias, apontando que as alegações de Velikovsky violam as leis da física moderna, como a conservação de energia e o momento angular. Sagan mostrou que, para Vênus ter sido ejetado por Júpiter, a energia necessária seria imensa, o que impossibilitaria o cenário proposto por Velikovsky.",
    },
    5: {
      titulo: "Argumento sobre Amnésia Coletiva",
      descricao: "Uma das ideias centrais de Velikovsky é que a humanidade sofreu de uma amnésia coletiva, reprimindo a memória desses eventos traumáticos. Ele sugeriu que mitos e lendas são expressões simbólicas de memórias inconscientes de catástrofes reais. Velikovsky utilizou teorias freudianas para argumentar que os eventos foram tão traumáticos que foram suprimidos da memória consciente da humanidade.",
    },
    6: {
      titulo: "Reflexão e Discussão",
      descricao: "Embora Velikovsky tenha sido considerado um pensador inovador por alguns, suas teorias são amplamente vistas como pseudociência. Ele utilizou uma abordagem de mitologia comparada para justificar eventos cósmicos que, de acordo com os críticos, não têm base nas leis da física ou nas evidências astronômicas. Mesmo assim, Mundos em Colisão continua sendo uma obra influente entre os defensores de teorias alternativas.",
>>>>>>> main
    },
  };

  const servicoId = parseInt(Array.isArray(id) ? id[0] : id, 10);

  if (isNaN(servicoId) || servicoId < 1 || servicoId > Object.keys(servicosDetalhes).length) {
    return (
      <div>
        <h1>Serviço não encontrado</h1>
        <p>O serviço que você está procurando não foi encontrado.</p>
      </div>
    );
  }

  const content = servicosDetalhes[servicoId];

  const navItems = Object.keys(servicosDetalhes).map(key => (
    <li key={key}><Link href={/servicos/${key}}>Serviço {key}</Link></li>
  ));

  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>{content.titulo}</title>
        <meta name="description" content={content.descricao} />
      </Head>
      <div>
        <h1>{content.titulo}</h1>
        <p>{content.descricao}</p>
        <nav>
          <ul>
            {navItems}
          </ul>
        </nav>
      </div>
    </>
=======
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-gray-900 to-blue-800 rounded-lg shadow-lg">
      <h1 className="text-3xl text-yellow-300 font-bold mb-4 text-center">{content.titulo}</h1>
      <p className="text-white text-lg leading-relaxed mb-6">{content.descricao}</p>
      {/* Adicione mais conteúdo aqui, se necessário */}
      <h2 className="text-2xl text-yellow-200 font-semibold mb-2">Mais Informações</h2>
      <p className="text-white text-lg leading-relaxed mb-4">
        Esta seção pode incluir discussões adicionais sobre as implicações da teoria de Velikovsky e suas repercussões na ciência moderna. A análise crítica das suas propostas ainda gera debate e interesse, refletindo sobre a necessidade de questionar e explorar diferentes narrativas no campo da ciência e da história.
      </p>
    </div>
>>>>>>> main
  );
}
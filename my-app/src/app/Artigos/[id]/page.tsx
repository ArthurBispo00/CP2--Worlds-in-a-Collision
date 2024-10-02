"use client"; // Define este componente como Client Component

import { useParams } from "next/navigation";

// Definir o tipo do objeto com chaves numéricas
type ServicosDetalhes = {
  [key: number]: {
    titulo: string;
    descricao: string;
  };
};

export default function ServicosPage() {
  const { id } = useParams(); // Captura o valor dinâmico da URL

  // Mapeamento de IDs para os conteúdos correspondentes
  const servicosDetalhes: ServicosDetalhes = {
    1: {
      titulo: "Mundos em Colisão: A Teoria de Velikovsky",
      descricao: "Immanuel Velikovsky propôs que o planeta Vênus foi originalmente um cometa e que eventos astronômicos dramáticos causaram catástrofes na Terra. Utilizando mitos e textos históricos de culturas antigas, como os gregos, egípcios e hebreus, Velikovsky argumentou que Vênus foi expelido por Júpiter como um cometa e passou perto da Terra, provocando grandes desastres, como as Dez Pragas do Egito.",
    },
    2: {
      titulo: "Eventos Cataclísmicos de Vênus",
      descricao: "Velikovsky associou a passagem de Vênus perto da Terra a uma série de eventos bíblicos e históricos. Ele alegou que essa proximidade resultou no surgimento de fenômenos como enxames de gafanhotos, pragas e a divisão do Mar Vermelho, todos atribuídos às perturbações causadas pelo cometa Vênus. Ele também sugeriu que a passagem de Vênus teria gerado calor suficiente para propagar rapidamente vermes e larvas na Terra.",
    },
    3: {
      titulo: "Comparação com Mitologias Antigas",
      descricao: "Velikovsky utilizou mitologias de diferentes culturas, como a grega (onde identificou Vênus com Atena e Júpiter com Zeus) e outras, para apoiar suas teorias. Ele argumentou que esses mitos são recordações de eventos reais que foram vivenciados por civilizações antigas e que as catástrofes relatadas nesses mitos podem ser explicadas como interações cósmicas.",
    },
    4: {
      titulo: "Desafios Científicos e Controvérsias",
      descricao: "Embora o trabalho de Velikovsky tenha impressionado pela erudição e criatividade na análise comparada de mitologias, ele foi amplamente criticado pela comunidade científica. Carl Sagan, entre outros, refutou suas ideias, apontando que as alegações de Velikovsky violam as leis da física moderna, como a conservação de energia e o momento angular. Sagan mostrou que, para Vênus ter sido ejetado por Júpiter, a energia necessária seria imensa, o que impossibilitaria o cenário proposto por Velikovsky."
    },
    5: {
      titulo: "Argumento sobre Amnésia Coletiva",
      descricao: "Uma das ideias centrais de Velikovsky é que a humanidade sofreu de uma amnésia coletiva, reprimindo a memória desses eventos traumáticos. Ele sugeriu que mitos e lendas são expressões simbólicas de memórias inconscientes de catástrofes reais. Velikovsky utilizou teorias freudianas para argumentar que os eventos foram tão traumáticos que foram suprimidos da memória consciente da humanidade."
    },
    6: {
      titulo: "Reflexão e Discussão",
      descricao: "Embora Velikovsky tenha sido considerado um pensador inovador por alguns, suas teorias são amplamente vistas como pseudociência. Ele utilizou uma abordagem de mitologia comparada para justificar eventos cósmicos que, de acordo com os críticos, não têm base nas leis da física ou nas evidências astronômicas. Mesmo assim, Mundos em Colisão continua sendo uma obra influente entre os defensores de teorias alternativas."
    },
  };

  // Converter o ID para número
  const servicoId = parseInt(Array.isArray(id) ? id[0] : id, 10);

  // Conteúdo padrão para serviço não encontrado
  const defaultContent = {
    titulo: "Serviço não encontrado",
    descricao: "O serviço que você está procurando não foi encontrado.",
  };

  // Obtém o conteúdo baseado no ID da URL ou usa o conteúdo padrão
  const content = servicosDetalhes[servicoId] || defaultContent;

  return (



    <div>
      <h3>teste</h3>
      <h1>{content.titulo}</h1>
      <p>{content.descricao}</p>
    </div>
  );
}

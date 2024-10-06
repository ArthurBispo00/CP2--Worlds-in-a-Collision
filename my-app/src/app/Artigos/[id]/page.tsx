"use client";
import { useParams } from "next/navigation";
import { useRouter } from 'next/navigation'; // Hook useRouter para redirecionamento
 
// Definir o tipo do objeto com chaves numéricas
type ServicosDetalhes = {
  [key: number]: {
    titulo: string;
    descricao: string;
  };
};
 
export default function ServicosPage() {
  const { id } = useParams(); // Captura o valor dinâmico da URL
  const router = useRouter(); // Inicializa o roteador para navegação programática
 
  // Mapeamento de IDs para os conteúdos correspondentes
  const servicosDetalhes: ServicosDetalhes = {
    1: {
      titulo: "Mundos em Colisão: A Teoria de Velikovsky",
      descricao: "Immanuel Velikovsky propôs que o planeta Vênus foi originalmente um cometa e que eventos astronômicos dramáticos causaram catástrofes na Terra. Utilizando mitos e textos históricos de culturas antigas, Velikovsky argumentou que Vênus foi expelido por Júpiter como um cometa e passou perto da Terra, provocando grandes desastres, como as Dez Pragas do Egito.",
    },
    2: {
      titulo: "Eventos Cataclísmicos de Vênus",
      descricao: "Velikovsky associou a passagem de Vênus perto da Terra a uma série de eventos bíblicos e históricos. Ele alegou que essa proximidade resultou no surgimento de fenômenos como enxames de gafanhotos, pragas e a divisão do Mar Vermelho, todos atribuídos às perturbações causadas pelo cometa Vênus.",
    },
    3: {
      titulo: "Comparação com Mitologias Antigas",
      descricao: "Velikovsky utilizou mitologias de diferentes culturas, como a grega (onde identificou Vênus com Atena e Júpiter com Zeus) e outras, para apoiar suas teorias. Ele argumentou que esses mitos são recordações de eventos reais.",
    },
    4: {
      titulo: "Desafios Científicos e Controvérsias",
      descricao: "Embora o trabalho de Velikovsky tenha impressionado pela erudição, ele foi amplamente criticado pela comunidade científica. Carl Sagan refutou suas ideias, apontando que suas alegações violam as leis da física moderna.",
    },
    5: {
      titulo: "Argumento sobre Amnésia Coletiva",
      descricao: "Uma das ideias centrais de Velikovsky é que a humanidade sofreu de uma amnésia coletiva, reprimindo a memória desses eventos traumáticos.",
    },
    6: {
      titulo: "Reflexão e Discussão",
      descricao: "Embora Velikovsky tenha sido considerado inovador, suas teorias são amplamente vistas como pseudociência.",
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
 
  // Calcula o próximo ID com loop
  const nextId = (servicoId % Object.keys(servicosDetalhes).length) + 1;
 
  // Função de navegação para a próxima página
  const handleNextPage = () => {
    router.push(`/Artigos/${nextId}`); // Navega para a próxima página
  };
 
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-gray-900 to-blue-800 rounded-lg shadow-lg">
      <h1 className="text-3xl text-yellow-300 font-bold mb-4 text-center">{content.titulo}</h1>
      <p className="text-white text-lg leading-relaxed mb-6">{content.descricao}</p>
      <h2 className="text-2xl text-yellow-200 font-semibold mb-2">Mais Informações</h2>
      <p className="text-white text-lg leading-relaxed mb-4">
        Esta seção pode incluir discussões adicionais sobre as implicações da teoria de Velikovsky e suas repercussões na ciência moderna.
      </p>
     
      {/* Centraliza o botão com flex e justify-center */}
      <div className="flex justify-center">
        <button
          className="mt-8 bg-yellow-400 text-black py-2 px-20 rounded hover:bg-yellow-300 transition duration-300"
          onClick={handleNextPage} // Chama a função para navegar para a próxima página
          aria-label="Próxima página"
        >
          Próxima página
        </button>
      </div>
    </div>
  );
}
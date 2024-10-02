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
      titulo: "Troca de Óleo",
      descricao: "Detalhes sobre o serviço de troca de óleo.",
    },
    2: {
      titulo: "Revisão",
      descricao: "Detalhes sobre o serviço de revisão.",
    },
    3: {
      titulo: "Alinhamento",
      descricao: "Detalhes sobre o serviço de alinhamento de rodas.",
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

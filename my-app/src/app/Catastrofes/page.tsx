"use client"; // Garantir que este componente seja renderizado no lado do cliente

import { useEffect, useState } from "react";

interface ImageData {
  url: string;
}

export default function CatastrofesPage() {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função que busca a imagem da API
  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Faz uma requisição para a API personalizada
        const res = await fetch("/api/nasa"); // Chama o endpoint com múltiplas imagens
        if (!res.ok) {
          throw new Error("Falha ao buscar a imagem");
        }
        const data = await res.json();
        const firstImage = data.images[0]; // Pega apenas a primeira imagem do array
        setImageData({ url: firstImage });
        setLoading(false);
      } catch (error: any) {
        setError(error.message || "Erro desconhecido");
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center text-center pt-20"> {/* Adicionei pt-20 para dar espaço no topo */}
      <h1 style={{ fontSize: '50px', fontWeight: 'bold' }} className="mb-4">
        Teoria de Velikovsky: Vênus e as Pragas do Egito
      </h1>
      {imageData && (
        <img
          src={imageData.url}
          alt="Imagem fornecida pela API"
          className="mb-4"
          style={{ width: '400px', height: '350px' }} // Defina o tamanho desejado
        />
      )}
      <p style={{ fontSize: '25px' }} className="mb-4">
        Segundo Immanuel Velikovsky, no livro <i>Worlds in Collision</i>, Vênus
        teria sido originalmente um cometa ejetado de Júpiter, que passou perto
        de vários corpos celestes do Sistema Solar. Ele sugere que, durante uma
        dessas passagens, Vênus teria passado muito próximo da Terra, resultando
        em uma série de eventos cataclísmicos.
      </p>
      <p style={{ fontSize: '25px' }} className="mb-4">
        Entre os eventos propostos por Velikovsky, o mais significativo é a
        associação das Dez Pragas do Egito com essa aproximação de Vênus. Ele
        argumenta que os gases quentes do cometa foram responsáveis por causar
        pragas como a transformação da água em sangue (
        <i>Êxodo 7:20-21</i>), a invasão de gafanhotos (
        <i>Êxodo 10:12-15</i>), e a escuridão sobre o Egito (
        <i>Êxodo 10:21-23</i>).
      </p>
      <p style={{ fontSize: '25px' }} className="mb-4">
        Na página 181 de seu livro, Velikovsky declara: "Debaixo do peso dos
        argumentos, cheguei à conclusão--acerca da qual já não tenho dúvidas--de
        que foi o planeta Vênus, quando era ainda um cometa, que causou as
        catástrofes dos dias do Êxodo".
      </p>
      <p style={{ fontSize: '25px' }}>
        Ele sugere que a interação entre os gases quentes de Vênus e a atmosfera
        terrestre teria provocado os fenômenos descritos na Bíblia como pragas.
      </p>
    </div>
  );
}

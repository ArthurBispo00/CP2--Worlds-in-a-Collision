"use client";

import { useEffect, useState } from "react";

export default function CatastrofesPage() {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função que busca a imagem da API
  useEffect(() => {
    const fetchImage = async () => {
      try {
        // URL do seu endpoint da API que retorna a imagem
        const res = await fetch("/api/nasa"); // Exemplo: API de Imagem da NASA
        const data = await res.json();
        setImageData(data);
        setLoading(false);
      } catch (error) {
        setError("Erro ao buscar a imagem");
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
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">
        Teoria de Velikovsky: Vênus e as Pragas do Egito
      </h1>
      {imageData && (
        <img
          src={imageData.url} // A URL da imagem vinda da API
          alt="Imagem fornecida pela API"
          className="mb-4 max-w-full h-auto"
        />
      )}
      <p className="mb-4">
        Segundo Immanuel Velikovsky, no livro <i>Worlds in Collision</i>, Vênus
        teria sido originalmente um cometa ejetado de Júpiter, que passou perto
        de vários corpos celestes do Sistema Solar. Ele sugere que, durante uma
        dessas passagens, Vênus teria passado muito próximo da Terra, resultando
        em uma série de eventos cataclísmicos.
      </p>
      <p className="mb-4">
        Entre os eventos propostos por Velikovsky, o mais significativo é a
        associação das Dez Pragas do Egito com essa aproximação de Vênus. Ele
        argumenta que os gases quentes do cometa foram responsáveis por causar
        pragas como a transformação da água em sangue (
        <i>Êxodo 7:20-21</i>), a invasão de gafanhotos (
        <i>Êxodo 10:12-15</i>), e a escuridão sobre o Egito (
        <i>Êxodo 10:21-23</i>).
      </p>
      <p className="mb-4">
        Na página 181 de seu livro, Velikovsky declara: "Debaixo do peso dos
        argumentos, cheguei à conclusão--acerca da qual já não tenho dúvidas--de
        que foi o planeta Vênus, quando era ainda um cometa, que causou as
        catástrofes dos dias do Êxodo".
      </p>
      <p>
        Ele sugere que a interação entre os gases quentes de Vênus e a atmosfera
        terrestre teria provocado os fenômenos descritos na Bíblia como pragas.
      </p>
    </div>
  );
}

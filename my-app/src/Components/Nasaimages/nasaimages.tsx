"use client";

import { useEffect, useState } from "react";

// Definindo a interface para os dados da imagem da NASA
interface NasaImageData {
  title: string;
  date: string;
  url: string;
  explanation: string;
}

export default function NasaImages() {
  // Usando tipagem para o estado
  const [imageData, setImageData] = useState<NasaImageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch('/api/nasa'); // Consome o endpoint local
        if (!res.ok) {
          throw new Error(`Erro: ${res.status} ao buscar a imagem da NASA`);
        }
        const data: NasaImageData = await res.json(); // Tipagem explícita
        setImageData(data);
        setLoading(false);
      } catch (error: any) {
        setError(`Erro ao buscar a imagem da NASA: ${error.message}`);
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
      <h1 className="text-2xl font-bold mb-4">Imagem do Dia da NASA</h1>
      {imageData && (
        <>
          <h2 className="text-xl font-semibold">{imageData.title}</h2>
          <p className="mb-4">{imageData.date}</p>
          <img
            src={imageData.url}
            alt={`Imagem do dia da NASA: ${imageData.title}`} // Descrição mais detalhada
            className="mb-4 w-full h-auto max-w-lg rounded"
          />
          <p className="max-w-3xl mx-auto">{imageData.explanation}</p> {/* Limitar a largura do texto para melhor leitura */}
        </>
      )}
    </div>
  );
}

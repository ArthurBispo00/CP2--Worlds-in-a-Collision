"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'; // Importando o componente Image do Next.js

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
      } catch (error) {
        if (error instanceof Error) {
          setError(`Erro ao buscar a imagem da NASA: ${error.message}`);
        } else {
          setError('Erro desconhecido ao buscar a imagem da NASA.');
        }
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
          <Image
            src={imageData.url}
            alt={`Imagem do dia da NASA: ${imageData.title}`} // Descrição mais detalhada
            width={800} // Ajuste a largura conforme necessário
            height={600} // Ajuste a altura conforme necessário
            className="mb-4 w-full h-auto max-w-lg rounded"
          />
          <p className="max-w-3xl mx-auto">{imageData.explanation}</p> {/* Limitar a largura do texto para melhor leitura */}
        </>
      )}
    </div>
  );
}

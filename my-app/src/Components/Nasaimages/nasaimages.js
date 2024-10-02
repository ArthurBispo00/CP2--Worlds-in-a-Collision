"use client";

import { useEffect, useState } from "react";

export default function NasaImages() {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch('/api/nasa'); // Consome o endpoint local
        const data = await res.json();
        setImageData(data);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar a imagem da NASA');
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
          <img src={imageData.url} alt={imageData.title} className="mb-4 w-full h-auto max-w-lg rounded" />
          <p>{imageData.explanation}</p>
        </>
      )}
    </div>
  );
}

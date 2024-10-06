"use client"; // Garantir que este componente seja renderizado no lado do cliente

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Hook useRouter para redirecionamento
import Image from 'next/image'; // Usar o componente otimizado do Next.js para imagens

interface ImageData {
  url: string;
}

export default function CatastrofesPage() {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Inicializa o hook useRouter

  // Função que busca a imagem da API
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch("/api/nasa"); // Faz uma requisição à API
        if (!res.ok) {
          throw new Error("Falha ao buscar a imagem");
        }
        const data = await res.json();
        const firstImage = data.images[0]; // Obtém a primeira imagem
        setImageData({ url: firstImage });
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message || "Erro desconhecido");
        } else {
          setError("Erro desconhecido");
        }
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen" aria-busy="true" aria-live="polite">Carregando...</div>;
  }

  if (error) {
    return <div className="text-red-500" role="alert">{error}</div>;
  }

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/tom.jp')` }} // Aplique o caminho correto da imagem de fundo
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Conteúdo principal */}
      <main className="relative flex flex-col justify-center items-center text-center pt-20 text-white p-6">
        <article className="max-w-4xl mx-auto">
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider text-yellow-400">
            Teoria de Velikovsky: Vênus e as Pragas do Egito
          </h1>

          {imageData && (
            <Image
              src={imageData.url}
              alt="Imagem do cometa fornecida pela NASA"
              className="mb-6 mx-auto rounded-lg shadow-lg"
              width={600}
              height={400}
              aria-describedby="imagem-descricao"
            />
          )}

          <section id="imagem-descricao" className="text-lg md:text-xl leading-relaxed text-gray-300">
            <p className="mb-4">
              Segundo Immanuel Velikovsky, no livro <i>Worlds in Collision</i>, Vênus teria sido originalmente um cometa ejetado de Júpiter, que passou perto de vários corpos celestes do Sistema Solar.
            </p>
            <p className="mb-4">
              Entre os eventos propostos por Velikovsky, o mais significativo é a associação das Dez Pragas do Egito com essa aproximação de Vênus.
            </p>
            <p className="mb-4">
              Na página 181 de seu livro, Velikovsky declara: &quot;Debaixo do peso dos argumentos, cheguei à conclusão—acerca da qual já não tenho dúvidas—de que foi o planeta Vênus, quando era ainda um cometa, que causou as catástrofes dos dias do Êxodo&quot;.
            </p>
            <p>
              Ele sugere que a interação entre os gases quentes de Vênus e a atmosfera terrestre teria provocado os fenômenos descritos na Bíblia como pragas.
            </p>
          </section>
        </article>

        <button 
  className="bg-gradient-to-r from-blue-900 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-500 transition duration-300 ease-in-out transform hover:scale-105 mt-8"
  onClick={() => router.push('/Linhadotempo')}
  aria-label="Confira os eventos na linha do tempo"
>
  Confira os eventos na linha do tempo
</button>
      </main>
    </div>
  );
}

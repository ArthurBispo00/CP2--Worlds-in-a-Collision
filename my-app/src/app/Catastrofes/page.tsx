"use client"; // Garantir que este componente seja renderizado no lado do cliente

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Hook useRouter para redirecionamento

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
      } catch (error: any) {
        setError(error.message || "Erro desconhecido");
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
    <main className="flex flex-col justify-center items-center text-center pt-20"> {/* Adicionei pt-20 para espaçamento */}
      <article>
        <h1 className="mb-4" style={{ fontSize: '50px', fontWeight: 'bold' }}>
          Teoria de Velikovsky: Vênus e as Pragas do Egito
        </h1>
        {imageData && (
          <img
            src={imageData.url}
            alt="Imagem do cometa fornecida pela NASA"
            className="mb-4 mx-auto"  // Adiciona mx-auto para centralizar a imagem horizontalmente
            style={{ width: '400px', height: '350px' }} // Define largura e altura fixas
            aria-describedby="imagem-descricao"
          />
        )}
        <section id="imagem-descricao">
          <p className="mb-4" style={{ fontSize: '25px' }}>
            Segundo Immanuel Velikovsky, no livro <i>Worlds in Collision</i>, Vênus teria sido originalmente um cometa ejetado de Júpiter, que passou perto de vários corpos celestes do Sistema Solar. Ele sugere que, durante uma dessas passagens, Vênus teria passado muito próximo da Terra, resultando em uma série de eventos cataclísmicos.
          </p>
          <p className="mb-4" style={{ fontSize: '25px' }}>
            Entre os eventos propostos por Velikovsky, o mais significativo é a associação das Dez Pragas do Egito com essa aproximação de Vênus. Ele argumenta que os gases quentes do cometa foram responsáveis por causar pragas como a transformação da água em sangue (<i>Êxodo 7:20-21</i>), a invasão de gafanhotos (<i>Êxodo 10:12-15</i>), e a escuridão sobre o Egito (<i>Êxodo 10:21-23</i>).
          </p>
          <p className="mb-4" style={{ fontSize: '25px' }}>
            Na página 181 de seu livro, Velikovsky declara: "Debaixo do peso dos argumentos, cheguei à conclusão--acerca da qual já não tenho dúvidas--de que foi o planeta Vênus, quando era ainda um cometa, que causou as catástrofes dos dias do Êxodo".
          </p>
          <p style={{ fontSize: '25px' }}>
            Ele sugere que a interação entre os gases quentes de Vênus e a atmosfera terrestre teria provocado os fenômenos descritos na Bíblia como pragas.
          </p>
        </section>
      </article>

      <a 
        href="#" 
        className="mt-8 text-lg font-bold text-blue-500 underline" 
        onClick={(e) => {
          e.preventDefault();
          router.push('/Linhadotempo'); // Redireciona para o componente da linha do tempo
        }}
        aria-label="Confira os eventos na linha do tempo"
      >
        Confira na linha do tempo abaixo os eventos que aconteceram relacionados a essas teorias
      </a>
    </main>
  );
}



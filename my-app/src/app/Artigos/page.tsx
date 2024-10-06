"use client";

import { useParams } from "next/navigation";
import Link from "next/link"; // Importando o Link para navegação

export default function ServicoPage() {
  const { servico } = useParams(); // Captura o parâmetro dinâmico da URL

  return (
    <div className="bg-[url('/images/buraconegro.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center relative">
      {/* Fundo com opacidade para melhor legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      <div className=" p-6 bg-gradient-to-r from-gray-800 to-blue-900 rounded-lg shadow-lg relative z-20 w-full ">
        {/* Exibindo o conteúdo baseado no serviço capturado pela URL */}
        <h1 className="text-3xl text-white font-bold mb-4 text-center">Mundo de Velikovsky {servico}</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">Informações sobre Velikovsky {servico}.</p>

        {/* Menu de navegação ocupando toda a tela e com fundo transparente */}
        <nav className="flex flex-col items-center justify-center bg-transparent mt-6">
          <h2 className="text-2xl text-yellow-300 font-semibold mb-2">Artigos sobre Astronomia</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/Artigos/1" className="text-blue-300 hover:text-blue-500 transition duration-300">Serviço 1</Link>
            </li>
            <li>
              <Link href="/Artigos/2" className="text-blue-300 hover:text-blue-500 transition duration-300">Serviço 2</Link>
            </li>
            <li>
              <Link href="/Artigos/3" className="text-blue-300 hover:text-blue-500 transition duration-300">Serviço 3</Link>
            </li>
            <li>
              <Link href="/Artigos/4" className="text-blue-300 hover:text-blue-500 transition duration-300">Serviço 4</Link>
            </li>
            <li>
              <Link href="/Artigos/5" className="text-blue-300 hover:text-blue-500 transition duration-300">Serviço 5</Link>
            </li>
            <li>
              <Link href="/Artigos/6" className="text-blue-300 hover:text-blue-500 transition duration-300">Serviço 6</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

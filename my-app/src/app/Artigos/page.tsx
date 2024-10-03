"use client";

import { useParams } from "next/navigation";
import Link from "next/link"; // Importando o Link para navegação

export default function ServicoPage() {
  const { servico } = useParams(); // Captura o parâmetro dinâmico da URL

  return (
    <div>
      {/* Exibindo o conteúdo baseado no serviço capturado pela URL */}
      <h1>Mundo de Velikovsky {servico}</h1>
      <p>Informações sobre Velikovsky {servico}.</p>

      {/* Menu de navegação com links para os diferentes IDs */}
      <nav>
        <h2>Menu de Serviços</h2>
        <ul>
          <li>
            <Link href="/servico/1">Serviço 1</Link>
          </li>
          <li>
            <Link href="/servico/2">Serviço 2</Link>
          </li>
          <li>
            <Link href="/servico/3">Serviço 3</Link>
          </li>
          <li>
            <Link href="/servico/4">Serviço 4</Link>
          </li>
          <li>
            <Link href="/servico/5">Serviço 5</Link>
          </li>
          <li>
            <Link href="/servico/6">Serviço 6</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

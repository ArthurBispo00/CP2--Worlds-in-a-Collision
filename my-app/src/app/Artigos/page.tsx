
"use client";


import { useParams } from "next/navigation";

export default function ServicoPage() {
  const { servico } = useParams();

  return (
    <div>
      <h1>Mundo de Velikovsky {servico}</h1>
      <p>Informacoes sobre Velikovsky {servico}.</p>
    </div>
  );
}

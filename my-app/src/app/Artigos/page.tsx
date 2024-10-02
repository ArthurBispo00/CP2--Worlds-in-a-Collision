
"use client";


import { useParams } from "next/navigation";

export default function ServicoPage() {
  const { servico } = useParams();

  return (
    <div>
      <h1>Serviço: {servico}</h1>
      <p>Informações sobre o serviço {servico}.</p>
    </div>
  );
}

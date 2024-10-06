"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import React, { useState, useEffect } from "react";
 
type ServicosDetalhes = {
  [key: number]: {
    titulo: string;
    descricao: string;
  };
};
 
export default function ServicosPage() {
  const { id } = useParams();
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
 
  const servicosDetalhes: ServicosDetalhes = {
    1: {
      titulo: "Mundos em Colisão: A Teoria de Velikovsky",
      descricao:
        "Immanuel Velikovsky propôs que o planeta Vênus foi originalmente um cometa e que eventos astronômicos dramáticos causaram catástrofes na Terra.",
    },
    2: {
      titulo: "Eventos Cataclísmicos de Vênus",
      descricao:
        "Velikovsky associou a passagem de Vênus perto da Terra a uma série de eventos bíblicos e históricos.",
    },
    3: {
      titulo: "Comparação com Mitologias Antigas",
      descricao:
        "Velikovsky utilizou mitologias de diferentes culturas para apoiar suas teorias sobre eventos cósmicos.",
    },
    4: {
      titulo: "Desafios Científicos e Controvérsias",
      descricao:
        "As ideias de Velikovsky foram amplamente criticadas pela comunidade científica, incluindo Carl Sagan.",
    },
    5: {
      titulo: "Argumento sobre Amnésia Coletiva",
      descricao:
        "Velikovsky sugeriu que a humanidade sofreu uma amnésia coletiva, reprimindo memórias de eventos traumáticos.",
    },
    6: {
      titulo: "Reflexão e Discussão",
      descricao:
        "Embora controverso, o trabalho de Velikovsky continua a gerar discussões entre os defensores de teorias alternativas.",
    },
  };
 
  const servicoId = parseInt(Array.isArray(id) ? id[0] : id, 10);
 
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
    setContextMenuVisible(true);
  };
 
  const closeContextMenu = () => {
    setContextMenuVisible(false);
  };
 
  useEffect(() => {
    document.addEventListener("click", closeContextMenu);
    return () => {
      document.removeEventListener("click", closeContextMenu);
    };
  }, []);
 
  if (isNaN(servicoId) || servicoId < 1 || servicoId > Object.keys(servicosDetalhes).length) {
    return (
      <div onContextMenu={handleContextMenu}>
        <h1>Serviço não encontrado</h1>
        <p>O serviço que você está procurando não foi encontrado.</p>
        {contextMenuVisible && (
          <div
            style={{
              position: "absolute",
              top: menuPosition.y,
              left: menuPosition.x,
              backgroundColor: "#fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              zIndex: 1000,
            }}
          >
            <ul>
              <li>Opção 1</li>
              <li>Opção 2</li>
              <li>Opção 3</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
 
  const content = servicosDetalhes[servicoId];
 
  const navItems = Object.keys(servicosDetalhes).map((key) => (
    <li key={key}>
      <Link href={`/servicos/${key}`}>
        {servicosDetalhes[parseInt(key, 10)].titulo}
      </Link>
    </li>
  ));
 
  return (
    <>
      <Head>
        <title>{content.titulo}</title>
        <meta name="description" content={content.descricao} />
      </Head>
      <div onContextMenu={handleContextMenu}>
        <h1>{content.titulo}</h1>
        <p>{content.descricao}</p>
        <nav>
          <ul>{navItems}</ul>
        </nav>
        {contextMenuVisible && (
          <div
            style={{
              position: "absolute",
              top: menuPosition.y,
              left: menuPosition.x,
              backgroundColor: "#fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              zIndex: 1000,
            }}
          >
            <ul>
              <li>Opção 1</li>
              <li>Opção 2</li>
              <li>Opção 3</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

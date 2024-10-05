import type { Metadata } from "next";

import "./globals.css";
import Cabecalho from "@/Components/Cabecario";
import Rodape from "@/Components/Rodape";

export const metadata: Metadata = {
  title: "O Mundo de Velikovsky",
  description: `O Mundo de Velikovsky explora as teorias revolucionárias de Immanuel Velikovsky, 
    um pensador que desafiou as convenções científicas da sua época. Ele propôs ideias polêmicas 
    sobre catástrofes cósmicas e suas influências na história da Terra e da humanidade, sugerindo que 
    eventos astronômicos, como a passagem de planetas, moldaram civilizações antigas. Este título 
    mergulha em suas teorias, examinando suas descobertas sobre mitologia, história e astronomia, e 
    como suas ideias provocaram debates intensos entre cientistas, historiadores e estudiosos.`,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
     <body className="flex flex-col min-h-screen"> {/* Estrutura flex para o layout */}
     <Cabecalho />

     <main className="flex-grow"> {/* Cresce para ocupar o espaço restante */}
          {children}
        </main>

        <Rodape /> {/* O rodapé estará no final e não sobreporá o conteúdo */}
      </body>
    </html>
  );
}

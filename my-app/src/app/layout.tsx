import type { Metadata } from "next";

import "./globals.css";
import Cabecalho from "@/Components/Cabecario";
import Rodape from "@/Components/Rodape";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="Pt-br">
      <body>
<Cabecalho></Cabecalho>

<Rodape></Rodape>
        {children}
      </body>
    </html>
  );
}

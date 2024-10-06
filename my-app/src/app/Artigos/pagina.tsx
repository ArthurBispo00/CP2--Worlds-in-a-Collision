"use client"; 
import Head from "next/head";
import Link from "next/link";

export default function PensamentosVelikovskyPage() {
  return (
    <>
      <Head>
        <title>Os Pensamentos de Velikovsky</title>
        <meta name="description" content="Uma visão sobre os pensamentos de Immanuel Velikovsky e suas teorias sobre a interconexão entre o cosmos e a história." />
      </Head>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h1>Os Pensamentos de Velikovsky</h1>
        
        <h2>1. Mundos em Colisão: A Teoria de Velikovsky</h2>
        <p>
          A noção de mundo de Velikovsky é marcada por uma visão cósmica, onde eventos astronômicos têm um impacto direto e significativo 
          na história humana. Para ele, a Terra não é um corpo isolado, mas parte de um sistema solar dinâmico, onde interações entre 
          planetas podem causar catástrofes e influenciar a vida na Terra.
        </p>
        
        <h2>2. Eventos Cataclísmicos de Vênus</h2>
        <p>
          Velikovsky vê o mundo como um lugar sujeito a forças cósmicas que moldam a realidade. Ele propõe que a passagem de Vênus provocou 
          desastres naturais, refletindo uma interconexão entre o céu e a terra, sugerindo que a natureza é um agente ativo na narrativa da humanidade.
        </p>
        
        <h2>3. Comparação com Mitologias Antigas</h2>
        <p>
          A visão de mundo de Velikovsky se expande ao considerar a mitologia como um registro de realidades passadas. Ele acredita que mitos 
          de várias culturas documentam interações cósmicas, oferecendo insights sobre a natureza humana e traumas coletivos.
        </p>
        
        <h2>4. Desafios Científicos e Controvérsias</h2>
        <p>
          A noção de mundo de Velikovsky contrasta com a visão científica tradicional, defendendo que história e ciência devem ser vistas como 
          interligadas, permitindo um mundo mais flexível onde eventos extraordinários podem moldar o destino da humanidade.
        </p>
        
        <h2>5. Amnésia Coletiva</h2>
        <p>
          Velikovsky introduz a ideia de "amnésia coletiva", sugerindo que a humanidade vive em negação em relação a traumas cósmicos passados e 
          que os mitos são formas de recuperar essas memórias, demonstrando que o mundo é não apenas físico, mas também psicológico.
        </p>
        <h2>6. Controvérsia e Legado</h2>
        <p>
          A noção de mundo de Velikovsky, ao desafiar paradigmas científicos, gera debates contínuos entre críticos e defensores de teorias alternativas. Sua visão de um universo dinâmico, onde eventos cósmicos influenciam a história, questiona a ciência como uma narrativa fixa. Embora críticos como Carl Sagan refutem suas ideias, a abordagem interdisciplinar de Velikovsky ressoa com quem busca explicações alternativas. Seu legado continua a estimular discussões sobre a relação entre ciência, mitologia e experiência humana, criando um espaço de inovação e contestação no entendimento do mundo.
        </p>

        <nav>
          <ul>
            <li><Link href="/">Voltar para a Página Inicial</Link></li>
            <li><Link href="/servicos">Ver Serviços</Link></li>
            {/* Adicione outros links relevantes aqui */}
          </ul>
        </nav>
      </div>
    </>
  );
}

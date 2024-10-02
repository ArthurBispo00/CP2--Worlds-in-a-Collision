import Link from 'next/link';

export default function Introducao() {
  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <div className="max-100vh mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-gray-810">
          Introdução ao <em>Worlds in Collision</em>
        </h1>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          <em>Worlds in Collision</em>, publicado em 1950 por Immanuel Velikovsky, é uma obra que abalou o mundo acadêmico ao propor que eventos cosmológicos catastróficos moldaram a história do planeta Terra. Velikovsky argumenta que o planeta Vênus foi originalmente um cometa, expulso de Júpiter, e que sua trajetória trouxe caos à Terra. Ele sustenta que as mitologias antigas de várias culturas ao redor do mundo — incluindo Egito, Israel, Grécia, China e México — são, na verdade, relatos codificados de encontros cósmicos violentos.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          De acordo com Velikovsky, esses eventos causaram perturbações gravíssimas no meio ambiente da Terra, como terremotos, alterações no clima e até mesmo as pragas do Êxodo bíblico. Ele usa lendas e textos religiosos antigos para construir seu argumento, desafiando muitas das teorias estabelecidas da astronomia e da história. O livro causou um impacto significativo, gerando tanto fascínio quanto críticas ferozes por parte da comunidade científica.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Velikovsky, contrariando os princípios da física newtoniana, sugeriu que o comportamento planetário nos últimos milênios não segue as leis hoje conhecidas, mas sim uma história de encontros catastróficos que influenciaram tanto o sistema solar quanto a evolução da civilização humana. Essa proposta foi altamente criticada, mas o autor alega que os mitos e histórias de culturas antigas não devem ser descartados como simples alegorias, e sim tratados como evidências de um passado astronômico turbulento.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Apesar de ser amplamente desacreditado por cientistas, o livro continua a gerar debates sobre os limites da ciência convencional e a interpretação de eventos mitológicos como fatos históricos. Velikovsky traz uma abordagem multidisciplinar que combina mitologia, história, geologia e astronomia de uma maneira ousada e controversa, propondo uma "amnésia coletiva" da humanidade em relação a esses eventos traumáticos.
        </p>

        <img
          src="/path/to/your/image.jpg"
          alt="Imagem relacionada ao tema"
          className="w-full h-auto rounded-lg shadow-lg mb-6"
        />

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          No entanto, a ciência moderna considera que as leis da física e os registros astronômicos não suportam a ideia de que o planeta Vênus tenha sido um cometa ou que eventos cósmicos dessa magnitude tenham ocorrido nos últimos milhares de anos. Ainda assim, <em>Worlds in Collision</em> permanece como um marco na pseudociência, desafiando as fronteiras do conhecimento estabelecido e inspirando tanto pesquisadores quanto entusiastas a questionar e explorar o desconhecido.
        </p>

       
      </div>
    </div>
  );
}

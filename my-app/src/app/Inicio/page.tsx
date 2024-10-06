import Link from 'next/link';
import { FaRocket } from 'react-icons/fa'; // Importando o ícone de foguete
import Image from 'next/image'; // Importando o componente Image do Next.js

export default function Introducao() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/nebulosa.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}
    >
      {/* Overlay para escurecer o fundo */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Conteúdo principal */}
      <div className="relative max-w-6xl mx-auto p-10 text-white space-y-16">
        <section className="text-center">
          <h1 className="text-6xl font-extrabold mb-6 text-yellow-400">
            Introdução ao <em>Worlds in Collision</em>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <em>Worlds in Collision</em>, publicado em 1950 por Immanuel Velikovsky, é uma obra que desafiou as bases do conhecimento científico de sua época. Velikovsky, que era psiquiatra de formação, dedicou grande parte de sua vida ao estudo das mitologias e das ciências, propondo teorias que causaram grande controvérsia e impacto no mundo acadêmico.
          </p>
        </section>

        {/* Seção Curiosidades */}
        <section className="text-left max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-300 mb-4 text-center">Curiosidades sobre o livro</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li className="mb-2">O livro foi publicado em 1950, mas foi escrito ao longo de uma década de pesquisas intensas, em que Velikovsky estudou textos antigos e dados astronômicos.</li>
            <li className="mb-2">Uma das ideias centrais do livro é que o planeta Vênus foi inicialmente um cometa antes de estabilizar sua órbita atual.</li>
            <li className="mb-2">Velikovsky usou registros de diferentes culturas, como a Bíblia e textos chineses antigos, para sugerir que esses eventos cósmicos causaram fenômenos como pragas, terremotos e mudanças climáticas.</li>
            <li className="mb-2">A obra foi amplamente criticada pela comunidade científica da época, especialmente pelos astrônomos, que consideraram suas ideias incompatíveis com as leis da física.</li>
          </ul>
        </section>

        {/* Seção Extra */}
        <section className="text-left max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            A teoria de Velikovsky também sugere que as civilizações antigas sofreram com uma &quot;amnésia coletiva&quot;, onde os povos antigos suprimiram, consciente ou inconscientemente, as memórias desses eventos catastróficos, relembrando-os apenas como mitos e lendas. Ele argumenta que a astronomia e a geologia precisam considerar esses relatos mitológicos como pistas para entender o passado turbulento da Terra.
          </p>

          <Image
            src="/images/velikovsky.jpg" // Exemplo de uma imagem adicional relacionada
            alt="Imagem relacionada ao tema"
            width={800} // Especifique a largura correta
            height={600} // Especifique a altura correta
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />

          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Embora amplamente desacreditado pela ciência convencional, <em>Worlds in Collision</em> continua a ser um marco na pseudociência, inspirando tanto curiosidade quanto debates sobre os limites do conhecimento científico e a interpretação de mitos antigos como fatos históricos.
          </p>
        </section>

        {/* Botão com ícone de foguete */}
        <div className="text-center">
          <Link href="/Artigos" className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition duration-300">
            <FaRocket className="mr-2" /> {/* Ícone de foguete ao lado do texto */}
            Leia mais artigos
          </Link>
        </div>
      </div>
    </div>
  );
}

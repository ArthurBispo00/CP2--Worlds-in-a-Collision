// Importando a fonte Roboto diretamente do Google Fonts usando next/font/google
import { Roboto } from 'next/font/google';
import { FaBook, FaInfoCircle } from 'react-icons/fa'; // Importando ícones do react-icons

// Configurando Roboto com os pesos e subset necessários
const roboto = Roboto({
  weight: ['400', '500', '700'], // Variantes de peso da fonte
  subsets: ['latin'], // Subconjunto de caracteres
  display: 'swap', // Para garantir que o texto seja renderizado com fallback enquanto a fonte é carregada
});

export default function Introducao() {
  return (
    <div className={`${roboto.className} bg-gradient-to-b from-black via-gray-900 to-black min-h-screen p-8 text-white`}>
      <div className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg shadow-xl">
        {/* Título principal com ícone e espessura extra nas letras */}
        <h1 className="text-5xl font-extrabold mb-6 text-yellow-400 flex items-center">
          <FaBook className="mr-3" /> {/* Ícone do livro antes do título */}
          Introdução ao <em>Worlds in Collision</em>
        </h1>
        
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          <em>Worlds in Collision</em>, publicado em 1950 por Immanuel Velikovsky, é uma obra que desafiou as bases do conhecimento científico de sua época. Velikovsky, que era psiquiatra de formação, dedicou grande parte de sua vida ao estudo das mitologias e das ciências, propondo teorias que causaram grande controvérsia e impacto no mundo acadêmico.
        </p>
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          O livro apresenta a teoria de que eventos cataclísmicos cósmicos, envolvendo o planeta Vênus, moldaram a história do planeta Terra. Segundo Velikovsky, Vênus teria sido expulso de Júpiter e, em sua jornada, passou perigosamente perto da Terra, causando eventos catastróficos descritos em antigas mitologias. Ele argumenta que as histórias mitológicas e religiosas de civilizações como Egito, Grécia e Israel não são meras alegorias, mas relatos históricos de eventos reais.
        </p>
        
        {/* Subtítulo "Curiosidades" com ícone e espessura aumentada */}
        <h2 className="text-3xl font-bold mb-4 text-yellow-300 flex items-center">
          <FaInfoCircle className="mr-2" /> {/* Ícone de informação */}
          Curiosidades sobre o livro
        </h2>
        
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li className="mb-2">O livro foi publicado em 1950, após uma década de pesquisa intensa.</li>
          <li className="mb-2">Velikovsky propôs que o planeta Vênus foi inicialmente um cometa expulso de Júpiter.</li>
          <li className="mb-2">Ele usou mitologias e textos religiosos de várias culturas para apoiar suas teorias.</li>
          <li className="mb-2">A obra gerou controvérsia e foi amplamente criticada por astrônomos e cientistas.</li>
        </ul>

        <img
          src="/path/to/your/image.jpg"
          alt="Imagem relacionada ao tema"
          className="w-full h-auto rounded-lg shadow-lg mb-6"
        />

        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          Embora amplamente desacreditado pela ciência convencional, <em>Worlds in Collision</em> continua a inspirar debates sobre os limites da ciência tradicional e a interpretação de mitos antigos como evidências de eventos históricos.
        </p>

        {/* Botão corrigido */}
        <div className="text-center">
          <a href="/Artigos" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition duration-300">
            Leia mais artigos
          </a>
        </div>
      </div>
    </div>
  );
}

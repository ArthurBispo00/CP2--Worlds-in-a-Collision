import Link from 'next/link';
import { FaGlobe, FaSun, FaBolt } from 'react-icons/fa';
import { Roboto } from 'next/font/google';

// Configurando Roboto com os pesos e subset necessários
const roboto = Roboto({
  weight: ['400', '500', '700'], // Variantes de peso da fonte
  subsets: ['latin'], // Subconjunto de caracteres
  display: 'swap', // Para garantir que o texto seja renderizado com fallback enquanto a fonte é carregada
});

export default function Home() {
  return (
    <div className={`${roboto.className} relative min-h-screen bg-cover bg-center`} style={{ backgroundImage: `url('/images/cometa.jpg')` }}>
      {/* Overlay para escurecer o fundo */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Conteúdo principal */}
      <div className="relative max-w-7xl mx-auto p-6 text-white space-y-16">
        
        {/* Seção de Introdução */}
        <section className="text-center">
          <h1 className="text-6xl font-extrabold text-yellow-400 mb-6">
            Descubra os Segredos Cósmicos
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Bem-vindo ao universo revolucionário de Immanuel Velikovsky! Prepare-se para explorar 
            a história do cosmos como nunca vista antes, onde mitos e ciência se encontram.
            Mergulhe nas ideias que desafiam as fronteiras da astronomia e da história humana, 
            baseadas nas teorias do livro <em>Worlds in Collision</em>.
          </p>
        </section>

        {/* Seção de Sobre Velikovsky */}
        <section className="text-left max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-300 mb-4">Quem foi Immanuel Velikovsky?</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Immanuel Velikovsky (1895-1979) foi um pensador ousado que desafiou as noções tradicionais da ciência. 
            Seu livro <em>Worlds in Collision</em> propôs que eventos cósmicos catastróficos moldaram a história do 
            nosso planeta e das civilizações antigas. Suas ideias foram revolucionárias e controversas, 
            mas continuam a intrigar estudiosos e entusiastas.
          </p>
          <Link href="/Artigos" className="text-yellow-400 font-bold underline hover:text-yellow-300">
            Leia mais sobre Velikovsky
          </Link>
        </section>

        {/* Seção de Destaques do Livro */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center max-w-7xl mx-auto">
          {/* Evento Cósmico */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaSun className="text-yellow-400 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Evento Cósmico</h3>
            <p className="text-gray-300">
              Velikovsky sugeriu que o planeta Vênus era um cometa expulso de Júpiter e que sua proximidade com a Terra
              causou catástrofes descritas nas antigas mitologias.
            </p>
          </div>
          {/* Impacto Global */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaGlobe className="text-blue-400 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Impacto Global</h3>
            <p className="text-gray-300">
              Segundo o autor, as lendas e mitos de culturas antigas, de Egito a Israel, são na verdade relatos de 
              eventos cósmicos e planetários que moldaram a história da Terra.
            </p>
          </div>
          {/* Teoria Controversa */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaBolt className="text-yellow-400 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Teoria Controversa</h3>
            <p className="text-gray-300">
              As teorias de Velikovsky foram altamente criticadas pela comunidade científica por contradizerem
              as leis da física e da astronomia estabelecidas, mas continuam a inspirar debates até hoje.
            </p>
          </div>
        </section>

        {/* Seção de Artigos e Exploração */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-yellow-300 mb-4">Explore o Sistema Solar na Visão de Velikovsky</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
            Mergulhe nas fascinantes teorias de Velikovsky sobre o nosso sistema solar e descubra como ele acreditava
            que eventos catastróficos moldaram a história de Vênus, Marte e a própria Terra.
          </p>
          <Link href="/SistemaSolar" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition duration-300">
            Conheça o Sistema Solar
          </Link>
        </section>

        {/* Seção de Desastre de Vênus */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-300 mb-4">O Desastre de Vênus</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            De acordo com Velikovsky, o planeta Vênus foi expulso de Júpiter e, como um cometa, causou
            destruições massivas quando passou próximo da Terra. Esse evento, registrado em mitologias
            de várias culturas, foi um dos pilares de sua teoria.
          </p>
          <Link href="/DesastreDeVenus" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition duration-300 mt-4">
            Saiba mais sobre o desastre
          </Link>
        </section>

        {/* Seção de Depoimentos */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-yellow-300 mb-4">O que dizem sobre Velikovsky</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            &quot;Uma leitura fascinante que desafia as fronteiras do conhecimento científico.&quot; – New York Times
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            &quot;Uma obra controversa, mas impossível de ignorar.&quot; – Scientific American
          </p>
        </section>
      </div>
    </div>
  );
}

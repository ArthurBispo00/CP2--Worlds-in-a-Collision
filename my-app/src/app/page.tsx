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
  Seu trabalho multidisciplinar tocou áreas como astronomia, história e mitologia. Nascido em Vitebsk, 
  na atual Bielorrússia, Velikovsky veio de uma família judaica culta e desenvolveu um forte interesse 
  pela ciência desde jovem. Ele estudou medicina na Universidade de Moscou, onde se formou em 1921. Após 
  a Revolução Russa, emigrou para a Alemanha e posteriormente para a Palestina, onde continuou seus 
  estudos e fundou a revista <em>Scripta Universitatis</em> com o apoio de intelectuais da época, 
  incluindo Albert Einstein.
</p>

<p className="text-lg text-gray-300 leading-relaxed mb-6">
  Embora treinado em medicina e psicanálise, foi na intersecção entre ciência e história que Velikovsky 
  realmente desafiou o status quo. Seu livro mais famoso, <em>Worlds in Collision</em> (1950), propôs 
  que a Terra sofreu catástrofes cósmicas que moldaram a história da humanidade. Ele argumentou que o 
  planeta Vênus foi expulso de Júpiter e passou perto da Terra, causando eventos catastróficos que estão 
  registrados em mitos e tradições antigas, como o Êxodo bíblico e outras narrativas mitológicas.
</p>

<p className="text-lg text-gray-300 leading-relaxed mb-6">
  Suas teorias catastrofistas sugeriam que a história geológica e cultural da Terra não foi moldada 
  gradualmente, como muitos acreditavam, mas por eventos cósmicos repentinos. Isso incluiu grandes 
  terremotos, tsunamis e mudanças climáticas abruptas causadas pela interação de corpos celestes. 
  Velikovsky interpretou textos antigos, mitologias e escrituras religiosas como relatos de eventos 
  astronômicos reais. Ele sugeriu que esses eventos influenciaram profundamente as civilizações antigas, 
  conectando mitos de diferentes culturas a esses fenômenos cósmicos.
</p>

<p className="text-lg text-gray-300 leading-relaxed mb-6">
  A comunidade científica da época foi extremamente crítica em relação às ideias de Velikovsky. 
  Astrônomos, geólogos e físicos argumentaram que suas teorias sobre a origem e o movimento de Vênus 
  não eram consistentes com o conhecimento científico estabelecido. Críticos notáveis, como o 
  astrofísico Carl Sagan, refutaram muitas das alegações de Velikovsky, e ele foi amplamente rejeitado 
  pelos círculos acadêmicos convencionais. No entanto, suas ideias também ganharam uma base de apoio 
  leal entre pensadores alternativos e leitores leigos que apreciavam sua disposição de desafiar 
  as explicações científicas tradicionais.
</p>

<p className="text-lg text-gray-300 leading-relaxed mb-6">
  Apesar das críticas, Velikovsky continuou a desenvolver suas teorias em outros livros, como 
  <em>Ages in Chaos</em> (1952), onde sugeriu que a cronologia da história egípcia estava incorreta e 
  que havia uma sobreposição significativa com eventos bíblicos. Ele também escreveu <em>Earth in 
  Upheaval</em> (1955), que argumentava que catástrofes globais moldaram a geologia da Terra. Suas 
  teorias sobre catástrofes planetárias também foram exploradas em <em>Peoples of the Sea</em> (1977), 
  no qual ele propôs uma nova cronologia para a história do Mediterrâneo.
</p>

<p className="text-lg text-gray-300 leading-relaxed mb-6">
  Immanuel Velikovsky faleceu em Princeton, Nova Jersey, em 17 de novembro de 1979. Embora suas teorias 
  nunca tenham sido aceitas pela ciência convencional, ele desempenhou um papel importante ao questionar 
  as bases da ciência estabelecida. Seu trabalho continua a ser estudado e debatido por aqueles 
  interessados em teorias alternativas, e ele permanece uma figura polarizadora e influente no campo da 
  ciência popular. Seu legado reside na maneira como inspirou novas formas de pensar sobre a história, 
  a mitologia e o papel dos eventos cósmicos no desenvolvimento da civilização humana.
</p>

<p className="text-lg text-gray-300 leading-relaxed mb-4">
    Se você deseja se aprofundar nas teorias revolucionárias de Immanuel Velikovsky e explorar mais sobre seus artigos e contribuições para a ciência, clique no botão abaixo.
  </p>
  <Link href="/Artigos">
    <button className="bg-gradient-to-r from-blue-900 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-500 transition duration-300 ease-in-out transform hover:scale-105">
      Leia mais sobre Velikovsky
    </button>
  </Link>

        </section>

       
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center max-w-7xl mx-auto">
       
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaSun className="text-yellow-400 text-5xl mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Evento Cósmico</h3>
            <p className="text-gray-300">
              Velikovsky sugeriu que o planeta Vênus era um cometa expulso de Júpiter e que sua proximidade com a Terra
              causou catástrofes descritas nas antigas mitologias.
            </p>
          </div>
        
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
          <Link href="/Catastrofes" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition duration-300 mt-4">
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

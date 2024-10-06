import Link from 'next/link';
import { FaRocket } from 'react-icons/fa';
import Image from 'next/image';

export default function Introducao() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/nebulosa.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}
    >
      {/* Sombra de fundo para melhorar o contraste de texto */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Contêiner principal para conteúdo */}
      <div className="relative max-w-6xl mx-auto p-10 text-white space-y-16">
        
        {/* Seção do Título e Introdução */}
        <section className="text-center">
          <h1 className="text-6xl font-extrabold mb-6 text-yellow-400">
            <em>Worlds in Collision</em>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <em>Worlds in Collision</em>, publicado em 1950 por Immanuel Velikovsky, é uma obra de ciência controversa que propôs uma reinterpretação radical de eventos históricos e cosmológicos. Velikovsky, um psiquiatra com interesses profundos em mitologia, astronomia e história, utilizou textos antigos e registros astronômicos para desenvolver suas teorias catastrofistas. Ele sugeriu que o planeta Vênus, antes de assumir sua órbita atual, era um cometa que foi expelido de Júpiter e, ao passar perigosamente perto da Terra, causou uma série de eventos catastróficos que moldaram a história e mitologia de diversas civilizações antigas.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
            Velikovsky argumentou que esses eventos cósmicos deixaram traços em registros históricos, religiosos e mitológicos, com culturas ao redor do mundo descrevendo fenômenos como terremotos, pragas, tsunamis e eclipses em seus textos sagrados e tradições. Por exemplo, ele interpretou eventos descritos na Bíblia, como as pragas do Egito e a abertura do Mar Vermelho, como efeitos diretos da aproximação de Vênus à Terra. Essas teorias desafiavam diretamente a visão tradicional da astronomia, que seguia as leis de movimento de Newton e as explicações convencionais sobre a formação e evolução do sistema solar.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
            A controvérsia de <em>Worlds in Collision</em> não se limitou às suas ideias, mas também ao impacto no campo científico. Astrônomos e físicos da época reagiram com hostilidade às suas propostas, classificando-as como pseudociência. Velikovsky foi amplamente rejeitado pela comunidade acadêmica tradicional, que considerou suas ideias incompatíveis com as leis da física, especialmente no que se referia à mecânica orbital dos planetas. Carl Sagan, um dos principais críticos de Velikovsky, dedicou parte de seu trabalho a refutar as alegações apresentadas no livro.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
            No entanto, o impacto de <em>Worlds in Collision</em> não foi completamente negativo. Embora tenha sido desacreditado pela ciência convencional, o livro se tornou um sucesso de vendas e atraiu um público leigo fascinado pela ousadia de suas ideias e por sua capacidade de questionar as bases da ciência estabelecida. Velikovsky introduziu a noção de que eventos cataclísmicos podem ter desempenhado um papel crucial na história humana, um conceito que seria mais tarde explorado em teorias como o impacto de asteroides na extinção dos dinossauros. Mesmo sendo rejeitado pelos principais cientistas, ele criou um legado de debate sobre como a ciência deve tratar os mitos e a história como fontes de evidência para fenômenos naturais.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
            Outra ideia central do livro é a proposta de uma &quot;amnésia coletiva&quot; entre as civilizações antigas. Velikovsky sugeriu que os eventos catastróficos que moldaram a história da Terra foram tão traumáticos que as memórias desses acontecimentos foram reprimidas ou transformadas em mitos e lendas. Essa amnésia cultural, segundo Velikovsky, explicaria por que tantos povos antigos tinham narrativas semelhantes sobre desastres cósmicos, mas sem a consciência científica de que eram, de fato, descrições de fenômenos astronômicos.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
            Apesar de suas teorias controversas, <em>Worlds in Collision</em> continua sendo uma obra importante dentro do campo das teorias alternativas e pseudociências. Velikovsky desafiou o status quo e trouxe à tona discussões importantes sobre os limites do conhecimento científico e a validade de diferentes formas de interpretar o passado. Sua obra inspira tanto curiosidade quanto ceticismo, e seu legado é um marco na história das ideias que cruzam fronteiras entre ciência, mitologia e história.
          </p>
        </section>

        {/* Seção de Curiosidades */}
        <section className="text-left max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-300 mb-4 text-center">Curiosidades sobre o livro</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-4">
            <li>O livro foi publicado em 1950, mas foi escrito ao longo de uma década de pesquisas intensas, em que Velikovsky estudou textos antigos e dados astronômicos.</li>
            <li>Uma das ideias centrais do livro é que o planeta Vênus foi inicialmente um cometa antes de estabilizar sua órbita atual.</li>
            <li>Velikovsky usou registros de diferentes culturas, como a Bíblia e textos chineses antigos, para sugerir que esses eventos cósmicos causaram fenômenos como pragas, terremotos e mudanças climáticas.</li>
            <li>A obra foi amplamente criticada pela comunidade científica da época, especialmente pelos astrônomos, que consideraram suas ideias incompatíveis com as leis da física.</li>
          </ul>
        </section>

        {/* Seção de Imagem e Descrição */}
        <section className="text-left max-w-4xl mx-auto">
          <Image
            src="/images/velikovsky.jpg"
            alt="A imagem abstrata mostra um cometa massivo, representando Vênus, passando perigosamente perto da Terra, em meio a uma cena cósmica tumultuada. A Terra está em agitação, com terremotos, erupções vulcânicas e tempestades violentas. No fundo, o espaço está repleto de corpos celestes, como estrelas e o Sol, envoltos em um movimento dinâmico."
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Embora amplamente desacreditado pela ciência convencional, <em>Worlds in Collision</em> continua a ser um marco na pseudociência, inspirando tanto curiosidade quanto debates sobre os limites do conhecimento científico e a interpretação de mitos antigos como fatos históricos.
          </p>
        </section>

        {/* Botão com ícone de foguete */}
        <div className="text-center">
          <Link href="/Artigos" className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition duration-300">
            <FaRocket className="mr-2" />
            Leia mais artigos
          </Link>
        </div>
      </div>
    </div>
  );
}

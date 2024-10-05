"use client"; // Garantir que este componente seja renderizado no lado do cliente

import { useState } from "react";
import { useRouter } from 'next/navigation'; // Hook useRouter para redirecionamento

export default function CatastrofesPage() {
  const router = useRouter(); // Inicializa o hook useRouter

  // Estados para os cálculos
  const [massa1, setMassa1] = useState(0);
  const [massa2, setMassa2] = useState(0);
  const [distancia, setDistancia] = useState(0);
  const [forcaGravitacional, setForcaGravitacional] = useState<number | null>(null);
  const [forcaMare, setForcaMare] = useState<number | null>(null); // Novo cálculo da força de maré
  const [planetaInfo, setPlanetaInfo] = useState<string | null>(null); // Estado para mostrar o nome do planeta escolhido
  const [velikovskyFrase, setVelikovskyFrase] = useState<string | null>(null); // Estado para frase final relacionada a Velikovsky

  // Estados para o controle de visibilidade das mensagens de ajuda
  const [showHelpMassa1, setShowHelpMassa1] = useState(false); // Inicializa estado de ajuda para Massa 1
  const [showHelpMassa2, setShowHelpMassa2] = useState(false); // Inicializa estado de ajuda para Massa 2
  const [showHelpDistancia, setShowHelpDistancia] = useState(false); // Inicializa estado de ajuda para Distância

  // Constante gravitacional
  const G = 6.674 * Math.pow(10, -11);

  // Função para calcular a força gravitacional
  const calcularForcaGravitacional = () => {
    if (massa1 && massa2 && distancia) {
      const forca = (G * massa1 * massa2) / Math.pow(distancia, 2);
      setForcaGravitacional(forca);

      // Cálculo da força de maré gravitacional
      const forcaMar = (2 * G * massa1 * massa2 * 12_742_000) / Math.pow(distancia, 3); // 12.742.000 m = diâmetro da Terra
      setForcaMare(forcaMar);

      if (planetaInfo === "Valores baseados no estudo de Vênus.") {
        setVelikovskyFrase("Velikovsky sugeriu que a proximidade de Vênus com a Terra causou perturbações gravíticas, levando às catástrofes mencionadas em seu livro.");
      } else if (planetaInfo === "Valores baseados no estudo de Júpiter.") {
        setVelikovskyFrase("Segundo Velikovsky, Júpiter ejetou Vênus como um cometa, desencadeando um impacto gravitacional que influenciou eventos cataclísmicos na Terra.");
      } else {
        setVelikovskyFrase(null);
      }
    } else {
      setForcaGravitacional(null);
      setForcaMare(null);
    }
  };

  // Função para preencher os dados de planetas
  const preencherValoresPlaneta = (planeta: string) => {
    if (planeta === "Vênus") {
      setMassa1(4.867 * Math.pow(10, 24)); // Massa de Vênus em kg
      setMassa2(5.972 * Math.pow(10, 24)); // Massa da Terra em kg (comparando Vênus e Terra)
      setDistancia(4.1 * Math.pow(10, 10)); // Distância média entre Vênus e Terra em metros
      setPlanetaInfo("Valores baseados no estudo de Vênus.");
    } else if (planeta === "Júpiter") {
      setMassa1(1.898 * Math.pow(10, 27)); // Massa de Júpiter em kg
      setMassa2(5.972 * Math.pow(10, 24)); // Massa da Terra em kg (comparando Júpiter e Terra)
      setDistancia(6.29 * Math.pow(10, 11)); // Distância média entre Júpiter e Terra em metros
      setPlanetaInfo("Valores baseados no estudo de Júpiter.");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center text-center pt-20">
      <article>
        <h1 className="mb-4" style={{ fontSize: '50px', fontWeight: 'bold' }}>
        Cálculos Gravitacionais e a Teoria de Velikovsky: Influência de Vênus e Júpiter nas Catástrofes
        </h1>
        <section id="introducao">
          <p className="mb-4" style={{ fontSize: '25px' }}>
            Nesta página, estamos explorando dois cálculos principais que podem nos ajudar a entender 
            como eventos catastróficos propostos por Velikovsky poderiam ter ocorrido:
          </p>
          <ul className="text-lg">
            <li><strong>Força Gravitacional:</strong> este cálculo mostra como a gravidade de corpos como Vênus e Júpiter poderia ter influenciado a Terra.</li>
            <li><strong>Força de Maré Gravitacional:</strong> este cálculo explica como a proximidade de corpos massivos poderia gerar forças desiguais sobre a Terra, causando deformações ou até perturbações na rotação, algo que Velikovsky teorizou.</li>
          </ul>
        </section>
      </article>

      {/* Exibindo as expressões matemáticas para os dois cálculos */}
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Expressões Matemáticas</h2>
        <div className="text-lg">
          <p><strong>Força Gravitacional:</strong></p>
          <div style={{ fontSize: "20px", margin: "10px 0" }}>
            <span>F = </span>
            <span>
              ( G * m<sub>1</sub> * m<sub>2</sub> ) / r<sup>2</sup>
            </span>
          </div>
          <p className="mb-4">Onde: G é a constante gravitacional (6.674 × 10⁻¹¹ N·m²/kg²), m₁ e m₂ são as massas dos corpos e r é a distância entre eles.</p>

          <p><strong>Força de Maré Gravitacional:</strong></p>
          <div style={{ fontSize: "20px", margin: "10px 0" }}>
            <span>F<sub>maré</sub> = </span>
            <span>
              2 * ( G * m<sub>1</sub> * m<sub>2</sub> * d ) / r<sup>3</sup>
            </span>
          </div>
          <p>Onde: G é a constante gravitacional, m₁ e m₂ são as massas dos corpos, d é o diâmetro do corpo afetado (por exemplo, o diâmetro da Terra), e r é a distância entre eles.</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl mb-4">Cálculo de Força Gravitacional e de Maré</h2>

        <div className="mb-4">
          <label className="block mb-2">Massa 1 (kg):
            <button
              className="ml-2 text-blue-500"
              onClick={() => setShowHelpMassa1(!showHelpMassa1)}
              aria-label="Ajuda sobre Massa 1"
            >
              ?
            </button>
          </label>
          {showHelpMassa1 && (
            <p className="text-sm text-gray-500 mb-2">
              Massa é a quantidade de matéria de um objeto. Quanto maior a massa, maior a força gravitacional que ele exerce Ex: 5.972e+24 é a massa da Terra.
            </p>
          )}
          <input
            type="number"
            value={massa1}
            onChange={(e) => setMassa1(parseFloat(e.target.value))}
            className="border rounded p-2 text-black" // Texto preto
            style={{ color: "black" }}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Massa 2 (kg):
            <button
              className="ml-2 text-blue-500"
              onClick={() => setShowHelpMassa2(!showHelpMassa2)}
              aria-label="Ajuda sobre Massa 2"
            >
              ?
            </button>
          </label>
          {showHelpMassa2 && (
            <p className="text-sm text-gray-500 mb-2">
              A segunda massa é outro objeto que interage gravitacionalmente com o primeiro. Pode ser um planeta, uma lua ou qualquer objeto Ex: 7.348e+22 é a massa da Lua.
            </p>
          )}
          <input
            type="number"
            value={massa2}
            onChange={(e) => setMassa2(parseFloat(e.target.value))}
            className="border rounded p-2 text-black" // Texto preto
            style={{ color: "black" }}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Distância (m):
            <button
              className="ml-2 text-blue-500"
              onClick={() => setShowHelpDistancia(!showHelpDistancia)}
              aria-label="Ajuda sobre Distância"
            >
              ?
            </button>
          </label>
          {showHelpDistancia && (
            <p className="text-sm text-gray-500 mb-2">
              A distância é o espaço entre os dois objetos. Quanto maior a distância, menor a força gravitacional entre eles Ex: 384400000 é a distância em metros dos dois corpos.
            </p>
          )}
          <input
            type="number"
            value={distancia}
            onChange={(e) => setDistancia(parseFloat(e.target.value))}
            className="border rounded p-2 text-black" // Texto preto
            style={{ color: "black" }}
          />
        </div>

        <div className="flex flex-col items-center space-y-4"> {/* Alinhar os botões corretamente */}
          <div className="flex space-x-4"> {/* Agrupar os botões Vênus e Júpiter */}
            <button
              onClick={() => preencherValoresPlaneta("Vênus")}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Usar valores de Vênus
            </button>
            <button
              onClick={() => preencherValoresPlaneta("Júpiter")}
              className="bg-orange-500 text-white py-2 px-4 rounded"
            >
              Usar valores de Júpiter
            </button>
          </div>

          <button
            onClick={calcularForcaGravitacional}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Calcular Força Gravitacional e de Maré
          </button>
        </div>

        {planetaInfo && (
          <p className="mt-4 text-sm text-gray-700">{planetaInfo}</p>
        )}

        {forcaGravitacional !== null && (
          <div className="mt-4">
            <p className="text-lg">Força Gravitacional: {forcaGravitacional.toExponential(2)} N</p>
          </div>
        )}

        {forcaMare !== null && (
          <div className="mt-4">
            <p className="text-lg">Força de Maré: {forcaMare.toExponential(2)} N</p>
          </div>
        )}

        {velikovskyFrase && (
          <div className="mt-4">
            <p className="text-lg text-white">{velikovskyFrase}</p> {/* Mensagem final em branco */}
          </div>
        )}
      </section>

      <a 
        href="#" 
        className="mt-8 text-lg font-bold text-blue-500 underline" 
        onClick={(e) => {
          e.preventDefault();
          router.push('/Linhadotempo'); // Redireciona para o componente da linha do tempo
        }}
        aria-label="Confira os eventos na linha do tempo"
      >
        Confira na linha do tempo abaixo os eventos que aconteceram relacionados a essas teorias
      </a>
    </main>
  );
}



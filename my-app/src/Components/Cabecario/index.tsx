import Menu from "../Menu";

export default function Cabecalho() {
  return (
    <header className="relative bg-gradient-to-b from-black via-gray-900 to-black p-6 shadow-lg border-b-2 w-full">
      {/* Contêiner centralizado para texto e menu */}
      <div className="flex flex-col items-center justify-center h-48">
        <div className="text-white text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider animate-pulse">
            Exploração Cósmica: Velikovsky e os Segredos do Universo
          </h1>
        </div>
      </div>

      {/* Centraliza o Menu */}
      <div className="flex justify-center mt-4">
        <Menu />
      </div>

      {/* Animação de estrelas no fundo */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
    </header>
  );
}

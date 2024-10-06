import Menu from "../Menu";

export default function Cabecalho() {
  return (
    <header className="relative bg-gradient-to-b from-black via-gray-900 to-black p-6 shadow-lg border-b-2 w-full h 12">
      <div className="flex flex-col items-center justify-between mb-6 lg:flex-row lg:mb-8">
        <div className="text-white text-center lg:text-left w-full"style={{ marginLeft: '1.8cm'}}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-wider animate-pulse">
  Exploração Cósmica: Velikovsky e os Segredos do Universo
</h1>


        </div>
      </div>

      <Menu />

      {/* Animação de estrelas no fundo */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
    </header>
  );
}

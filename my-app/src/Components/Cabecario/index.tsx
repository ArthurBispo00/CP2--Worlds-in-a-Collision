import Menu from "../Menu";

export default function Cabecalho() {
  return (
    <header className="bg-blue-500 p-4">
      <h1 className="text-white text-2xl font-bold">Cabeçalho</h1>
      <img
          src="/path/to/your/image.jpg"
          alt="Imagem relacionada ao tema"
          className="w-full h-auto rounded-lg shadow-lg mb-6"
        />
      <Menu />
    </header>
  );
}

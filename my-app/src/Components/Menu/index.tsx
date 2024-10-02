import Link from "next/link";

export default function Menu() {
  return (
<<<<<<< HEAD
    <nav className="bg-gray-1000 p-4">
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-around space-x-2">
          <li>
            <Link href="/" className="text-white hover:text-blue-400 text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Inicio" className="text-white hover:text-blue-400 text-lg">
              Worlds
            </Link>
          </li>
          <li>
            <Link href="/Artigos" className="text-white hover:text-blue-400 text-lg">
              Artigos
            </Link>
          </li>
=======
    <nav className="menu">
        <ul>
            <li> <Link href="/">Home</Link> </li>
           <li> <Link href="Artigos">Artigos</Link> </li>
           <li> <Link href="Catastrofes">As cátastrofes de Velikovsky</Link> </li>

            
            
>>>>>>> ArthurBispo
        </ul>
      </div>
    </nav>
  );
}

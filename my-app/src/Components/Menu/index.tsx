import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-around space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-white hover:text-blue-400 text-lg">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Inicio" legacyBehavior>
              <a className="text-white hover:text-blue-400 text-lg">Worlds</a>
            </Link>
          </li>
          <li>
            <Link href="/Artigos" legacyBehavior>
              <a className="text-white hover:text-blue-400 text-lg">Artigos</a>
            </Link>
          </li>
          <li>
            <Link href="/Catastrofes" legacyBehavior>
              <a className="text-white hover:text-blue-400 text-lg">As Catástrofes de Velikovsky</a>
            </Link>
            
          </li>
          <li>
            <Link href="/Linhadotempo" legacyBehavior>
              <a className="text-white hover:text-blue-400 text-lg">Linha do Tempo de Velikovsky</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

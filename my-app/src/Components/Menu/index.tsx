import Link from "next/link";

export default function Menu() {

  

  return (
    <nav className="menu">
        <ul>
            <li> <Link href="/">Home</Link> </li>
           <li> <Link href="Artigos">Artigos</Link> </li>
            
            
        </ul>
    </nav>
  )
}
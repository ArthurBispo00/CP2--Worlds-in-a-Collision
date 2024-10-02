import Link from "next/link";

export default function Menu() {

  

  return (
    <nav className="menu">
        <ul>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/oficinas">Oficinas</Link> </li>
            <li> <Link href="/Login">Login</Link> </li>
            <li> <Link href="/sobrenos">sobrenos</Link> </li>
            <li> <Link href="/Pokemon">Pokemos</Link> </li>
            
        </ul>
    </nav>
  )
}

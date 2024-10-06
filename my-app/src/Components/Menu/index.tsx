"use client"; // Indica que é um Client Component

import { useState, useEffect } from 'react';
import Link from "next/link";
import { FaMeteor, FaGlobe, FaBook, FaBolt, FaCalendarAlt, FaCalculator, FaSun, FaBars, FaTimes } from 'react-icons/fa';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Função para controlar quando o menu é aberto ou fechado
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hook para verificar se a tela está abaixo de 900px e ajustar o comportamento
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsOpen(false); // Fecha o menu automaticamente se a tela for maior
      }
    };

    window.addEventListener('resize', handleResize);

    // Chama imediatamente ao carregar a página
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
<nav className="bg-gradient-to-r from-black via-blue-900 to-black p-6 shadow-lg border-b-2 border-yellow-400" style={{ width: '110%', marginLeft: '-0.5cm' }}>

     
      <div className="mx-auto flex justify-between items-center w-full">
        {isMobile && isOpen && (
          <div className="text-white text-lg font-bold">
            Exploração Cósmica
          </div>
        )}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul className={`lg:flex lg:items-center lg:space-x-8 ${isOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0 w-full`}>
          <li className="flex items-center space-x-2">
            <FaMeteor className="text-yellow-400 animate-pulse" />
            <Link href="/" className="text-white hover:text-yellow-400 text-lg transition duration-300 ease-in-out">
              Início
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaGlobe className="text-blue-400 animate-spin-slow" />
            <Link href="/Inicio" className="text-white hover:text-yellow-400 text-lg transition duration-300 ease-in-out">
              Mundos de Velikovsky
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaBook className="text-red-400" />
            <Link href="/Artigos" className="text-white hover:text-yellow-400 text-lg transition duration-300 ease-in-out">
              Artigos
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaBolt className="text-yellow-400 animate-ping" />
            <Link href="/Catastrofes" className="text-white hover:text-yellow-400 text-lg transition duration-300 ease-in-out">
              Catástrofes de Velikovsky
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaCalendarAlt className="text-white" />
            <Link href="/Linhadotempo" className="text-white hover:text-yellow-400 text-lg transition duration-300 ease-in-out">
              Linha do Tempo
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaCalculator className="text-green-400" />
            <Link href="/Calculos" className="text-white hover:text-yellow-400 text-lg transition duration-300 ease-in-out">
              Cálculos Científicos
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaSun className="text-yellow-300 animate-spin-slow" />
            <Link href="/SistemaSolar" className="text-white hover:text-yellow-400 text-lg transition duration-300 ease-in-out">
              Sistema Solar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

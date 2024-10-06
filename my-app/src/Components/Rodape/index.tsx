export default function Rodape() {
  return (
    <footer className="bg-gray-800 p-4 text-white w-full mt-auto">
      <nav
        aria-label="Links sobre Velikovsky"
        className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-2"
      >
        <a
          href="https://pt.wikipedia.org/wiki/Immanuel_Velikovsky"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-center"
        >
          Sobre Velikovsky
        </a>
        <a
          href="https://www.amazon.com.br/Livros-Immanuel-Velikovsky/s?rh=n%3A6740748011%2Cp_27%3AImmanuel+Velikovsky"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-center"
        >
          Livros
        </a>
        <a
          href="https://aminoapps.com/c/teorias-da-conspiracao-5631706/page/blog/as-teorias-de-immanuel-velikovsky/6wYW_mVSzu6mDMd4RjJJqMlkRr4E7gZzZ2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-center"
        >
          Teorias
        </a>
        <a
          href="https://ecoevol.ufg.br/adrimelo/filo/Rigler_e_Peters-Cap3-Ciencia_Normal_e_Pseudociencia.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-center"
        >
          Contribuições Científicas (veja a página 6)
        </a>
      </nav>

      <p className="text-center text-sm mt-4">
        © 2024 MetamindSolutions. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default function Rodape() {
  return (
    <footer className="bg-gray-800 p-4 text-white w-full mt-auto">
      <div className="flex justify-center space-x-4 mb-2">
        {/* Links para páginas sobre Velikovsky e suas obras */}
        <a
          href="https://pt.wikipedia.org/wiki/Immanuel_Velikovsky"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Sobre Velikovsky
        </a>
        <a
          href="https://www.amazon.com.br/Livros-Immanuel-Velikovsky/s?rh=n%3A6740748011%2Cp_27%3AImmanuel+Velikovsky"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Livros
        </a>
        <a
          href="https://aminoapps.com/c/teorias-da-conspiracao-5631706/page/blog/as-teorias-de-immanuel-velikovsky/6wYW_mVSzu6mDMd4RjJJqMlkRr4E7gZzZ2"
           target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Teorias
        </a>
        <a
        href="https://ecoevol.ufg.br/adrimelo/filo/Rigler_e_Peters-Cap3-Ciencia_Normal_e_Pseudociencia.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        >
        Contribuições Científicas (veja a página 6)
        </a>

      </div>

      <p className="text-center text-sm">
        © 2024 MetamindSolutions. Todos os direitos reservados.
      </p>
    </footer>
  );
}

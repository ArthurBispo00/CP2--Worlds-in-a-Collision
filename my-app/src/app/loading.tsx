const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black relative">
      {/* Fundo de estrelas */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="bg-gradient-to-b from-black via-gray-800 to-black h-full w-full opacity-80"></div>
        <div className="absolute inset-0 bg-transparent grid grid-cols-12 gap-2">
          {/* Estrelas simuladas */}
          {Array.from({ length: 120 }).map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 bg-white rounded-full opacity-${Math.floor(
                Math.random() * 4 + 6
              )} animate-pulse`}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Texto de carregamento */}
      <div className="relative z-10 text-white text-2xl">
        <p>Carregando...</p>
      </div>
    </div>
  );
};

export default Loading;

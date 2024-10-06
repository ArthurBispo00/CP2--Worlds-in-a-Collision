import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-5">
      <h1 className="text-3xl mb-5">404: Page Not Found</h1>
      <p className="text-xl mb-7">
        O conteúdo que você está tentando acessar não está disponível!
      </p>
      <Image 
        src="/images/notfound404.jpg"  // Certifique-se de que sua imagem esteja na pasta public/images
        alt="Rocket Broken"
        width={600}
        height={600}
        priority={true}
      />
    </div>
  );
}

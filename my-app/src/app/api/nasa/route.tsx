// app/api/nasa/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  // Array com URLs de várias imagens da NASA
  const imageUrls: string[] = [
    'https://photojournal.jpl.nasa.gov/jpeg/PIA00257.jpg', // Exemplo: Imagem de Júpiter
    'https://photojournal.jpl.nasa.gov/jpeg/PIA02982.jpg', // Exemplo: Imagem de Marte
    'https://photojournal.jpl.nasa.gov/jpeg/PIA00123.jpg', // Exemplo: Imagem de Vênus
    'https://photojournal.jpl.nasa.gov/jpeg/PIA01988.jpg', // Exemplo: Imagem de Saturno
    'https://photojournal.jpl.nasa.gov/jpeg/PIA00331.jpg'  // Exemplo: Imagem de Mercúrio
  ];

  // Retorna as URLs das imagens no formato JSON
  return NextResponse.json({ images: imageUrls });
}


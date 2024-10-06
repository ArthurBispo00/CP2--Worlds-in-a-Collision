import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  // URLs de várias imagens da NASA
  const imageUrls: string[] = [
    'https://photojournal.jpl.nasa.gov/jpeg/PIA00257.jpg', // Júpiter
    'https://photojournal.jpl.nasa.gov/jpeg/PIA02982.jpg', // Marte
    'https://photojournal.jpl.nasa.gov/jpeg/PIA00123.jpg', // Vênus
    'https://photojournal.jpl.nasa.gov/jpeg/PIA01988.jpg', // Saturno
    'https://photojournal.jpl.nasa.gov/jpeg/PIA00331.jpg'  // Mercúrio
  ];

  // Retorna as URLs das imagens em formato JSON
  return NextResponse.json({ images: imageUrls });
}

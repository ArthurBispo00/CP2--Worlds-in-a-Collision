// app/api/nasa/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const imageUrl: string = 'https://photojournal.jpl.nasa.gov/jpeg/PIA00257.jpg';

  // Retorna a URL da imagem no formato JSON
  return NextResponse.json({ url: imageUrl });
}

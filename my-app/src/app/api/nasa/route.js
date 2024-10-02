// app/api/nasa/route.js
export async function GET(req) {
    const API_URL = 'https://api.nasa.gov/planetary/apod'; // Astronomy Picture of the Day (APOD)
    const API_KEY = '6roxAfQ0dexzS8p2tH3Q2UV1b8nztQfQt61PfQGW'; // Substitua por sua chave de API da NASA
  
    try {
      const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Erro ao buscar imagens da NASA' }), { status: 500 });
    }
  }
  
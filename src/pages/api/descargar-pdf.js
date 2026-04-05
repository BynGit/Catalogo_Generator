// src/pages/api/download.js
export async function GET({ url }) {
  const fileUrl = url.searchParams.get('url');
  const fileName = url.searchParams.get('name') || 'catalogo.pdf';

  if (!fileUrl) {
    return new Response('URL faltante', { status: 400 });
  }

  try {
    const response = await fetch(fileUrl);
    
    if (!response.ok) throw new Error('Error al obtener el archivo');

    const arrayBuffer = await response.arrayBuffer();

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}
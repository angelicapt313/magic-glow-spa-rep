export async function getUploadUrl(fileName) {
  const response = await fetch('http://localhost:7071/api/generate-upload-url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fileName }),
  });

  if (!response.ok) throw new Error('No se pudo obtener la URL de carga');

  const data = await response.json();
  return data.uploadUrl;
}

export async function uploadFileToBlob(uploadUrl, file) {
  const response = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'x-ms-blob-type': 'BlockBlob' },
    body: file,
  });

  if (!response.ok) throw new Error('Error al subir archivo al Blob');
}

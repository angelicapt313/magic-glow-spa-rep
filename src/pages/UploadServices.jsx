import React, { useState } from 'react';
import { getUploadUrl, uploadFileToBlob } from '../services/uploadServiceImage';

export function ImageUploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Selecciona un archivo");

    try {
      const uploadUrl = await getUploadUrl(file.name);
      await uploadFileToBlob(uploadUrl, file);
      alert('Imagen subida correctamente');
    } catch (err) {
      console.error(err);
      alert('Error al subir imagen');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir imagen</button>
    </div>
  );
}
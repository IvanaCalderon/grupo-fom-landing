import React from 'react';
import { Download } from 'lucide-react';

const PDFDownloadButton = () => {
  const handleDownload = () => {
    // Replace this URL with your actual PDF file URL
    const pdfUrl = 'GRUPO-FOM.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'grupo-fom.pdf'); // Set desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center pt-9">
        <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
        <Download size={20} />
        <span>Más sobre Nosotros</span>
        </button>
    </div>
  );
};

export default PDFDownloadButton;
import React,{useState} from 'react';
import PDFFileInput from './PDFFileInput';
import BrailleConverter from './BrailleConverter';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';


const pdfjsVersion = '2.11.338';
GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;



export default function UIforconversion() {


    const [pdfText, setPdfText] = useState('');

    const handleFileChange = (file) => {
      // Use pdfjs-dist to extract text from the PDF file
      const reader = new FileReader();
  
      reader.onload = async (e) => {
        const typedArray = new Uint8Array(e.target.result);
  
        try {
          const pdf = await getDocument({ data: typedArray }).promise;
          const page = await pdf.getPage(1);
          const textContent = await page.getTextContent();
          const text = textContent.items.map((item) => item.str).join(' ');
          setPdfText(text);
        } catch (error) {
          console.error('Error loading PDF:', error);
        }
      };
  
      reader.readAsArrayBuffer(file);
    };

  return (
    <div>
    <PDFFileInput onFileChange={handleFileChange} />
    <BrailleConverter text={pdfText} />
  </div>
  )
}

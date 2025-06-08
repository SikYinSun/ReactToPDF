import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

// This function generates a PDF from a given HTML element.
// It captures the content of the element as an image and adds it to a PDF document.
// The PDF is then saved with the specified filename or defaults to 'form.pdf'.
// The function returns a Promise that resolves when the PDF is successfully generated and saved.
// The image is resized to fit within the A4 page dimensions while maintaining its aspect ratio.
// The jsPDF library is used to create the PDF document, and html-to-image is used to convert the HTML element to an image.

export const generatePDF = async (element: HTMLElement, filename: string = 'form.pdf') => {
  const dataUrl = await toPng(element, { cacheBust: true });

  const pdf = new jsPDF({
    unit: 'px',
    format: 'a4',
  });

  const img = new Image();
  img.src = dataUrl;

  return new Promise<void>((resolve) => {
    img.onload = () => {
      const ratio = Math.min(
        pdf.internal.pageSize.getWidth() / img.width,
        pdf.internal.pageSize.getHeight() / img.height
      );

      const width = img.width * ratio;
      const height = img.height * ratio;

      pdf.addImage(dataUrl, 'PNG', 0, 0, width, height);
      pdf.save(filename);
      resolve();
    };
  });
};

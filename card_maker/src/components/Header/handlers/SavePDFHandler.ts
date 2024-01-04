import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function SavePDFHandler(canvasId: string) {
    const canvasDiv = document.getElementById(canvasId);
    html2canvas(canvasDiv as HTMLElement, {
        allowTaint: true,
        useCORS: true,
    }).then((canvas) => {
        const dataImage = canvas.toDataURL("image/jpeg");
        let width = canvas.width;
        let height = canvas.height;
        let pdf;
        if (width > height) {
            // eslint-disable-next-line new-cap
            pdf = new jsPDF("l", "px", [width, height]);
        } else {
            // eslint-disable-next-line new-cap
            pdf = new jsPDF("p", "px", [height, width]);
        }
        width = pdf.internal.pageSize.getWidth();
        height = pdf.internal.pageSize.getHeight();
        pdf.addImage(dataImage, "JPEG", 0, 0, width, height);
        pdf.save("card.pdf");
    });
}

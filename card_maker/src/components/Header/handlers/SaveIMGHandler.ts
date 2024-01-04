import html2canvas from "html2canvas";

export default function SaveIMGHandler(canvasId: string) {
    const canvasDiv = document.getElementById(canvasId);
    html2canvas(canvasDiv as HTMLElement, {
        allowTaint: true,
        useCORS: true,
    }).then((canvas) => {
        const dataURL = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "card.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

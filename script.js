function downloadFile(fileName) {
    const link = document.createElement("a");
    link.href = "downloads/" + fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

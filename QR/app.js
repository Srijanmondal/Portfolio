function generateQR() {
    let input = document.getElementById("data").value;
    let qr = document.getElementById("qrcode");
    qr.innerHTML = ""; // Clear old QR

    if (input.trim() === "") {
        qr.innerHTML = "Please input some text!";
        return;
    }

    new QRCode(qr, {
        text: input,
        width: 160,
        height: 160
    });
}

// Download QR as PNG
document.getElementById("dlnd").addEventListener("click", function () {
    let qrCanvas = document.querySelector("#qrcode canvas");
    if (!qrCanvas) {
        alert("Please generate a QR code first!");
        return;
    }

    let link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrCanvas.toDataURL("image/png");
    link.click();
});

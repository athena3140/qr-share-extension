const canvas = document.getElementById("canvas");
const input = document.getElementById("input");
const copyButton = document.getElementById("copy");
const downloadButton = document.getElementById("download");
const close = document.getElementById("close");

const PADDING = 10;
const QR_SIZE = 200;
const CANVAS_SIZE = QR_SIZE + 2 * PADDING;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	const url = tabs[0].url;
	input.value = url;
	updateQr(url);
});

input.addEventListener("input", () => {
	let text = document.getElementById("input").value;
	updateQr(text);
});

const updateQr = (text) => {
	const ctx = canvas.getContext("2d");

	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

	const qrCanvas = document.createElement("canvas");
	qrCanvas.width = QR_SIZE;
	qrCanvas.height = QR_SIZE;

	if (text) {
		new QRious({
			element: qrCanvas,
			value: text,
			size: QR_SIZE,
		});

		ctx.drawImage(qrCanvas, PADDING, PADDING);
	}
};

copyButton.addEventListener("click", async () => {
	canvas.toBlob(async (blob) => {
		try {
			await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
		} catch (error) {
			console.error("Failed to copy QR Code:", error);
		}
	});
});

downloadButton.addEventListener("click", () => {
	const link = document.createElement("a");
	link.href = canvas.toDataURL("image/png");
	link.download = "qrcode.png";
	link.click();
});

close.addEventListener("click", () => {
	window.close();
});

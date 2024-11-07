# QR Code Chrome Extension

This Chrome extension generates and displays a QR code of the current tab's URL. This can be useful for quickly sharing a URL with
a mobile device.

## Installation Guide

Follow the steps below to install and use the extension in your local Chrome browser.

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/athena3140/qr-share-extension.git
```

### 2. Open Chrome Extensions Page

In your Chrome browser:

1. Navigate to `chrome://extensions/`.
2. Enable **Developer mode** (toggle it on in the top right corner).

### 3. Load the Extension

1. Click on **Load unpacked**.
2. Select the folder where you cloned this repository (containing `manifest.json`, `index.html`, `popup.js`, etc.).

### 4. Using the Extension

1. Pin the extension by clicking on the puzzle icon and selecting your QR Code extension.
2. Open any website, then click the extension icon to generate a QR code of the current URL.

### Files Included

-    `manifest.json`: Defines the extension settings and permissions.
-    `index.html`: The popup interface for the extension.
-    `popup.js`: Main JavaScript file handling QR code generation.
-    `qrious.js`: A library for generating QR codes.

### Contributing

Feel free to contribute by opening issues or pull requests. For any bugs or feature requests, please check the Issues tab on this
GitHub repository.

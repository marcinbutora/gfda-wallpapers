# 🌟 GFDA Wallpaper Downloader 🌟

Welcome to the **GFDA Wallpaper Downloader** project! This script downloads a list of wallpapers from specified URLs and saves them to your local machine.

## 🚀 Features

- 📥 Automatically downloads wallpapers from a list of URLs.
- 📂 Creates a `wallpapers` directory if it doesn't exist.
- 📊 Provides a summary of the total number of files downloaded and their combined size.
- 🎨 Colorful console logs to indicate the progress and status of downloads.

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd wallpapers
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## 🛠️ Usage

1. Ensure you have a `linksList.js` file that exports an array of URLs (`LINKS_LIST`).
2. Run the script:
   ```sh
   node index.js
   ```

## 📋 Example `linksList.js`

```javascript
export const LINKS_LIST = [
  "https://example.com/wallpaper1.jpg",
  "https://example.com/wallpaper2.jpg",
  // Add more URLs here
];
```

## 📈 Output

- **Starting download:** Indicates the beginning of a download.
- **Completed download:** Indicates the successful completion of a download.
- **Error downloading:** Indicates an error occurred during the download.
- **Summary:** Shows the total number of files downloaded and their combined size.

## 📜 License

This project is licensed under the MIT License.

Enjoy your new wallpapers! 🎉

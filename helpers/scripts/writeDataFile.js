// Trong file helper/writeDataFile.js
const fs = require("fs").promises;

async function writeDataFile(filePath, dataObject) {
  try {
    await fs.writeFile(filePath, JSON.stringify(dataObject));
    console.log("Data has been updated.");
  } catch (err) {
    console.log("Error writing file:", err);
  }
}

module.exports = writeDataFile;

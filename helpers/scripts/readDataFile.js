// Trong file helper/readDataFile.js
const fs = require("fs").promises;

async function readDataFile(filePath) {
  try {
    const jsonString = await fs.readFile(filePath, "utf8");
    return JSON.parse(jsonString);
  } catch (err) {
    console.log("Error reading file:", err);
    throw err;
  }
}

module.exports = readDataFile;

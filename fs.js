const fs = require("fs");

// Path to the text file
const filePath = "./src/text.txt";

// Read the content of the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading the file:", err);
    return;
  }
  // Log the content of the file to the console
  console.log("File content:", data);
});

const content = "Hello, this is some text written to the output file!";

// Path to the new file
const filePath1 = "./src/text1.txt";

// Write content to the new file (create if doesn't exist)
fs.writeFile(filePath1, content, "utf8", (err) => {
  if (err) {
    console.log("Error writing to the file:", err);
    return;
  }
  console.log("File created and content written successfully!");

  // Now read the content to verify
  fs.readFile(filePath1, "utf8", (readErr, data) => {
    if (readErr) {
      console.log("Error reading the file:", readErr);
      return;
    }
    console.log("File content:", data); // Verify the content by logging it
  });
});

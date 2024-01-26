import fs from "fs";

const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `this is what we know about avocado ${textIn}`;
fs.writeFileSync("./starter/txt/output.txt", textOut);
console.log("file was written");

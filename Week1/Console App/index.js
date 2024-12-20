"use strict";
const readline = require("readline");
const fs = require("fs").promises;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter the code: ", async (answer) => {
    try {
        const dataString = await fs.readFile("./countryData.json", "utf8"); // Read the file directly
        if (dataString && dataString.length > 0) {
            const data = JSON.parse(dataString);
            const countryIndex = data.findIndex((country) => country.code === answer);
            if (countryIndex != -1) {
                console.log(`The Country for code ${answer} is ${data[countryIndex].name}`);
            }
            else {
                console.log("Invalid Code");
            }
        }
        else {
            console.log("Sorry, No data in countryData.json");
        }
    }
    catch (err) {
        console.error("Error reading the file:", err);
    }
    rl.close();
});

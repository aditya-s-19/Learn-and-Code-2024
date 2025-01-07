"use strict";
const readline = require("readline");
const fs = require("fs").promises;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
class CountryWithNeighbours {
    name;
    code;
    neighbours;
    constructor(name, code, neighbours) {
        this.name = name;
        this.code = code;
        this.neighbours = neighbours;
    }
    getName() {
        return this.name;
    }
    getCode() {
        return this.code;
    }
    getNeighbours() {
        return this.neighbours;
    }
}
rl.question("Enter the code: ", async (answer) => {
    try {
        const countryDataString = await fs.readFile("./public/countries.json", "utf8"); // Read the file directly
        const neighborsDataString = await fs.readFile("./public/neighbors.json", "utf8"); // Read the file directly
        if (countryDataString && countryDataString.length > 0 && neighborsDataString && neighborsDataString.length > 0) {
            const countriesWithCode = JSON.parse(countryDataString);
            const neighborsCodenames = JSON.parse(neighborsDataString);
            const countries = [];
            for (let i = 0; i < countriesWithCode.length; i++) {
                let country = countriesWithCode[i];
                // console.log(neighborsCodenames);
                let countryNeighborsCodenames = neighborsCodenames[country.code];
                let neigbours = [];
                if (countryNeighborsCodenames) {
                    countryNeighborsCodenames.neighbours.map((neighbourCode) => {
                        let neigbour = countriesWithCode.find((country) => country.code === neighbourCode);
                        neigbour && neigbours.push(neigbour);
                    });
                }
                let newCountry = new CountryWithNeighbours(country.name, country.code, neigbours);
                countries.push(newCountry);
            }
            const countryIndex = countries.findIndex((country) => country.getCode() === answer);
            if (countryIndex != -1) {
                console.log(`The Country for code ${answer} is ${countries[countryIndex].getName()}`);
                if (countries[countryIndex].getNeighbours().length > 0) {
                    let neighboursData = countries[countryIndex].getNeighbours();
                    let neigboursNames = neighboursData[0].name;
                    for (let i = 1; i < neighboursData.length; i++)
                        neigboursNames += `, ${neighboursData[i].name}`;
                    console.log(`And its neighbours are: ${neigboursNames}`);
                }
                else
                    console.log(`This country seems to have no neighbours`);
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

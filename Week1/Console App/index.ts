const readline = require("readline");
const fs = require("fs").promises;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface Country {
  name: string;
  code: string;
}

interface Neighbors {
  [key: string]: {
    id: string;
    neighbours: string[];
  };
}

class CountryWithNeighbours {
  private name: string;
  private code: string;
  private neighbours: { name: string; code: string }[];

  constructor(name: string, code: string, neighbours: Country[]) {
    this.name = name;
    this.code = code;
    this.neighbours = neighbours;
  }

  public getName() {
    return this.name;
  }

  public getCode() {
    return this.code;
  }

  public getNeighbours() {
    return this.neighbours;
  }
}

rl.question("Enter the code: ", async (answer: string) => {
  try {
    const countryDataString = await fs.readFile("./public/countries.json", "utf8"); // Read the file directly
    const neighborsDataString = await fs.readFile("./public/neighbors.json", "utf8"); // Read the file directly
    if (countryDataString && countryDataString.length > 0 && neighborsDataString && neighborsDataString.length > 0) {
      const countriesWithCode: Country[] = JSON.parse(countryDataString);
      const neighborsCodenames: Neighbors = JSON.parse(neighborsDataString);
      const countries: CountryWithNeighbours[] = [];
      for (let i = 0; i < countriesWithCode.length; i++) {
        let country = countriesWithCode[i];
        // console.log(neighborsCodenames);
        let countryNeighborsCodenames = neighborsCodenames[country.code];
        let neigbours: Country[] = [];
        if (countryNeighborsCodenames) {
          countryNeighborsCodenames.neighbours.map((neighbourCode) => {
            let neigbour: Country | undefined = countriesWithCode.find((country) => country.code === neighbourCode);
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
          let neigboursNames: string = neighboursData[0].name;
          for (let i = 1; i < neighboursData.length; i++) neigboursNames += `, ${neighboursData[i].name}`;
          console.log(`And its neighbours are: ${neigboursNames}`);
        } else console.log(`This country seems to have no neighbours`);
      } else {
        console.log("Invalid Code");
      }
    } else {
      console.log("Sorry, No data in countryData.json");
    }
  } catch (err) {
    console.error("Error reading the file:", err);
  }
  rl.close();
});

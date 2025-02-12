import { config } from "dotenv";
import Tumblr from "./Classes/Tumblr";
import PostFetcher from "./Classes/PostFetcher";
import PostFilterer from "./Classes/PostFilterer";
import { FilteredData } from "./Interfaces";
const readline = require("readline");

const readCommandLineInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
config();

const tumblr = new Tumblr();
const postFetcher = new PostFetcher();
const postFilterer = new PostFilterer();
tumblr.registerBehavior("fetch", postFetcher);
tumblr.registerBehavior("filter", postFilterer);

function showResultData(filteredData: FilteredData) {
  console.log("Title: ", filteredData.title);
  console.log("Description: ", filteredData.description);
  console.log("Name: ", filteredData.name);
  console.log("No of posts: ", filteredData.posts.length);

  for (let i = 0; i < filteredData.posts.length; i++) {
    let keys = Object.keys(filteredData.posts[i]);
    keys.forEach((value) => {
      if (value.includes("photo-url")) console.log(filteredData.posts[i][value]);
    });
  }
}

async function handleTumblr(blogName: string, postRange: string): Promise<void> {
  if (postRange && blogName) {
    const [start, end] = postRange.split("-").map(Number);
    if (!start || !end) {
      console.log("Invalid input, try again");
      readCommandLineInput.close();
      return;
    }
    const response = await tumblr.behaviors.fetch.execute(blogName, start, end - start + 1);
    const responseText = await response.text();
    const filteredData = await tumblr.behaviors.filter.execute(responseText);
    !!filteredData && showResultData(filteredData);
  }
  readCommandLineInput.close();
}

async function main() {
  let blogName: string | null = null;
  let postRange: string | null = null;
  readCommandLineInput.question("Enter Name: ", async (answer: string) => {
    if (answer.length) {
      blogName = answer;
      readCommandLineInput.question("Enter Post Range: ", async (answer: string) => {
        if (answer.length) {
          postRange = answer;
        }
        handleTumblr(blogName, postRange);
      });
    } else {
      readCommandLineInput.close();
    }
  });
}

main();

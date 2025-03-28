import { FilteredData } from "../Interfaces";
import { IPostFilterer } from "../Interfaces/IPostFilterer";
import { Behavior } from "./Behaviour";

class PostFilterer extends Behavior implements IPostFilterer {
  constructor() {
    super();
  }

  execute(data: any): FilteredData | null {
    /*The data returned is JS code
    The returned code initializes a variable (tumblr_api_read) with our JSON data
    In this function we will extract this JSON data from raw code text*/
    const match = data.match(/^var tumblr_api_read\s*=\s*(\{.*\});?\s*$/);
    if (match && match[1]) {
      const jsonData: any = JSON.parse(match[1]);
      const filteredData = {
        title: jsonData.tumblelog.title,
        description: jsonData.tumblelog.description,
        name: jsonData.tumblelog.name,
        posts: jsonData.posts,
      };
      return filteredData;
    }
    console.error("Unable to extract JSON from the response.");
    return null;
  }
}

export default PostFilterer;

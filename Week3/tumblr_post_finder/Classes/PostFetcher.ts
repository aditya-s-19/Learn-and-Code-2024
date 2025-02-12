require("dotenv").config();

import { ApiParams } from "../Interfaces";
import { IPostFetcher } from "../Interfaces/IPostFetcher";
import ApiHandler from "./ApiHandler";
import { Behavior } from "./Behaviour";

class PostFetcher extends Behavior implements IPostFetcher {
  private apiHandler: ApiHandler;

  constructor() {
    super();
    this.apiHandler = new ApiHandler();
  }

  async execute(search: string, start?: number, num?: number): Promise<any> {
    const endpoint = process.env.API_JSON_ENDPOINT;
    const params: ApiParams = {
      type: "photo",
    };
    start && (params.start = start);
    num && (params.num = num);
    const data = await this.apiHandler.fetchData(endpoint, params, search);
    return data;
  }
}

export default PostFetcher;

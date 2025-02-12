import { IApiHandler } from "../Interfaces/IApiHandler";

require("dotenv").config();

export default class ApiHandler implements IApiHandler {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.API_BASE_URL;
  }

  async fetchData(endpoint: string, params?: object, prefix?: string): Promise<any> {
    const url = new URL(endpoint, `https://${prefix ? prefix + "." : ""}${this.baseUrl}`);
    if (params) {
      Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])));
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.error("Error fetching data: ", error);
      throw error;
    }
  }
}

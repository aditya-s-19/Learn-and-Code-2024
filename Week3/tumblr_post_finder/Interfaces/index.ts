import { Behavior } from "../Classes/Behaviour";
import { IPostFetcher } from "./IPostFetcher";
import { IPostFilterer } from "./IPostFilterer";

export interface ApiParams {
  type?: "text" | "quote" | "photo" | "link" | "chat" | "video" | "audio";
  start?: number;
  num?: number;
  id?: string;
  filter?: "text" | "none";
}

export interface Behaviours {
  fetch?: IPostFetcher;
  filter?: IPostFilterer;
}

export interface FilteredData {
  title: string;
  description: string;
  name: string;
  posts: any[];
}

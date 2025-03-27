import { Behavior } from "../Classes/Behaviour";
import { IPostFetcher } from "./IPostFetcher";
import { IPostFilterer } from "./IPostFilterer";

export interface ApiParams {
  type?: ApiParamMediaType;
  start?: number;
  num?: number;
  id?: string;
  filter?: "text" | "none";
}

export enum ApiParamMediaType {
  text = "text",
  quote = "quote",
  photo = "photo",
  link = "link",
  chat = "chat",
  video = "video",
  audio = "audio",
}

// describes all available Behaviors for ITumblr
export interface Behaviors {
  fetch?: IPostFetcher;
  filter?: IPostFilterer;
}

export interface FilteredData {
  title: string;
  description: string;
  name: string;
  posts: any[];
}

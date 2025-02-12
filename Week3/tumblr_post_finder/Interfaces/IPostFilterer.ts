import { FilteredData } from ".";

export interface IPostFilterer {
  execute(data: any): FilteredData | null;
}

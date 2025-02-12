export interface IPostFetcher {
  execute(search: string, start?: number, num?: number): Promise<any>;
}

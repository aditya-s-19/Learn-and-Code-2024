export interface IApiHandler {
  fetchData(endpoint: string, params?: object, prefix?: string): Promise<any>;
}

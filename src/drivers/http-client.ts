export interface HttpClient {
  get<T>(url: string, headers: Headers): Promise<T>;
  post<T>(url: string, data: unknown, headers: Headers): Promise<T>;
  put<T>(url: string, data: unknown, headers: Headers): Promise<T>;
  delete(url: string, headers: Headers): Promise<void>;
}

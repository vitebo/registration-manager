import { HttpClient } from '~/drivers';

export class HttpClientFetch implements HttpClient {
  async get<T>(url: string, headers: Headers): Promise<T> {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    });
    return await response.json();
  }

  async post<T>(url: string, data: unknown, headers: Headers): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    });
    return await response.json();
  }

  async put<T>(url: string, data: unknown, headers: Headers): Promise<T> {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers
    });
    return await response.json();
  }

  async delete(url: string, headers: Headers): Promise<void> {
    await fetch(url, {
      method: 'DELETE',
      headers
    });
  }
}

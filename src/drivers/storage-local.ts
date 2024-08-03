import { Storage } from './storage';

export class StorageLocal implements Storage {
  constructor(private readonly baseKey: string) {}

  save(key: string, value: string): void {
    try {
      localStorage.setItem(this.getFullKey(key), value);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  load(key: string): string | null {
    try {
      return localStorage.getItem(this.getFullKey(key));
    } catch (e) {
      console.error('Error loading from localStorage', e);
      return null;
    }
  }

  private getFullKey(key: string): string {
    return `${this.baseKey}:${key}`;
  }
}

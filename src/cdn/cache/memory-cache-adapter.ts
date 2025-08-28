import type { ICacheAdapter } from '@/interfaces/i-cache-adapter';

export class MemoryCacheAdapter<K, V> implements ICacheAdapter<K, V> {
  protected map: Map<K, V>;

  constructor() {
    this.map = new Map();
  }

  public get(key: K): V | undefined {
    return this.map.get(key);
  }

  public has(key: K): boolean {
    return this.map.has(key);
  }

  public set(key: K, value: V): void {
    this.map.set(key, value);
  }

  public flush(): void {
    this.map = new Map();
  }
}

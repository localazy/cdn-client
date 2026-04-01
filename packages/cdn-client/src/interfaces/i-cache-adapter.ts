export interface ICacheAdapter<K, V> {
  has: (key: K) => boolean;
  get: (key: K) => V | undefined;
  set: (key: K, value: V) => void;
  flush: () => void;
}

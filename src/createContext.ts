import { getContext, hasContext, setContext } from 'svelte';
import { nanoid } from 'nanoid';

export interface Context<T> {
  set: (value: T) => void;
  get: () => T;
}

export function createContext<T>(): Context<T> {
  const key = nanoid();

  function set(value: T): void {
    if (hasContext(key)) {
      return console.error('Context is already set');
    }
    setContext(key, value);
  }

  function get(): T {
    return getContext(key);
  }

  return { set, get };
}

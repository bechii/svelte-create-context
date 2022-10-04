import { getContext, hasContext, setContext } from 'svelte';
import { nanoid } from 'nanoid';

export interface Context<T> {
  setup: (value: T) => void;
  get: () => T;
}

export function createContext<T>(): Context<T> {
  const key = nanoid();

  function setup(value: T): void {
    if (hasContext(key)) {
      return console.error('Context is already setup');
    }
    setContext(key, value);
  }

  function get(): T {
    return getContext(key);
  }

  return { setup, get };
}

[![NPM Version](https://img.shields.io/npm/v/svelte-create-context.svg?style=for-the-badge)](https://www.npmjs.com/package/svelte-create-context)

# svelte-create-context
A keyless and typesafe approach to the [Svelte](https://github.com/sveltejs/svelte) context API

## 💾 Install
```bash
npm i svelte-create-context
```

## ⚡ Quick example

```
// context.ts

import { createContext } from 'svelte-create-context';

export const {
  set: setUserContext,
  get: getUserContext
} = createContext<User>();
```

```
// parent component

<script lang="ts">
  import { setUserContext } from './context';

  setUserContext(new User());
</script>
```

```
// child component

<script lang="ts">
  import { getUserContext } from 'path-to-parent-component/context';

  const currentUser = getUserContext();
</script>
```

## 🔨 API
```
interface Context<T> {
  set: (value: T) => void;
  get: () => T;
}

function createContext<T>(): Context<T>
```

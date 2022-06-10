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
  setup: setupCurrentUser,
  get: getCurrentUser
} = createContext<User>();
```

```
// parent component

<script lang="ts">
  import { setupCurrentUser } from './context';

  setupCurrentUser(new User());
</script>
```

```
// child component

<script lang="ts">
  import { getCurrentUser } from './context';

  const currentUser = getCurrentUser();
</script>
```

## 🔨 API
```
interface Context<T> {
  setup: (value: T) => void;
  get: () => T;
}

function createContext<T>(): Context<T>
```

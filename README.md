# svelte-state-store

A [Svelte writable store](https://svelte.dev/docs/svelte-store#writable) that allows immediate access to the current state via a `value` getter.
This avoids the need to use the less efficient `get(store)` and to access the current store value without having to setup a subscription which can sometimes be awkward.

It can be useful where you need a store value but it isn't a dependency that would need to trigger an update or you would otherwise need to `get` the value inside a tight loop (e.g. a mouseover handler checking for the pointer being over objects that are within a store, to set the highlighted one). In certain situations it can help create simpler more efficient code.

## Usage

Install using your package-manager of choice, e.g.

    pnpm i -D svelte-state-store

Import and use just as you would a regular `writable` store:

```ts
import { state } from 'svelte-state-store';

export const my_store = state(123);
```

You can now use the store as a regular `writable` store, subscribing to it for updates, and using it with `derived` stores, but you can also access the current value outside of a subscription using:

```ts
console.log(my_store.value); // 123
```

If you need to define a type for your store, use `State` where you would have used `Writable`:

```ts
import type { Writable } from 'svelte/store`

function that_uses_store(store: Writable<StoreValue>) { }
```

becomes ...

```ts
import type { Writable } from 'svelte-state-store`

function that_uses_store(store: State<StoreValue>) { }
```

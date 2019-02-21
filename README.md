# react-store-context
A simple store API using React Context

## Installation

- Use Yarn: `yarn add react-store-context`
- Or, use NPM: `npm i react-store-context`

## Why?

- ✅ Zero dependencies, one peer dependency (React)
- ✅ Single package
- ✅ [86 lines of source code](https://github.com/alexyuly/react-store-context/blob/master/src/index.tsx)
- ✅ TypeScript support included

### Peer dependencies

Make sure React 16, at [version 16.3.0](https://reactjs.org/blog/2018/03/29/react-v-16-3.html) or higher, is installed alongside react-store-context.

## API documentation

### `createStore`

`function createStore<T>(initialState = {} as T): Store<T>` [(View Source...)](https://github.com/alexyuly/react-store-context/blob/master/src/index.tsx#L21)

Example usage:

```typescript
import { createStore, Store } from 'react-store-context';

interface State {
  count: number;
}

// Create a store of type `State`.
export const exampleStore: Store<State> = createStore({
  count: 0,
});
```

### `Provider`

`class Provider extends React.Component<ProviderProps>` [(View Source...)](https://github.com/alexyuly/react-store-context/blob/master/src/index.tsx#L51)

Example usage:

```typescript
import * as React from 'react';
import { Provider } from 'react-store-context';
import { exampleStore } from './the above example';
import { Component } from './the below example';

const App = () => (
  <Provider
    stores={[
      exampleStore,
      // All stores passed to a Provider can be used by its children, with consumeStore.
    ]}
  >
    <Component />
  </Provider>
);
```

### `consumeStore`

`function consumeStore<T, P>(store: Store<T>): (Cmp: React.ComponentType<P>) => React.ComponentType<P & ConsumerProps<T>>` [(View Source...)](https://github.com/alexyuly/react-store-context/blob/master/src/index.tsx#L73)

`consumeStore` is a HOC (["Higher-Order Component"](https://reactjs.org/docs/higher-order-components.html)), meaning that it's a function of a component which returns another component.

Higher-order components are a convenient way to add functionality to regular components through semantic couplings with functions, while still maintaining the encapsulation and reusability of those regular components.

Example usage:

```typescript
import * as React from 'react';
import { consumeStore } from 'react-store-context';
import { exampleStore } from './the above example';

// Define a component with a "store" prop.
export const Component = ({ store }) => (
  <button
    onClick={() => {
      store.setState({
        count: store.state.count + 1,
      });
    }}
  >
    You've clicked me {store.state.count} time{store.state.count === 1 ? '' : 's'}.
  </button>
);

// "Bind" your component to your store, with consumeStore.
const WrappedComponent = consumeStore(exampleStore)(Component);
```

Alternatively, consume a store by creating a Consumer element:

```typescript
import * as React from 'react';
import { Component, exampleStore } from './the above examples';

const ConsumingComponent = () => (
  <exampleStore.Consumer>
    {(store) => (
      <Component
        store={store}
      />
    )}
  </exampleStore.Consumer>
);
```

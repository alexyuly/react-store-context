# react-store-context
A simple store API using React Context

## Installation

- Use Yarn: `yarn add react-store-context`
- Or, use NPM: `npm i react-store-context`

### Peer dependencies

Make sure React 16, at [version 16.3.0](https://reactjs.org/blog/2018/03/29/react-v-16-3.html) or higher, is installed alongside react-store-context.

## API documentation

### `createStore`

`function createStore<T>(initialState = {} as T): Store<T>` [(View Source...)](https://github.com/alexyuly/react-store-context/blob/master/src/index.tsx#L21)

Example usage:

```
import { createStore, Store } from 'react-store-context';

interface State {
  count: number;
}

export const exampleStore: Store<State> = createStore({
  count: 0,
});
```

Now, `exampleStore` contains a store with state of type `State`.

### `Provider`

`class Provider extends React.Component<ProviderProps>` [(View Source...)](https://github.com/alexyuly/react-store-context/blob/master/src/index.tsx#L51)

Example usage:

```
import * as React from 'react';
import { Provider } from 'react-store-context';
import exampleStore from './the above example';
import Component from './the below example';

const App = () => (
  <Provider
    stores={[
      exampleStore,
      // Add as many stores as you like, to make them available to children.
    ]}
  >
    <Component />
  </Provider>
);
```

### `consumeStore`

`function consumeStore<T, P>(store: Store<T>): (Cmp: React.ComponentType<P>) => React.ComponentType<P & ConsumerProps<T>>` [(View Source...)](https://github.com/alexyuly/react-store-context/blob/master/src/index.tsx#L73)

Example usage:

```
import * as React from 'react';
import { consumeStore } from 'react-store-context';
import exampleStore from './the above example';

const Component = ({ store }) => (
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

export consumeStore(exampleStore)(Component);
```

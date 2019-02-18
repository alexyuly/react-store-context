import * as React from 'react';

export interface StoreProps<T> {
  state: T;
  setState: React.Component<unknown, T>['setState'];
}

export interface StoreProviderProps {
  children?: React.ReactNode;
}

export interface Store<T = {}> {
  Consumer: React.ComponentType<React.ConsumerProps<StoreProps<T>>>;
  Provider: React.ComponentType<StoreProviderProps>;
}

export function createStore<T>(initialState = {} as T): Store<T> {
  const { Consumer, Provider } = React.createContext(null);
  return {
    Consumer,
    Provider: class extends React.Component<StoreProviderProps> {
      constructor(props) {
        super(props);
        this.state = initialState;
      }
      render() {
        return (
          <Provider
            value={{
              state: this.state,
              setState: this.setState.bind(this),
            }}
          >
            {this.props.children}
          </Provider>
        );
      }
    },
  };
}

export interface ProviderProps {
  children?: React.ReactNode;
  stores: Store[];
}

export class Provider extends React.Component<ProviderProps> {
  private renderStores(stores: Store[]) {
    if (stores.length === 0) {
      return this.props.children;
    }
    const nextStore = stores[0];
    return (
      <nextStore.Provider>
        {this.renderStores(stores.slice(1))}
      </nextStore.Provider>
    );
  }
  render() {
    return this.renderStores(this.props.stores);
  }
}

export interface ConsumerProps<T = {}> {
  store: StoreProps<T>;
}

// TODO - In future, we may need to optimize how props are passed down, to avoid over-rendering.
export function consumeStore<T, P>(store: Store<T>): (Cmp: React.ComponentType<P>) => React.ComponentType<P & ConsumerProps<T>> {
  return (Component) => (props) => {
    return (
      <store.Consumer>
        {(storeProps) => {
          return (
            <Component
              {...props}
              store={storeProps}
            />
          );
        }}
      </store.Consumer>
    );
  };
}

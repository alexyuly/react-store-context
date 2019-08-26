import React from 'react';

export interface ProviderProps {
  stores: Store[];
}

export interface Store<T = {}> {
  Consumer: React.ComponentType<React.ConsumerProps<StoreProps<T>>>;
  Provider: React.ComponentType;
}

export interface StoreProps<T> {
  state: T;
  setState: React.Component<unknown, T>['setState'];
}

export function createStore<T>(initialState = {} as T): Store<T> {
  const { Consumer, Provider } = React.createContext(null);
  return {
    Consumer,
    Provider: class StoreProvider extends React.Component {
      constructor(props: any) {
        super(props);
        this.state = initialState;
        this.setState = this.setState.bind(this);
      }
      render() {
        return (
          <Provider
            value={{
              state: this.state,
              setState: this.setState,
            }}
          >
            {this.props.children}
          </Provider>
        );
      }
    },
  };
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

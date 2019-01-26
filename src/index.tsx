import * as React from 'react';

type StoreAttributes<T> = {
  state: T;
  setState: (update: Partial<T>) => void;
};

export interface Store<T> {
  Consumer: React.ComponentType<React.ConsumerProps<StoreAttributes<T>>>;
  Provider: React.ComponentType;
}

export function createStore<T>(initialState = {} as T): Store<T> {
  const { Consumer, Provider } = React.createContext(null);
  return {
    Consumer,
    Provider: class extends React.Component {
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

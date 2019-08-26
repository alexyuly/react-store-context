# react-store-context
A simple store API using React Context

## Installation

`yarn add react-store-context`

### Peer Dependencies

Make sure React 16, at [version 16.3.0](https://reactjs.org/blog/2018/03/29/react-v-16-3.html) or higher, is installed alongside react-store-context.

## Rationale

- ✅ The simplest global state management solution for React ^16.3.0
- ✅ One package with zero dependencies
- ✅ [59 lines of source code](https://github.com/alexyuly/react-store-context/blob/master/src/index.tsx)
- ✅ TypeScript support included

## Example Usage

```tsx
import * as React from 'react';
import { createStore, Provider } from 'react-store-context';

interface CheckboxProps {
  checked: boolean;
  label: string;
  setChecked(checked: boolean): void;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = props => {
  return (
    <label
      style={{
        display: 'block',
        userSelect: 'none'
      }}
    >
      <input
        type='checkbox'
        checked={props.checked}
        onChange={() => {
          props.setChecked(!props.checked);
        }}
        style={{
          marginRight: 8,
        }}
      />
      {props.label}
    </label>
  );
};

const storeA = createStore({
  checked: false,
});

const storeB = createStore({
  checked: false,
});

return (
  <Provider stores={[storeA, storeB]}>
    <storeA.Consumer>
      {({ state, setState }) => {
        return (
          <Checkbox
            checked={state.checked}
            label='Store A'
            setChecked={checked => {
              setState({
                checked,
              });
            }}
          />
        );
      }}
    </storeA.Consumer>
    <storeB.Consumer>
      {({ state, setState }) => {
        return (
          <Checkbox
            checked={state.checked}
            label='Store B'
            setChecked={checked => {
              setState({
                checked,
              });
            }}
          />
        );
      }}
    </storeB.Consumer>
  </Provider>
);

```

## Development with Storybook

`yarn storybook`

## TODO

- Add API documentation.
- Add a React Hooks API.

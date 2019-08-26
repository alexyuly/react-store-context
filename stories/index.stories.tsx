import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, Provider } from '../src';

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

storiesOf('Store', module)
  .add('Store', () => {
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
  });

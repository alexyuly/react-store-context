import { UserSelectProperty } from 'csstype';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore } from '.';

const Store = createStore({
  message: `You haven't clicked anything yet!`,
});

const boxStyle = {
  border: '1px solid black',
  cursor: 'pointer',
  margin: 10,
  padding: 10,
  userSelect: 'none' as UserSelectProperty,
};

const Box1 = () => (
  <Store.Consumer>
    {({ state, setState }) => (
      <div
        style={boxStyle}
        onClick={() => {
          console.log('clicked Box 1');
          setState({
            message: 'You just clicked Box 1!',
          });
        }}
      >
        {state.message}
      </div>
    )}
  </Store.Consumer>
);

const Box2 = () => (
  <Store.Consumer>
    {({ state, setState }) => (
      <div
        style={boxStyle}
        onClick={() => {
          console.log('clicked Box 2');
          setState({
            message: 'You just clicked Box 2!',
          });
        }}
      >
        {state.message}
      </div>
    )}
  </Store.Consumer>
);

const App = () => (
  <Store.Provider>
    <div>
      <Box1 />
      <Box2 />
    </div>
  </Store.Provider>
);

ReactDom.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);

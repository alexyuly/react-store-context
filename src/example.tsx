import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  compose,
  withHandlers,
  withProps,
} from 'recompose';
import {
  consumeStore,
  createStore,
  ConsumerProps,
  Provider,
  Store,
} from '../lib';

const boxStyle: React.CSSProperties = {
  border: '1px solid black',
  cursor: 'pointer',
  margin: 10,
  padding: 10,
  userSelect: 'none',
};

interface CountState {
  countBoxA: number;
  countBoxB: number;
}

const CountStore: Store<CountState> = createStore({
  countBoxA: 0,
  countBoxB: 0,
});

interface MessageState {
  message: string;
}

const MessageStore: Store<MessageState> = createStore({
  message: `You haven't clicked anything yet!`,
});

interface Props {
  countBoxA: number;
  countBoxB: number;
  incrementCountBoxA: () => void;
  incrementCountBoxB: () => void;
  message: string;
  setMessage: (message: string) => void;
}

const withViewModel = compose<Props, any>(
  consumeStore(CountStore),
  withProps((props: ConsumerProps<CountState>) => ({
    countBoxA: props.store.state.countBoxA,
    countBoxB: props.store.state.countBoxB,
  })),
  withHandlers({
    incrementCountBoxA: (props: ConsumerProps<CountState>) => () => {
      props.store.setState({
        countBoxA: props.store.state.countBoxA + 1,
      });
    },
    incrementCountBoxB: (props: ConsumerProps<CountState>) => () => {
      props.store.setState({
        countBoxB: props.store.state.countBoxB + 1,
      });
    },
  }),
  consumeStore(MessageStore),
  withProps((props: ConsumerProps<MessageState>) => ({
    message: props.store.state.message,
  })),
  withHandlers({
    setMessage: (props: ConsumerProps<MessageState>) => (message: string) => {
      props.store.setState({
        message,
      });
    },
  }),
);

const BoxA = withViewModel(({
  countBoxA,
  incrementCountBoxA,
  message,
  setMessage,
}) => {
  return (
    <div
      style={boxStyle}
      onClick={() => {
        incrementCountBoxA();
        setMessage(`You have clicked Box A x ${countBoxA + 1}!`);
      }}
    >
      {message}
    </div>
  );
});

const BoxB = withViewModel(({
  countBoxB,
  incrementCountBoxB,
  message,
  setMessage,
}) => {
  return (
    <div
      style={boxStyle}
      onClick={() => {
        incrementCountBoxB();
        setMessage(`You have clicked Box B x ${countBoxB + 1}!`);
      }}
    >
      {message}
    </div>
  );
});

const App = () => (
  <Provider
    stores={[
      CountStore,
      MessageStore,
    ]}
  >
    <div>
      <BoxA />
      <BoxB />
    </div>
  </Provider>
);

ReactDom.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);

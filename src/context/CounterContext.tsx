/* eslint-disable react-refresh/only-export-components */
import { FC, createContext, useContext } from 'react';

import { defaultCounterReducer, useCounterReducer } from 'hooks/useCounterReducer';

const { state, dispatch } = defaultCounterReducer;

const CounterContext = createContext(state);
const CounterDispatchContext = createContext(dispatch);

type Props = {
  children: React.ReactNode;
};

export const CounterProvider: FC<Props> = ({ children }) => {
  const { state, dispatch } = useCounterReducer();

  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>{children}</CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
export const useCounterDispatch = () => useContext(CounterDispatchContext);

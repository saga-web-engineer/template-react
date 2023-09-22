import { FC } from 'react';

import { useCounter } from 'context/CounterContext';

export const CounterResult: FC = () => {
  const state = useCounter();

  return <p>count is {state}</p>;
};

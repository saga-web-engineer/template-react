import { FC } from 'react';

import { CounterProvider } from 'context/CounterContext';
import { CounterButton } from './CounterButton';
import { CounterResult } from './CounterResult';

export const Counter: FC = () => {
  return (
    <CounterProvider>
      <CounterResult />
      <div className="flex items-center justify-center gap-[2em]">
        <CounterButton step={1} type="+" />
        <CounterButton step={1} type="-" />
      </div>
    </CounterProvider>
  );
};

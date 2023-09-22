import { FC } from 'react';

import { useCounterDispatch } from 'context/CounterContext';

type Props = {
  step: number;
  type: '+' | '-';
};

export const CounterButton: FC<Props> = ({ step, type }) => {
  const dispatch = useCounterDispatch();

  const clickHandler = () => {
    dispatch({ step, type });
  };

  return (
    <button
      onClick={clickHandler}
      className="rounded bg-gray-700 p-[0.5em_1.5em] transition hover:bg-gray-600 focus-visible:bg-gray-600"
    >
      {type}
      {step}
    </button>
  );
};

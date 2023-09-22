import { FC } from 'react';

import { Counter } from 'components/Counter';
import reactLogo from './assets/react.svg';
import tailwindLogo from './assets/tailwind.svg';
import tsLogo from './assets/typescript.svg';
import viteLogo from '/vite.svg';

const title = import.meta.env.VITE_APP_TITLE;

const App: FC = () => {
  return (
    <div className="grid gap-[2em]">
      <div className="flex items-center justify-center gap-[2.5em]">
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="[transition:filter_0.3s] [will-change:filter] hover:[filter:drop-shadow(0_0_2em_#646cffaa)]"
            alt="Reactサイトへ"
            width="108"
            height="96"
          />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">
          <img
            src={tsLogo}
            className="[transition:filter_0.3s] [will-change:filter] hover:[filter:drop-shadow(0_0_2em_#646cffaa)]"
            alt="TypeScriptサイトへ"
            width="92"
            height="92"
          />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="[transition:filter_0.3s] [will-change:filter] hover:[filter:drop-shadow(0_0_2em_#646cffaa)]"
            alt="Viteサイトへ"
            width="96"
            height="96"
          />
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
          <img
            src={tailwindLogo}
            className="[transition:filter_0.3s] [will-change:filter] hover:[filter:drop-shadow(0_0_2em_#646cffaa)]"
            alt="TailwindCSSサイトへ"
            width="120"
            height="96"
          />
        </a>
      </div>
      <h1 className="text-[clamp(36px,10vw,60px)]">{title}</h1>
      <Counter />
    </div>
  );
};

export default App;

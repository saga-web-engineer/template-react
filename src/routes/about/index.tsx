import { createFileRoute } from '@tanstack/react-router';

import { MetaData } from '../../components/MetaData';
import { SITE_NAME, SITE_URL } from '../../utils/siteSetting';

export const Route = createFileRoute('/about/')({
  component: About,
});

function About() {
  return (
    <>
      <MetaData
        title={`About | ${SITE_NAME}`}
        description="ReactテンプレートのAboutページです。"
        url={`${SITE_URL}/about`}
      />
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>Vite</li>
        <li>TanStack Router</li>
        <li>Zustand</li>
        <li>Tailwind CSS</li>
      </ul>
    </>
  );
}

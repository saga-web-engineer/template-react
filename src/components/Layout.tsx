import type { FC } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { Wrapper } from './Wrapper';

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto]">
      <Header />
      <main>
        <Wrapper>{children}</Wrapper>
      </main>
      <Footer />
    </div>
  );
};

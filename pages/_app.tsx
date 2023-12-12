import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';

import '../app/globals.css';

type MyAppProps = AppProps & {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
};

export default function MyApp({ Component, pageProps }: MyAppProps): ReactElement {
  const getLayout = (Component as any).getLayout || ((page: ReactElement) => page);

  return getLayout(
    <Layout>
    <Component {...pageProps} />
     </Layout>
  
  );
}

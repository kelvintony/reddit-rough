import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log('start');
      setLoading(true);
    };
    const end = () => {
      console.log('findished');
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <SessionProvider session={pageProps.session}>
      {/* {loading ? <h1>Loading...</h1> : <Component {...pageProps} />} */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

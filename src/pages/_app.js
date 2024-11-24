import '/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Analytics and global layout for the app */}
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;

import React from 'react';
import Head from './layouts/head';
import Scripts from './layouts/scripts';

function Html(props) {
  return <html>
  <Head {...props}></Head>
  <body>
  <div id="app-root"></div>
  <Scripts {...props}></Scripts>
  </body>
  </html>
}

export default Html;

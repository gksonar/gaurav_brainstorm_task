import "../globals.css";

import type { AppProps } from "next/app";
import React from "react";

export const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;

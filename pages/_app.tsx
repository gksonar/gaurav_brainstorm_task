import "../globals.css";

import type { AppProps } from "next/app";
import React from "react";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/src/redux/store";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;

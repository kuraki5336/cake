import type { AppProps /*, AppContext */ } from "next/app";
/** reducer */
import { Provider } from "react-redux";
import BaseLayout from "../components/BaseLayout";
import Layout from "../components/Layout";
import { store } from "../core/store/index";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import React from "react";

/** 全局得的CSS */
import "../styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // 移除原 server-side 渲染的樣式
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <BaseLayout>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </BaseLayout>
    </Provider>
  );
}

export default MyApp;

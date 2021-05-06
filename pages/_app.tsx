import type { AppProps /*, AppContext */ } from "next/app";
/** reducer */
import { Provider } from "react-redux";
import BaseLayout from "../components/BaseLayout";
import Layout from "../components/Layout";
import { store } from "../core/store/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BaseLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BaseLayout>
    </Provider>
  );
}

export default MyApp;

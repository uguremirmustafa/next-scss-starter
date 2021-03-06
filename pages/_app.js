import '../styles/main.scss';
import Layout from '@components/layout/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import Header from "@/components/layout/Header";
import "../styles/app.scss";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

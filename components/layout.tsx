import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Kuusjoki</title>
      </Head>
      <Navbar />
      <div className="page">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

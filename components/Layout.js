import Head from "next/head";

const name = "yuri";
export const subtitle = "Micro Blog ";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header>
        <img src="/images/profile.png" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;

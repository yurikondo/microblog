import Head from "next/head";
import styles from "./layout.module.css";

const name = "yuri";
export const sitetitle = "Micro Blog ";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;

import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyle from "../src/styles/utils.module.css";

const name = "yuri";
export const sitetitle = "Micro Blog ";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" className={utilsStyle.borderCircle} />
        <h1 className={utilsStyle.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;

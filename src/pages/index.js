import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../../components/Layout";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../../lib/post";

//SSGの場合 外部から一度だけデータを取得する
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>エンジニア目指してます。好きな言語はJavascriptです。</p>
      </section>
      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="./images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <h3 className={utilStyle.boldText} href="/">
                SSGとSSRの違いとは?
              </h3>
              <br />
              <small className={utilStyle.lightText}>投稿日時</small>
            </Link>
          </article>
          <article>
            <Link href="/">
              <img
                src="./images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <h3 className={utilStyle.boldText} href="/">
                SSGとSSRの違いとは?
              </h3>
              <br />
              <small className={utilStyle.lightText}>投稿日時</small>
            </Link>
          </article>
          <article>
            <Link href="/">
              <img
                src="./images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <h3 className={utilStyle.boldText} href="/">
                SSGとSSRの違いとは?
              </h3>
              <br />
              <small className={utilStyle.lightText}>投稿日時</small>
            </Link>
          </article>
          <article>
            <Link href="/">
              <img
                src="./images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <h3 className={utilStyle.boldText} href="/">
                SSGとSSRの違いとは?
              </h3>
              <br />
              <small className={utilStyle.lightText}>投稿日時</small>
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}

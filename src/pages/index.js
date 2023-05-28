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
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <h3 className={utilStyle.boldText}>{title}</h3>
              </Link>
                <br />
                <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

import Link from "next/link";
import Layout from "../../components/Layout";
import utilStyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>エンジニア目指してます。好きな言語はJavascriptです。</p>
      </section>
      <section>
        <div>
          <article>
            <h2>📝エンジニアのブログ</h2>
            <Link href="/">
              <img src="./images/thumbnail01.jpg" />
            </Link>
            <Link href="/">
              <a>SSGとSSRの違いとは?</a>
              <br />
              <small>投稿日時</small>
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  );
}

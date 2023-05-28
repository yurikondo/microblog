import Layout from "../../../components/Layout";
import { getAllPostIds } from "../../../lib/post";

export async function getStaticPath() {
  const paths = getAllPostIds();

  return {
    path,
    //[id]以外のpathを指定すると404notfoundになる
    fallback: false,
  };
}

export default function Post() {
  return <Layout>どう的ルーティング</Layout>;
}

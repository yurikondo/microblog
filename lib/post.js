import path from "path";
import fs from "fs";
import matter from "gray-matter";

//レッスン28
const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを日付順に取り出す(トップページのブログ一覧出力で使う)
export function getPostsData() {
  // /posts配下のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);
  // console.log(fileNames);
  const allPostsData = fileNames.map((fileName) => {
    // idを取得するためにファイル名の拡張子を除外
    const id = fileName.replace(/\.md$/, "");

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    console.log(fullPath);
    console.log(fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //投稿のメタデータ部分を解析
    const matterResult = matter(fileContents);

    //idとデータを返す。
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

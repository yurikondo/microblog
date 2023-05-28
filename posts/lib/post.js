import path from "path";
import fs from "fs";
import matter from "matter";

//レッスン28
const postsDirectry = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectry);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectry, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    //idとデータを返す
    return {
      id,
      ...matterResult,
    };
  });
}

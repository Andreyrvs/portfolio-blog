// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { serialize } from "next-mdx-remote/serialize";

// const postsDirectory = path.join(process.cwd(), "src/posts");

// export function getAllPostIds() {
//   const files = fs.readdirSync(path.join("src", "posts"));
//   const paths = files.map((filename) => ({
//     params: {
//       id: filename.replace(/\.mdx$/, ""),
//     },
//   }));

//   return paths;
// }

// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.mdx`);
//   const markdownWithMeta = fs.readFileSync(fullPath);

//   const { data: frontMatter, content } = matter(markdownWithMeta);
//   const mdxSource = await serialize(content);

//   return {
//     props: {
//       frontMatter,
//       id,
//       mdxSource,
//     },
//   };
// }

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/blogposts");

export function getSortedPostData() {
  // get files name under /blogposts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostData = fileNames.map((fileName) => {
    //remove .md from file name
    const id = fileName.replace(/\.md$/, "");

    //read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    //use gray-matter
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    //combine the data with the id
    return blogPost;
  });

  //sort posts by date
  return allPostData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

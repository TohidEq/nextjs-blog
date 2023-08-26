import { getSortedPostData } from "@/lib/posts";

export default function Posts() {
  const posts = getSortedPostData();
  return (
    <div>
      Posts:
      <div className="">
        {posts.map((post) => {
          return JSON.stringify(post);
        })}
      </div>
    </div>
  );
}

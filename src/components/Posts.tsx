import { getSortedPostData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostData();
  return (
    <div>
      Posts:
      <div className="">
        {posts.map((post) => {
          return <ListItem key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

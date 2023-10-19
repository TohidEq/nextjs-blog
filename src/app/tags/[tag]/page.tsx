import ListItem from "@/components/ListItem";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";

export const revalidate = 0; //86400;

import React from "react";

type Props = {
  params: {
    tag: string;
  };
};

// export async function generateStaticParams() {
//   const posts = await getPostsMeta(); //deduped!

//   if (!posts) return [];

//   const tags = new Set(posts.map((post) => post.tags).flat());

//   return Array.from(tags).map((tag) => ({ tag }));
// }

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); //deduped!

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;

  // which posts include tag that has been passed
  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  // if no tag ...
  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="posts page">
      <h2 className="text-2xl mt-4 mb-0 text-white">
        Results for: <span className="drop-shadow-glow-link-1">#{tag}</span>
      </h2>
      <section className="post-cards">
        {tagPosts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}

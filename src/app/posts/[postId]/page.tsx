import { getPostData, getSortedPostData } from "@/lib/posts";
import { cache } from "react";

import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  params: { postId: string };
};

export function generateMetadata({ params }: Props) {
  const posts = getSortedPostData();

  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post)
    return {
      title: "Post Not Found",
    };

  return {
    title: post.title,
  };
}
export default async function page({ params }: Props) {
  const posts = getSortedPostData();

  const { postId } = params;
  const post = posts.find((post) => post.id === postId);

  if (!post) return notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <div className="prose">
      <h1>{title}</h1>
      <span>{pubDate}</span>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <Link href={"/"}>Back to Home</Link>
      </article>
    </div>
  );
}

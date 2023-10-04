import { getPostData, getSortedPostData } from "@/lib/posts";

import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

import { AiOutlineLink } from "react-icons/ai";

type Props = {
  params: { postId: string };
};

export function generateStaticParams() {
  const posts = getSortedPostData();
  return posts.map((post) => ({ postId: post.id }));
}

export function generateMetadata({ params }: Props) {
  const posts = getSortedPostData();

  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post)
    return {
      title: "Post Not Found",
      description: "This Post Not Found.",
    };

  return {
    title: post.title,

    description: `This is the page of ${post.title}`,
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
    <div className="blog page">
      <article className="blog-post">
        <div className="post-title">
          <h1>{title}</h1>
          <span>{pubDate}</span>
        </div>
        <section
          className="post-section"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        {/* 
        
        
        */}
      </article>
      <div className="other-links">
        <Link href={"/"}>
          Back to Home <AiOutlineLink className={"h-full ml-1"} />
        </Link>
        <Link href={"/posts"}>
          Back to Posts <AiOutlineLink className={"h-full ml-1"} />
        </Link>
      </div>
    </div>
  );
}

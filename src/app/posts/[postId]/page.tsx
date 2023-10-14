import { getPostByName, getPostsMeta } from "@/lib/posts";

import { notFound } from "next/navigation";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

import { AiOutlineLink } from "react-icons/ai";
// import { revalidate } from "@/app/page";

export const revalidate = 0;

type Props = {
  params: { postId: string };
};

// export async function generateStaticParams() {
//   const posts = await getPostsMeta(); //deduped!

//   if (!posts) return [];

//   return posts.map((post) => ({ postId: post.id }));
// }

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post)
    return {
      title: "Post Not Found",
      description: "This Post Not Found.",
    };

  return {
    title: post.meta.title,

    description: `This is the page of ${post.meta.title}`,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) return notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag} <AiOutlineLink className={"h-full ml-1 p-0.5"} />
    </Link>
  ));
  console.log(1111, post);
  console.log(22222, content);
  console.log(333333, meta);

  return (
    <div className="blog page">
      <article className="blog-post">
        <div className="post-title">
          <h1>{meta.title}</h1>
          <span>{pubDate}</span>
        </div>
        <section className="post-section">{content}</section>
      </article>
      <div className="other-section">
        <div className="other-links o-tags-s">
          <span>Related:</span>
          <div className="o-tags">{tags}</div>
        </div>
        <div className="other-links o-nav">
          <Link href={"/"}>
            Back to Home <AiOutlineLink className={"h-full ml-1 mt-1"} />
          </Link>
          <Link href={"/posts"}>
            Back to Posts <AiOutlineLink className={"h-full ml-1 mt-1"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

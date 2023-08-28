import { getSortedPostData } from "@/lib/posts";

type Props = {
  params: { postId: string };
};

export default function page({ params }: Props) {
  return <div>page</div>;
}

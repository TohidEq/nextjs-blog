import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

import { AiOutlineLink } from "react-icons/ai";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div className="post-card">
      <Link href={`/posts/${id}`} className="link1">
        {title}
        <AiOutlineLink className={"h-full ml-1"} />
      </Link>
      <span className="date">{formattedDate}</span>
    </div>
  );
}

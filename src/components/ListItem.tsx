import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li>
      <Link href={`/posts/${id}`} className="link1">
        {title}
      </Link>
      <span className="date">{formattedDate}</span>
    </li>
  );
}

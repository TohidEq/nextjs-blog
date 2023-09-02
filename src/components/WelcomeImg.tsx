import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

function WelcomeImg() {
  return (
    <div className="img">
      <Image
        src={"/images/wlcm.jpg"}
        alt="Welcome!"
        width={"1920"}
        height={"1080"}
        priority={false}
      />
      <span className="img-grad"></span>
      <div className="links">
        <Link href={"/posts"}>
          All Posts <AiOutlineLink className={"h-full ml-1"} />
        </Link>
      </div>
    </div>
  );
}

export default WelcomeImg;

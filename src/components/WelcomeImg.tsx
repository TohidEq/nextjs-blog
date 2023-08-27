import Image from "next/image";
import Posts from "./Posts";

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
      <Posts />
    </div>
  );
}

export default WelcomeImg;

import Image from "next/image";

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
    </div>
  );
}

export default WelcomeImg;

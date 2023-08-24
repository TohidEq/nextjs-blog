import Image from "next/image";

function WelcomeImg() {
  return (
    <Image
      src={"/images/wlcm.jpg"}
      alt="Welcome!"
      width={"1920"}
      height={"1080"}
      priority={true}
    />
  );
}

export default WelcomeImg;

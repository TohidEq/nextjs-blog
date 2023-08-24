import Image from "next/image";

export default function Home() {
  return (
    <main className="home page">
      <Image
        src={"/images/wlcm.jpg"}
        alt="Welcome!"
        width={"1920"}
        height={"1080"}
      />
    </main>
  );
}

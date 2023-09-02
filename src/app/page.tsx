import WelcomeImg from "@/components/WelcomeImg";

export function generateMetadata() {
  return {
    title: "NextBlog",
  };
}

export default function Home() {
  return (
    <main className="home page">
      <WelcomeImg />
    </main>
  );
}

import Posts from "@/components/Posts";
import React from "react";

export default function AllPosts() {
  return (
    <div className="posts page">
      <h2 className="text-2xl mt-4 mb-0 text-white">All Posts:</h2>
      {/* @    ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}

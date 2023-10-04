import Posts from "@/components/Posts";
import React from "react";

export default function AllPosts() {
  return (
    <div className="posts page">
      {/* @    ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}

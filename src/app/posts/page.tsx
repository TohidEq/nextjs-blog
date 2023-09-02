import Posts from "@/components/Posts";
import React from "react";

export function generateMetadata() {
  return {
    title: "Posts",
  };
}

export default function AllPosts() {
  return (
    <div className="posts page">
      <Posts />
    </div>
  );
}

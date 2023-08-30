import Link from "next/link";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";

export default function NotFound() {
  return (
    <div className="not-found min-h-[90vh] prose grid content-center mx-auto">
      <h1 className="text-white text-center m-0">Not Found!</h1>
      <Link
        href={"/"}
        className="link1 py-2 text-white no-underline text-center flex flex-nowrap mx-auto"
      >
        Back To Home Page <AiOutlineLink className={"h-full ml-1"} />
      </Link>
    </div>
  );
}

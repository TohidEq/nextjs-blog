import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secrect = request.nextUrl.searchParams.get("secret");
  if (secrect !== process.env.MY_SECRET_TOKEN) {
    return new NextResponse(
      JSON.stringify({
        message: "Invalid Token",
      }),
      {
        status: 401,
        statusText: "Unauthorized",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);

  return NextResponse.json({ revalidated: true });
}

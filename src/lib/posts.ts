export async function getPostsByName(
  fileName: string
): Promise<BlogPost | undefined> {
  //
  const res = await fetch(
    `https://raw.githubusercontent.com/TohidEq/test-mdx-posts/master/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === "404: Not Found") return undefined;

  const id = fileName.replace(/\.mdx$/, "");

  //
  return undefined;
  //
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/TohidEq/test-mdx-posts/git/trees/master?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;
  //

  const repoFileTree: FileTree = await res.json();

  const filesArray = repoFileTree.tree
    .map((item) => item.path)
    .filter((path) => path.endsWith(".mdx"));

  //
  return undefined;
  //
}

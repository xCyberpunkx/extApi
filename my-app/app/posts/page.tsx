import prisma from "@/lib/prisma";
import Link from "next/link";


export default async function Posts() {
  const posts = await prisma.posts.findMany({
    orderBy: {
      createdAt: "desc"
    },
  });
  const postCount = await prisma.posts.count();
  return (
    <div className="container mx-auto p-4">
      {posts.map((post) => (
        <div key={post.id} className="border border-gray-300 rounded-md p-4 mb-4">
          <div className="text-gray-500 text-sm mb-2">All posts: {postCount}</div>
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <Link href={`/posts/${post.id}`} className="text-blue-500">Read More</Link>
        </div>
      ))}
    </div>
  );
}

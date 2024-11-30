import prisma from "@/lib/prisma";



export default async function Post({ params }: { params: { id: string } }) {
  const posts = await prisma.posts.findUnique({ where: { id: params.id } });
  return (
    <div className="container mx-auto p-4">
      {posts ? (
        <div key={posts.id} className="border border-gray-300 rounded-md p-4 mb-4">
          <h2 className="text-2xl font-bold">{posts.title}</h2>
          <h2 className="text-gray-500">{posts.content}</h2>
        </div>
      ) : null}
    </div>
  );
}


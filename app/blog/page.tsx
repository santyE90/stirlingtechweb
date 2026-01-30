import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "X",
    date: "Jan 2026",
    excerpt:
      "X",
  },
  {
    title: "Y",
    date: "Jan 2026",
    excerpt:
      "Y",
  },
  {
    title: "Z",
    date: "Jan 2026",
    excerpt:
      "Z",
  },
  {
    title: "F",
    date: "Jan 2026",
    excerpt:
      "F",
  },
  {
    title: "W",
    date: "Jan 2026",
    excerpt:
      "W",
  },
  {
    title: "P",
    date: "Jan 2026",
    excerpt:
      "P",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
          <p className="mt-3 text-gray-700">
            Updates, ideas, and progress.
          </p>
        </div>

        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="p-6">
            <p className="text-sm text-gray-600">{p.date}</p>
            <h2 className="mt-2 text-lg font-medium">{p.title}</h2>
            <p className="mt-3 text-sm text-gray-700">{p.excerpt}</p>

            <div className="mt-6">
              <Link
                href="#"
                className="text-sm font-medium underline underline-offset-4"
              >
                Read more
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

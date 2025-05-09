import { notFound } from "next/navigation";
import { BlogCardProps } from "@/types/blog";

const blogData: BlogCardProps[] = [
  {
    slug: "casual-wardrobe-styling",
    category: "Styling Tips",
    date: "Feb 19, 2025",
    title: "Transform your casual wardrobe into a chic statement",
    description: "Transform your casual wardrobe into a chic statement with these simple styling tricks",
    content: "Here is the full content of the blog post about transforming your wardrobe...",
  },
  {
    slug: "wardrobe-staples-guide",
    category: "Fashion Guide",
    date: "Feb 19, 2025",
    title: "10 must-have wardrobe staples every fashion lover should own",
    description: "Timeless style and versatility come from these essential pieces.",
    content: "These are the 10 essentials every fashion-forward wardrobe should include...",
  },
  {
    slug: "office-workwear-essentials",
    category: "Workwear",
    date: "Feb 19, 2025",
    title: "Fashionable workwear essentials for every professional",
    description: "Build a stylish and functional office wardrobe with these key items.",
    content: "Let’s explore the top picks for professional yet stylish office attire...",
  },
];

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params }: Props) {
  const post = blogData.find((item) => item.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-gray-500 mb-2">{post.category} • {post.date}</p>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-700 mb-8">{post.description}</p>
      <div className="text-gray-800 leading-relaxed">
        {post.content}
      </div>
    </main>
  );
}

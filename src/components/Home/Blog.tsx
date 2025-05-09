import Link from "next/link";
import { BlogCardProps } from "@/types/blog";

const BlogCard: React.FC<BlogCardProps> = ({ slug, category, date, title, description }) => {
  return (
    <div className="border p-6 flex flex-col gap-4 bg-slate-200 hover:shadow-md transition-all">
      <div className="flex gap-3">
        <span className="px-3 py-1 bg-gray-100 text-sm rounded">{category}</span>
        <span className="px-3 py-1 bg-gray-100 text-sm rounded">{date}</span>
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-auto">
        <Link href={`/articles/${slug}`} className="flex items-center text-sm text-black font-medium hover:underline">
          Read more <span className="ml-1">»</span>
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;
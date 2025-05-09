import BlogCard from '@/components/Home/Blog'
import Category from '@/components/Home/Category'
import Review from '@/components/Our-Story/Review';
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


const page = () => {
  return (
   <>
   <Category />
   <section className="py-12 px-6">
        <h4 className="uppercase text-sm tracking-wide text-gray-500 mb-2">⌘ OUR BLOGS</h4>
        <h2 className="text-4xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              category={post.category}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </section>
      <Review />
   </>
  )
}

export default page
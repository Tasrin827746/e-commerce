import BlogCard from '@/components/Home/Blog'
import { BlogCardProps } from "@/types/blog";

const blogData: BlogCardProps[] = [
    {
      slug: "1",
      category: "Styling Tips",
      date: "Feb 19, 2025",
      title: "Transform your casual wardrobe into a chic statement",
      description: "Transform your casual wardrobe into a chic statement with these simple styling tricks",
      content: "Here is the full content of the blog post about transforming your wardrobe...",
    },
    {
      slug: "2",
      category: "Fashion Guide",
      date: "Feb 19, 2025",
      title: "10 must-have wardrobe staples every fashion lover should own",
      description: "Timeless style and versatility come from these essential pieces.",
      content: "These are the 10 essentials every fashion-forward wardrobe should include...",
    },
    {
      slug: "3",
      category: "Workwear",
      date: "Feb 19, 2025",
      title: "Fashionable workwear essentials for every professional",
      description: "Build a stylish and functional office wardrobe with these key items.",
      content: "Let’s explore the top picks for professional yet stylish office attire...",
    },
    {
      slug: "4",
      category: "Seasonal Trends",
      date: "Feb 19, 2025",
      title: "Spring 2025 trends you need in your closet",
      description: "From pastel palettes to flowy silhouettes — get ahead of spring fashion.",
      content: "Explore the top trends that are taking over Spring 2025. From airy fabrics to soft color stories, we break down what’s in this season and how you can wear it confidently.",
    },
    {
      slug: "5",
      category: "Sustainable Fashion",
      date: "Feb 19, 2025",
      title: "Eco-friendly fashion brands to watch this year",
      description: "Support sustainability without compromising style with these top picks.",
      content: "Discover the leading eco-conscious brands in 2025 that are redefining ethical fashion. These labels focus on low-impact materials, fair labor, and timeless design.",
    },
    {
      slug: "6",
      category: "Accessories",
      date: "Feb 19, 2025",
      title: "How to elevate any outfit with the right accessories",
      description: "From belts to bags, the little things make the biggest difference.",
      content: "Accessories can make or break your outfit. Learn how to choose and style the perfect pieces—whether it’s statement earrings, structured handbags, or the perfect pair of sunglasses.",
    },
  ];  


const page = () => {
  return (
   <>
    <section className="py-12 px-6 mt-20">
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
   </>
  )
}

export default page
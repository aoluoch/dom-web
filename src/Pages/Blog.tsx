import Cover from "../components/Cover"
import BlogComponent from "../components/BlogComponent"


const Blog = () => {
  return (
    <>
    <Cover
    title="DOM BLOG"
    subtitle="Welcome to our blog. Here you'll find the latest updates, teachings, and insights from DOM."/>

    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore our latest articles and insights.</h2>
      </div>
      <BlogComponent />
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default Blog

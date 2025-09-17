import CoverImage from "../components/CoverImage"
import BlogComponent from "../components/BlogComponent"


const Blog = () => {
  return (
    <>
    <CoverImage
      title="DOM BLOG"
      subtitle="Welcome to our blog. Here you'll find the latest updates, teachings, and insights from DOM."
      images={[
        "https://live.staticflickr.com/65535/54793470115_d0e940cf78_z.jpg",
        "https://live.staticflickr.com/65535/54793469475_cc34e734c0_z.jpg",
      ]}
    />

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

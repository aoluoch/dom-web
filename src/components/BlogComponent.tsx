import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { client } from "../lib/contentfulClient"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import type { Document } from "@contentful/rich-text-types"
import type {
  Asset,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
} from "contentful"

interface BlogSkeleton extends EntrySkeletonType {
  contentTypeId: "blog"
  fields: {
    title: EntryFieldTypes.Symbol
    image: EntryFieldTypes.AssetLink
    blogSummary: EntryFieldTypes.RichText
    description?: EntryFieldTypes.RichText
  }
}

const BlogComponent = () => {
  const [blogs, setBlogs] = useState<Entry<BlogSkeleton>[]>([])
  const [assetsMap, setAssetsMap] = useState<Record<string, Asset>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    client
      .getEntries<BlogSkeleton>({ 
        content_type: "blog", 
        include: 2,
        order: ['-sys.createdAt'] // Show newest blogs first
      })
      .then((response: EntryCollection<BlogSkeleton>) => {
        if (!isMounted) return
        const items = response.items ?? []
        const assets = (response.includes?.Asset ?? []) as Asset[]
        const map: Record<string, Asset> = {}
        assets.forEach((a: Asset) => {
          const id = (a as Asset).sys?.id as string | undefined
          if (id) map[id] = a
        })
        setBlogs(items)
        setAssetsMap(map)
      })
      .catch((e: unknown) => {
        if (!isMounted) return
        const message = e instanceof Error ? e.message : "Failed to load blogs"
        setError(message)
      })
      .finally(() => {
        if (!isMounted) return
        setLoading(false)
      })
    return () => {
      isMounted = false
    }
  }, [])

  const getFirstLocaleString = (value: unknown): string | undefined => {
    if (typeof value === "string") return value
    if (value && typeof value === "object") {
      const first = Object.values(value as Record<string, string | undefined>)[0]
      return typeof first === "string" ? first : undefined
    }
    return undefined
  }

  const getLinkId = (link: unknown): string | undefined => {
    if (!link || typeof link !== "object") return undefined
    const sys = (link as { sys?: { id?: string } }).sys
    return sys?.id
  }

  const blogCards = useMemo(() => {
    return blogs.map((blog) => {
      const title = getFirstLocaleString(blog.fields.title) ?? "Untitled Blog"
      const summaryDoc = blog.fields.blogSummary as Document | undefined
      const summary = summaryDoc ? documentToPlainTextString(summaryDoc) : ""
      const imageId = getLinkId(blog.fields.image)
      const asset = imageId ? assetsMap[imageId] : undefined
      const rawUrl = getFirstLocaleString((asset as Asset | undefined)?.fields?.file?.url)
      const imageUrl = rawUrl ? (rawUrl.startsWith("http") ? rawUrl : `https:${rawUrl}`) : undefined
      
      return { 
        id: blog.sys.id, 
        title, 
        summary, 
        imageUrl
      }
    })
  }, [blogs, assetsMap])

  if (loading) {
    return (
      <div className="py-8">
        <p className="text-gray-600">Loading blogs...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {blogCards.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative overflow-hidden md:w-2/5 lg:w-1/3 flex-shrink-0 bg-gray-50">
              {blog.imageUrl ? (
                <img
                  src={`${blog.imageUrl}?w=800&fm=webp&q=85`}
                  alt={blog.title}
                  className="w-full h-64 md:h-80 lg:h-96 object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${blog.imageUrl ? 'hidden' : ''}`}>
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{blog.title}</h3>
              {blog.summary && (
                <p className="text-base text-gray-600 mb-6 leading-relaxed line-clamp-4">{blog.summary}</p>
              )}
              <Link
                to={`/blog/${blog.id}`}
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-fit"
              >
                Read more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogComponent

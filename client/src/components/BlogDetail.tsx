import { useEffect, useMemo, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { client } from "../lib/contentfulClient"
import type {
  Asset,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
} from "contentful"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import type { Document } from "@contentful/rich-text-types"

interface BlogSkeleton extends EntrySkeletonType {
  contentTypeId: "blog"
  fields: {
    title: EntryFieldTypes.Symbol
    image: EntryFieldTypes.AssetLink
    blogSummary: EntryFieldTypes.RichText
    description?: EntryFieldTypes.RichText
  }
}

const getFirstLocaleString = (value: unknown): string | undefined => {
  if (typeof value === "string") return value
  if (value && typeof value === "object") {
    const first = Object.values(value as Record<string, string | undefined>)[0]
    return typeof first === "string" ? first : undefined
  }
  return undefined
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [entry, setEntry] = useState<Entry<BlogSkeleton> | null>(null)
  const [assetsMap, setAssetsMap] = useState<Record<string, Asset>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    let isMounted = true
    setLoading(true)
    client
      .getEntries<BlogSkeleton>({ content_type: "blog", "sys.id": id, include: 2, limit: 1 })
      .then((res: EntryCollection<BlogSkeleton>) => {
        if (!isMounted) return
        const e = res.items?.[0] ?? null
        const assets = (res.includes?.Asset ?? []) as Asset[]
        const map: Record<string, Asset> = {}
        assets.forEach((a: Asset) => {
          const aid = (a as Asset).sys?.id as string | undefined
          if (aid) map[aid] = a
        })
        setEntry(e)
        setAssetsMap(map)
      })
      .catch((e: unknown) => {
        if (!isMounted) return
        const message = e instanceof Error ? e.message : "Failed to load blog"
        setError(message)
      })
      .finally(() => {
        if (!isMounted) return
        setLoading(false)
      })
    return () => {
      isMounted = false
    }
  }, [id])

  const view = useMemo(() => {
    if (!entry) return null
    const title = getFirstLocaleString(entry.fields.title) ?? "Untitled Blog"
    const imageId = (entry.fields.image as unknown as { sys?: { id?: string } })?.sys?.id
    const asset = imageId ? assetsMap[imageId] : undefined
    const rawUrl = getFirstLocaleString((asset as Asset | undefined)?.fields?.file?.url)
    const imageUrl = rawUrl ? (rawUrl.startsWith("http") ? rawUrl : `https:${rawUrl}`) : undefined
    const descriptionDoc = entry.fields.description as Document | undefined
    const descriptionText: string | undefined = descriptionDoc ? documentToPlainTextString(descriptionDoc) : undefined
    return { title, imageUrl, descriptionText }
  }, [entry, assetsMap])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">Loading blog...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  if (!view) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-600">Blog not found.</p>
        <Link to="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
      </div>
    )
  }

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">{view.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="w-full">
          {view.imageUrl && (
            <img
              src={`${view.imageUrl}?w=1600&fit=fill&fm=jpg&q=80`}
              alt={view.title}
              className="w-full h-auto md:h-full object-cover rounded-xl shadow"
            />
          )}
        </div>

        <div className="w-full">
          {view.descriptionText && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Blog Content</h2>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{view.descriptionText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="mt-16 border-t border-gray-300"></div>
    </>
  )
}

export default BlogDetail

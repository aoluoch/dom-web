import { useEffect, useMemo, useState } from "react"
import { client } from "../lib/contentfulClient"
import type {
  Asset,
  Entry,
  EntryCollection,
  EntrySkeletonType,
  EntryFieldTypes,
} from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import type { Document } from "@contentful/rich-text-types"

interface MissionSkeleton extends EntrySkeletonType {
  contentTypeId: "mission"
  fields: {
    title: EntryFieldTypes.Symbol
    image: EntryFieldTypes.AssetLink
    description: EntryFieldTypes.RichText
  }
}

const Mission = () => {
  const [mission, setMission] = useState<Entry<MissionSkeleton> | null>(null)
  const [assetsMap, setAssetsMap] = useState<Record<string, Asset>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    client
      .getEntries<MissionSkeleton>({ content_type: "mission", include: 2, limit: 1 })
      .then((response: EntryCollection<MissionSkeleton>) => {
        if (!isMounted) return
        const item = response.items?.[0] ?? null
        const assets = (response.includes?.Asset ?? []) as Asset[]
        const map: Record<string, Asset> = {}
        assets.forEach((a: Asset) => {
          const id = (a as Asset).sys?.id as string | undefined
          if (id) map[id] = a
        })
        setMission(item)
        setAssetsMap(map)
      })
      .catch((e: unknown) => {
        if (!isMounted) return
        const message = e instanceof Error ? e.message : "Failed to load mission content"
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

  const { title, imageUrl, description } = useMemo(() => {
    if (!mission) return { title: "Our Mission", imageUrl: undefined as string | undefined, description: null as Document | null }
    const titleVal = mission.fields.title
    const titleText = getFirstLocaleString(titleVal) ?? "Our Mission"
    const imageId = getLinkId(mission.fields.image)
    const asset = imageId ? assetsMap[imageId] : undefined
    const rawUrl = getFirstLocaleString(asset?.fields?.file?.url)
    const imgUrl = rawUrl ? (rawUrl.startsWith("http") ? rawUrl : `https:${rawUrl}`) : undefined
    const descDoc = (mission.fields.description as unknown as Document) ?? null
    return { title: titleText, imageUrl: imgUrl, description: descDoc }
  }, [mission, assetsMap])

  if (loading) {
    return (
      <div className="py-8">
        <p className="text-gray-600">Loading mission content...</p>
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

  if (!mission) {
    return (
      <div className="py-8">
        <p className="text-gray-600">No mission content found.</p>
      </div>
    )
  }

  return (
    <section className="max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full h-full order-2 lg:order-1">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=1200&fit=pad&fm=jpg&q=85&bg=rgb:ffffff`}
              alt={title}
              className="w-full h-full rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-lg" />
          )}
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <div className="flex items-start gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
          </div>
          
          {description && (
            <div className="prose prose-lg max-w-none text-gray-700">
              {documentToReactComponents(description)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Mission

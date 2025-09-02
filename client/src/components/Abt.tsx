import { useEffect, useMemo, useState } from "react"
import { client } from "../lib/contentfulClient"
import type {
  Asset,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
} from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import type { Document } from "@contentful/rich-text-types"
import { BLOCKS } from "@contentful/rich-text-types"
import Values from "./Values"
import Mission from "./Mission"

interface AboutSkeleton extends EntrySkeletonType {
  contentTypeId: "about"
  fields: {
    name?: EntryFieldTypes.Symbol
    image: EntryFieldTypes.AssetLink
    description: EntryFieldTypes.RichText
  }
}

const Abt = () => {
  const [about, setAbout] = useState<Entry<AboutSkeleton> | null>(null)
  const [assetsMap, setAssetsMap] = useState<Record<string, Asset>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    client
      .getEntries<AboutSkeleton>({ content_type: "about", include: 2, limit: 1 })
      .then((response: EntryCollection<AboutSkeleton>) => {
        if (!isMounted) return
        const item = response.items?.[0] ?? null
        const assets = (response.includes?.Asset ?? []) as Asset[]
        const map: Record<string, Asset> = {}
        assets.forEach((a: Asset) => {
          const id = (a as Asset).sys?.id as string | undefined
          if (id) map[id] = a
        })
        setAbout(item)
        setAssetsMap(map)
      })
      .catch((e: unknown) => {
        if (!isMounted) return
        const message = e instanceof Error ? e.message : "Failed to load about content"
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
    if (!about) return { title: "About", imageUrl: undefined as string | undefined, description: null as Document | null }
    const nameVal = about.fields.name
    const titleText = getFirstLocaleString(nameVal) ?? "About"
    const imageId = getLinkId(about.fields.image)
    const asset = imageId ? assetsMap[imageId] : undefined
    const rawUrl = getFirstLocaleString(asset?.fields?.file?.url)
    const imgUrl = rawUrl ? (rawUrl.startsWith("http") ? rawUrl : `https:${rawUrl}`) : undefined
    const descDoc = (about.fields.description as unknown as Document) ?? null
    return { title: titleText, imageUrl: imgUrl, description: descDoc }
  }, [about, assetsMap])

  if (loading) {
    return (
      <div className="py-8">
        <p className="text-gray-600">Loading about content...</p>
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

  if (!about) {
    return (
      <div className="py-8">
        <p className="text-gray-600">No about content found.</p>
      </div>
    )
  }

  return (
    <>
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Image */}
        <div className="w-full h-full">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=1200&fit=pad&fm=jpg&q=85&bg=rgb:ffffff`}
              alt={title}
              className="w-full h-full rounded-md shadow-md object-cover bg-white"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-md" />
          )}
        </div>

          {/* Description */}
          <div className="prose max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            {description ? documentToReactComponents(description, {
              renderText: (text) => {
                return text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < text.split('\n').length - 1 && <br />}
                  </span>
                ));
              },
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node) => {
                  const assetId = node.data?.target?.sys?.id;
                  if (assetId && assetsMap[assetId]) {
                    const asset = assetsMap[assetId];
                    const rawUrl = getFirstLocaleString(asset.fields?.file?.url);
                    const imageUrl = rawUrl ? (rawUrl.startsWith("http") ? rawUrl : `https:${rawUrl}`) : undefined;
                    
                    if (imageUrl) {
                      return (
                        <img
                          src={`${imageUrl}?w=800&fit=fill&fm=jpg&q=80`}
                          alt={getFirstLocaleString(asset.fields?.title) || "Embedded asset"}
                          className="w-full h-auto rounded-lg shadow-md my-4"
                        />
                      );
                    }
                  }
                  return null;
                },
              },
            }) : null}
          </div>
        </div>
      </section>
      
      <Values />
      <Mission />
    </>
  )
}

export default Abt



import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { client } from "../lib/contentfulClient"
import type {
  Asset,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
} from "contentful"

interface EventSkeleton extends EntrySkeletonType {
  contentTypeId: "events"
  fields: {
    eventTitle: EntryFieldTypes.Symbol
    image: EntryFieldTypes.AssetLink
    eventSummary: EntryFieldTypes.Symbol
    description?: EntryFieldTypes.RichText
  }
}

const EventComponent = () => {
  const [events, setEvents] = useState<Entry<EventSkeleton>[]>([])
  const [assetsMap, setAssetsMap] = useState<Record<string, Asset>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    client
      .getEntries<EventSkeleton>({ 
        content_type: "events", 
        include: 2,
        order: ['-sys.createdAt'] // Show newest events first
      })
      .then((response: EntryCollection<EventSkeleton>) => {
        if (!isMounted) return
        const items = response.items ?? []
        const assets = (response.includes?.Asset ?? []) as Asset[]
        const map: Record<string, Asset> = {}
        assets.forEach((a: Asset) => {
          const id = (a as Asset).sys?.id as string | undefined
          if (id) map[id] = a
        })
        setEvents(items)
        setAssetsMap(map)
      })
      .catch((e: unknown) => {
        if (!isMounted) return
        const message = e instanceof Error ? e.message : "Failed to load events"
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

  const eventCards = useMemo(() => {
    return events.map((event) => {
      const title = getFirstLocaleString(event.fields.eventTitle) ?? "Untitled Event"
      const summary = getFirstLocaleString(event.fields.eventSummary) ?? ""
      const imageId = getLinkId(event.fields.image)
      const asset = imageId ? assetsMap[imageId] : undefined
      const rawUrl = getFirstLocaleString((asset as Asset | undefined)?.fields?.file?.url)
      const imageUrl = rawUrl ? (rawUrl.startsWith("http") ? rawUrl : `https:${rawUrl}`) : undefined
      
      return { 
        id: event.sys.id, 
        title, 
        summary, 
        imageUrl
      }
    })
  }, [events, assetsMap])

  if (loading) {
    return (
      <div className="py-8">
        <p className="text-gray-600">Loading events...</p>
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
      {eventCards.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative overflow-hidden md:w-2/5 lg:w-1/3 flex-shrink-0 bg-gray-50">
              {event.imageUrl ? (
                <img
                  src={`${event.imageUrl}?w=800&fm=webp&q=85`}
                  alt={event.title}
                  className="w-full h-64 md:h-80 lg:h-96 object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${event.imageUrl ? 'hidden' : ''}`}>
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{event.title}</h3>
              {event.summary && (
                <p className="text-base text-gray-600 mb-6 leading-relaxed line-clamp-4">{event.summary}</p>
              )}
              <Link
                to={`/events/${event.id}`}
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

export default EventComponent

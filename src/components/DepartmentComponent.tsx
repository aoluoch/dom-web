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

interface DepartmentSkeleton extends EntrySkeletonType {
  contentTypeId: "department"
  fields: {
    title: EntryFieldTypes.Symbol
    image: EntryFieldTypes.AssetLink
    description?: EntryFieldTypes.RichText
  }
}

const DepartmentComponent = () => {
  const [departments, setDepartments] = useState<Entry<DepartmentSkeleton>[]>([])
  const [assetsMap, setAssetsMap] = useState<Record<string, Asset>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    client
      .getEntries<DepartmentSkeleton>({ content_type: "department", include: 2 })
      .then((response: EntryCollection<DepartmentSkeleton>) => {
        if (!isMounted) return
        const items = response.items ?? []
        const assets = (response.includes?.Asset ?? []) as Asset[]
        const map: Record<string, Asset> = {}
        assets.forEach((a: Asset) => {
          const id = (a as Asset).sys?.id as string | undefined
          if (id) map[id] = a
        })
        setDepartments(items)
        setAssetsMap(map)
      })
      .catch((e: unknown) => {
        if (!isMounted) return
        const message = e instanceof Error ? e.message : "Failed to load departments"
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

  const departmentCards = useMemo(() => {
    return departments.map((dep) => {
      const title = getFirstLocaleString(dep.fields.title) ?? "Untitled"
      const imageId = getLinkId(dep.fields.image)
      const asset = imageId ? assetsMap[imageId] : undefined
      const rawUrl = getFirstLocaleString((asset as Asset | undefined)?.fields?.file?.url)
      const imageUrl = rawUrl ? (rawUrl.startsWith("http") ? rawUrl : `https:${rawUrl}`) : undefined
      return { id: dep.sys.id, title, imageUrl }
    })
  }, [departments, assetsMap])

  if (loading) {
    return (
      <div className="py-8">
        <p className="text-gray-600">Loading departments...</p>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {departmentCards.map((dep) => (
        <div key={dep.id} className="bg-white rounded-sm shadow-md overflow-hidden border border-gray-100">
          {dep.imageUrl ? (
            <img
              src={`${dep.imageUrl}?w=800&h=500&fit=fill&fm=jpg&q=80`}
              alt={dep.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-48 bg-gray-100" />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{dep.title}</h3>
            <Link
              to={`/departments/${dep.id}`}
              className="mt-2 inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DepartmentComponent



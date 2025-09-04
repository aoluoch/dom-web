import { useEffect, useMemo, useState } from "react"
import { client } from "../lib/contentfulClient"
import type {
  Entry,
  EntryCollection,
  EntrySkeletonType,
  EntryFieldTypes,
} from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import type { Document } from "@contentful/rich-text-types"

interface ValuesSkeleton extends EntrySkeletonType {
  contentTypeId: "values"
  fields: {
    title: EntryFieldTypes.Symbol
    description: EntryFieldTypes.RichText
  }
}

const Values = () => {
  const [values, setValues] = useState<Entry<ValuesSkeleton>[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    client
      .getEntries<ValuesSkeleton>({ content_type: "values", include: 2 })
      .then((response: EntryCollection<ValuesSkeleton>) => {
        if (!isMounted) return
        const items = response.items ?? []
        setValues(items)
      })
      .catch((e: unknown) => {
        if (!isMounted) return
        const message = e instanceof Error ? e.message : "Failed to load values content"
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

  const valuesList = useMemo(() => {
    return values.map(value => ({
      title: getFirstLocaleString(value.fields.title) ?? "Value",
      description: (value.fields.description as unknown as Document) ?? null
    }))
  }, [values])

  if (loading) {
    return (
      <div className="py-8">
        <p className="text-gray-600">Loading values content...</p>
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

  if (values.length === 0) {
    return (
      <div className="py-8">
        <p className="text-gray-600">No values content found.</p>
      </div>
    )
  }

  return (
    <section className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Values
        </h1>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {valuesList.map((value, index) => (
          <div key={index} className="flex-1 min-w-[250px] max-w-[300px] text-center">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              {value.description && (
                <div className="prose prose-sm text-gray-700">
                  {documentToReactComponents(value.description)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Values

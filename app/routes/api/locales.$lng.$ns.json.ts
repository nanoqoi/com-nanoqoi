import { LoaderFunctionArgs } from '@vercel/remix'
import dynamicTranslationUrls from 'app/dynamic.translations.json'

export async function loader({ params }: LoaderFunctionArgs) {
  // Since this is dynamic, casting to the type will be fine.
  const locale = (params.lng ?? 'en') as keyof typeof dynamicTranslationUrls

  const translations = await fetch(dynamicTranslationUrls[locale]).then((res) =>
    res.json(),
  )

  const translation = translations[params.ns ?? 'generic'] || {}

  return Response.json(translation, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': 'application/json',
    },
  })
}

import { Helmet } from "react-helmet-async"

export interface HeadProps {
  title?: string
  description?: string
  canonical?: string
}

export function Head({ title, description, canonical }: HeadProps) {
  return (
    <Helmet>
      <title>Sa11y - {title}</title>
      <link
        rel="canonical"
        href={`${import.meta.env.VITE_CLIENT_URL}/${canonical}`}
      />
      <meta
        name="description"
        content={`Sa11y - check and score the accessibility of any HTML document - ${description}`}
      />
    </Helmet>
  )
}

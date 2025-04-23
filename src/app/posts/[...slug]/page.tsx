import { getPostBySlug } from '@/lib/api'

export default async function Post({ params }: { params: { slug: string[] } }) {
  // Join the slug array to create the full path
  const slug = params.slug.join('/')
  const post = await getPostBySlug(slug)

  return (
    <article className="post-content">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
} 
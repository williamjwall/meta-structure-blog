import Link from 'next/link'
import { getPostsByFolder } from '@/lib/api'
import Script from 'next/script'

export default async function Home() {
  const postsByFolder = getPostsByFolder()

  return (
    <>
      <canvas id="phylogenetic-canvas"></canvas>
      <section className="blog-topics">
        {Object.entries(postsByFolder).map(([folder, posts]) => (
          <div key={folder} className="folder-section">
            <h2 className="folder-title">{folder === 'root' ? 'General' : folder}</h2>
            <ul className="blog-posts-list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`}>
                    <h3>{post.title}</h3>
                    <p className="excerpt">{post.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" />
      <Script src="/js/phylogenetic_trees.js" />
      <Script id="add-home-class">
        {`
          document.body.classList.add('home-page');
        `}
      </Script>
    </>
  )
}

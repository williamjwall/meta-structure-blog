import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import type { Metadata } from "next";
import 'katex/dist/katex.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Metastructure Blog',
  description: 'A blog about structures and patterns in various domains',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <header>
          <div className="header-content">
            <div className="title-container">
              <Link href="/" className="blog-title-link">
                <h1 className="blog-title">The Metastructure Blog</h1>
                <div className="author-byline">by Will Wall</div>
              </Link>
            </div>
            <nav>
              <a href="https://williamjwall.github.io/index.html">Portfolio</a>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

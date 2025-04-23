import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import breaks from "remark-breaks";
import math from "remark-math";
import rehypeKatex from "rehype-katex";
import { unified } from "unified";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import { Root } from "mdast";

const postsDirectory = join(process.cwd(), "_posts");

function getAllFiles(dir: string, baseDir: string = ""): { path: string, slug: string }[] {
  const files = fs.readdirSync(dir);
  let allFiles: { path: string, slug: string }[] = [];

  files.forEach(file => {
    const fullPath = join(dir, file);
    const relativePath = fullPath.replace(postsDirectory, '').replace(/^\//, '');
    
    if (fs.statSync(fullPath).isDirectory()) {
      allFiles = allFiles.concat(getAllFiles(fullPath, relativePath));
    } else if (file.endsWith('.md')) {
      const slug = relativePath.replace(/\.md$/, '');
      allFiles.push({ 
        path: fullPath, 
        slug: decodeURIComponent(slug) // Decode the slug to match the original filename
      });
    }
  });

  return allFiles;
}

export function getPostSlugs() {
  return getAllFiles(postsDirectory).map(({ slug }) => slug);
}

export async function getPostBySlug(slug: string) {
  const { path } = getAllFiles(postsDirectory).find(f => f.slug === slug) || { 
    path: join(postsDirectory, ...slug.split('/')) + '.md'
  };
  const fileContents = fs.readFileSync(path, "utf8");
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML with enhanced features
  const processedContent = await remark()
    .use(gfm) // GitHub Flavored Markdown
    .use(breaks) // Convert line breaks to <br>
    .use(math) // Support for math equations
    .use(html, { sanitize: false }) // Convert to HTML without sanitizing
    .use(rehypeKatex) // Render math equations
    .use(rehypeHighlight) // Syntax highlighting
    .process(content);
  
  const contentHtml = processedContent.toString();

  return { ...data, slug, content: contentHtml } as Post;
}

export function getAllPosts(): Post[] {
  const files = getAllFiles(postsDirectory);
  const posts = files
    .map(({ path, slug }) => {
      const fileContents = fs.readFileSync(path, "utf8");
      const { data, content } = matter(fileContents);
      return { ...data, slug, content } as Post;
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostsByFolder(): Record<string, Post[]> {
  const posts = getAllPosts();
  const postsByFolder: Record<string, Post[]> = {};

  posts.forEach(post => {
    const folder = post.slug.split('/')[0] || 'root';
    if (!postsByFolder[folder]) {
      postsByFolder[folder] = [];
    }
    postsByFolder[folder].push(post);
  });

  return postsByFolder;
}

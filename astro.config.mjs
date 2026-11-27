// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { blogPosts } from './src/data/blogPosts.ts';

const blogDates = new Map(
  blogPosts.map((post) => [
    `https://fixblu.com.br/blog/${post.slug}/`,
    new Date(`${post.updatedDate ?? post.date}T12:00:00.000Z`),
  ])
);

const latestBlogDate = blogPosts.reduce((latest, post) => {
  const candidate = new Date(`${post.updatedDate ?? post.date}T12:00:00.000Z`);
  return candidate > latest ? candidate : latest;
}, new Date('2026-09-22T12:00:00.000Z'));

export default defineConfig({
  site: 'https://fixblu.com.br',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/avaliar') && !page.includes('/linktree'),
      serialize(item) {
        if (item.url === 'https://fixblu.com.br/blog/') {
          item.lastmod = latestBlogDate;
          return item;
        }

        const postDate = blogDates.get(item.url);
        if (postDate) {
          item.lastmod = postDate;
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});

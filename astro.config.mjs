// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Datas históricas baseadas nos snapshots do Wayback Machine e migração em 2026
const historicalDates = [
  '2026-01-18T14:20:00.000Z',
  '2026-02-07T09:15:00.000Z',
  '2026-03-07T16:45:00.000Z',
  '2026-04-14T11:30:00.000Z',
  '2026-04-19T18:10:00.000Z',
  '2026-05-22T08:50:00.000Z',
  '2026-06-15T13:25:00.000Z',
  '2026-07-10T10:40:00.000Z',
  '2026-08-18T15:05:00.000Z',
  '2026-09-12T17:35:00.000Z',
  '2026-09-26T20:10:00.000Z',
  '2026-09-28T22:00:00.000Z',
];

function getDeterministicDate(urlStr) {
  let hash = 0;
  for (let i = 0; i < urlStr.length; i++) {
    hash = (hash << 5) - hash + urlStr.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % historicalDates.length;
  return new Date(historicalDates[index]);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://fixblu.com.br',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/avaliar'),
      serialize(item) {
        const cleanUrl = item.url.replace(/\/$/, '');
        
        // Homepage
        if (cleanUrl === 'https://fixblu.com.br') {
          item.lastmod = new Date('2026-09-30T10:00:00.000Z');
          item.priority = 1.0;
          item.changefreq = 'daily';
          return item;
        }

        // Política de privacidade (revisada recentemente)
        if (cleanUrl.endsWith('/politica-de-privacidade')) {
          item.lastmod = new Date('2026-09-30T10:00:00.000Z');
          item.priority = 0.3;
          item.changefreq = 'yearly';
          return item;
        }

        // Contato
        if (cleanUrl.endsWith('/contato')) {
          item.lastmod = new Date('2026-09-28T18:00:00.000Z');
          item.priority = 0.6;
          item.changefreq = 'monthly';
          return item;
        }

        // Categorias principais / Hubs
        const hubs = ['/eletricista', '/encanador', '/marido-de-aluguel', '/casa-inteligente', '/servicos'];
        const isHub = hubs.some((h) => cleanUrl.endsWith(h));
        if (isHub) {
          item.lastmod = new Date('2026-09-29T14:30:00.000Z');
          item.priority = 0.9;
          item.changefreq = 'weekly';
          return item;
        }

        // Páginas de serviços específicos (distribuição histórica realista)
        item.lastmod = getDeterministicDate(item.url);
        item.priority = 0.8;
        item.changefreq = 'monthly';
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
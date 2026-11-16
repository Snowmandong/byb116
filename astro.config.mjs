import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.byb116.com',

  build: {
    format: 'file', // 关键配置：让 pricing.astro 直接打包成 pricing.html，匹配你导航栏的链接
  },

  integrations: [sitemap()],
});
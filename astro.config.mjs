// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	site: 'https://robinvanloonowasp.github.io',
	base: 'astro-starlight-guide',
	integrations: [
		starlight({
			title: 'OWASP Security Champions Guide',
			favicon: '/public/favicon.ico',
			social: {
				github: 'https://github.com/robinvanloonOWASP/astro-starlight-guide',
			},
			plugins: [starlightBlog()],
			sidebar: [
				{ label: 'Introduction', link: '/' },
				{ label: 'Manifesto', link: '/manifesto' },
				{
					label: 'Principles',
					autogenerate: { directory: 'principles' },
				},
				{ label: 'Get involved', link: '/get_involved' },
				{ label: 'Blog', link: '/blog' },
			],
		}),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://robinvanloonowasp.github.io',
	base: 'astro-starlight-guide',
	integrations: [
		starlight({
			title: 'OWASP Security Champions Guide',
			social: {
				github: 'https://github.com/robinvanloonOWASP/astro-starlight-guide',
			},
			sidebar: [
				{ label: 'Introduction', link: '/' },
				{ label: 'Manifesto', link: '/manifesto' },
				{
					label: 'Principles',
					autogenerate: { directory: 'principles' },
				},
				{ label: 'Get involved', link: '/get_involved' },
			],
		}),
	],
});

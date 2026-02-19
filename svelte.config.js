import adapter from '@sveltejs/adapter-static';

const githubPages = process.env.GH_PAGES === '1';

export default {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		prerender: {
			entries: ['/']
		},
		paths: {
			base: githubPages ? '/jjgo' : ''
		}
	}
};

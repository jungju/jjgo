<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import '../app.css';

	type NavItem = {
		id: 'devlog' | 'services' | 'price' | 'about';
		label: string;
		href: string;
	};

	const navItems: NavItem[] = [
		{ id: 'devlog', label: 'AI 창작기', href: `${base}/` },
		{ id: 'services', label: '서비스', href: `${base}/services` },
		{ id: 'price', label: 'Price', href: `${base}/price` },
		{ id: 'about', label: '소개', href: `${base}/about` }
	];

	const serviceRoutePrefixes = ['/services', '/tense', '/flash', '/flash2', '/blank', '/sentence', '/dialogue', '/sentencemd'];
	const matchesRoute = (pathname: string, prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`);

	const stripBase = (pathname: string) => {
		if (base && pathname.startsWith(base)) {
			const stripped = pathname.slice(base.length);
			return stripped || '/';
		}
		return pathname || '/';
	};

	const isActive = (itemId: NavItem['id'], pathname: string) => {
		const routePath = stripBase(pathname);
		if (itemId === 'devlog') {
			return routePath === '/' || routePath.startsWith('/story/');
		}
		if (itemId === 'services') {
			return serviceRoutePrefixes.some((prefix) => matchesRoute(routePath, prefix));
		}
		if (itemId === 'price') {
			return routePath === '/price';
		}
		return routePath === '/about';
	};
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="app-frame">
	<header class="top-header">
		<nav class="top-nav glass-panel" aria-label="메인 메뉴">
			{#each navItems as item}
				<a
					href={item.href}
					class:active={isActive(item.id, $page.url.pathname)}
					aria-current={isActive(item.id, $page.url.pathname) ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}
		</nav>
	</header>
	<slot />
</div>

<style>
	.app-frame {
		min-height: 100svh;
	}

	.top-header {
		position: sticky;
		top: 0;
		z-index: 40;
		padding: 0.8rem 1rem 0;
	}

	.top-nav {
		display: flex;
		gap: 0.45rem;
		padding: 0.38rem;
		max-width: 920px;
		margin: 0 auto;
	}

	.top-nav a {
		flex: 1;
		min-height: 2.1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.75rem;
		border: 1px solid transparent;
		font-size: 0.84rem;
		font-weight: 650;
		color: #cdddf0;
		background: rgba(5, 13, 26, 0.52);
		transition:
			background-color 180ms ease,
			border-color 180ms ease,
			color 180ms ease,
			transform 180ms ease;
	}

	.top-nav a:hover {
		border-color: rgba(132, 181, 224, 0.34);
		background: rgba(10, 22, 40, 0.78);
		transform: translateY(-1px);
	}

	.top-nav a.active {
		color: #ecf7ff;
		border-color: rgba(114, 201, 255, 0.52);
		background:
			linear-gradient(135deg, rgba(16, 48, 79, 0.88), rgba(10, 28, 49, 0.85)),
			rgba(9, 26, 42, 0.9);
		box-shadow: inset 0 -2px 0 rgba(124, 229, 242, 0.5);
	}

	.top-nav a:focus-visible {
		outline: 2px solid rgba(133, 232, 255, 0.7);
		outline-offset: 1px;
	}

	@media (max-width: 620px) {
		.top-header {
			padding: 0.7rem 0.65rem 0;
		}

		.top-nav {
			max-width: none;
		}
	}
</style>

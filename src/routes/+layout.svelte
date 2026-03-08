<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import '../app.css';

	type NavItem = {
		id: 'devlog' | 'services' | 'about';
		label: string;
		href: string;
	};

	const navItems: NavItem[] = [
		{ id: 'devlog', label: 'AI 창작기', href: `${base}/` },
		{ id: 'services', label: '서비스', href: `${base}/services` },
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
		if (itemId === 'devlog') return routePath === '/' || routePath.startsWith('/story/');
		if (itemId === 'services') return serviceRoutePrefixes.some((prefix) => matchesRoute(routePath, prefix));
		return routePath === '/about';
	};
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="app-frame">
	<header class="top-header">
		<div class="top-bar glass-panel">
			<a class="brand" href={`${base}/`} aria-label="JJGO 홈으로 이동">
				<span class="mark">JJ</span>
				<span class="wordmark">jjgo</span>
			</a>

			<nav class="top-nav" aria-label="메인 메뉴">
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
		</div>
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
		padding: 0.9rem 1rem 0;
	}

	.top-bar {
		max-width: 1120px;
		margin: 0 auto;
		padding: 0.55rem 0.7rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.68rem;
		padding-left: 0.15rem;
	}

	.mark {
		width: 2rem;
		height: 2rem;
		border-radius: 0.65rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--ink-0);
		color: #f6f0e6;
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: -0.04em;
	}

	.wordmark {
		font-size: 0.98rem;
		font-weight: 750;
		letter-spacing: -0.04em;
		text-transform: lowercase;
		color: var(--ink-0);
	}

	.top-nav {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		flex-wrap: wrap;
	}

	.top-nav a {
		position: relative;
		min-height: 2.2rem;
		padding: 0 0.85rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 999px;
		font-size: 0.88rem;
		font-weight: 700;
		color: var(--ink-2);
		transition: color 160ms ease, background-color 160ms ease, transform 160ms ease;
	}

	.top-nav a:hover {
		background: rgba(255, 255, 255, 0.52);
		color: var(--ink-0);
		transform: translateY(-1px);
	}

	.top-nav a.active {
		background: #fffaf2;
		color: var(--ink-0);
		box-shadow: inset 0 0 0 1px rgba(42, 37, 31, 0.08);
	}

	.top-nav a.active::after {
		content: '';
		position: absolute;
		left: 0.85rem;
		right: 0.85rem;
		bottom: 0.42rem;
		height: 2px;
		border-radius: 999px;
		background: var(--accent);
	}

	.top-nav a:focus-visible,
	.brand:focus-visible {
		outline: 2px solid rgba(40, 111, 106, 0.3);
		outline-offset: 2px;
	}

	@media (max-width: 720px) {
		.top-header {
			padding: 0.7rem 0.7rem 0;
		}

		.top-bar {
			padding: 0.6rem;
			align-items: flex-start;
			flex-direction: column;
		}

		.top-nav {
			width: 100%;
		}
	}
</style>

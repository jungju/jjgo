<script lang="ts">
	import { onMount } from 'svelte';

	const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
	const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

	type CountdownState = {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		targetMs: number;
		cycleKey: string;
	};

	const teaserPool = [
		'Signal detected: Midnight drop, maybe voice-first.',
		'이번 주 키워드: Memory Layer / private beta',
		'Closed build channel warming up...',
		'다음 오픈 후보: AI 협업 툴킷 vNext',
		'Something tiny, something sharp. Ship window near.',
		'이번 주는 실험적 UI 모듈이 열릴지도.',
		'Archive gate flicker: docs + prompts pack?',
		'Unknown payload. ETA after reset.'
	];

	const padNum = (value: number) => value.toString().padStart(2, '0');

	const getCycleKey = (ms: number) => {
		const kstDate = new Date(ms + KST_OFFSET_MS);
		return `${kstDate.getUTCFullYear()}-${padNum(kstDate.getUTCMonth() + 1)}-${padNum(kstDate.getUTCDate())}`;
	};

	const getNextResetMs = (nowMs: number) => {
		const kstDate = new Date(nowMs + KST_OFFSET_MS);
		const kstWeekday = kstDate.getUTCDay() === 0 ? 7 : kstDate.getUTCDay();
		const daysUntilNextMonday = (8 - kstWeekday) % 7 || 7;
		const targetAtKstClock = Date.UTC(
			kstDate.getUTCFullYear(),
			kstDate.getUTCMonth(),
			kstDate.getUTCDate() + daysUntilNextMonday,
			0,
			0,
			0,
			0
		);
		const targetMs = targetAtKstClock - KST_OFFSET_MS;
		return targetMs <= nowMs ? targetMs + WEEK_MS : targetMs;
	};

	const getCountdownState = (nowMs: number): CountdownState => {
		const targetMs = getNextResetMs(nowMs);
		const remainingSeconds = Math.floor(Math.max(0, targetMs - nowMs) / 1000);
		const days = Math.floor(remainingSeconds / 86400);
		const hours = Math.floor((remainingSeconds % 86400) / 3600);
		const minutes = Math.floor((remainingSeconds % 3600) / 60);
		const seconds = remainingSeconds % 60;
		const cycleKey = getCycleKey(targetMs - WEEK_MS);
		return { days, hours, minutes, seconds, targetMs, cycleKey };
	};

	const hashString = (value: string) => {
		let hash = 2166136261;
		for (let i = 0; i < value.length; i += 1) {
			hash ^= value.charCodeAt(i);
			hash = Math.imul(hash, 16777619);
		}
		return hash >>> 0;
	};

	const createSeededRng = (seed: number) => {
		let t = seed >>> 0;
		return () => {
			t = (t + 0x6d2b79f5) | 0;
			let next = Math.imul(t ^ (t >>> 15), 1 | t);
			next ^= next + Math.imul(next ^ (next >>> 7), 61 | next);
			return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
		};
	};

	const getWeeklyTeasers = (cycleKey: string) => {
		const random = createSeededRng(hashString(cycleKey));
		const count = 1 + Math.floor(random() * 3);
		const shuffled = [...teaserPool];
		for (let i = shuffled.length - 1; i > 0; i -= 1) {
			const j = Math.floor(random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled.slice(0, count);
	};

	const formatResetLocal = (ms: number) =>
		new Date(ms).toLocaleString('ko-KR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});

	let countdown = getCountdownState(Date.now());
	let weeklyTeasers = getWeeklyTeasers(countdown.cycleKey);
	let cycleKey = countdown.cycleKey;
	let timer: ReturnType<typeof setInterval> | undefined;

	onMount(() => {
		const tick = () => {
			const next = getCountdownState(Date.now());
			countdown = next;
			if (next.cycleKey !== cycleKey) {
				cycleKey = next.cycleKey;
				weeklyTeasers = getWeeklyTeasers(next.cycleKey);
			}
		};

		tick();
		timer = setInterval(tick, 1000);

		return () => {
			if (timer) clearInterval(timer);
		};
	});
</script>

<svelte:head>
	<title>카운트다운 | 나의 AI 창작기</title>
	<meta name="description" content="매주 월요일 00:00 (Asia/Seoul) 리셋되는 주간 카운트다운과 오픈 예측 티저." />
</svelte:head>

<main class="countdown-shell">
	<div class="bg-grid" aria-hidden="true"></div>
	<div class="bg-noise" aria-hidden="true"></div>

	<section class="count-card glass-panel">
		<p class="eyebrow">WEEKLY RESET SIGNAL</p>
		<h1>카운트다운</h1>
		<p class="summary">리셋 기준은 매주 월요일 00:00 (Asia/Seoul).</p>

		<div class="clock-grid" role="timer" aria-live="polite">
			<div class="unit">
				<span class="value">{padNum(countdown.days)}</span>
				<span class="label">DAYS</span>
			</div>
			<div class="unit">
				<span class="value">{padNum(countdown.hours)}</span>
				<span class="label">HOURS</span>
			</div>
			<div class="unit">
				<span class="value">{padNum(countdown.minutes)}</span>
				<span class="label">MIN</span>
			</div>
			<div class="unit">
				<span class="value">{padNum(countdown.seconds)}</span>
				<span class="label">SEC</span>
			</div>
		</div>

		<p class="reset-time">
			다음 리셋(로컬 시간)
			<strong>{formatResetLocal(countdown.targetMs)}</strong>
		</p>
	</section>

	<section class="teaser-card glass-panel">
		<h2>이번 주 오픈 예측</h2>
		<p>월요일 리셋 전까지 아래 티저는 고정됩니다.</p>
		<ul>
			{#each weeklyTeasers as teaser}
				<li>{teaser}</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	.countdown-shell {
		position: relative;
		max-width: 980px;
		margin: 0 auto;
		padding: 1rem 1rem 2rem;
		display: grid;
		gap: 1rem;
	}

	.bg-grid,
	.bg-noise {
		position: absolute;
		inset: 0;
		pointer-events: none;
		border-radius: 1rem;
	}

	.bg-grid {
		background-image:
			linear-gradient(rgba(126, 169, 201, 0.09) 1px, transparent 1px),
			linear-gradient(90deg, rgba(126, 169, 201, 0.09) 1px, transparent 1px);
		background-size: 30px 30px;
		mask-image: radial-gradient(circle at 50% 20%, rgba(0, 0, 0, 0.82), transparent 75%);
		opacity: 0.45;
	}

	.bg-noise {
		background:
			radial-gradient(circle at 15% 8%, rgba(43, 204, 255, 0.14), transparent 34%),
			radial-gradient(circle at 88% 14%, rgba(132, 255, 210, 0.11), transparent 32%),
			linear-gradient(180deg, rgba(8, 19, 36, 0.18), rgba(6, 13, 25, 0.42));
		animation: drift 11s linear infinite;
		opacity: 0.82;
	}

	.count-card,
	.teaser-card {
		position: relative;
		padding: 1.2rem 1.15rem 1.25rem;
		overflow: hidden;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.72rem;
		letter-spacing: 0.18em;
		color: #95b4d5;
	}

	h1 {
		margin: 0.32rem 0 0;
		font-size: clamp(1.55rem, 1.3rem + 1.4vw, 2.25rem);
		letter-spacing: -0.03em;
	}

	.summary {
		margin: 0.45rem 0 0;
		color: #a8c0d8;
	}

	.clock-grid {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 0.55rem;
	}

	.unit {
		min-height: 6.5rem;
		border-radius: 0.9rem;
		border: 1px solid rgba(131, 176, 218, 0.26);
		background:
			linear-gradient(150deg, rgba(10, 22, 44, 0.95), rgba(7, 16, 32, 0.9)),
			rgba(8, 18, 34, 0.82);
		display: grid;
		align-content: center;
		justify-items: center;
		gap: 0.3rem;
	}

	.value {
		font-size: clamp(1.8rem, 1.35rem + 2.1vw, 2.8rem);
		font-weight: 760;
		line-height: 1;
		letter-spacing: -0.03em;
		color: #f4fbff;
		text-shadow:
			0 0 18px rgba(112, 243, 255, 0.2),
			0 0 4px rgba(94, 203, 236, 0.25);
		animation: pulse 1.5s ease-in-out infinite;
	}

	.label {
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		color: #91adc9;
	}

	.reset-time {
		margin: 0.95rem 0 0;
		color: #9fbbd7;
		font-size: 0.86rem;
		display: grid;
		gap: 0.18rem;
	}

	.reset-time strong {
		color: #eef7ff;
		font-size: 0.95rem;
		font-weight: 650;
	}

	h2 {
		margin: 0;
		font-size: 1.18rem;
		letter-spacing: -0.01em;
	}

	.teaser-card p {
		margin: 0.34rem 0 0;
		font-size: 0.89rem;
		color: #a4bdd7;
	}

	ul {
		margin: 0.85rem 0 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.48rem;
	}

	li {
		border-radius: 0.75rem;
		border: 1px solid rgba(127, 173, 215, 0.24);
		background: rgba(7, 20, 38, 0.62);
		padding: 0.62rem 0.72rem;
		color: #d6e7f8;
		font-size: 0.9rem;
	}

	@keyframes pulse {
		0% {
			transform: translateY(0);
			filter: brightness(1);
		}
		50% {
			transform: translateY(-1px);
			filter: brightness(1.08);
		}
		100% {
			transform: translateY(0);
			filter: brightness(1);
		}
	}

	@keyframes drift {
		0% {
			transform: translate3d(0, 0, 0);
		}
		50% {
			transform: translate3d(0, -7px, 0);
		}
		100% {
			transform: translate3d(0, 0, 0);
		}
	}

	@media (max-width: 760px) {
		.clock-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>

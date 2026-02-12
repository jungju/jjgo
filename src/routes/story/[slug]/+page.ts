import { error } from '@sveltejs/kit';
import { stories } from '$lib/data/stories';

export const load = ({ params }) => {
	const storyIndex = stories.findIndex((story) => story.slug === params.slug);
	if (storyIndex < 0) {
		throw error(404, '요청한 AI 개발기를 찾을 수 없습니다.');
	}
	return {
		story: stories[storyIndex],
		prev: storyIndex > 0 ? stories[storyIndex - 1] : null,
		next: storyIndex < stories.length - 1 ? stories[storyIndex + 1] : null
	};
};

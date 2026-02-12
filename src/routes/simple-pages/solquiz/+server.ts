import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	const search = url.search || '';
	throw redirect(307, `/simple-pages/solquiz/index.html${search}`);
};


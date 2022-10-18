export default function truncate(value) {
	if (typeof value !== 'string') return;
	return value.substring(0, 150) + '...';
}

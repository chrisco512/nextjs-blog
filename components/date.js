import { parseISO, format } from 'date-fns';

export function Date({ dateString }) {
	const date = parseISO(dateString);

	return <time dateTime={dateString}>{format(date, 'MM/dd/yyyy')}</time>;
}

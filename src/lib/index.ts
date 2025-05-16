function buildGroup(
	data: [[string, string], ...[string, string, string | undefined][]]
): string | undefined {
	const [[groupEmoji, groupText], ...groupBody] = data;

	// le groupe est vide
	if (groupBody.every(([, , value]) => !value)) return undefined;

	let result = `${groupEmoji} <b>${groupText}</b>\n`;

	for (let index = 0; index < groupBody.length; index++) {
		let [emoji, name, value] = groupBody[index];
		if (!value) continue;

		const prefix = index == groupBody.length - 1 ? '└' : '├';
		name = `<i>${name}</i>`;
		value = /^#[A-Za-z0-9]+$/.test(value) ? value : `<code>${value}</code>`;

		result += `${prefix} ${emoji} ${name} : ${value}\n`;
	}

	return result;
}

export type FullInput = [
	// header, header content
	[string, ...string[]],
	// footer, footer content
	[string, ...string[]],
	// [[emoji, name], [emoji, name, value]]
	...[[string, string], ...[string, string, string | undefined][]][]
];

export function fmtRezFull(input: FullInput) {
	const [header, footer, ...groups] = input;
	let result = '';

	return [
		'<blockquote>' + header.join('\n').trim() + '</blockquote>',
		...groups.map((grp) => buildGroup(grp)),
		'<blockquote>' + footer.join('\n').trim() + '</blockquote>'
	]
		.filter((s) => s != undefined)
		.join('\n')
		.trimEnd();
}

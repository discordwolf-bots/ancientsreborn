import { uniqueArr } from 'e';
import { KlasaMessage } from 'klasa';
import { SkillsEnum } from 'oldschooljs/dist/constants';

import { toTitleCase } from '../../util';
import { AttackStyles } from '.';

const validStyles = [SkillsEnum.Strength, SkillsEnum.Dexterity, SkillsEnum.Defence, SkillsEnum.Intellect];

function isValidAttackStyle(str: string): str is AttackStyles {
	return (validStyles as string[]).includes(str);
}

const invalidCombinations: [AttackStyles, AttackStyles][] = [
	[SkillsEnum.Dexterity, SkillsEnum.Intellect],
	[SkillsEnum.Strength, SkillsEnum.Intellect]
];

export async function trainCommand(msg: KlasaMessage, _styles: string | undefined) {
	if (msg.author.minionIsBusy) {
		return msg.channel.send("You can't change your attack style in the middle of a trip.");
	}
	if (!_styles || typeof _styles !== 'string') {
		return msg.channel.send(
			`Your current attack style is ${msg.author
				.getAttackStyles()
				.map(
					toTitleCase
				)}, the available styles are: Strength, Dexterity, Defence, Intellect, Shared, StrengthDexterity, StrengthDefence, DexterityDefence, IntellectDefence.`
		);
	}
	const parsed = _styles
		.toLowerCase()
		.split(' ')
		.map(i => i.trim());

	if (uniqueArr(parsed).length !== parsed.length || (_styles !== 'shared' && !parsed.every(isValidAttackStyle))) {
		return msg.channel.send(
			'That is not a valid attack style, the available styles are: Strength, Dexterity, Defence, Intellect, Shared, StrengthDexterity, StrengthDefence, DexterityDefence, IntellectDefence'
		);
	}

	let styles: AttackStyles[] = [];
	switch (_styles) {
		case 'shared':
			styles = [SkillsEnum.Strength, SkillsEnum.Dexterity, SkillsEnum.Defence];
			break;
		case 'strdex':
		case 'dexstr':
		case 'strengthdexterity':
		case 'dexteritystrength':
			styles = [SkillsEnum.Strength, SkillsEnum.Dexterity];
			break;
		case 'strdef':
		case 'defstr':
		case 'defencestrength':
		case 'strengthdefence':
			styles = [SkillsEnum.Strength, SkillsEnum.Defence];
			break;
		case 'dexdef':
		case 'defdex':
		case 'defencedexterity':
		case 'dexteritydefence':
			styles = [SkillsEnum.Defence, SkillsEnum.Dexterity];
			break;
		case 'intdef':
		case 'defint':
		case 'intellectdefence':
		case 'defenceintellect':
			styles = [SkillsEnum.Intellect, SkillsEnum.Defence];
			break;
		default: {
			if (isValidAttackStyle(_styles)) styles = [_styles];
			else styles = parsed.filter(isValidAttackStyle);
			break;
		}
	}

	for (const comb of invalidCombinations) {
		if (comb.every(i => styles.includes(i))) {
			return msg.channel.send(
				`That's not a valid attack style, you can't train these at the same time: ${comb.join(', ')}.`
			);
		}
	}

	await msg.author.setAttackStyle(styles);

	return msg.channel.send(
		`You're now training: ${styles
			.map(toTitleCase)
			.join(', ')}. When you do PvM, you will receive XP in these skills.`
	);
}

/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Canvas, createCanvas } from 'canvas';
import * as fs from 'fs';
import { KlasaClient, KlasaUser } from 'klasa';
import { EquipmentSlot } from 'oldschooljs/dist/meta/types';

import BankImageTask from '../../../tasks/bankImage';
import { UserSettings } from '../../settings/types/UserSettings';
import { Gear } from '../../structures/Gear';
import { toTitleCase } from '../../util';
import { canvasImageFromBuffer, drawItemQuantityText, drawTitleText, fillTextXTimesInCtx } from '../../util/canvasUtil';
import { GearSetupType, GearSetupTypes, maxDefenceStats, maxOffenceStats, maxOtherStats } from '..';

const gearTemplateFile = fs.readFileSync('./src/lib/resources/images/gear_template.png');
const gearTemplateCompactFile = fs.readFileSync('./src/lib/resources/images/gear_template_compact.png');

/**
 * The default gear in a gear setup, when nothing is equipped.
 */
const slotCoordinates: { [key in EquipmentSlot]: [number, number] } = {
	[EquipmentSlot.TwoHanded]: [15, 110],
	[EquipmentSlot.Ammo]: [112, 71],
	[EquipmentSlot.Chest]: [70, 110],
	[EquipmentSlot.Cape]: [30, 71],
	[EquipmentSlot.Boots]: [70, 190],
	[EquipmentSlot.Gloves]: [16, 190],
	[EquipmentSlot.Helm]: [70, 31],
	[EquipmentSlot.Legs]: [70, 150],
	[EquipmentSlot.Neck]: [70, 71],
	[EquipmentSlot.Ring]: [127, 190],
	[EquipmentSlot.Shield]: [127, 110],
	[EquipmentSlot.Weapon]: [15, 108],
	[EquipmentSlot.Belt]: [88, 110],
	[EquipmentSlot.Gems]: [90, 110]
};

const slotCoordinatesCompact: { [key in EquipmentSlot]: [number, number] } = {
	[EquipmentSlot.Helm]: [43, 1],
	[EquipmentSlot.Cape]: [2, 40],
	[EquipmentSlot.Neck]: [43, 40],
	[EquipmentSlot.Ammo]: [84, 40],
	[EquipmentSlot.TwoHanded]: [2, 79],
	[EquipmentSlot.Weapon]: [2, 79],
	[EquipmentSlot.Chest]: [43, 79],
	[EquipmentSlot.Shield]: [84, 79],
	[EquipmentSlot.Legs]: [43, 119],
	[EquipmentSlot.Gloves]: [2, 159],
	[EquipmentSlot.Boots]: [43, 159],
	[EquipmentSlot.Ring]: [84, 159],
	[EquipmentSlot.Belt]: [88, 159],
	[EquipmentSlot.Gems]: [90, 159]
};

const slotSize = 36;

let bankTask: BankImageTask | null = null;

function drawText(canvas: Canvas, text: string, x: number, y: number, maxStat = true) {
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = '#000000';
	fillTextXTimesInCtx(ctx, text, x + 1, y + 1);
	if (text.includes(':')) {
		const texts = text.split(':');
		for (let i = 0; i < texts.length; i++) {
			const t = texts[i] + (i === 0 ? ': ' : '');
			ctx.fillStyle = i === 0 ? '#ff981f' : maxStat ? '#00ff00' : '#ffffff';
			fillTextXTimesInCtx(
				ctx,
				t,
				i === 0
					? x - (ctx.textAlign === 'end' ? ctx.measureText(texts[i + 1]).width - 3 : 0)
					: ctx.textAlign === 'end'
					? x
					: ctx.measureText(texts[i - 1]).width + x + 3,
				y
			);
		}
	} else {
		ctx.fillStyle = '#ff981f';
		fillTextXTimesInCtx(ctx, text, x, y);
	}
}

export async function generateGearImage(
	client: KlasaClient,
	user: KlasaUser,
	gearSetup: Gear,
	gearType: GearSetupType | null,
	petID: number | null
) {
	// Init the background images if they are not already
	if (!bankTask) {
		bankTask = client.tasks.get('bankImage') as BankImageTask;
	}

	let {
		sprite,
		uniqueSprite,
		background: userBgImage
	} = bankTask.getBgAndSprite(user.settings.get(UserSettings.BankBackground) ?? 1);

	const hexColor = user.settings.get(UserSettings.BankBackgroundHex);

	const gearStats = gearSetup.stats;
	const gearTemplateImage = await canvasImageFromBuffer(gearTemplateFile);
	const canvas = createCanvas(gearTemplateImage.width, gearTemplateImage.height);
	const ctx = canvas.getContext('2d');
	ctx.imageSmoothingEnabled = false;

	ctx.fillStyle = userBgImage.transparent
		? hexColor
			? hexColor
			: 'transparent'
		: ctx.createPattern(sprite.repeatableBg, 'repeat');
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	if (!uniqueSprite) {
		ctx.drawImage(
			userBgImage.image!,
			(canvas.width - userBgImage.image!.width) * 0.5,
			(canvas.height - userBgImage.image!.height) * 0.5
		);
	}
	ctx.drawImage(gearTemplateImage, 0, 0, gearTemplateImage.width, gearTemplateImage.height);

	if (!userBgImage.transparent) bankTask?.drawBorder(ctx, sprite, false);

	ctx.font = '16px OSRSFontCompact';
	// Draw preset title
	if (gearType) {
		drawTitleText(ctx, toTitleCase(gearType), Math.floor(176 / 2), 25);
	}

	// Draw stats
	ctx.save();
	ctx.translate(225, 0);
	ctx.font = '16px RuneScape Bold 12';
	ctx.textAlign = 'start';
	drawText(canvas, 'Attack bonus', 0, 25);
	ctx.font = '16px OSRSFontCompact';
	drawText(
		canvas,
		`Melee Attack: ${gearStats.meleeAttack}`,
		0,
		50,
		maxOffenceStats.meleeAttack === gearStats.meleeAttack
	);
	drawText(
		canvas,
		`Melee Accuracy: ${gearStats.meleeAccuracy}`,
		0,
		68,
		maxOffenceStats.meleeAccuracy === gearStats.meleeAccuracy
	);
	drawText(
		canvas,
		`Ranged Attack: ${gearStats.rangedAttack}`,
		0,
		86,
		maxOffenceStats.rangedAttack === gearStats.rangedAttack
	);
	drawText(
		canvas,
		`Ranged Accuracy: ${gearStats.rangedAccuracy}`,
		0,
		104,
		maxOffenceStats.rangedAccuracy === gearStats.rangedAccuracy
	);
	drawText(
		canvas,
		`Magic Attack: ${gearStats.magicAttack}`,
		0,
		122,
		maxOffenceStats.magicAttack === gearStats.magicAttack
	);
	drawText(
		canvas,
		`Magic Accuracy: ${gearStats.magicAccuracy}`,
		0,
		140,
		maxOffenceStats.magicAccuracy === gearStats.magicAccuracy
	);
	ctx.restore();
	ctx.save();
	ctx.translate(canvas.width - 6 * 2, 0);
	ctx.font = '16px RuneScape Bold 12';
	ctx.textAlign = 'end';
	drawText(canvas, 'Defence bonus', 0, 25);
	ctx.font = '16px OSRSFontCompact';
	drawText(
		canvas,
		`Melee Defence: ${gearStats.meleeDefence}`,
		0,
		50,
		maxDefenceStats.meleeDefence === gearStats.meleeDefence
	);
	drawText(
		canvas,
		`Melee Block: ${gearStats.meleeBlock}`,
		0,
		68,
		maxDefenceStats.meleeBlock === gearStats.meleeBlock
	);
	drawText(
		canvas,
		`Ranged Defence: ${gearStats.rangedDefence}`,
		0,
		86,
		maxDefenceStats.rangedDefence === gearStats.rangedDefence
	);
	drawText(
		canvas,
		`Ranged Block: ${gearStats.rangedBlock}`,
		0,
		104,
		maxDefenceStats.rangedBlock === gearStats.rangedBlock
	);
	drawText(
		canvas,
		`Magic Defence: ${gearStats.magicDefence}`,
		0,
		122,
		maxDefenceStats.magicDefence === gearStats.magicDefence
	);
	drawText(
		canvas,
		`Magic Block: ${gearStats.magicBlock}`,
		0,
		140,
		maxDefenceStats.magicBlock === gearStats.magicBlock
	);
	ctx.restore();
	ctx.save();
	ctx.translate(canvas.width - 6 * 2, 0);
	ctx.font = '16px RuneScape Bold 12';
	ctx.textAlign = 'end';
	drawText(canvas, 'Resistance bonus', 0, 25);
	ctx.font = '16px OSRSFontCompact';
	drawText(
		canvas,
		`Cold: ${gearStats.resistanceCold}`,
		0,
		50,
		maxOtherStats.resistanceCold === gearStats.resistanceCold
	);
	drawText(
		canvas,
		`Heat: ${gearStats.resistanceHeat}`,
		0,
		68,
		maxOtherStats.resistanceHeat === gearStats.resistanceHeat
	);
	drawText(
		canvas,
		`Physical: ${gearStats.resistancePhysical}`,
		0,
		86,
		maxOtherStats.resistancePhysical === gearStats.resistancePhysical
	);
	drawText(
		canvas,
		`Poison: ${gearStats.resistancePoison}`,
		0,
		104,
		maxOtherStats.resistancePoison === gearStats.resistancePoison
	);
	drawText(
		canvas,
		`Arcane: ${gearStats.resistanceArcane}`,
		0,
		122,
		maxOtherStats.resistanceArcane === gearStats.resistanceArcane
	);
	ctx.textAlign = 'center';
	ctx.restore();
	drawTitleText(ctx, 'Others', 210 + Math.floor(232 / 2), 140);
	ctx.restore();
	ctx.save();
	ctx.translate(225, 0);
	ctx.font = '16px OSRSFontCompact';
	ctx.textAlign = 'start';
	drawText(canvas, `Health: ${gearStats.health}`, 0, 165, false);
	// drawText(canvas, `Undead: ${(0).toFixed(1)} %`, 0, 201, false);
	ctx.restore();

	// Draw items
	if (petID) {
		const image = await client.tasks.get('bankImage')!.getItemImage(petID, 1);
		ctx.drawImage(
			image,
			178 + slotSize / 2 - image.width / 2,
			190 + slotSize / 2 - image.height / 2,
			image.width,
			image.height
		);
	}

	for (const enumName of Object.values(EquipmentSlot)) {
		const item = gearSetup[enumName];
		if (!item) continue;
		const image = await client.tasks.get('bankImage')!.getItemImage(item.item, item.quantity);

		let [x, y] = slotCoordinates[enumName];
		x = x + slotSize / 2 - image.width / 2;
		y = y + slotSize / 2 - image.height / 2;
		ctx.drawImage(image, x, y, image.width, image.height);

		if (item.quantity > 1) {
			drawItemQuantityText(ctx, item.quantity, x + 1, y + 9);
		}
	}

	return canvas.toBuffer();
}

export async function generateAllGearImage(client: KlasaClient, user: KlasaUser) {
	if (!bankTask) {
		bankTask = client.tasks.get('bankImage') as BankImageTask;
	}

	let {
		sprite: bgSprite,
		uniqueSprite: hasBgSprite,
		background: userBg
	} = bankTask.getBgAndSprite(user.settings.get(UserSettings.BankBackground) ?? 1);

	const hexColor = user.settings.get(UserSettings.BankBackgroundHex);

	const gearTemplateImage = await canvasImageFromBuffer(gearTemplateCompactFile);
	const canvas = createCanvas((gearTemplateImage.width + 10) * 4 + 20, Number(gearTemplateImage.height) * 2 + 70);
	const ctx = canvas.getContext('2d');
	ctx.imageSmoothingEnabled = false;

	ctx.fillStyle = userBg.transparent
		? hexColor
			? hexColor
			: 'transparent'
		: ctx.createPattern(bgSprite.repeatableBg, 'repeat');
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	if (!hasBgSprite) {
		let imgHeight = 0;
		let imgWidth = 0;
		if (userBg.transparent) {
			const ratio = canvas.width / userBg.image!.width;
			imgHeight = userBg.image!.height * ratio;
			imgWidth = canvas.width;
		} else {
			const ratio = canvas.height / userBg.image!.height;
			imgWidth = userBg.image!.width * ratio;
			imgHeight = userBg.image!.height * ratio;
		}
		ctx.drawImage(
			userBg.image!,
			(canvas.width - imgWidth) / 2,
			(canvas.height - imgHeight) / 2,
			imgWidth,
			imgHeight
		);
	}
	let i = 0;
	let y = 30;
	for (const type of GearSetupTypes) {
		if (i === 4) {
			y += gearTemplateImage.height + 30;
			i = 0;
		}
		const gear = user.getGear(type as GearSetupType);
		ctx.save();
		ctx.translate(15 + i * (gearTemplateImage.width + 10), y);
		ctx.font = '16px RuneScape Bold 12';
		ctx.textAlign = 'center';
		drawText(canvas, toTitleCase(type), gearTemplateImage.width / 2, -7);
		ctx.drawImage(gearTemplateImage, 0, 0, gearTemplateImage.width, gearTemplateImage.height);
		for (const enumName of Object.values(EquipmentSlot)) {
			const item = gear[enumName];
			if (!item) continue;
			const image = await client.tasks.get('bankImage')!.getItemImage(item.item, item.quantity);
			let [x, y] = slotCoordinatesCompact[enumName];
			x = x + slotSize / 2 - image.width / 2;
			y = y + slotSize / 2 - image.height / 2;
			ctx.drawImage(image, x, y, image.width, image.height);

			if (item.quantity > 1) {
				drawItemQuantityText(ctx, item.quantity, x + 1, y + 9);
			}
		}
		i++;
		ctx.restore();
	}

	ctx.font = '16px RuneScape Bold 12';
	const petX = canvas.width - 50;
	const petY = canvas.height / 2 + 20;
	drawText(canvas, 'Pet', petX + 5, petY - 5);
	ctx.drawImage(gearTemplateImage, 42, 1, 36, 36, petX, petY, 36, 36);
	const userPet = user.settings.get(UserSettings.Minion.EquippedPet);
	if (userPet) {
		const image = await client.tasks.get('bankImage')!.getItemImage(userPet, 1);
		ctx.drawImage(image, petX, petY, image.width, image.height);
	}

	if (!userBg.transparent) bankTask?.drawBorder(ctx, bgSprite, false);

	return canvas.toBuffer();
}

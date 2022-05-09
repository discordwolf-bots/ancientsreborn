import { noOp } from 'e';
import { KlasaClient, KlasaUser } from 'klasa';

import {
	Events,
	LEVEL_60_XP,
	LEVEL_100_XP,
	LEVEL_150_XP,
	LEVEL_200_XP,
	LEVEL_250_XP,
	LEVEL_300_XP,
	LEVEL_350_XP,
	LEVEL_400_XP,
	LEVEL_404_XP,
	SupportServer
} from './constants';
import { prisma } from './settings/prisma';
import Skills from './skilling/skills';
import { formatOrdinal } from './util/formatOrdinal';
import { sendToChannelID } from './util/webhook';

const skillsVals = Object.values(Skills);

const base60 = skillsVals.map(s => `"skills.${s.id}" >= ${LEVEL_60_XP}`).join(' AND ');
const base100 = skillsVals.map(s => `"skills.${s.id}" >= ${LEVEL_100_XP}`).join(' AND ');
const base150 = skillsVals.map(s => `"skills.${s.id}" >= ${LEVEL_150_XP}`).join(' AND ');
const base200 = skillsVals.map(s => `"skills.${s.id}" >= ${LEVEL_200_XP}`).join(' AND ');
const base250 = skillsVals.map(s => `"skills.${s.id}" >= ${LEVEL_250_XP}`).join(' AND ');
const base300 = skillsVals.map(s => `"skills.${s.id}" >= ${LEVEL_300_XP}`).join(' AND ');
const base350 = skillsVals.map(s => `"skills.${s.id}" >= ${LEVEL_350_XP}`).join(' AND ');
const base400 = skillsVals.map(s => `"skills.${s.id}" >= ${LEVEL_400_XP}`).join(' AND ');
const maxFilter = skillsVals.map(s => `"skills.${s.id}" >= ${LEVEL_404_XP}`).join(' AND ');

const query60 = (ironman: boolean) => `SELECT count(id)
FROM users
WHERE ${base60}
${ironman ? 'AND "minion.ironman" = true' : ''};`;

const query100 = (ironman: boolean) => `SELECT count(id)
FROM users
WHERE ${base100}
${ironman ? 'AND "minion.ironman" = true' : ''};`;

const query150 = (ironman: boolean) => `SELECT count(id)
FROM users
WHERE ${base150}
${ironman ? 'AND "minion.ironman" = true' : ''};`;

const query200 = (ironman: boolean) => `SELECT count(id)
FROM users
WHERE ${base200}
${ironman ? 'AND "minion.ironman" = true' : ''};`;

const query250 = (ironman: boolean) => `SELECT count(id)
FROM users
WHERE ${base250}
${ironman ? 'AND "minion.ironman" = true' : ''};`;

const query300 = (ironman: boolean) => `SELECT count(id)
FROM users
WHERE ${base300}
${ironman ? 'AND "minion.ironman" = true' : ''};`;

const query350 = (ironman: boolean) => `SELECT count(id)
FROM users
WHERE ${base350}
${ironman ? 'AND "minion.ironman" = true' : ''};`;

const query400 = (ironman: boolean) => `SELECT count(id)
FROM users
WHERE ${base400}
${ironman ? 'AND "minion.ironman" = true' : ''};`;

const queryMax = (ironman: boolean) => `SELECT count(id)
FROM users
WHERE ${maxFilter}
${ironman ? 'AND "minion.ironman" = true' : ''};`;

async function howMany60() {
	const [normies, irons] = (
		(await Promise.all([prisma.$queryRawUnsafe(query60(false)), prisma.$queryRawUnsafe(query60(true))])) as any
	)
		.map((i: any) => i[0].count)
		.map((i: any) => parseInt(i));

	return {
		normies,
		irons
	};
}

async function howMany100() {
	const [normies, irons] = (
		(await Promise.all([prisma.$queryRawUnsafe(query100(false)), prisma.$queryRawUnsafe(query100(true))])) as any
	)
		.map((i: any) => i[0].count)
		.map((i: any) => parseInt(i));

	return {
		normies,
		irons
	};
}

async function howMany150() {
	const [normies, irons] = (
		(await Promise.all([prisma.$queryRawUnsafe(query150(false)), prisma.$queryRawUnsafe(query150(true))])) as any
	)
		.map((i: any) => i[0].count)
		.map((i: any) => parseInt(i));

	return {
		normies,
		irons
	};
}

async function howMany200() {
	const [normies, irons] = (
		(await Promise.all([prisma.$queryRawUnsafe(query200(false)), prisma.$queryRawUnsafe(query200(true))])) as any
	)
		.map((i: any) => i[0].count)
		.map((i: any) => parseInt(i));

	return {
		normies,
		irons
	};
}

async function howMany250() {
	const [normies, irons] = (
		(await Promise.all([prisma.$queryRawUnsafe(query250(false)), prisma.$queryRawUnsafe(query250(true))])) as any
	)
		.map((i: any) => i[0].count)
		.map((i: any) => parseInt(i));

	return {
		normies,
		irons
	};
}

async function howMany300() {
	const [normies, irons] = (
		(await Promise.all([prisma.$queryRawUnsafe(query300(false)), prisma.$queryRawUnsafe(query300(true))])) as any
	)
		.map((i: any) => i[0].count)
		.map((i: any) => parseInt(i));

	return {
		normies,
		irons
	};
}

async function howMany350() {
	const [normies, irons] = (
		(await Promise.all([prisma.$queryRawUnsafe(query350(false)), prisma.$queryRawUnsafe(query350(true))])) as any
	)
		.map((i: any) => i[0].count)
		.map((i: any) => parseInt(i));

	return {
		normies,
		irons
	};
}

async function howMany400() {
	const [normies, irons] = (
		(await Promise.all([prisma.$queryRawUnsafe(query400(false)), prisma.$queryRawUnsafe(query400(true))])) as any
	)
		.map((i: any) => i[0].count)
		.map((i: any) => parseInt(i));

	return {
		normies,
		irons
	};
}

async function howMany404() {
	const [normies, irons] = (
		(await Promise.all([prisma.$queryRawUnsafe(queryMax(false)), prisma.$queryRawUnsafe(queryMax(true))])) as any
	)
		.map((i: any) => i[0].count)
		.map((i: any) => parseInt(i));

	return {
		normies,
		irons
	};
}

export async function on60(user: KlasaUser) {
	const { normies, irons } = await howMany60();

	const str = `🎉 ${user.username}'s minion just achieved level 60 in every skill, they are the **${formatOrdinal(
		normies
	)}** minion${user.isIronman ? `, and the **${formatOrdinal(irons)}** ironman,` : ''} to be reach base 60. 🎉`;

	user.client.emit(Events.ServerNotification, str);
	sendToChannelID(user.client as KlasaClient, SupportServer, { content: str }).catch(noOp);
	user.send('Congratulations on maxing!').catch(noOp);
}

export async function on100(user: KlasaUser) {
	const { normies, irons } = await howMany100();

	const str = `🎉 ${user.username}'s minion just achieved level 100 in every skill, they are the **${formatOrdinal(
		normies
	)}** minion${user.isIronman ? `, and the **${formatOrdinal(irons)}** ironman,` : ''} to be reach base 100. 🎉`;

	user.client.emit(Events.ServerNotification, str);
	sendToChannelID(user.client as KlasaClient, SupportServer, { content: str }).catch(noOp);
	user.send('Congratulations on maxing!').catch(noOp);
}

export async function on150(user: KlasaUser) {
	const { normies, irons } = await howMany150();

	const str = `🎉 ${user.username}'s minion just achieved level 150 in every skill, they are the **${formatOrdinal(
		normies
	)}** minion${user.isIronman ? `, and the **${formatOrdinal(irons)}** ironman,` : ''} to be reach base 150. 🎉`;

	user.client.emit(Events.ServerNotification, str);
	sendToChannelID(user.client as KlasaClient, SupportServer, { content: str }).catch(noOp);
	user.send('Congratulations on maxing!').catch(noOp);
}

export async function on200(user: KlasaUser) {
	const { normies, irons } = await howMany200();

	const str = `🎉 ${user.username}'s minion just achieved level 200 in every skill, they are the **${formatOrdinal(
		normies
	)}** minion${user.isIronman ? `, and the **${formatOrdinal(irons)}** ironman,` : ''} to be reach base 200. 🎉`;

	user.client.emit(Events.ServerNotification, str);
	sendToChannelID(user.client as KlasaClient, SupportServer, { content: str }).catch(noOp);
	user.send('Congratulations on maxing!').catch(noOp);
}

export async function on250(user: KlasaUser) {
	const { normies, irons } = await howMany250();

	const str = `🎉 ${user.username}'s minion just achieved level 250 in every skill, they are the **${formatOrdinal(
		normies
	)}** minion${user.isIronman ? `, and the **${formatOrdinal(irons)}** ironman,` : ''} to be reach base 250. 🎉`;

	user.client.emit(Events.ServerNotification, str);
	sendToChannelID(user.client as KlasaClient, SupportServer, { content: str }).catch(noOp);
	user.send('Congratulations on maxing!').catch(noOp);
}

export async function on300(user: KlasaUser) {
	const { normies, irons } = await howMany300();

	const str = `🎉 ${user.username}'s minion just achieved level 300 in every skill, they are the **${formatOrdinal(
		normies
	)}** minion${user.isIronman ? `, and the **${formatOrdinal(irons)}** ironman,` : ''} to be reach base 300. 🎉`;

	user.client.emit(Events.ServerNotification, str);
	sendToChannelID(user.client as KlasaClient, SupportServer, { content: str }).catch(noOp);
	user.send('Congratulations on maxing!').catch(noOp);
}

export async function on350(user: KlasaUser) {
	const { normies, irons } = await howMany350();

	const str = `🎉 ${user.username}'s minion just achieved level 350 in every skill, they are the **${formatOrdinal(
		normies
	)}** minion${user.isIronman ? `, and the **${formatOrdinal(irons)}** ironman,` : ''} to be reach base 350. 🎉`;

	user.client.emit(Events.ServerNotification, str);
	sendToChannelID(user.client as KlasaClient, SupportServer, { content: str }).catch(noOp);
}

export async function on400(user: KlasaUser) {
	const { normies, irons } = await howMany400();

	const str = `🎉 ${user.username}'s minion just achieved level 400 in every skill, they are the **${formatOrdinal(
		normies
	)}** minion${user.isIronman ? `, and the **${formatOrdinal(irons)}** ironman,` : ''} to be reach base 400. 🎉`;

	user.client.emit(Events.ServerNotification, str);
	sendToChannelID(user.client as KlasaClient, SupportServer, { content: str }).catch(noOp);
}

export async function onMax(user: KlasaUser) {
	const { normies, irons } = await howMany404();

	const str = `🎉 ${user.username}'s minion just achieved level 404 in every skill, they are the **${formatOrdinal(
		normies
	)}** minion${user.isIronman ? `, and the **${formatOrdinal(irons)}** ironman,` : ''} to be max. 🎉`;

	user.client.emit(Events.ServerNotification, str);
	sendToChannelID(user.client as KlasaClient, SupportServer, { content: str }).catch(noOp);
	user.send('Congratulations on maxing!').catch(noOp);
}

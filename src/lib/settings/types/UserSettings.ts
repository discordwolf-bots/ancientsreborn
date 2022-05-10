/* eslint-disable @typescript-eslint/no-namespace */
import { HexColorString } from 'discord.js';

import { BitField } from '../../constants';
import { GearSetup } from '../../gear';
import { CombatOptionsEnum } from '../../minions/data/combatConstants';
import { SkillsEnum } from '../../skilling/types';
import { ItemBank } from '../../types';

export type CustomGet<K extends string, TCustom> = K & { __type__: TCustom };

export function T<TCustom>(k: string): CustomGet<string, TCustom> {
	return k as CustomGet<string, Readonly<TCustom>>;
}

export namespace UserSettings {
	export const Account = T<string | null>('Account');
	export const GP = T<number>('GP');
	export const QP = T<number>('QP');
	export const Pets = T<Readonly<ItemBank>>('pets');
	export const Mounts = T<Readonly<ItemBank>>('mounts');
	export const Badges = T<readonly number[]>('badges');
	export const BitField = T<readonly BitField[]>('bitfield');
	export const FavoriteItems = T<readonly number[]>('favoriteItems');
	export const FavoriteFood = T<readonly number[]>('favorite_food');
	export const SacrificedValue = T<number>('sacrificedValue');
	export const Bank = T<Readonly<ItemBank>>('bank');
	export const CollectionLogBank = T<Readonly<ItemBank>>('collectionLogBank');
	export const MonsterScores = T<Readonly<ItemBank>>('monsterScores');
	export const BankBackground = T<number>('bankBackground');
	export const SacrificedBank = T<Readonly<ItemBank>>('sacrificedBank');
	export const PatreonID = T<string | null>('patreon_id');
	export const GithubID = T<number | null>('github_id');
	export const OpenableScores = T<Readonly<ItemBank>>('openable_scores');
	export const AttackStyle = T<readonly SkillsEnum[]>('attack_style');
	export const CombatOptions = T<readonly CombatOptionsEnum[]>('combat_options');
	export const BankBackgroundHex = T<HexColorString | null>('bank_bg_hex');

	export namespace Minion {
		export const Name = T<string>('minion.name');
		export const HasBought = T<boolean>('minion.hasBought');
		export const Ironman = T<boolean>('minion.ironman');
		export const Icon = T<string | null>('minion.icon');
		export const EquippedPet = T<number | null>('minion.equippedPet');
	}

	export namespace Stats {
		export const Deaths = T<number>('stats.deaths');
		export const DuelLosses = T<number>('stats.duelLosses');
		export const DuelWins = T<number>('stats.duelWins');
	}

	export namespace Skills {
		export const Mining = T<number>(`skills.${SkillsEnum.Mining}`);
		export const Fishing = T<number>(`skills.${SkillsEnum.Fishing}`);
		export const Woodcutting = T<number>(`skills.${SkillsEnum.Woodcutting}`);
		export const Gathering = T<number>(`skills.${SkillsEnum.Gathering}`);
		export const Metallurgy = T<number>(`skills.${SkillsEnum.Metallurgy}`);
		export const Blacksmithing = T<string>(`skills.${SkillsEnum.Blacksmithing}`);
		export const Cooking = T<number>(`skills.${SkillsEnum.Cooking}`);
		export const Fletching = T<number>(`skills.${SkillsEnum.Fletching}`);
		export const Carpentry = T<number>(`skills.${SkillsEnum.Carpentry}`);
		export const Weaving = T<number>(`skills.${SkillsEnum.Weaving}`);
		export const Tailoring = T<number>(`skills.${SkillsEnum.Tailoring}`);
		export const Strength = T<number>(`skills.${SkillsEnum.Strength}`);
		export const Dexterity = T<number>(`skills.${SkillsEnum.Dexterity}`);
		export const Defence = T<number>(`skills.${SkillsEnum.Defence}`);
		export const Intellect = T<number>(`skills.${SkillsEnum.Intellect}`);
		export const Vitality = T<number>(`skills.${SkillsEnum.Vitality}`);
		export const Piercing = T<number>(`skills.${SkillsEnum.Piercing}`);
		export const Fencing = T<number>(`skills.${SkillsEnum.Fencing}`);
		export const HeavyWeapons = T<number>(`skills.${SkillsEnum.HeavyWeapons}`);
		export const RangedWeapons = T<number>(`skills.${SkillsEnum.RangedWeapons}`);
		export const MagicStaffs = T<number>(`skills.${SkillsEnum.MagicStaffs}`);
	}

	export namespace Gear {
		export const Melee = T<GearSetup | null>('gear.melee');
		export const Range = T<GearSetup | null>('gear.range');
		export const Magic = T<GearSetup | null>('gear.magic');
		export const Skilling = T<GearSetup | null>('gear.skilling');
	}

	export const IronmanAlts = T<readonly string[]>('ironman_alts');
	export const MainAccount = T<string | null>('main_account');
	export const TempCL = T<Readonly<ItemBank>>('temp_cl');

	export const PremiumBalanceTier = T<number | null>('premium_balance_tier');
	export const PremiumBalanceExpiryDate = T<number | null>('premium_balance_expiry_date');

	export const LMSPoints = T<number>('lms_points');
	export const GPLuckyPick = T<number>('gp_luckypick');
	export const GPDice = T<number>('gp_dice');
}

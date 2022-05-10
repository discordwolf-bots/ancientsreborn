// Chestpiece
// Leg Guards
// Gloves
// Boots
// Belt
// Equipment - Armour - Studded
// Helm
// Chestpiece
// Leg Guards
// Gloves
// Boots
// Belt
// Equipment - Armour - Lined
// Helm
// Chestpiece
// Leg Guards
// Gloves
// Boots
// Belt
// Equipment - Weapons
// Staff
import './weapons/staff';

import { EquipmentSlot } from 'oldschooljs/dist/meta/types';

import { setCustomItem } from './util';

// Currencies
setCustomItem(1, 'Credits', '', {}, 1);

// Woodcutting Tools
setCustomItem(101, 'Hatchet', '', {}, 10_000);
setCustomItem(102, 'Master Hatchet', '', {}, 1_000_000);
setCustomItem(103, 'Mythical Hatchet', '', {}, 10_000_000);

// Mining Tools
setCustomItem(111, 'Pickaxe', '', {}, 10_000);
setCustomItem(112, 'Master Pickaxe', '', {}, 1_000_000);
setCustomItem(113, 'Mythical Pickaxe', '', {}, 10_000_000);

// Fishing Tools
setCustomItem(121, 'Fishing Rod', '', {}, 10_000);
setCustomItem(122, 'Master Fishing Rod', '', {}, 1_000_000);
setCustomItem(123, 'Mythical Fishing Rod', '', {}, 10_000_000);

// Mining Ores
setCustomItem(201, 'Copper Ore', '', {}, 10);
setCustomItem(202, 'Tin Ore', '', {}, 10);
setCustomItem(203, 'Iron Ore', '', {}, 100);
setCustomItem(204, 'Coal', '', {}, 250);
setCustomItem(207, 'Mithril Ore', '', {}, 800);
setCustomItem(208, 'Adamantium Ore', '', {}, 1500);
setCustomItem(209, 'Dianium Ore', '', {}, 2500);
// Precious Ores
setCustomItem(251, 'Silver Ore', '', {}, 250);
setCustomItem(252, 'Gold Ore', '', {}, 800);
setCustomItem(253, 'Platinum Ore', '', {}, 2500);

// Woodcutting Logs
setCustomItem(301, 'Farwood Log', '', {}, 10);
setCustomItem(302, 'Gnarlwood Log', '', {}, 100);
setCustomItem(303, 'Sandwood Log', '', {}, 250);
setCustomItem(304, 'Hillpine Log', '', {}, 800);
setCustomItem(305, 'Ashenwood Log', '', {}, 1500);
setCustomItem(306, 'Frostscarred Log', '', {}, 2500);

// Raw Fish
setCustomItem(401, 'Raw Shrimp', 'Raw Lobster', {}, 10);
setCustomItem(402, 'Raw Eel', 'Raw Lobster', {}, 20);
setCustomItem(403, 'Raw Cod', 'Raw Lobster', {}, 30);
setCustomItem(404, 'Raw Carp', 'Raw Lobster', {}, 40);
setCustomItem(405, 'Raw Trout', 'Raw Lobster', {}, 50);
setCustomItem(406, 'Raw Crappie', 'Raw Lobster', {}, 75);
setCustomItem(407, 'Raw Perch Fish', 'Raw Lobster', {}, 100);
setCustomItem(408, 'Raw Chub Fish', 'Raw Lobster', {}, 125);
setCustomItem(409, 'Raw Tuna', 'Raw Lobster', {}, 150);
setCustomItem(410, 'Raw Rock Fish', 'Raw Lobster', {}, 200);
setCustomItem(411, 'Raw Pout Fish', 'Raw Lobster', {}, 250);
setCustomItem(412, 'Raw Sun Fish', 'Raw Lobster', {}, 500);
setCustomItem(413, 'Raw Snapper Fish', 'Raw Lobster', {}, 750);
setCustomItem(414, 'Raw Bass', 'Raw Lobster', {}, 1000);
setCustomItem(415, 'Raw Bluefin', 'Raw Lobster', {}, 1500);
setCustomItem(416, 'Raw Grouper', 'Raw Lobster', {}, 2000);
setCustomItem(417, 'Raw Fangtooth', 'Raw Lobster', {}, 3000);
setCustomItem(418, 'Raw Magma Fish', 'Raw Lobster', {}, 5000);

// Cooked Fish
setCustomItem(501, 'Cooked Shrimp', 'Lobster', {}, 5);
setCustomItem(502, 'Cooked Eel', 'Lobster', {}, 10);
setCustomItem(503, 'Cooked Cod', 'Lobster', {}, 15);
setCustomItem(504, 'Cooked Carp', 'Lobster', {}, 20);
setCustomItem(505, 'Cooked Trout', 'Lobster', {}, 25);
setCustomItem(506, 'Cooked Crappie', 'Lobster', {}, 37);
setCustomItem(507, 'Cooked Perch Fish', 'Lobster', {}, 50);
setCustomItem(508, 'Cooked Chub Fish', 'Lobster', {}, 62);
setCustomItem(509, 'Cooked Tuna', 'Lobster', {}, 75);
setCustomItem(510, 'Cooked Rock Fish', 'Lobster', {}, 100);
setCustomItem(511, 'Cooked Pout Fish', 'Lobster', {}, 125);
setCustomItem(512, 'Cooked Sun Fish', 'Lobster', {}, 250);
setCustomItem(513, 'Cooked Snapper Fish', 'Lobster', {}, 375);
setCustomItem(514, 'Cooked Bass', 'Lobster', {}, 500);
setCustomItem(515, 'Cooked Bluefin', 'Lobster', {}, 750);
setCustomItem(516, 'Cooked Grouper', 'Lobster', {}, 2000);
setCustomItem(517, 'Cooked Fangtooth', 'Lobster', {}, 1500);
setCustomItem(518, 'Cooked Magma Fish', 'Lobster', {}, 2500);

// Burnt Fish
setCustomItem(601, 'Burnt Shrimp', 'Burnt Lobster', {}, 1);
setCustomItem(602, 'Burnt Eel', 'Burnt Lobster', {}, 2);
setCustomItem(603, 'Burnt Cod', 'Burnt Lobster', {}, 3);
setCustomItem(604, 'Burnt Carp', 'Burnt Lobster', {}, 4);
setCustomItem(605, 'Burnt Trout', 'Burnt Lobster', {}, 5);
setCustomItem(606, 'Burnt Crappie', 'Burnt Lobster', {}, 7);
setCustomItem(607, 'Burnt Perch Fish', 'Burnt Lobster', {}, 10);
setCustomItem(608, 'Burnt Chub Fish', 'Burnt Lobster', {}, 12);
setCustomItem(609, 'Burnt Tuna', 'Burnt Lobster', {}, 15);
setCustomItem(610, 'Burnt Rock Fish', 'Burnt Lobster', {}, 20);
setCustomItem(611, 'Burnt Pout Fish', 'Burnt Lobster', {}, 25);
setCustomItem(612, 'Burnt Sun Fish', 'Burnt Lobster', {}, 50);
setCustomItem(613, 'Burnt Snapper Fish', 'Burnt Lobster', {}, 75);
setCustomItem(614, 'Burnt Bass', 'Burnt Lobster', {}, 100);
setCustomItem(615, 'Burnt Bluefin', 'Burnt Lobster', {}, 150);
setCustomItem(616, 'Burnt Grouper', 'Burnt Lobster', {}, 200);
setCustomItem(617, 'Burnt Fangtooth', 'Burnt Lobster', {}, 300);
setCustomItem(618, 'Burnt Magma Fish', 'Burnt Lobster', {}, 500);

// Gathering Herbs
setCustomItem(701, 'Cotton', 'Avantoe', {}, 0);
setCustomItem(702, 'Moonleaf', 'Avantoe', {}, 0);
setCustomItem(703, 'Tanglestrand', 'Avantoe', {}, 0);
setCustomItem(704, 'Duneswelt', 'Avantoe', {}, 0);
setCustomItem(705, 'Mossvine', 'Avantoe', {}, 0);
setCustomItem(706, 'Rockleaf', 'Avantoe', {}, 0);
setCustomItem(707, 'Frostrand', 'Avantoe', {}, 0);
// setCustomItem(708, 'Flameweed', 'Avantoe', {}, 0);

// Metallurgy - Arrowheads
setCustomItem(10_001, 'Bronze Arrowheads', 'Broad Arrowheads', {}, 0);
setCustomItem(10_002, 'Iron Arrowheads', 'Broad Arrowheads', {}, 0);
setCustomItem(10_003, 'Steel Arrowheads', 'Broad Arrowheads', {}, 0);
setCustomItem(10_004, 'Mithril Arrowheads', 'Broad Arrowheads', {}, 0);
setCustomItem(10_005, 'Adamantium Arrowheads', 'Broad Arrowheads', {}, 0);
setCustomItem(10_006, 'Dianium Arrowheads', 'Broad Arrowheads', {}, 0);

// Metallurgy - Ingots
setCustomItem(10_101, 'Bronze Ingot', 'Bronze Bar', {}, 0);
setCustomItem(10_102, 'Iron Ingot', 'Bronze Bar', {}, 0);
setCustomItem(10_103, 'Steel Ingot', 'Bronze Bar', {}, 0);
setCustomItem(10_104, 'Mithril Ingot', 'Bronze Bar', {}, 0);
setCustomItem(10_105, 'Adamantium Ingot', 'Bronze Bar', {}, 0);
setCustomItem(10_106, 'Dianium Ingot', 'Bronze Bar', {}, 0);

// Metallurgy - Orbs
setCustomItem(10_201, 'Bronze Orb', 'Unpowered Orb', {}, 0);
setCustomItem(10_202, 'Iron Orb', 'Unpowered Orb', {}, 0);
setCustomItem(10_203, 'Steel Orb', 'Unpowered Orb', {}, 0);
setCustomItem(10_204, 'Mithril Orb', 'Unpowered Orb', {}, 0);
setCustomItem(10_205, 'Adamantium Orb', 'Unpowered Orb', {}, 0);
setCustomItem(10_206, 'Dianium Orb', 'Unpowered Orb', {}, 0);

// Metallurgy - Studs
setCustomItem(10_301, 'Bronze Studs', 'Bronze Nails', {}, 0);
setCustomItem(10_302, 'Iron Studs', 'Bronze Nails', {}, 0);
setCustomItem(10_303, 'Steel Studs', 'Bronze Nails', {}, 0);
setCustomItem(10_304, 'Mithril Studs', 'Bronze Nails', {}, 0);
setCustomItem(10_305, 'Adamantium Studs', 'Bronze Nails', {}, 0);
setCustomItem(10_306, 'Dianium Studs', 'Bronze Nails', {}, 0);

// Carpentry - Arrowshafts
setCustomItem(27, 'Farwood Arrowshafts', '', {}, 8);
setCustomItem(28, 'Gnarlwood Arrowshafts', '', {}, 80);
setCustomItem(29, 'Sandwood Arrowshafts', '', {}, 200);
setCustomItem(30, 'Hillpine Arrowshafts', '', {}, 640);
setCustomItem(31, 'Ashenwood Arrowshafts', '', {}, 1200);
setCustomItem(32, 'Frostscarred Arrowshafts', '', {}, 2000);

// Carpentry - Bowframes
setCustomItem(33, 'Farwood Bowframe', '', {}, 8);
setCustomItem(34, 'Gnarlwood Bowframe', '', {}, 80);
setCustomItem(35, 'Sandwood Bowframe', '', {}, 200);
setCustomItem(36, 'Hillpine Bowframe', '', {}, 640);
setCustomItem(37, 'Ashenwood Bowframe', '', {}, 1200);
setCustomItem(38, 'Frostscarred Bowframe', '', {}, 2000);

// Equipment - Armour - Plated
// Helm
setCustomItem(200_001, 'Bronze Staff', 'Staff of fire', {}, 0);
setCustomItem(200_002, 'Iron Staff', 'Staff of fire', {}, 0);
setCustomItem(200_003, 'Steel Staff', 'Staff of fire', {}, 0);
setCustomItem(200_004, 'Mithril Staff', 'Staff of fire', {}, 0);
setCustomItem(200_005, 'Adamantium Staff', 'Staff of fire', {}, 0);
setCustomItem(200_006, 'Dianium Staff', 'Staff of fire', {}, 0);
// Axe
setCustomItem(
	200_101,
	'Bronze Axe',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_102,
	'Iron Axe',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_103,
	'Steel Axe',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_104,
	'Mithril Axe',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_105,
	'Adamantium Axe',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_106,
	'Dianium Axe',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
// Hammer
setCustomItem(
	200_201,
	'Bronze Hammer',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_202,
	'Iron Hammer',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_203,
	'Steel Hammer',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_204,
	'Mithril Hammer',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_205,
	'Adamantium Hammer',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_206,
	'Dianium Hammer',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
// Sword
setCustomItem(
	200_301,
	'Bronze Sword',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_302,
	'Iron Sword',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_303,
	'Steel Sword',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_304,
	'Mithril Sword',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_305,
	'Adamantium Sword',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_306,
	'Dianium Sword',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
// Shield
setCustomItem(
	200_401,
	'Bronze Shield',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_402,
	'Iron Shield',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_403,
	'Steel Shield',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_404,
	'Mithril Shield',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_405,
	'Adamantium Shield',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_406,
	'Dianium Shield',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
// Bow
setCustomItem(
	200_501,
	'Bronze Bow',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_502,
	'Iron Bow',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_503,
	'Steel Bow',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_504,
	'Mithril Bow',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_505,
	'Adamantium Bow',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);
setCustomItem(
	200_506,
	'Dianium Bow',
	'Staff of fire',
	{
		equipment: {
			health: 0,
			meleeAttack: 0,
			meleeAccuracy: 0,
			meleeDefence: 0,
			meleeBlock: 0,
			rangedAttack: 0,
			rangedAccuracy: 0,
			rangedDefence: 0,
			rangedBlock: 0,
			magicAttack: 0,
			magicAccuracy: 0,
			magicDefence: 0,
			magicBlock: 0,
			resistanceHeat: 0,
			resistanceCold: 0,
			resistancePhysical: 0,
			resistancePoison: 0,
			resistanceArcane: 0,
			requirements: {
				combatLevel: 1,
				magicStaffs: 1
			},
			slot: EquipmentSlot.TwoHanded
		}
	},
	0
);

// Gems

// Shards

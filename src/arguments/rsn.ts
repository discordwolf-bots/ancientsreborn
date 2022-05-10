import { Argument, KlasaMessage, Possible } from 'klasa';

export default class extends Argument {
	async run(arg: string, _: Possible, msg: KlasaMessage) {
		if (typeof arg === 'undefined') {
			if (!msg.author.settings.get('Account')) await msg.author.settings.sync(true);
			const player = msg.author.settings.get('Account');
			if (player) return player;
			throw 'Please specify a username, or set one with `/config user set_account <username>`';
		}

		const constructor = this.constructor as typeof Argument;
		if (constructor.regex.userOrMember.test(arg)) {
			const user = await this.client.fetchUser(constructor.regex.userOrMember.exec(arg)![1]).catch(() => null);

			const Account = user?.settings.get('Account');
			if (Account) return Account;
			throw "That person doesn't have an Account set.";
		}
		if (arg.length > 12) throw 'Invalid username. Please try again.';
		return arg.toLowerCase();
	}
}

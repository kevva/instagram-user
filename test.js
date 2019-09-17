import test from 'ava';
import instagramUser from '.';

test('get user', async t => {
	const {description, followers, fullName, id} = await instagramUser('historyinpics');

	t.is(typeof description, 'string');
	t.is(typeof followers, 'number');
	t.is(typeof fullName, 'string');
	t.is(typeof id, 'string');
});

test('throw helpful message when user isn\'t found', async t => {
	await t.throwsAsync(instagramUser('helohelohelohelo'), 'User "helohelohelohelo" not found');
});

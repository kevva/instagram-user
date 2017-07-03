import test from 'ava';
import m from '.';

test('get user', async t => {
	const {description, followers, fullName, id} = await m('historyinpics');
	t.is(typeof description, 'string');
	t.is(typeof followers, 'number');
	t.is(typeof fullName, 'string');
	t.is(typeof id, 'string');
});

test('throw helpful message when user isn\'t found', async t => {
	await t.throws(m('helohelohelohelo'), 'User "helohelohelohelo" not found');
});

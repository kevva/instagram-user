import test from 'ava';
import m from './';

test(async t => {
	const {description, followers, fullName, id} = await m('historyinpics');
	t.is(typeof description, 'string');
	t.is(typeof followers, 'number');
	t.is(typeof fullName, 'string');
	t.is(typeof id, 'string');
});

'use strict';
const getEmails = require('get-emails');
const got = require('got');

module.exports = user => {
	if (typeof user !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof user}`);
	}

	return got(`https://instagram.com/${user}/?__a=1`, {json: true}).then(res => ({
		description: res.body.user.biography || '',
		email: getEmails(res.body.user.biography || '').values().next().value || '',
		followers: res.body.user.followed_by.count,
		following: res.body.user.follows.count,
		fullName: res.body.user.full_name || '',
		id: res.body.user.id,
		posts: res.body.user.media.count,
		url: `https://instagram.com/${user}`,
		username: res.body.user.username,
		website: res.body.user.external_url || ''
	})).catch(err => {
		if (err.statusCode === 404) {
			err.message = `User "${user}" not found`;
		}
		
		throw err;
	});
};

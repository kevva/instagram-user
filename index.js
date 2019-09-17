'use strict';
const getEmails = require('get-emails');
const got = require('got');

module.exports = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected \`user\` to be of type \`string\` but received type \`${typeof username}\``);
	}

	return got(`https://instagram.com/${username}/?__a=1`, {json: true})
		.then(response => {
			const user = response.body.graphql.user;
			const email = getEmails(user.biography || '').values().next().value;

			return ({
				description: user.biography || '',
				email: email || '',
				followers: user.edge_followed_by.count,
				following: user.edge_follow.count,
				fullName: user.full_name || '',
				id: user.id,
				posts: user.edge_owner_to_timeline_media.count,
				url: `https://instagram.com/${username}`,
				username,
				website: user.external_url || ''
			});
		})
		.catch(error => {
			if (error.statusCode === 404) {
				error.message = `User "${username}" not found`;
			}

			throw error;
		});
};

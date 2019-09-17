# instagram-user [![Build Status](https://travis-ci.org/kevva/instagram-user.svg?branch=master)](https://travis-ci.org/kevva/instagram-user)

> Get Instagram user info


## Install

```
$ npm install instagram-user
```


## Usage

```js
const instagramUser = require('instagram-user');

(async () => {
	console.log(await instagramUser('unicorns'));
	//=> {description: 'A wonderful description', email: 'unicorns@foo.com', ...}
})();
```


## API

### instagramUser(username)

Returns a `Promise<Object>` with the user information.

#### username

Type: `string`

Instagram username.

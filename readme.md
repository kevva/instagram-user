# instagram-user [![Build Status](https://travis-ci.org/kevva/instagram-user.svg?branch=master)](https://travis-ci.org/kevva/instagram-user)

> Get Instagram user info


## Install

```
$ npm install instagram-user
```


## Usage

```js
const instagramUser = require('instagram-user');

instagramUser('unicorns').then(user => {
	console.log(user);
	//=> {description: 'A wonderful description', email: 'unicorns@foo.com', ...}
});
```


## API

### instagramUser(username)

Returns a `Promise` for an object with user information.

#### username

Type: `string`

Instagram username.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)

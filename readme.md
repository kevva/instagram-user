# instagram-user [![Build Status](https://travis-ci.org/kevva/instagram-user.svg?branch=master)](https://travis-ci.org/kevva/instagram-user)

> Get Instagram user info


## Install

```
$ npm install --save instagram-user
```


## Usage

```js
const instagramUser = require('instagram-user');

instagramUser('unicorns').then(user => {
	console.log(user);
	//=> {description: 'A wonderful description', email: 'unicorns@foo.com', ...}
})
```


## API

### instagramUser(username)

#### username

Type: `string`

Instagram username.


## License

MIT © [Kevin Martensson](https://github.com/kevva)

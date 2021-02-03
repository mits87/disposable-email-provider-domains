# Node Email Domain Blacklist

A nodejs wrapper for the disposable email provider domains list.

# Installation

Require this package with composer:

```
npm install email-domain-blacklist
```

# Usage

Require `email-domain-blacklist` to your file.

```js
const { domains } = require('email-domain-blacklist');

console.log(domains);
```

## Contributing

All list is located in `./data/domains.json` file.
So please make data related changes **ONLY** to file from `./data/`, commit them.

# License

[MIT](https://opensource.org/licenses/MIT)

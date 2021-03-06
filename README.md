# generator-td-node-api-server [![Build Status](https://travis-ci.com/tomdaniels/generator-td-node-api-server.svg?branch=master)](https://travis-ci.com/tomdaniels/generator-td-node-api-server) [![NPM version][npm-image]][npm-url]

- Generator for a node server boilerplate.

## How to use it

All you need to do is create a directory based on your project name, and let the generator do the rest!

```bash
mkdir node-server && cd node-server
npx -p yo -p generator-td-node-api-server -c 'yo td-node-api-server'
```

## Out of the box?

- Lint with common [rules](https://github.com/tomdaniels/td-eslint-config) already configured
- Easily maintatined [config](https://www.npmjs.com/package/config) environments
- Skeleton Swagger UI set up.
- Dummy routes set up so you can start with your first endpoint

## The Setup

```
.
├── test
│   └── setup.js
│
├── config
│   ├── default.js
│   ├── development.js
│   ├── production.js
│   ├── stage.js
│   └── test.js
│
├── src
│   ├── config
│   │    └── swagger
│   │         ├── default.yaml
│   │         └── swagger.yaml
│   ├── controllers
│   │    └── foo.js
│   ├── core
│   │   ├── logger.js
│   │   └── run-health-check.js
│   ├── middleware
│   │   ├── error-handling.js
│   │   ├── example-validator.js
│   │   ├── no-cache.js
│   │   ├── server-timing.js
│   │   └── swagger-with-metrics.js
│   ├── routes
│   │    ├── versions
│   │    │    └── 1.js
│   │    └── index.js
│   ├── app.js
│   └── server.js
│
├── .editorconfig
├── .gitignore
├── CHANGELOG.md
├── jest.config.js
├── package.json
├── PULL_REQUEST_TEMPLATE.md
└── README.md
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

ISC © [tomdaniels](https://www.github.com/tomdaniels)


[npm-image]: https://badge.fury.io/js/generator-td-node-api-server.svg
[npm-url]: https://npmjs.org/package/generator-td-node-api-server

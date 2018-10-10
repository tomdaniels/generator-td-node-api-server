// var requestControllers = require(`../middleware/middleware`);
const { Router } = require('express');
const runHealthChecks = require('../core/run-health-checks');
const noCache = require('../middleware/no-cache');
const apiV1 = require('./versions/1');

const fooController = require('../controllers/foo');

const metaRouter = new Router({
  strict: true,
  caseSensitive: true,
});

metaRouter.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type',
  );

  next();
});

// any custom health checks
const healthChecks = () => [];

metaRouter.get('/', (req, res) => res.redirect('/swagger'));
metaRouter.use('/v1', apiV1);

// core routes
metaRouter.get('/foo', fooController);
metaRouter.get('/ping', noCache, (req, res) => res.send());
metaRouter.get('/health', noCache, (req, res, next) => {
  runHealthChecks(healthChecks)
    .then(results => res.send(results))
    .catch(next);
});

metaRouter.get('/', (req, res) => res.redirect('/swagger'));

module.exports = { metaRouter };

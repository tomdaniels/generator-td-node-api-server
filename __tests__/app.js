'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

let props;
let prompts;

describe('generator-td-node-api-server:app', () => {
  beforeAll(() => {
    prompts = [
      {
        name: 'some-api',
        description: 'some description',
        author: 'Tom Daniels',
        repositoryConfirm: false
      }
    ];
    props = prompts;
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts(prompts);
  });

  it('should store prompt answers on props object', () => {
    expect(props.name).toEqual(prompts.name);
    expect(props.description).toEqual(prompts.description);
    expect(props.author).toEqual(prompts.author);
    expect(props.repositoryConfirm).toBe(prompts.repositoryConfirm);
  });

  it('generates the boilerplate', () => {
    assert.file(['package.json']);
    assert.file(['.editorconfig']);
    assert.file(['PULL_REQUEST_TEMPLATE.md']);
    assert.file(['README.md']);
    assert.file(['CHANGELOG.md']);
    assert.file(['.gitignore']);
    assert.file(['src/routes/versions/1.js']);
    assert.file(['src/routes/index.js']);
    assert.file(['src/middleware/swagger-with-metrics.js']);
    assert.file(['src/middleware/server-timing.js']);
    assert.file(['src/middleware/no-cache.js']);
    assert.file(['src/middleware/example-validator.js']);
    assert.file(['src/middleware/error-handler.js']);
    assert.file(['src/core/run-health-checks.js']);
    assert.file(['src/core/logger.js']);
    assert.file(['src/controllers/foo.js']);
    assert.file(['src/config/swagger/swagger.yaml']);
    assert.file(['src/config/swagger/default.yaml']);
    assert.file(['src/app.js']);
    assert.file(['src/server.js']);
    assert.file(['config/local.js']);
    assert.file(['config/stage.js']);
    assert.file(['config/production.js']);
    assert.file(['config/development.js']);
    assert.file(['config/default.js']);
  });
});

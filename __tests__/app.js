'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-td-node-api-server:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('generates the boilerplate', () => {
    assert.file(['package.json']);
    assert.file(['.editorconfig']);
    assert.file(['PULL_REQUEST_TEMPLATE.md']);
    assert.file(['README.md']);
    assert.file(['CHANGELOG.md']);
    assert.file(['.gitignore']);
    assert.file(['src']);
    assert.file(['config']);
  });
});

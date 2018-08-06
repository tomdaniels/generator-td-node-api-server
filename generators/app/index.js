'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the grand ${chalk.red('generator-td-node-api-server')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        // Defaults to the project's folder name if the input is skipped
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a brief description for your component?'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Project author'
      },
      {
        type: 'confirm',
        name: 'repositoryConfirm',
        message: 'Is there an existing repository for this project?',
        default: false
      }
    ];

    const repositoryUrlPrompt = [
      {
        type: 'input',
        name: 'repository',
        message: 'Enter the repository URL'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      if (props.repositoryConfirm) {
        return this.prompt(repositoryUrlPrompt).then(repositoryUrl => {
          const responses = {
            ...repositoryUrl,
            ...props
          };
          this.props = responses;
        });
      }
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name.split(' ').join('-'),
        description: this.props.description,
        repository: this.props.repository,
        author: this.props.author
      }
    );
    this.fs.copyTpl(this.templatePath('test'), this.destinationPath('test'), {});
    this.fs.copyTpl(this.templatePath('config'), this.destinationPath('config'), {});
    this.fs.copyTpl(this.templatePath('src'), this.destinationPath('src'), {
      name: this.props.name.split(' ').join('-'),
      description: this.props.description || this.props.name
    });
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), {
      name: this.props.name
    });
    this.fs.copyTpl(
      this.templatePath('CHANGELOG.md'),
      this.destinationPath('CHANGELOG.md'),
      {
        name: this.props.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('PULL_REQUEST_TEMPLATE.md'),
      this.destinationPath('PULL_REQUEST_TEMPLATE.md'),
      {}
    );
    // Hack to get around npm's magic with .gitignore
    this.fs.copyTpl(
      this.templatePath('gitignore.txt'),
      this.destinationPath('.gitignore'),
      {}
    );
    this.fs.copyTpl(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig'),
      {}
    );
    this.fs.copyTpl(
      this.templatePath('jest.config.js'),
      this.destinationPath('jest.config.js'),
      {}
    );
  }

  install() {
    this.installDependencies({ bower: false, npm: true, yarn: true });
  }
};

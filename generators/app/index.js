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
        return this.prompt(
          repositoryUrlPrompt,
        ).then(repositoryUrl => {
          const responses = {
            ...repositoryUrl,
            ...this.props,
          };
        })
      }
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    this.installDependencies();
  }
};

import Yeoman from 'yeoman-generator';
import chalk from 'chalk';
import { coreFiles, wordpressFiles, shopifyFiles } from './includedFiles';

class FlynnStyles extends Yeoman {
  welcome() {
    this.log(chalk.blue('Welcome to the Flynndustries Styles Generator!'));
  }

  prompts() {
    return this.prompt([
      {
        type: 'list',
        name: 'projectType',
        message: 'Is this a WordPress or Shopify project?',
        choices: [
          {
            name: 'WordPress',
            value: 'wordpress'
          },
          {
            name: 'Shopify',
            value: 'shopify'
          }
        ]
      },
      {
        type: 'list',
        name: 'styleType',
        message: 'Use SASS or Stylus starter?',
        choices: [
          {
            name: 'SASS',
            value: 'sass'
          },
          {
            name: 'Stylus',
            value: 'stylus'
          }
        ]
      },
      {
        type: 'input',
        name: 'basePath',
        message: 'Where should the files be copied (relative to current directory)?',
        default: 'styles'
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the theme or project?'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Who is the author?',
        default: 'John Flynn'
      }
    ]).then(props => {
      this.options.projectType = props.projectType;
      this.options.styleType = props.styleType;
      this.options.basePath = props.basePath;
      this.options.projectName = props.projectName;
      this.options.author = props.author;
    });
  }

  copyCoreFiles() {
    coreFiles.forEach(file =>
      this.fs.copyTpl(
        this.templatePath(this.options.styleType + '/' + file),
        this.destinationPath(this.options.basePath + '/' + file),
        {
          project: this.options.projectName,
          author: this.options.author,
          projectType: this.options.projectType
        }
      )
    );
  }

  copyShopifyFiles() {
    if (this.options.projectType === 'shopify') {
      shopifyFiles.forEach(file =>
        this.fs.copyTpl(
          this.templatePath(this.options.styleType + '/' + file),
          this.destinationPath(this.options.basePath + '/' + file),
          {
            project: this.options.projectName,
            author: this.options.author
          }
        )
      );
    }
  }

  copyWordPressFiles() {
    if (this.options.projectType === 'wordpress') {
      wordpressFiles.forEach(file =>
        this.fs.copyTpl(
          this.templatePath(this.options.styleType + '/' + file),
          this.destinationPath(this.options.basePath + '/' + file),
          {
            project: this.options.projectName,
            author: this.options.author
          }
        )
      );
    }
  }
}

export default FlynnStyles;

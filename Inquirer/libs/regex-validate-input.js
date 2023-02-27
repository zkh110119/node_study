/**
 * @file 正则校验和过滤的例子，过滤的话下边两种方式都会清空输入内容
 * 使用throw Error显示"Error: Please provide a valid API key secret."，并且会清空输入内容
 * 直接return显示"Please provide a valid API key secret."，不会清空输入内容
 */

const {prompt} = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'api_key',
    message: 'Please enter a valid API key.',
    validate(input) {
      if (/([a-f0-9]{40})/g.test(input)) {
        return true;
      }

      throw Error('Please provide a valid API key secret.');
    },
    filter(input) {
      if (input.length > 45) {
        throw Error('Key length must be at least 45 char.')
      }
      return input
    }
  },
];

prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});

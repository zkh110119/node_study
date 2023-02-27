/**
 * @file 密码
 * 1、默认在输入时，什么都不显示，会提示字符是隐藏的
 * 2、可以设置mask，设置输入时显示密码的掩码
 */
const {prompt} = require('inquirer')

const requireLetterAndNumber = (value) => {
    if (/\w/.test(value) && /\d/.test(value)) {
        return true
    }

    return 'Password need to have at least a letter and a number'
}

prompt([
    {
        type: 'password',
        message: 'Enter a password',
        name: 'password1',
        validate: requireLetterAndNumber
    }, {
        type: 'password',
        message: 'Enter a password',
        name: 'password2',
        mask: '*',
        validate: requireLetterAndNumber
    }
]).then(answers => {
    console.log(JSON.stringify(answers, null, ''.padEnd(4, ' ')))
})
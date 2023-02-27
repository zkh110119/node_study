/**
 * @file 命令行文本输入
 * 涉及文本转换，文本转换时flags对象的是否输入完成按下回车标志isFinal
 * 文本校验
 */
const {prompt} = require('inquirer')
const chalkPipe = require('chalk-pipe')

prompt([
    {
        type: 'input',
        name: 'first_name',
        message: `What's your first name`
    }, {
        type: 'input',
        name: 'last_name',
        message: `What's your last name`
    }, {
        type: 'input',
        name: 'fav_color',
        message: `What's your favorite color`,
        transformer(color, answers, flags) {
            const text = chalkPipe(color)(color)
            if (flags.isFinal) { // 是否输入完成，按下了回车
                return text + '!'
            }
            return text
        }
    }, {
    type: 'input',
        name: 'phone',
        message: `What's your phone number`,
        validate(value) {
        const pass = value.match(
            /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?|x\.?\s?){1}(?:\d+)?)?/i
        )
            if (pass) {
                return true
            }

            return `Please enter a valid phone number`
        }
    }
]).then(answers => {
    console.log(JSON.stringify(answers, null, ''.padEnd(4, ' ')))
})
/**
 * @file 富文本，调用系统文本编辑器
 */
const {prompt} = require('inquirer')

async function init() {
    const answer = await prompt([
        {
            type: 'editor',
            name: 'bio',
            message: 'Please write a short bio of at least 3 lines.',
            validate(text) {
                if (text.split('\n').length < 3) {
                    return 'Must be at lease 3 lines.'
                }

                return true
            },
            waitUserInput: true // 没看懂
        }
    ])

    console.log(JSON.stringify(answer, null, ''.padEnd(4, ' ')))
}

init().then()

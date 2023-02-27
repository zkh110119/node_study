/**
 * @file 命令行下拉单选
 * 能通过value设置answer的值
 * 能通过disabled设置禁止选择
 */
const {prompt, Separator} = require('inquirer')

prompt([
    {
        type: 'list',
        name: 'theme',
        message: 'What do you want to do?',
        default: 'talk',
        choices: [
            'Order a pizza',
            {
                name: 'Make a reservation',
                value: 'reservation'
            },
            new Separator(),
            'Ask for opening hours',
            {
                name: 'Contact support',
                disabled: 'Unavailable at this time'
            }, {
                name: 'Talk to the receptionist',
                value: 'talk'
            }
        ]
    }
]).then(answers => {
    console.log(JSON.stringify(answers, null, ''.padEnd(4, ' ')))
})
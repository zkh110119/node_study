/**
 * @file rawlist既可以输入序号选择又可以使用上下键选择的带序号下拉列表
 */

const {prompt, Separator} = require('inquirer')

prompt([
    {
        type: 'rawlist',
        name: 'theme',
        message: 'What do you want to do?',
        choices: [
            'Order a pizza',
            'Make a reservation',
            new Separator(),
            'Ask opening hours',
            'Talk to the receptionist',
        ],
    },
    {
        type: 'rawlist',
        name: 'size',
        message: 'What size do you need',
        choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
        filter(val) {
            return val.toLowerCase();
        },
    },
])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });

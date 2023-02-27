/**
 * @file 嵌套
 */

const {prompt} = require('inquirer')

prompt([
    {
        type: 'list',
        name: 'chocolate',
        message: 'What\'s your favorite chocolate?',
        choices: ['Mars', 'Oh Henry', 'Hershey']
    }
]).then(() => {
    prompt([
        {
            type: 'list',
            name: 'beverage',
            message: 'And your favorite beverage?',
            choices: ['Pepsi', 'Coke', '7up', 'Mountain Dew', 'Red Bull']
        }
    ])
})
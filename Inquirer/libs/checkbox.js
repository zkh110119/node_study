/**
 * @file 复选
 */
const {prompt, Separator} = require('inquirer')

prompt([
    {
        type: 'checkbox',
        message: 'Select toppings', // 显示信息
        prefix: '==prefix==', // 显示信息的前缀
        suffix: '==suffix==', // 显示信息的后缀
        name: 'toppings', // answer中的属性名称
        default: [1], // 结果由default和checked共同起作用
        choices: [
            new Separator('= The Meats ='),
            {
                name: 'Pepperoni', // 显示的内容
                value: 1 // answer收到的值
            }, {
                name: 'Ham',
                checked: true // 默认选择
            }, {
                name: 'Ground Meat',
                disabled: 'out of stock' // 禁止选中
            }, {
                name: 'Bacon'
            }
        ],
        // 校验
        validate(answer) {
            if (answer.length < 1) {
                return 'You must choose at least one topping.'
            }
            return true
        }
    }
]).then(answer => {
    console.log(JSON.stringify(answer, null, ''.padEnd(4, ' ')))
})
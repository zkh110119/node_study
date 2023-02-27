/**
 * @file 长选择项问题
 * 1、可以使用\n主动换行，使用\n多行的尽量加short，否则名称后显示不好看
 * 2、超长可以自动换行，可以使用short在问题后边显示短的选择项
 * 3、可以使用loop开启或者关闭循环展示选项
 */
const {prompt, Separator} = require('inquirer')

const choices = Array.apply(0, new Array(26)).map((x,y) => String.fromCharCode(y + 65))

choices.push('Multiply option 1\n super cool feature \n more lines')
choices.push('Multiply option 2\n super cool feature \n more lines')
choices.push('Multiply option 3\n super cool feature \n more lines')
choices.push('Multiply option 4\n super cool feature \n more lines')
choices.push('Multiply option 5\n super cool feature \n more lines')
choices.push(new Separator())
choices.push('Multiply option 5\n super cool feature')
choices.push({
    name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aennean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et fef fegge grgegrg grgrgrg...',
    value: 'foo',
    short: 'The long option'

})

prompt([
    {
        type: 'list',
        loop: false,
        name: 'letter',
        message: `What's your favorite letter?`,
        choices
    }, {
        type: 'checkbox',
        name: 'name',
        message: `Select the letter contained in your name:`,
        choices
    }
]).then(answers => {
    console.log(JSON.stringify(answers, null, ''.padEnd(4, ' ')))
})
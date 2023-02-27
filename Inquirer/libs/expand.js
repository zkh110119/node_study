/**
 * @file 可展开选项单选，对于熟悉的可以直接键入快捷key
 * 进行选择，这样操作比一个一个选的list和rawlist块
 */
const {prompt, Separator} = require('inquirer')

prompt([
    {
        type: 'expand',
        message: 'Conflict on `file.js`:',
        name: 'overwrite',
        choices: [
            {
                key: 'y', // 显示的快捷输入方式，不管大小写，都会被转换为小写
                name: 'Overwrite', // 显示的项名称
                value: 'overwrite' // 选中后结果的值
            }, {
                key: 'a',
                name: 'Overwrite this one add all next',
                value: 'overwrite_all'
            }, {
                key: 'd',
                name: 'Show diff',
                value: 'diff'
            },
            new Separator(),
            {
                key: 'x',
                name: 'Abort',
                value: 'about'
            }
        ]
    }
]).then(answer => {
    console.log(JSON.stringify(answer, null, ''.padEnd(4, ' ')))
})
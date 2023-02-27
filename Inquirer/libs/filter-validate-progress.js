/**
 * @file filter validate异步的两种方式
 * 执行顺序：transformer(只影响展示) > filter(影响演示和结果) > validate(不影响结果也不影响展示)
 */
const {prompt} = require('inquirer')

prompt([
    {
        type: 'input',
        name: 'first_question',
        message: 'Question with filtering and validating text',
        async validate(text) {
            return await new Promise(r => {
                return setTimeout(() => {
                    if (text.length > 20) {
                        r('String length must be at least 20 char.')
                    } else {
                        r(true)
                    }
                }, 3000)
            })
        },
        async filter(text) {
            return await new Promise(r => {
                setTimeout(() => {
                    r(`filter ==> ${text}`)
                }, 3000)
            })
        },
        transformer(text) {
            return `==^${text}^==`
        },
        validatingText: 'validating...', // 校验过程中提示信息
        filteringText: 'filtering...' // 过滤过程中提示信息
    },
    {
        type: 'input',
        name: 'second_question',
        message: 'Question with filtering and validating text',
        filter(text) {
            const done = this.async()
            setTimeout(() => {
                done(null, `filter ==> ${text}`)
            }, 3000)
        },
        validate(text) {
            const done = this.async()
            setTimeout(() => {
                if (text.length > 20) {
                    done('String length must be at least 20 char.')
                } else {
                    done(null, true)
                }
            })
        },
        validatingText: 'validating...',
        filteringText: 'filtering...'
    }
]).then(answer => {
    console.log(JSON.stringify(answer, null, ''.padEnd(4, ' ')))
})
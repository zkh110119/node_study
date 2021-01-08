const minimist = require('minimist');

console.log(process.argv.slice(2));

console.log(minimist(process.argv.slice(2), {
    string: ['a', 'b', 'env'],
    default: {
        env: 'prod'
    }
}));

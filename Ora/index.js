const ora = require('ora');

const spinner = ora('Loading unicorns');
spinner.start();

setTimeout(() => {
    spinner.stop();
}, 10000);

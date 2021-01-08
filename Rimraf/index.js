const rm = require('rimraf');
const path = require('path');

rm(path.join(__dirname, 'Files','1.txt'), err => {
    if (err) {
        throw err;
    }

    console.log('delete success!')
});

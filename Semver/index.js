const semver = require('semver');

function exec(cmd) {
    return require('child_process').execSync(cmd).toString().trim();
}

let npm_v = exec('npm --version');

let node_v = process.version;
console.log(semver.clean(node_v));

console.log(semver.satisfies(node_v, '>v12.0.0'));

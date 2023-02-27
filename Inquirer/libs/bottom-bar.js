/**
 * @file 动态文字提示，可用于实现过程等待
 * @type {BottomBar}
 */
const BottomBar = require('inquirer/lib/ui/bottom-bar.js')
const cmdify = require('cmdify')
const {spawn} = require('child_process')

const loader = ['/ Installing', '| Installing', '\\ Installing', '- Installing']
let i = 4
const ui = new BottomBar({
    bottomBar: loader[i % 4]
})

setInterval(() => {
    ui.updateBottomBar(loader[i++ % 4])
}, 30)

const cmd = spawn(cmdify('npm'), ['-g', 'install', 'inquirer'], { stdio: 'pipe' });
cmd.stdout.pipe(ui.log);
cmd.on('close', () => {
    ui.updateBottomBar('Installation done!\n');
    // eslint-disable-next-line n/no-process-exit
    process.exit();
});
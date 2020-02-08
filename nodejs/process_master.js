const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    // 使用exec命令
    let work_process_exec = child_process.exec('node process_support.js ' + i, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('error code:', error.code);
            console.log('error signal:', error.signal);
        }
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    });
    work_process_exec.on('exit', function (code) {
        console.log('子进程已退出，退出码：', code);
    });

    // 使用spawn命令
    let work_process_spawn = child_process.spawn('node', ['process_support.js', i]);
    work_process_spawn.stdout.on('data', function (data) {
        console.log('stdout:' + data);
    });
    work_process_spawn.stderr.on('data', function (data) {
        console.log('stderr:' + data);
    });
    work_process_spawn.on('close', function (code) {
        console.log('程序已退出，退出码：' + code);
    });

    // 使用fork
    let work_process_fork = child_process.fork('process_support.js', [i]);
    work_process_fork.on('close', function (code) {
        console.log('子进程已退出，退出码：' + code)
    });
}
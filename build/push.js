var inquirer = require('inquirer')
var chalk = require('chalk')
var exec = require('shelljs.exec')
var shell = require('shelljs')

inquirer
    .prompt([
        {
            name: 'confirm',
            message: `是否需要提交代码？`,
            type: 'list',
            default: 0,
            choices: [
                {
                    name: '是',
                    value: 1
                },
                {
                    name: '否',
                    value: 0
                }
            ]
        },
        {
            name: 'message',
            message: '提交说明',
            type: 'input',
            default: `bugfixed`
        }
    ])
    .then(function(answers) {
        if (answers.confirm === 1) {
            // 判断git命令是否可用
            if (!shell.which('git')) {
                shell.echo('Sorry, this scripts requires git')
                // 退出进程
                shell.exit(1)
            }
            exec('git add .')
            exec(`git commit -m '${answers.message}'`)
            exec('git pull')
            if (exec('git push').code !== 0) {
                shell.echo('Error: Git push failed')
                shell.exit(1)
            }
    
            console.log()
            console.log(chalk.green(`   代码提交成功！ `))
            console.log()
            process.exit()
        }
    })

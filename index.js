import { spawn } from 'child_process';
import chalk from 'chalk';

const command = [
  'npx',
  ['reciple', ...process.argv.slice(2)]
];

console.log(chalk.gray(`$ ${command[0]} ${command[1].join(' ')}\n`));

spawn(command[0], command[1], {
  cwd: process.cwd(),
  env: process.env,
  shell: true,
  stdio: 'inherit'
});
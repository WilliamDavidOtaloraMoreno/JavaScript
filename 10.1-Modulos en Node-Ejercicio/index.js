import * as operaciones from './controllers.js';
import chalk from 'chalk';

const sum = operaciones.suma(1,2);
console.log(chalk.green("El resultado de la suma es: " + sum))

const mul = operaciones.multiplica(4,5);
console.log(chalk.green("El resultado de la multiplicacion es: " + mul))

import yargs from 'yargs';
import { sum } from './libs';

const args = yargs(process.argv.slice(2))
  .usage('Usage: -a [num] -b [num]')
  .demand(['a', 'b'])
  .help('help')
  .alias('help', 'h')
  .options({
    a: {
      description: 'First input to calculate',
      requiresArg: true,
      required: true,
    },
    b: {
      description: 'Second input to calculate',
      requiresArg: true,
      required: true,
    },
  }).argv;

const main = () => {
  const { a, b } = args as { a: string; b: string };
  try {
    const result = sum(a, b);

    console.log(result);
  } catch (err) {
    console.error((err as Error).message);
  }
};

main();

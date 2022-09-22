import CreateBeerHandler from './create-beer.handler';
import IncreaseBeerCountHandler from './increase-beer-count.handler';

export * from './create-beer.command';

const commandHandlers = [CreateBeerHandler, IncreaseBeerCountHandler];

export { commandHandlers };

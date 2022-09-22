import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { commandHandlers } from './commands';
import { queriesHandlers } from './queries';
import { useCases } from './usecases';

@Global()
@Module({
  imports: [CqrsModule],
  providers: [...useCases, ...commandHandlers, ...queriesHandlers],
  exports: [...useCases, ...commandHandlers, ...queriesHandlers],
})
export default class ApplicationModule {}

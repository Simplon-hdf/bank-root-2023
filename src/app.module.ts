import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompteModule } from './compte/compte.module';

@Module({
  imports: [CompteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

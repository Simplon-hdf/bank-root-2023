import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompteModule } from './compte/compte.module';
import { UsersModule } from './users/users.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [CompteModule, UsersModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

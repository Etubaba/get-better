import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import dataSource from 'db/data-source';

@Module({
  //@ts-ignore
  imports: [TypeOrmModule.forRoot(dataSource), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

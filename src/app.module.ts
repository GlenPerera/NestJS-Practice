/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NinjasModule, MongooseModule.forRoot('mongodb://localhost/net')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

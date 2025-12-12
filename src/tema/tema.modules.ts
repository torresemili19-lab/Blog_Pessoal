import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { TemaService } from './services/tema.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [TemaService],
  exports: [TemaService], // exporta para ser usado em PostagemModule
})
export class TemaModule {}

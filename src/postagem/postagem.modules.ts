import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './entities/postagem.entity';
import { PostagemService } from './services/postagem.service';
import { PostagemController } from './controllers/postagem.controllers';
import { TemaModule } from '../tema/tema.modules';

@Module({
  imports: [
    TypeOrmModule.forFeature([Postagem]),
    TemaModule, // importa o módulo que fornece TemaService
  ],
  providers: [PostagemService],
  controllers: [PostagemController],
})
export class PostagemModule {}

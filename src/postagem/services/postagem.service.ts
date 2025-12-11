import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entity';

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private readonly postagemRepository: Repository<Postagem>,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return this.postagemRepository.find();
  }

  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({ where: { id } });
    if (!postagem) {
      throw new NotFoundException(`Postagem com ID ${id} não encontrada`);
    }
    return postagem;
  }

  async create(postagem: Postagem): Promise<Postagem> {
    return this.postagemRepository.save(postagem);
  }

  async update(id: number, postagem: Postagem): Promise<Postagem> {
    await this.findById(id); // garante que existe antes de atualizar
    postagem.id = id;
    return this.postagemRepository.save(postagem);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id); // garante que existe antes de deletar
    await this.postagemRepository.delete(id);
  }
}

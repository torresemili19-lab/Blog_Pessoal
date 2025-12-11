import { IsNotEmpty, MaxLength } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'O título é obrigatório.' })
  @MaxLength(100, { message: 'O título deve ter no máximo 100 caracteres.' })
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty({ message: 'O texto é obrigatório.' })
  @MaxLength(1000, { message: 'O texto deve ter no máximo 1000 caracteres.' })
  @Column({ length: 1000, nullable: false })
  texto: string;

  @UpdateDateColumn({ type: 'timestamp' })
  data: Date;
}

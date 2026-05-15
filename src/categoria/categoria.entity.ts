import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('categorias')
export class Categoria {
  @ApiProperty({ example: 1, description: 'Identificador único da categoria' })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ example: 'Medicamentos', description: 'Descrição da categoria' })
  @Column({ length: 255, nullable: false })
  descricao: string
}
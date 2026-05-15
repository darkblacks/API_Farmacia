import { ApiProperty } from '@nestjs/swagger';

export class Categoria {
  @ApiProperty({ example: 1, description: 'Identificador único da categoria' })
  id: number;

  @ApiProperty({ example: 'Medicamentos', description: 'Descrição da categoria' })
  descricao: string;
}

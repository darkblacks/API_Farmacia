import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCategoriaDto {
  @ApiProperty({
    example: 'Medicamentos',
    description: 'Descrição da categoria que será cadastrada',
  })
  @IsString({ message: 'A descrição deve ser um texto.' })
  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  @MinLength(3, { message: 'A descrição deve ter pelo menos 3 caracteres.' })
  descricao: string;
}

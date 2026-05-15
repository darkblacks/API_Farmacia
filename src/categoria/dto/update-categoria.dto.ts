import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class UpdateCategoriaDto {
  @ApiProperty({ example: 1, description: 'ID da categoria que será atualizada' })
  @IsInt({ message: 'O ID deve ser um número inteiro.' })
  @Min(1, { message: 'O ID deve ser maior que zero.' })
  id: number;

  @ApiProperty({
    example: 'Dermocosméticos',
    description: 'Nova descrição da categoria',
  })
  @IsString({ message: 'A descrição deve ser um texto.' })
  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  @MinLength(3, { message: 'A descrição deve ter pelo menos 3 caracteres.' })
  descricao: string;
}

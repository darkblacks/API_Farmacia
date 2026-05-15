import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Categoria } from './categoria.entity';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@ApiTags('Categorias')
@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as categorias' })
  @ApiResponse({ status: 200, description: 'Lista de categorias retornada com sucesso.', type: [Categoria] })
  findAll(): Categoria[] {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar categoria por ID' })
  @ApiParam({ name: 'id', example: 1, description: 'ID da categoria' })
  @ApiResponse({ status: 200, description: 'Categoria encontrada com sucesso.', type: Categoria })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada.' })
  findById(@Param('id', ParseIntPipe) id: number): Categoria {
    return this.categoriaService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastrar uma nova categoria' })
  @ApiBody({ type: CreateCategoriaDto })
  @ApiResponse({ status: 201, description: 'Categoria cadastrada com sucesso.', type: Categoria })
  create(@Body() createCategoriaDto: CreateCategoriaDto): Categoria {
    return this.categoriaService.create(createCategoriaDto);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar uma categoria existente' })
  @ApiBody({ type: UpdateCategoriaDto })
  @ApiResponse({ status: 200, description: 'Categoria atualizada com sucesso.', type: Categoria })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada.' })
  update(@Body() updateCategoriaDto: UpdateCategoriaDto): Categoria {
    return this.categoriaService.update(updateCategoriaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar uma categoria existente' })
  @ApiParam({ name: 'id', example: 1, description: 'ID da categoria que será deletada' })
  @ApiResponse({ status: 204, description: 'Categoria deletada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Categoria não encontrada.' })
  delete(@Param('id', ParseIntPipe) id: number): void {
    return this.categoriaService.delete(id);
  }
}

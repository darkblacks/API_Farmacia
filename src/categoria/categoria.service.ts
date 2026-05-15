import { Injectable, NotFoundException } from '@nestjs/common';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  private categorias: Categoria[] = [
    { id: 1, descricao: 'Medicamentos' },
    { id: 2, descricao: 'Dermocosméticos' },
    { id: 3, descricao: 'Higiene pessoal' },
  ];

  private proximoId = 4;

  findAll(): Categoria[] {
    return this.categorias;
  }

  findById(id: number): Categoria {
    const categoria = this.categorias.find((item) => item.id === id);

    if (!categoria) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada.`);
    }

    return categoria;
  }

  create(createCategoriaDto: CreateCategoriaDto): Categoria {
    const novaCategoria: Categoria = {
      id: this.proximoId,
      descricao: createCategoriaDto.descricao.trim(),
    };

    this.proximoId += 1;
    this.categorias.push(novaCategoria);

    return novaCategoria;
  }

  update(updateCategoriaDto: UpdateCategoriaDto): Categoria {
    const categoria = this.findById(updateCategoriaDto.id);
    categoria.descricao = updateCategoriaDto.descricao.trim();
    return categoria;
  }

  delete(id: number): void {
    const categoria = this.findById(id);
    this.categorias = this.categorias.filter((item) => item.id !== categoria.id);
  }
}

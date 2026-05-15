import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Categoria } from './categoria.entity'
import { CreateCategoriaDto } from './dto/create-categoria.dto'
import { UpdateCategoriaDto } from './dto/update-categoria.dto'

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      order: {
        id: 'ASC',
      },
    })
  }

  async findById(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id },
    })

    if (!categoria) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada.`)
    }

    return categoria
  }

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const novaCategoria = this.categoriaRepository.create({
      descricao: createCategoriaDto.descricao.trim(),
    })

    return this.categoriaRepository.save(novaCategoria)
  }

  async update(updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    await this.findById(updateCategoriaDto.id)

    const categoriaAtualizada = this.categoriaRepository.create({
      id: updateCategoriaDto.id,
      descricao: updateCategoriaDto.descricao.trim(),
    })

    return this.categoriaRepository.save(categoriaAtualizada)
  }

  async delete(id: number): Promise<void> {
    const categoria = await this.findById(id)
    await this.categoriaRepository.delete(categoria.id)
  }
}
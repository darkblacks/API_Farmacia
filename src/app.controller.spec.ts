import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { CategoriaService } from './categoria/categoria.service';

describe('CategoriaService', () => {
  let service: CategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = module.get<CategoriaService>(CategoriaService);
  });

  it('deve listar categorias iniciais', () => {
    expect(service.findAll().length).toBeGreaterThan(0);
  });

  it('deve criar uma categoria', () => {
    const categoria = service.create({ descricao: 'Vitaminas' });
    expect(categoria.id).toBeDefined();
    expect(categoria.descricao).toBe('Vitaminas');
  });
});

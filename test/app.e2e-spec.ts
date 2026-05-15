import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Farmacia API - Categorias (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/categorias (GET)', () => {
    return request(app.getHttpServer())
      .get('/categorias')
      .expect(200)
      .expect((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('/categorias (POST)', () => {
    return request(app.getHttpServer())
      .post('/categorias')
      .send({ descricao: 'Vitaminas' })
      .expect(201)
      .expect((response) => {
        expect(response.body.descricao).toBe('Vitaminas');
      });
  });
});

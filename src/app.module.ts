import { Module } from '@nestjs/common';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [CategoriaModule],
})
export class AppModule {}

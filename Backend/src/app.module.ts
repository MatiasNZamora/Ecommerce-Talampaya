import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperadoresModule } from './operadores/operadores.module';
import { ProductosModule } from './productos/productos.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [OperadoresModule, ProductosModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {};

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperadoresModule } from './operadores/operadores.module';
import { ProductosModule } from './productos/productos.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './environments';

@Module({
  imports: [
    OperadoresModule, 
    ProductosModule, 
    SeedModule,
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal:true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {};

import { Controller, Delete, Get, Patch, Post, Body, Param } from '@nestjs/common';
import { productDto, UpdateProductDto } from 'src/productos/dto/products.dto';
import { ProductosService } from 'src/productos/services/productos.service';

@Controller('/productos')
export class ProductosController {
    constructor( private productosService:ProductosService ){}

    @Get()
    findAll(){
        return this.productosService.getAllProduct();
    };

    @Get('/:id')
    findOne( @Param('id') id:string ){
        return this.productosService.getProductById(id);
    };

    @Post()
    createProduct( @Body() product: productDto ){
        
        console.log(product);
        return this.productosService.createPorduct( product );
    };

    @Patch(':id')
    updateProduct( @Param('id') id:string, @Body() updateFinelds: UpdateProductDto ){
        return this.productosService.updateProduct(id, updateFinelds );
    };

    @Delete(':id')
    deleteProduct( @Param('id') id:string ){
        this.productosService.deleteProduct(id);
    };


}

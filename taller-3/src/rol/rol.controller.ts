import { Body, ConflictException, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './rolDto/rol.dto';
import { Rol } from './entities/rol_entities.entity';

@Controller('rol')
export class RolController {
    constructor(private readonly Rolservice: RolService){}

    /**@method: 
     * @Param
     * @Returns
     */

    //Crear rol

    @Post()
    async create(@Body() CreateRolDto: CreateRolDto): Promise<Rol>{
        try{
            return await this.Rolservice.create(CreateRolDto);
        } catch (error){
            if (error.message.includes('Este rol ya existe')){
                throw new ConflictException(error.message);
            }

            throw error;
        }
    }

    @Get()
    async findAll(): Promise<Rol[]>{
        return this.Rolservice.findAll();
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number){
        return this.Rolservice.remove(id);
    }

}

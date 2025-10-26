import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Appointment } from 'src/appointment/entities/appointment.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Appointment)
    private readonly AppointmentRepository: Repository<Appointment>,
  ) {}

  // Crear un nuevo usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    // Verificar si el correo ya existe
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException(`El correo ${createUserDto.email} ya está registrado.`);
    }

    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  // Listar todos los usuarios
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Buscar un usuario por ID
  async findOne(Id_users: number): Promise<User> {
    const user = await this.userRepository.findOne({
        where: {Id_users}, 
        relations: ['rol'],
    });

    if (!user) {
      throw new NotFoundException(`No se encontró el usuario con ID ${Id_users}`);
    }
    return user;
  }

  // Actualizar usuario
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id); // Verificar que exista
    await this.userRepository.update(id, updateUserDto);
    return { ...user, ...updateUserDto }; // Retorna los datos actualizados
  }

  // Eliminar usuario
  async remove(id: number): Promise<{message: string}> {

    const appointmentCount = await this.AppointmentRepository.count({
      where: {Id_users: id},
    });

    if (appointmentCount > 0){
      throw new ConflictException(
        `El usuario con el Id ${id} no se puede eliminar devido a que está asignado a ${appointmentCount} citas medicas.`
      );
    }


    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`No se encontró el usuario con ID ${id}`);
    }

    return{
      message:  ` El usuario con el ID ${id} ha sido eliminado.`
    };
  }
}

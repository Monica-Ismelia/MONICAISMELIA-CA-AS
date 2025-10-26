import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Appointment } from 'src/appointment/entities/appointment.entity';
export declare class UserService {
    private readonly userRepository;
    private readonly AppointmentRepository;
    constructor(userRepository: Repository<User>, AppointmentRepository: Repository<Appointment>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(Id_users: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<{
        message: string;
    }>;
}

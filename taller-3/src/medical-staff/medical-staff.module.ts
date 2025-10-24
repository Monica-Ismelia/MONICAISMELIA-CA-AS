import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalStaffController } from './medical-staff.controller';
import { MedicalStaffService } from './medical-staff.service';
import { MedicalStaff } from './entities/medical-staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalStaff]),],
  controllers: [MedicalStaffController],
  providers: [MedicalStaffService]
})
export class MedicalStaffModule {}

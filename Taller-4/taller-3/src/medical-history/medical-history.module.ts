import { Module } from '@nestjs/common';
import { MedicalHistoryController } from './medical-history.controller';
import { MedicalHistoryService } from './medical-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalHistory } from './entities/medical-history.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalHistory]), TypeOrmModule.forFeature([User])],
  controllers: [MedicalHistoryController],
  providers: [MedicalHistoryService]
})
export class MedicalHistoryModule {}

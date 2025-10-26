import { PartialType } from '@nestjs/mapped-types';
import { CreateDetaBillDto } from './create-detabill.dto';

export class UpdateDetaBillDto extends PartialType(CreateDetaBillDto) {}

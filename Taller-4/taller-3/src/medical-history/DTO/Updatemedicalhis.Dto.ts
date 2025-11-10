import { PartialType } from "@nestjs/mapped-types";
import { CreateMedicalHistoryDto } from "./createmedicalhis.Dto";

export class UpdateMedicalHistoryDto extends PartialType(CreateMedicalHistoryDto){}